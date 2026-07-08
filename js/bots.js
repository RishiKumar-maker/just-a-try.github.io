// ============================================================================
// bots.js — bot visuals (procedural low-poly soldier with distinct hit-zone
// body parts) and AI.
//
// Two things make this feel like a real opponent instead of a hitscan wall:
//  1. Aim tracking is rate-limited (bot.aimYaw turns toward the player at a
//     capped angular speed) instead of snapping to the true direction every
//     shot. A player who strafes/changes direction unpredictably creates a
//     real angular gap between where the bot is aiming and where the player
//     actually is — movement genuinely changes hit probability.
//  2. Bots use cover: they path to a nearby wall/crate that blocks LOS, wait
//     briefly, peek out to fire, then retreat, rather than standing in the
//     open trading shots.
//
// LOS/hit-fire uses a real THREE.Raycaster against level meshes (so crates,
// being short, correctly let bots see/shoot over them). Cover-point search
// uses the cheap grid-based hasLineOfSight2D from map.js instead, since it
// needs to sample many candidate points per decision — not worth a real
// raycast for each one.
// ============================================================================
import * as THREE from '../vendor/three.module.js';
import { tryMove, pickPatrolWaypoint, randomSpawnAwayFrom, hasLineOfSight2D, isWall, collides } from './map.js';
import { WEAPONS } from './weapons.js';
import { jitterDirection } from './util.js';
import { PLAYER_RADIUS } from './player.js';

export const BOT_RADIUS = 0.3;
export const BOT_EYE_HEIGHT = 1.35;
const MOVE_SPEED = 3.1;
const COMBAT_MEMORY = 4000; // ms a bot keeps "fighting" after last direct sighting

let botIdCounter = 1;
const WEAPON_POOL = ["rifle", "smg", "shotgun"];

export function createBotData(diffCfg, spawnAwayFrom) {
  const sp = randomSpawnAwayFrom(spawnAwayFrom.x, spawnAwayFrom.z, 6);
  const id = botIdCounter++;
  return {
    id, name: "BOT-" + String(id).padStart(2, "0"),
    x: sp.x, z: sp.z,
    health: diffCfg.botHealth, maxHealth: diffCfg.botHealth,
    alive: true, respawnAt: 0,
    state: "patrol", waypoint: null, lastKnown: null, searchUntil: 0,
    combatUntil: 0, combatMode: "open",
    coverSpot: null, coverPeekSpot: null, modeUntil: 0,
    aimYaw: Math.random() * Math.PI * 2, engagedAt: 0,
    weapon: WEAPON_POOL[Math.floor(Math.random() * WEAPON_POOL.length)],
    lastFireAt: 0, strafeDir: Math.random() < 0.5 ? 1 : -1, strafeChangeAt: 0,
    hitFlashT: 0, kills: 0, deaths: 0, animPhase: Math.random() * 10,
    mesh: null, deathAnim: null,
  };
}

export function respawnBotData(bot, awayFrom) {
  const sp = randomSpawnAwayFrom(awayFrom.x, awayFrom.z, 6);
  bot.x = sp.x; bot.z = sp.z; bot.health = bot.maxHealth; bot.alive = true;
  bot.state = "patrol"; bot.waypoint = null; bot.deathAnim = null;
  bot.combatMode = "open"; bot.coverSpot = null; bot.combatUntil = 0;
  if (bot.mesh) {
    bot.mesh.group.visible = true;
    bot.mesh.group.rotation.set(0, 0, 0);
    bot.mesh.group.position.set(bot.x, 0, bot.z);
    setBotHealthPct(bot.mesh, 1);
  }
}

function makeHealthSprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 64; canvas.height = 10;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, depthTest: true, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.5, 0.08, 1);
  sprite.position.set(0, 1.75, 0);
  return { sprite, canvas, ctx, tex };
}
export function setBotHealthPct(mesh, pct) {
  const { ctx, canvas, tex } = mesh.healthBar;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = pct > 0.4 ? '#6fbf3f' : '#e2432c';
  ctx.fillRect(1, 1, (canvas.width - 2) * Math.max(0, pct), canvas.height - 2);
  tex.needsUpdate = true;
}

