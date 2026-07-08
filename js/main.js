// ============================================================================
// main.js — wires every module together: scene setup, input, the per-frame
// update/render loop, menu screens, pointer lock, and service worker.
// ============================================================================
import * as THREE from '../vendor/three.module.js';
import * as MAP from './map.js';
import * as World from './world.js';
import * as Weapons from './weapons.js';
import * as Bots from './bots.js';
import * as Pickups from './pickups.js';
import * as Player from './player.js';
import * as UI from './ui.js';
import * as Audio from './audio.js';
import { createEffectsManager } from './effects.js';
import { makeGlowSpriteTexture } from './textures.js';

/* ---------------- WebGL feature detection ---------------- */
function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
  } catch (e) { return false; }
}
if (!hasWebGL()) {
  document.getElementById('webglfail').classList.remove('hidden');
  throw new Error('WebGL unavailable');
}

/* ---------------- Difficulty presets ----------------
   turnRate = max aim-tracking speed (rad/s) — this is what makes strafing
   and direction changes actually throw bots off, since their aim can only
   turn so fast to follow you. wobble = small persistent aim jitter even
   when locked on (nobody has laser-perfect aim). spreadMul scales the
   weapon's own spread cone on top of that. */
const DIFFICULTY = {
  easy: { bots: 4, botHealth: 55, turnRate: 1.4, wobble: 0.04, spreadMul: 1.8, reaction: 1000, respawn: 4500, speedMul: 0.85 },
  normal: { bots: 6, botHealth: 80, turnRate: 2.4, wobble: 0.025, spreadMul: 1.3, reaction: 650, respawn: 3500, speedMul: 1.0 },
  hard: { bots: 8, botHealth: 100, turnRate: 3.6, wobble: 0.014, spreadMul: 1.0, reaction: 380, respawn: 2600, speedMul: 1.1 },
};

/* ---------------- Scene / renderer / camera ---------------- */
const canvas = document.getElementById('scene');
const renderer = World.createRenderer(canvas);
const scene = World.createScene();
const camera = World.createCamera(window.innerWidth / window.innerHeight);
scene.add(camera); // required so camera-attached viewmodel children render
World.addLights(scene);
const { wallMeshes } = World.buildLevel(scene);
World.handleResize(renderer, camera);

const raycaster = new THREE.Raycaster();
const effects = createEffectsManager(scene);
const pickups = Pickups.createPickups(scene);

/* ---------------- Weapon viewmodel + muzzle flash ---------------- */
const viewRig = Weapons.buildViewmodelRig();
camera.add(viewRig.root);
const muzzleFlash = Weapons.buildMuzzleFlashSprite(makeGlowSpriteTexture('rgba(255,210,120,1)'));
viewRig.root.add(muzzleFlash);
let muzzleFlashUntil = 0;

/* ---------------- Game state ---------------- */
const State = { screen: 'menu', difficulty: 'normal', startTime: 0, elapsed: 0, pointerLocked: false };
const Game = { player: null, bots: [], diffCfg: DIFFICULTY.normal };

function makePlayer() {
  return Player.createPlayerState(MAP.SPAWN_POINTS[0]);
}

function createBotWithMesh(diffCfg, awayFrom) {
  const data = Bots.createBotData(diffCfg, awayFrom);
  const mesh = Bots.createBotMesh();
  Bots.bindBotRef(mesh, data);
  data.mesh = mesh;
  mesh.group.position.set(data.x, 0, data.z);
  scene.add(mesh.group);
  return data;
}
function disposeBotMesh(mesh) {
  scene.remove(mesh.group);
  mesh.group.traverse(obj => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) obj.material.dispose();
  });
  if (mesh.healthBar) mesh.healthBar.tex.dispose();
}

function resetMatch(difficulty) {
  State.difficulty = difficulty;
  Game.diffCfg = DIFFICULTY[difficulty];
  document.getElementById('diffbadge').textContent = difficulty.toUpperCase();

  Game.player = makePlayer();
  Game.player.spawnProtectedUntil = performance.now() + 2200;
  camera.rotation.set(0, 0, 0);
  camera.fov = 75; camera.updateProjectionMatrix();

  for (const b of Game.bots) if (b.mesh) disposeBotMesh(b.mesh);
  Game.bots = [];
  for (let i = 0; i < Game.diffCfg.bots; i++) {
    Game.bots.push(createBotWithMesh(Game.diffCfg, Game.player));
  }

  Pickups.resetPickups(pickups);
  effects.clearAll();
  for (const key of Weapons.WEAPON_ORDER) viewRig.weapons[key].visible = key === 'rifle';

  State.startTime = performance.now();
  State.elapsed = 0;
}

/* ---------------- Input ---------------- */
const Input = { keys: {}, mouseDX: 0, mouseDY: 0, left: false, right: false, sensitivity: 0.0022 };

