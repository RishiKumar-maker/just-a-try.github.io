// ============================================================================
// player.js — first-person controller. Unlike the old raycaster, this camera
// has real pitch (look up/down), a real jump (Y-axis physics), and a real
// lean/peek (camera offset sideways + roll, collision-checked against the
// grid so you can't lean through a wall). Hitscan uses THREE.Raycaster so
// shots correctly respect wall/crate heights.
// ============================================================================
import * as THREE from '../vendor/three.module.js';
import { collides, tryMove } from './map.js';
import { WEAPONS, WEAPON_ORDER, HITZONE_MULT } from './weapons.js';
import { jitterDirection } from './util.js';
import * as Audio from './audio.js';

export const PLAYER_RADIUS = 0.3;
export const EYE_HEIGHT = 1.62;
const MOVE_SPEED = 3.1;
const SPRINT_MUL = 1.55;
const JUMP_VELOCITY = 4.2;
const GRAVITY = 11.5;
const LEAN_MAX = 0.5;
const LEAN_SPEED = 9;
const LEAN_TILT_MAX = 0.11;
const LEAN_EYE_RADIUS = 0.14;
const NORMAL_FOV = 75;
const SCOPE_FOV = 20;

const _fwd = new THREE.Vector3();
const _right = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);
const _rayOrigin = new THREE.Vector3();
const _rayDir = new THREE.Vector3();

export function freshLoadout() {
  const loadout = {};
  for (const key of WEAPON_ORDER) {
    const w = WEAPONS[key];
    loadout[key] = { mag: w.mag, reserve: Math.floor(w.reserveMax * 0.6) };
  }
  loadout.rifle.mag = WEAPONS.rifle.mag;
  return loadout;
}

export function createPlayerState(spawn) {
  return {
    x: spawn.x, z: spawn.z,
    vy: 0, jumpY: 0, grounded: true, _spaceHeld: false,
    lean: 0, leanTarget: 0, eyeY: EYE_HEIGHT,
    health: 100, maxHealth: 100, alive: true, respawnAt: 0, spawnProtectedUntil: 0,
    weapon: "rifle", loadout: freshLoadout(), smoke: 3,
    reloading: false, reloadEndAt: 0, lastFireAt: 0,
    moving: false, sprinting: false, scoped: false, _scopedPrev: false,
    viewKick: 0, bobPhase: 0,
    kills: 0, deaths: 0,
    _firedThisClick: false,
  };
}

export function resetPlayer(state, spawn) {
  state.x = spawn.x; state.z = spawn.z;
  state.vy = 0; state.jumpY = 0; state.grounded = true;
  state.lean = 0; state.leanTarget = 0;
  state.health = state.maxHealth; state.alive = true;
  state.loadout = freshLoadout(); state.smoke = 3;
  state.reloading = false;
  state.kills = 0; state.deaths = 0;
  state.weapon = "rifle";
}

export function applyMouseLook(camera, dx, dy, sensitivity) {
  camera.rotation.y -= dx * sensitivity;
  camera.rotation.x -= dy * sensitivity;
  camera.rotation.x = Math.max(-1.25, Math.min(1.25, camera.rotation.x));
}

function yawForward(camera, out) {
  out.set(0, 0, -1).applyAxisAngle(_up, camera.rotation.y);
  return out;
}
function yawRight(camera, out) {
  out.set(1, 0, 0).applyAxisAngle(_up, camera.rotation.y);
  return out;
}