function part(geo, color, x, y, z, zone) {
  const mat = new THREE.MeshLambertMaterial({ color });
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.userData.zone = zone;
  m.userData.baseColor = color;
  return m;
}

export function createBotMesh() {
  const group = new THREE.Group();

  const legs = part(new THREE.BoxGeometry(0.34, 0.72, 0.24), 0x2e2f28, 0, 0.36, 0, "limb");
  const torso = part(new THREE.BoxGeometry(0.42, 0.5, 0.26), 0x4a5240, 0, 0.97, 0, "body");
  const armL = part(new THREE.BoxGeometry(0.14, 0.46, 0.16), 0x4a5240, -0.26, 0.95, 0, "limb");
  const armR = part(new THREE.BoxGeometry(0.14, 0.46, 0.16), 0x4a5240, 0.26, 0.95, 0, "limb");
  const head = part(new THREE.SphereGeometry(0.16, 10, 8), 0x9c7a5c, 0, 1.38, 0, "head");
  group.add(legs, torso, armL, armR, head);

  const gunMat = new THREE.MeshLambertMaterial({ color: 0x1c1c1a });
  const gun = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.42), gunMat);
  gun.position.set(0.32, 0.95, 0.14);
  group.add(gun);

  const healthBar = makeHealthSprite();
  group.add(healthBar.sprite);

  const hitParts = [head, torso, legs, armL, armR];
  return { group, head, torso, legs, armL, armR, gun, hitParts, healthBar };
}

/** Tags every hit-zone mesh with a back-reference to its owning bot data,
 * so a raycast hit on any part can look up which bot (and which zone) it hit. */
export function bindBotRef(mesh, botData) {
  for (const p of mesh.hitParts) p.userData.botRef = botData;
}

export function updateBotVisual(bot, dt) {
  const mesh = bot.mesh;
  if (!mesh) return;

  if (bot.deathAnim) {
    const t = Math.min(1, (performance.now() - bot.deathAnim.t0) / 450);
    mesh.group.rotation.z = t * (Math.PI / 2.1);
    mesh.group.position.y = -t * 0.5;
    if (t >= 1) mesh.group.visible = false;
    return;
  }
  if (!bot.alive) return;

  mesh.group.position.set(bot.x, 0, bot.z);
  if (bot.moving) bot.animPhase += dt * 0.006;
  const bob = bot.moving ? Math.abs(Math.sin(bot.animPhase)) * 0.05 : 0;
  mesh.group.position.y = bob;

  if (bot.hitFlashT > 0) {
    bot.hitFlashT -= dt;
    for (const p of mesh.hitParts) p.material.color.setHex(0xffffff);
  } else {
    for (const p of mesh.hitParts) p.material.color.setHex(p.userData.baseColor);
  }
}

function faceToward(bot, tx, tz) {
  if (!bot.mesh) return;
  const dx = tx - bot.x, dz = tz - bot.z;
  if (Math.hypot(dx, dz) < 0.01) return;
  // Three.js rotation.y maps local forward (0,0,-1) -> (-sin(y), 0, -cos(y)),
  // so matching a target direction (dx,dz) requires atan2(-dx,-dz).
  bot.mesh.group.rotation.y = Math.atan2(-dx, -dz);
}

/** Finds the nearest floor point within range that blocks LOS to the target
 * (i.e., cover), plus a "peek" point one step closer that should regain LOS. */