window.addEventListener('keydown', (e) => {
  Input.keys[e.code] = true;
  if (e.code === 'Space' && State.screen === 'playing') e.preventDefault();
  if (State.screen !== 'playing') return;
  if (e.code === 'Digit1') Player.setWeapon(Game.player, 'rifle', viewRig);
  if (e.code === 'Digit2') Player.setWeapon(Game.player, 'smg', viewRig);
  if (e.code === 'Digit3') Player.setWeapon(Game.player, 'shotgun', viewRig);
  if (e.code === 'Digit4') Player.setWeapon(Game.player, 'sniper', viewRig);
  if (e.code === 'KeyR') Player.tryReload(Game.player);
  if (e.code === 'KeyG') Player.throwSmoke(Game.player, camera, raycaster, wallMeshes, effects);
  if (e.code === 'Tab') { e.preventDefault(); UI.showScoreboard(true, Game.player, Game.bots); }
});
window.addEventListener('keyup', (e) => {
  Input.keys[e.code] = false;
  if (e.code === 'Tab') UI.showScoreboard(false, Game.player, Game.bots);
});
window.addEventListener('mousemove', (e) => {
  if (State.pointerLocked) { Input.mouseDX += e.movementX || 0; Input.mouseDY += e.movementY || 0; }
});
window.addEventListener('mousedown', (e) => {
  if (State.screen !== 'playing' || !State.pointerLocked) return;
  if (e.button === 0) Input.left = true;
  if (e.button === 2) Input.right = true;
});
window.addEventListener('mouseup', (e) => {
  if (e.button === 0) Input.left = false;
  if (e.button === 2) Input.right = false;
});
window.addEventListener('contextmenu', (e) => e.preventDefault());
window.addEventListener('wheel', (e) => {
  if (State.screen !== 'playing') return;
  const idx = Weapons.WEAPON_ORDER.indexOf(Game.player.weapon);
  const dir = e.deltaY > 0 ? 1 : -1;
  const next = Weapons.WEAPON_ORDER[(idx + dir + Weapons.WEAPON_ORDER.length) % Weapons.WEAPON_ORDER.length];
  Player.setWeapon(Game.player, next, viewRig);
});

/* ---------------- Damage / combat callbacks ---------------- */
function onDamageBot(bot, dmg, zone) {
  if (!bot.alive) return;
  bot.health -= dmg;
  bot.hitFlashT = 130;
  Bots.setBotHealthPct(bot.mesh, Math.max(0, bot.health / bot.maxHealth));
  if (bot.health <= 0) {
    bot.alive = false;
    bot.deathAnim = { t0: performance.now() };
    bot.respawnAt = performance.now() + Game.diffCfg.respawn;
    Game.player.kills++;
    UI.pushFeed((zone === 'head' ? 'HEADSHOT — ' : '') + 'YOU ELIMINATED ' + bot.name, 'you');
    Audio.play('kill');
  } else {
    Audio.play('hitmarker');
  }
  UI.showHitMarker(zone === 'head');
}
function onFlashDamage() { UI.flashDamage(); }
function onPlayerDeath() { UI.showDeathScreen(true); }
function pushFeed(text, cls) { UI.pushFeed(text, cls); }

function respawnPlayerIfDue(now) {
  const p = Game.player;
  if (p.alive) return;
  if (now >= p.respawnAt) {
    const alive = Game.bots.filter(b => b.alive);
    const avgX = alive.length ? alive.reduce((s, b) => s + b.x, 0) / alive.length : 12;
    const avgZ = alive.length ? alive.reduce((s, b) => s + b.z, 0) / alive.length : 12;
    const sp = MAP.randomSpawnAwayFrom(avgX, avgZ, 5);
    p.x = sp.x; p.z = sp.z;
    p.health = p.maxHealth; p.alive = true; p.reloading = false;
    p.jumpY = 0; p.vy = 0; p.lean = 0;
    p.loadout = Player.freshLoadout();
    p.spawnProtectedUntil = now + 2200;
    UI.showDeathScreen(false);
  } else {
    UI.updateRespawnCountdown(p.respawnAt - now);
  }
}

/* ---------------- Screens / menus ---------------- */
const screens = {
  mainmenu: document.getElementById('mainmenu'),
  pausemenu: document.getElementById('pausemenu'),
  summaryscreen: document.getElementById('summaryscreen'),
};
const hud = document.getElementById('hud');
let selectedDifficulty = 'normal';

function hideAllScreens() { Object.values(screens).forEach(s => s.classList.add('hidden')); }
function goToMenu() {
  State.screen = 'menu';
  hideAllScreens();
  screens.mainmenu.classList.remove('hidden');
  hud.classList.add('hidden');
  try { document.exitPointerLock && document.exitPointerLock(); } catch (e) {}
}

document.getElementById('diffOptions').addEventListener('click', (e) => {
  const btn = e.target.closest('.diff-btn');
  if (!btn) return;
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedDifficulty = btn.dataset.diff;
});
document.getElementById('controlsToggle').addEventListener('click', () => {
  document.getElementById('controlsPanel').classList.toggle('hidden');
});
document.getElementById('startBtn').addEventListener('click', () => {
  Audio.ensureAudio();
  resetMatch(selectedDifficulty);
  hideAllScreens();
  hud.classList.remove('hidden');
  State.screen = 'playing';
  requestLock();
});
document.getElementById('resumeBtn').addEventListener('click', () => {
  hideAllScreens();
  State.screen = 'playing';
  requestLock();
});
document.getElementById('restartBtn').addEventListener('click', () => {
  resetMatch(State.difficulty);
  hideAllScreens();
  State.screen = 'playing';
  requestLock();
});
document.getElementById('quitBtn').addEventListener('click', goToSummary);
document.getElementById('backToMenuBtn').addEventListener('click', goToMenu);