/** Movement, jump physics, and lean — call every frame while playing. */
export function updateMovementAndPhysics(state, camera, dt, keys, rightMouseHeld) {
  // ---- horizontal movement (yaw-relative, collision against grid) ----
  const fwd = yawForward(camera, _fwd);
  const right = yawRight(camera, _right);
  let mx = 0, mz = 0;
  if (keys["KeyW"]) { mx += fwd.x; mz += fwd.z; }
  if (keys["KeyS"]) { mx -= fwd.x; mz -= fwd.z; }
  if (keys["KeyA"]) { mx -= right.x; mz -= right.z; }
  if (keys["KeyD"]) { mx += right.x; mz += right.z; }
  const mag = Math.hypot(mx, mz);
  state.moving = mag > 0.01;
  state.sprinting = state.moving && (keys["ShiftLeft"] || keys["ShiftRight"]) && !rightMouseHeld;
  if (state.moving) {
    mx /= mag; mz /= mag;
    const speed = MOVE_SPEED * (state.sprinting ? SPRINT_MUL : 1) * dt;
    tryMove(state, state.x + mx * speed, state.z + mz * speed, PLAYER_RADIUS);
    state.bobPhase += dt * (state.sprinting ? 14 : 9);
  }

  // ---- jump (real Y-axis kinematics) ----
  if (keys["Space"] && state.grounded && !state._spaceHeld) {
    state.vy = JUMP_VELOCITY; state.grounded = false; state._spaceHeld = true;
    Audio.play("jump");
  }
  if (!keys["Space"]) state._spaceHeld = false;
  state.vy -= GRAVITY * dt;
  state.jumpY += state.vy * dt;
  if (state.jumpY <= 0) {
    state.jumpY = 0;
    if (!state.grounded) Audio.play("land");
    state.vy = 0; state.grounded = true;
  }

  // ---- lean / peek (collision-clamped against the grid) ----
  let leanInput = 0;
  if (keys["KeyQ"]) leanInput -= 1;
  if (keys["KeyE"]) leanInput += 1;
  state.leanTarget = leanInput * LEAN_MAX;
  state.lean += (state.leanTarget - state.lean) * Math.min(1, dt * LEAN_SPEED);
  const rr = yawRight(camera, _right);
  let candidate = state.lean;
  if (collides(state.x + rr.x * candidate, state.z + rr.z * candidate, LEAN_EYE_RADIUS)) {
    let lo = 0, hi = candidate;
    for (let i = 0; i < 6; i++) {
      const mid = (lo + hi) / 2;
      if (collides(state.x + rr.x * mid, state.z + rr.z * mid, LEAN_EYE_RADIUS)) hi = mid; else lo = mid;
    }
    candidate = lo;
  }
  state.lean = candidate;

  // ---- scope FOV toggle ----
  state.scoped = rightMouseHeld && state.weapon === "sniper";
  if (state.scoped !== state._scopedPrev) {
    camera.fov = state.scoped ? SCOPE_FOV : NORMAL_FOV;
    camera.updateProjectionMatrix();
    state._scopedPrev = state.scoped;
  }

  state.viewKick *= 0.85;
}

/** Positions/tilts the camera from player state — call after physics update. */
export function applyCameraTransform(state, camera) {
  const rr = yawRight(camera, _right);
  const headBob = state.moving && state.grounded ? Math.sin(state.bobPhase) * 0.035 : 0;
  state.eyeY = EYE_HEIGHT + state.jumpY + headBob;
  camera.position.set(state.x + rr.x * state.lean, state.eyeY, state.z + rr.z * state.lean);
  camera.rotation.z = -(state.lean / LEAN_MAX) * LEAN_TILT_MAX;
}

export function setWeapon(state, key, viewRig) {
  if (state.weapon === key || !state.alive) return;
  if (state.reloading) state.reloading = false;
  state.weapon = key;
  for (const k of WEAPON_ORDER) viewRig.weapons[k].visible = k === key;
}

export function tryReload(state) {
  if (!state.alive || state.reloading) return;
  const w = WEAPONS[state.weapon];
  const lo = state.loadout[state.weapon];
  if (lo.mag >= w.mag || lo.reserve <= 0) return;
  state.reloading = true;
  state.reloadEndAt = performance.now() + w.reloadTime;
  Audio.play("reload");
}
function finishReload(state) {
  const w = WEAPONS[state.weapon];
  const lo = state.loadout[state.weapon];
  const need = w.mag - lo.mag;
  const take = Math.min(need, lo.reserve);
  lo.mag += take; lo.reserve -= take;
  state.reloading = false;
}
export function checkReloadDone(state, now) {
  if (state.reloading && now >= state.reloadEndAt) finishReload(state);
}

