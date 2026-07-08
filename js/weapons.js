// ============================================================================
// weapons.js — weapon balance stats + procedural low-poly viewmodels.
// Viewmodels are simple primitive groups so the game works great with zero
// downloads. If you later provide a rigged glTF gun model, load it with
// GLTFLoader in main.js and swap it into viewRig.weapons[key] in place of
// the group returned here — the recoil/bob code in player.js doesn't care
// what's inside the group.
// ============================================================================
import * as THREE from '../vendor/three.module.js';

export const WEAPONS = {
  rifle: {
    name: "ASSAULT RIFLE", auto: true, damage: 20, fireRate: 120,
    mag: 30, reserveMax: 150, reloadTime: 1500, spread: 0.018, moveSpreadMul: 1.8,
    pellets: 1, falloff: false, color: 0x3a4a3a,
  },
  smg: {
    name: "SMG", auto: true, damage: 13, fireRate: 75,
    mag: 35, reserveMax: 175, reloadTime: 1300, spread: 0.032, moveSpreadMul: 1.4,
    pellets: 1, falloff: false, color: 0x45443f,
  },
  shotgun: {
    name: "SHOTGUN", auto: false, damage: 16, fireRate: 700,
    mag: 6, reserveMax: 30, reloadTime: 2000, spread: 0.11, moveSpreadMul: 1.3,
    pellets: 8, falloff: true, falloffRange: 8, color: 0x4a3a2a,
  },
  sniper: {
    name: "SNIPER", auto: false, damage: 100, fireRate: 1150,
    mag: 5, reserveMax: 25, reloadTime: 1900, spread: 0.004, moveSpreadMul: 4,
    scopeSpread: 0.0003, pellets: 1, falloff: false, color: 0x2e332e,
  },
};
export const WEAPON_ORDER = ["rifle", "smg", "shotgun", "sniper"];

// Hit-zone damage multipliers — applied on top of a weapon's base damage
// depending on which body part mesh a shot's raycast actually intersects.
export const HITZONE_MULT = { head: 2.2, body: 1.0, limb: 0.68 };

function box(w, h, d, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshLambertMaterial({ color })
  );
  m.position.set(x, y, z);
  return m;
}
function cyl(r, h, color, x, y, z, rotX = Math.PI / 2) {
  const m = new THREE.Mesh(
    new THREE.CylinderGeometry(r, r, h, 8),
    new THREE.MeshLambertMaterial({ color })
  );
  m.position.set(x, y, z);
  m.rotation.x = rotX;
  return m;
}

function buildRifle() {
  const g = new THREE.Group();
  g.add(box(0.07, 0.09, 0.55, 0x3a4a3a, 0, 0, -0.1));
  g.add(cyl(0.018, 0.35, 0x1c1e1a, 0, 0.01, -0.5));
  g.add(box(0.06, 0.16, 0.09, 0x2c332a, 0, -0.11, 0.12));
  g.add(box(0.05, 0.07, 0.18, 0x232823, 0.005, -0.02, 0.28));
  g.userData.muzzleZ = -0.68;
  return g;
}
function buildSMG() {
  const g = new THREE.Group();
  g.add(box(0.065, 0.08, 0.34, 0x45443f, 0, 0, -0.02));
  g.add(cyl(0.016, 0.2, 0x1c1e1a, 0, 0.005, -0.32));
  g.add(box(0.05, 0.14, 0.07, 0x36352f, 0, -0.1, 0.1));
  g.add(box(0.045, 0.16, 0.05, 0x2b2a26, 0, -0.14, -0.14));
  g.userData.muzzleZ = -0.42;
  return g;
}
function buildShotgun() {
  const g = new THREE.Group();
  g.add(box(0.075, 0.08, 0.5, 0x4a3a2a, 0, 0, -0.05));
  g.add(cyl(0.026, 0.4, 0x24201a, 0, -0.01, -0.42));
  g.add(box(0.06, 0.05, 0.28, 0x2f261c, 0, -0.06, -0.3));
  g.add(box(0.065, 0.17, 0.1, 0x352c22, 0, -0.12, 0.15));
  g.userData.muzzleZ = -0.62;
  return g;
}
function buildSniper() {
  const g = new THREE.Group();
  g.add(box(0.06, 0.075, 0.72, 0x2e332e, 0, 0, -0.15));
  g.add(cyl(0.015, 0.42, 0x17191a, 0, 0.005, -0.65));
  g.add(box(0.045, 0.045, 0.32, 0x1d201d, 0, 0.075, -0.2));
  g.add(box(0.055, 0.15, 0.09, 0x22261f, 0, -0.11, 0.18));
  g.userData.muzzleZ = -0.85;
  return g;
}

const BUILDERS = { rifle: buildRifle, smg: buildSMG, shotgun: buildShotgun, sniper: buildSniper };

// Builds the whole first-person weapon rig: one group per weapon, all parked
// under a single root so switching weapons is just a visibility toggle.
export function buildViewmodelRig() {
  const root = new THREE.Group();
  root.position.set(0.22, -0.2, -0.42);
  const weapons = {};
  for (const key of WEAPON_ORDER) {
    const g = BUILDERS[key]();
    g.visible = false;
    root.add(g);
    weapons[key] = g;
  }
  return { root, weapons };
}

export function buildMuzzleFlashSprite(glowTexture) {
  const mat = new THREE.SpriteMaterial({
    map: glowTexture, color: 0xffd28a, transparent: true,
    blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.22, 0.22, 0.22);
  return sprite;
}
