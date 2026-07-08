import * as THREE from '../vendor/three.module.js';
import { PICKUP_SPOTS } from './map.js';
import { WEAPONS, WEAPON_ORDER } from './weapons.js';

const COLOR = { health: 0x6fbf3f, ammo: 0xe0a233, smoke: 0xb7bdb2 };
const RESPAWN_MS = 15000;

function buildPickupMesh(type) {
  let geo;
  if (type === "health") geo = new THREE.OctahedronGeometry(0.22, 0);
  else if (type === "ammo") geo = new THREE.BoxGeometry(0.3, 0.22, 0.18);
  else geo = new THREE.CylinderGeometry(0.14, 0.14, 0.3, 10);
  const mat = new THREE.MeshLambertMaterial({ color: COLOR[type], emissive: COLOR[type], emissiveIntensity: 0.25 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = 0.9;
  return mesh;
}

export function createPickups(scene) {
  return PICKUP_SPOTS.map(p => {
    const mesh = buildPickupMesh(p.type);
    mesh.position.x = p.x; mesh.position.z = p.z;
    scene.add(mesh);
    return { ...p, active: true, respawnAt: 0, bob: Math.random() * Math.PI * 2, mesh };
  });
}

export function resetPickups(pickups) {
  const now = performance.now();
  for (const pk of pickups) { pk.active = true; pk.mesh.visible = true; pk.respawnAt = now; }
}

export function updatePickups(pickups, player, dtMs, now, onCollect) {
  for (const pk of pickups) {
    if (!pk.active) {
      if (now >= pk.respawnAt) { pk.active = true; pk.mesh.visible = true; }
      continue;
    }
    pk.bob += dtMs * 0.0022;
    pk.mesh.position.y = 0.85 + Math.sin(pk.bob) * 0.08;
    pk.mesh.rotation.y += dtMs * 0.0012;
    if (!player.alive) continue;
    const d = Math.hypot(player.x - pk.x, player.z - pk.z);
    if (d < 0.6) {
      if (pk.type === "health") { player.health = Math.min(player.maxHealth, player.health + 50); onCollect("+50 HEALTH"); }
      else if (pk.type === "ammo") {
        for (const key of WEAPON_ORDER) {
          const lo = player.loadout[key], w = WEAPONS[key];
          lo.reserve = Math.min(w.reserveMax, lo.reserve + Math.floor(w.reserveMax * 0.4));
        }
        onCollect("AMMO RESUPPLIED");
      } else if (pk.type === "smoke") { player.smoke = Math.min(5, player.smoke + 2); onCollect("+2 SMOKE"); }
      pk.active = false; pk.mesh.visible = false; pk.respawnAt = now + RESPAWN_MS;
    }
  }
}