/**
 * Hitscan fire. `hittables` = array of THREE.Mesh hit-zone parts (head/torso/
 * arms/legs), each tagged with userData.botRef (owning bot) and userData.zone
 * ("head"|"body"|"limb") for location-based damage.
 */
export function fireWeapon(state, camera, raycaster, wallMeshes, hittables, effects, now, callbacks) {
  const w = WEAPONS[state.weapon];
  const lo = state.loadout[state.weapon];
  if (!state.alive || state.reloading) return false;
  if (lo.mag <= 0) { tryReload(state); return false; }
  if (now - state.lastFireAt < w.fireRate) return false;
  state.lastFireAt = now;
  lo.mag--;

  const aiming = callbacks.rightHeld;
  let spread = w.spread * (state.moving ? w.moveSpreadMul : 1);
  if (aiming) spread *= state.weapon === "sniper" ? 0.05 : 0.55;
  if (state.weapon === "sniper" && aiming) spread = w.scopeSpread;

  camera.getWorldPosition(_rayOrigin);
  camera.getWorldDirection(_fwd);
  const pellets = w.pellets || 1;
  const targets = wallMeshes.concat(hittables);

  for (let i = 0; i < pellets; i++) {
    const dir = jitterDirection(_fwd, spread);
    raycaster.set(_rayOrigin, dir);
    raycaster.far = 40; raycaster.near = 0.01;
    const hits = raycaster.intersectObjects(targets, false);
    if (hits.length === 0) continue;
    const hit = hits[0];
    const endPoint = hit.point;
    effects.spawnTracer(_rayOrigin.clone(), endPoint.clone(), false);
    if (hit.object.userData.botRef) {
      const zone = hit.object.userData.zone || "body";
      let dmg = w.damage * (HITZONE_MULT[zone] || 1);
      if (w.falloff) dmg *= Math.max(0.35, 1 - hit.distance / w.falloffRange);
      callbacks.onDamageBot(hit.object.userData.botRef, dmg, zone);
      effects.spawnImpact(endPoint, true, false);
    } else {
      effects.spawnImpact(endPoint, false, false);
    }
  }
  state.viewKick = Math.min(1, state.viewKick + (w.pellets > 1 ? 0.9 : 0.45));
  Audio.play(state.weapon);
  if (lo.mag <= 0) tryReload(state);
  return true;
}

export function throwSmoke(state, camera, raycaster, wallMeshes, effects) {
  if (!state.alive || state.smoke <= 0) return;
  state.smoke--;
  const range = 4.5;
  camera.getWorldPosition(_rayOrigin);
  camera.getWorldDirection(_fwd);
  raycaster.set(_rayOrigin, _fwd);
  raycaster.far = range; raycaster.near = 0.01;
  const hits = raycaster.intersectObjects(wallMeshes, false);
  const dist = Math.min(range, hits.length ? hits[0].distance - 0.3 : range);
  const lx = state.x + _fwd.x * dist, lz = state.z + _fwd.z * dist;
  effects.spawnGrenadeArc(state.x, state.z, lx, lz);
  Audio.play("throw");
}

export function damagePlayer(state, dmg, sourceName, onFlash, pushFeed, onDeath) {
  if (!state.alive) return;
  state.health -= dmg;
  onFlash();
  if (state.health <= 0) {
    state.health = 0; state.alive = false; state.respawnAt = performance.now() + 3000;
    state.deaths++;
    pushFeed(sourceName + " ELIMINATED YOU", "death");
    onDeath(true);
  }
}