function findCoverSpot(bot, tx, tz) {
  let best = null, bestD = Infinity;
  const radii = [1.5, 2.5, 3.5, 4.5];
  const dirs = 10;
  for (const r of radii) {
    for (let i = 0; i < dirs; i++) {
      const a = (i / dirs) * Math.PI * 2;
      const cx = bot.x + Math.cos(a) * r;
      const cz = bot.z + Math.sin(a) * r;
      if (isWall(cx, cz) || collides(cx, cz, BOT_RADIUS)) continue;
      if (hasLineOfSight2D(cx, cz, tx, tz)) continue; // must be hidden
      const d = r;
      if (d < bestD) { bestD = d; best = { x: cx, z: cz }; }
    }
  }
  if (!best) return null;
  const dx = tx - best.x, dz = tz - best.z;
  const dist = Math.hypot(dx, dz) || 1;
  const peek = { x: best.x + (dx / dist) * 1.1, z: best.z + (dz / dist) * 1.1 };
  return { hide: best, peek };
}

/**
 * Advance one bot's AI by dtMs. `w` bundles shared world refs:
 * { player, raycaster, wallMeshes, smokes, diffCfg, now,
 *   onDamagePlayer(dmg, botName), onTracer(fromVec3, toVec3, enemy), onImpact(point, isBot), playSound }
 */
export function stepBotAI(bot, dtMs, w) {
  const dt = dtMs / 1000;
  w._dt = dt;
  const player = w.player;

  if (!bot.alive) {
    if (w.now >= bot.respawnAt) respawnBotData(bot, { x: player.x, z: player.z });
    return;
  }

  const dx0 = player.x - bot.x, dz0 = player.z - bot.z;
  const distToPlayer = Math.hypot(dx0, dz0);

  let los = false;
  if (player.alive && distToPlayer < 16) {
    const from = new THREE.Vector3(bot.x, BOT_EYE_HEIGHT, bot.z);
    const to = new THREE.Vector3(player.x, player.eyeY, player.z);
    const dir = to.clone().sub(from);
    const dist = dir.length();
    dir.normalize();
    w.raycaster.set(from, dir);
    w.raycaster.far = dist - 0.05;
    w.raycaster.near = 0.01;
    const hits = w.raycaster.intersectObjects(w.wallMeshes, false);
    los = hits.length === 0;
    if (los && w.smokes) {
      for (const s of w.smokes) {
        if (!s.active) continue;
        if (segDistXZ(bot.x, bot.z, player.x, player.z, s.x, s.z) < s.radius) { los = false; break; }
      }
    }
  }
  if (los) bot.combatUntil = w.now + COMBAT_MEMORY;

  const inCombat = w.now < bot.combatUntil && player.alive;
  if (inCombat) {
    if (bot.state !== "attack") {
      bot.state = "attack"; bot.combatMode = "open"; bot.modeUntil = 0;
      bot.engagedAt = w.now; // fresh reaction delay on first contact
    }
  } else if (bot.state === "attack") {
    bot.state = "search"; bot.searchUntil = w.now + 1800;
    bot.lastKnown = { x: player.x, z: player.z };
  } else if (bot.state === "search" && w.now > bot.searchUntil) {
    bot.state = "patrol"; bot.waypoint = null;
  }

  const speed = MOVE_SPEED * 0.82 * w.diffCfg.speedMul * dt;
  bot.moving = false;

  if (bot.state === "patrol") {
    if (!bot.waypoint || Math.hypot(bot.waypoint.x - bot.x, bot.waypoint.z - bot.z) < 0.4) {
      bot.waypoint = pickPatrolWaypoint();
    }
    const dx = bot.waypoint.x - bot.x, dz = bot.waypoint.z - bot.z;
    const d = Math.hypot(dx, dz) || 1;
    tryMove(bot, bot.x + (dx / d) * speed * 0.6, bot.z + (dz / d) * speed * 0.6, BOT_RADIUS);
    faceToward(bot, bot.waypoint.x, bot.waypoint.z);
    bot.moving = true;
  } else if (bot.state === "search") {
    const dx = bot.lastKnown.x - bot.x, dz = bot.lastKnown.z - bot.z;
    const d = Math.hypot(dx, dz) || 1;
    if (d > 0.3) {
      tryMove(bot, bot.x + (dx / d) * speed, bot.z + (dz / d) * speed, BOT_RADIUS);
      bot.moving = true;
    }
    faceToward(bot, bot.lastKnown.x, bot.lastKnown.z);
  } else if (bot.state === "attack") {
    stepCombat(bot, player, distToPlayer, los, speed, w);
  }
}