function goToSummary() {
  const p = Game.player;
  State.screen = 'summary';
  hideAllScreens();
  hud.classList.add('hidden');
  document.getElementById('sumKills').textContent = p.kills;
  document.getElementById('sumDeaths').textContent = p.deaths;
  document.getElementById('sumKD').textContent = (p.kills / Math.max(1, p.deaths)).toFixed(2);
  document.getElementById('sumTime').textContent = document.getElementById('matchTimer').textContent;
  screens.summaryscreen.classList.remove('hidden');
  try { document.exitPointerLock && document.exitPointerLock(); } catch (e) {}
}

/* ---------------- Pointer lock ---------------- */
function requestLock() { try { canvas.requestPointerLock(); } catch (e) {} }
document.addEventListener('pointerlockchange', () => {
  State.pointerLocked = document.pointerLockElement === canvas;
  if (!State.pointerLocked && State.screen === 'playing') {
    State.screen = 'paused';
    hideAllScreens();
    screens.pausemenu.classList.remove('hidden');
  }
});
canvas.addEventListener('click', () => {
  if (State.screen === 'playing' && !State.pointerLocked) requestLock();
});

/* ---------------- Game loop ---------------- */
let lastT = performance.now();
function loop(t) {
  let dtMs = t - lastT;
  lastT = t;
  if (dtMs > 100) dtMs = 100;

  if (State.screen === 'playing') {
    update(dtMs, t);
  }
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

function update(dtMs, now) {
  const p = Game.player;
  const dt = dtMs / 1000;

  respawnPlayerIfDue(now);

  if (p.alive) {
    Player.applyMouseLook(camera, Input.mouseDX, Input.mouseDY, Input.sensitivity);
    Input.mouseDX = 0; Input.mouseDY = 0;
    Player.updateMovementAndPhysics(p, camera, dt, Input.keys, Input.right);
    Player.checkReloadDone(p, now);

    if (Input.left) {
      const w = Weapons.WEAPONS[p.weapon];
      if (w.auto || !p._firedThisClick) {
        const hittables = Game.bots.filter(b => b.alive).flatMap(b => b.mesh.hitParts);
        const fired = Player.fireWeapon(p, camera, raycaster, wallMeshes, hittables, effects, now, {
          rightHeld: Input.right, onDamageBot,
        });
        if (fired) {
          muzzleFlash.position.z = viewRig.weapons[p.weapon].userData.muzzleZ;
          muzzleFlash.material.opacity = 1;
          muzzleFlashUntil = now + 70;
        }
        p._firedThisClick = true;
      }
    } else {
      p._firedThisClick = false;
    }
  } else {
    Input.mouseDX = 0; Input.mouseDY = 0;
  }
  Player.applyCameraTransform(p, camera);

  // viewmodel bob / recoil
  const bobX = p.moving && p.grounded ? Math.sin(p.bobPhase) * 0.012 : 0;
  const bobY = p.moving && p.grounded ? Math.abs(Math.cos(p.bobPhase)) * 0.01 : 0;
  const kick = p.viewKick;
  viewRig.root.position.set(0.22 + bobX, -0.2 + bobY - kick * 0.05, -0.42 + kick * 0.05);
  viewRig.root.rotation.x = -kick * 0.3;
  viewRig.weapons[p.weapon].visible = !p.scoped;
  if (now > muzzleFlashUntil) muzzleFlash.material.opacity = 0;

  // bots
  const botCtx = {
    player: p, raycaster, wallMeshes, smokes: effects.smokes, diffCfg: Game.diffCfg, now,
    onDamagePlayer: (dmg, name) => {
      if (now < p.spawnProtectedUntil) return;
      Player.damagePlayer(p, dmg, name, onFlashDamage, pushFeed, onPlayerDeath);
    },
    onTracer: (from, to, enemy) => effects.spawnTracer(from, to, enemy),
    onImpact: (point, isBot, isPlayerHit) => effects.spawnImpact(point, isBot, isPlayerHit),
    playSound: Audio.play,
  };
  for (const bot of Game.bots) {
    Bots.stepBotAI(bot, dtMs, botCtx);
    Bots.updateBotVisual(bot, dtMs);
  }

  Pickups.updatePickups(pickups, p, dtMs, now, (msg) => UI.pushFeed(msg, 'you'));
  effects.update();

  State.elapsed = now - State.startTime;
  UI.updateHUD(p, State.elapsed, Game.bots, effects.smokes, camera.rotation.y);
}

requestAnimationFrame(loop);

/* ---------------- Service worker ---------------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

goToMenu();