function stepCombat(bot, player, distToPlayer, los, speed, w) {
  const now = w.now;

  // Very close range: cover stops being useful — fight in the open.
  if (distToPlayer < 2.6 && bot.combatMode !== "open") { bot.combatMode = "open"; bot.modeUntil = 0; }

  if (bot.combatMode === "open") {
    faceToward(bot, player.x, player.z);
    const preferred = bot.weapon === "shotgun" ? 3.2 : bot.weapon === "smg" ? 5 : 7.5;
    let fx = 0, fz = 0;
    const dirx = (player.x - bot.x) / (distToPlayer || 1), dirz = (player.z - bot.z) / (distToPlayer || 1);
    if (distToPlayer < preferred - 1) { fx = -dirx; fz = -dirz; }
    else if (distToPlayer > preferred + 1) { fx = dirx; fz = dirz; }
    if (now > bot.strafeChangeAt) { bot.strafeDir *= -1; bot.strafeChangeAt = now + 1200 + Math.random() * 1000; }
    fx += -dirz * bot.strafeDir * 0.6;
    fz += dirx * bot.strafeDir * 0.6;
    const fl = Math.hypot(fx, fz);
    if (fl > 0.05) {
      tryMove(bot, bot.x + (fx / fl) * speed * 0.7, bot.z + (fz / fl) * speed * 0.7, BOT_RADIUS);
      bot.moving = true;
    }
    // occasionally break off to find cover instead of trading in the open
    if (distToPlayer > 4 && now > bot.modeUntil) {
      const cover = findCoverSpot(bot, player.x, player.z);
      if (cover && Math.random() < 0.6) {
        bot.coverSpot = cover.hide; bot.coverPeekSpot = cover.peek;
        bot.combatMode = "seeking"; bot.modeUntil = now + 6000;
      } else {
        bot.modeUntil = now + 2000 + Math.random() * 1500;
      }
    }
    tryFire(bot, player, distToPlayer, los, w);
    return;
  }

  if (bot.combatMode === "seeking") {
    if (!bot.coverSpot) { bot.combatMode = "open"; return; }
    const dx = bot.coverSpot.x - bot.x, dz = bot.coverSpot.z - bot.z;
    const d = Math.hypot(dx, dz);
    faceToward(bot, player.x, player.z);
    if (d < 0.35 || now > bot.modeUntil) {
      bot.combatMode = "hiding"; bot.modeUntil = now + 500 + Math.random() * 700;
    } else {
      tryMove(bot, bot.x + (dx / d) * speed, bot.z + (dz / d) * speed, BOT_RADIUS);
      bot.moving = true;
    }
    // still allow snapping off a shot if caught in the open mid-approach
    if (los) tryFire(bot, player, distToPlayer, los, w);
    return;
  }

  if (bot.combatMode === "hiding") {
    if (now > bot.modeUntil) {
      bot.combatMode = "peeking"; bot.modeUntil = now + 700 + Math.random() * 500;
      bot.engagedAt = now; // fresh reaction delay each time a bot re-exposes itself
    }
    faceToward(bot, player.x, player.z);
    return; // deliberately not firing — hidden, waiting
  }

  if (bot.combatMode === "peeking") {
    const target = bot.coverPeekSpot || bot.coverSpot;
    if (target) {
      const dx = target.x - bot.x, dz = target.z - bot.z;
      const d = Math.hypot(dx, dz);
      if (d > 0.2) { tryMove(bot, bot.x + (dx / d) * speed * 0.8, bot.z + (dz / d) * speed * 0.8, BOT_RADIUS); bot.moving = true; }
    }
    faceToward(bot, player.x, player.z);
    if (los) tryFire(bot, player, distToPlayer, los, w);
    if (now > bot.modeUntil) {
      bot.combatMode = "hiding"; bot.modeUntil = now + 600 + Math.random() * 600;
      // occasionally look for a fresh spot next cycle instead of the same one
      if (Math.random() < 0.35) bot.coverSpot = null;
    }
  }
}

function tryFire(bot, player, distToPlayer, los, w) {
  if (!los || !player.alive) return;
  const now = w.now;
  const wCfg = WEAPONS[bot.weapon];
  const cfg = w.diffCfg;

  // Rate-limited aim tracking: the bot's aim only turns toward the true
  // target direction at a capped angular speed, plus a small persistent
  // wobble. A player holding a straight line gets tracked down quickly; a
  // player juking/strafing keeps opening an angular gap that causes misses.
  const trueYaw = Math.atan2(player.x - bot.x, player.z - bot.z);
  let diff = trueYaw - bot.aimYaw;
  diff = Math.atan2(Math.sin(diff), Math.cos(diff)); // shortest angular path
  const maxStep = cfg.turnRate * (w._dt || 0.016);
  bot.aimYaw += Math.max(-maxStep, Math.min(maxStep, diff)) + (Math.random() - 0.5) * cfg.wobble;

  if (now - bot.engagedAt < cfg.reaction) return;
  if (now - bot.lastFireAt < wCfg.fireRate * 1.15) return;
  bot.lastFireAt = now;

  const dy = player.eyeY - BOT_EYE_HEIGHT;
  const trueDir = new THREE.Vector3(player.x - bot.x, dy, player.z - bot.z).normalize();
  const horizMag = Math.sqrt(Math.max(0, 1 - trueDir.y * trueDir.y));
  const aimDir = new THREE.Vector3(Math.sin(bot.aimYaw) * horizMag, trueDir.y, Math.cos(bot.aimYaw) * horizMag).normalize();

  const spread = wCfg.spread * cfg.spreadMul;
  const pellets = wCfg.pellets || 1;
  const from = new THREE.Vector3(bot.x, BOT_EYE_HEIGHT, bot.z);
  const angularRadius = Math.atan2(PLAYER_RADIUS, distToPlayer);

  for (let i = 0; i < pellets; i++) {
    const shotDir = jitterDirection(aimDir, spread);
    const angleOff = shotDir.angleTo(trueDir);
    w.raycaster.set(from, shotDir);
    w.raycaster.far = distToPlayer + 5;
    w.raycaster.near = 0.01;
    const hits = w.raycaster.intersectObjects(w.wallMeshes, false);
    const wallDist = hits.length ? hits[0].distance : Infinity;
    const endPoint = from.clone().addScaledVector(shotDir, Math.min(wallDist, distToPlayer + 2));
    if (angleOff <= angularRadius && wallDist > distToPlayer) {
      let dmg = wCfg.damage * 0.38;
      if (wCfg.falloff) dmg *= Math.max(0.35, 1 - distToPlayer / wCfg.falloffRange);
      w.onDamagePlayer(dmg, bot.name);
      w.onTracer(from, new THREE.Vector3(player.x, player.eyeY, player.z), true);
      w.onImpact(new THREE.Vector3(player.x, player.eyeY, player.z), false, true);
    } else {
      w.onTracer(from, endPoint, true);
      if (hits.length) w.onImpact(hits[0].point, false, false);
    }
  }
  w.playSound(bot.weapon, true);
}

function segDistXZ(x1, z1, x2, z2, px, pz) {
  const dx = x2 - x1, dz = z2 - z1;
  const lenSq = dx * dx + dz * dz;
  let t = lenSq === 0 ? 0 : ((px - x1) * dx + (pz - z1) * dz) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + dx * t, cz = z1 + dz * t;
  return Math.hypot(px - cx, pz - cz);
}
