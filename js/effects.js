// ============================================================================
// effects.js — tracers, impact sparks/blood, and smoke clouds as real 3D
// objects in the scene (billboarded sprites face the camera automatically).
// Smoke clouds carry a gameplay `radius` used by bots.js to block line-of-sight,
// independent of however big the visual sprites are drawn.
// ============================================================================
import * as THREE from '../vendor/three.module.js';
import { makeSmokeSpriteTexture, makeGlowSpriteTexture } from './textures.js';

export const SMOKE_RADIUS = 2.2;
export const SMOKE_LIFETIME = 9000;
export const SMOKE_POP_DELAY = 260;

export function createEffectsManager(scene) {
  const sparkTex = makeGlowSpriteTexture('rgba(255,200,90,1)');
  const bloodTex = makeGlowSpriteTexture('rgba(200,40,30,1)');
  const smokeTex = makeSmokeSpriteTexture();

  const tracers = [];   // {mesh, t0, t1}
  const impacts = [];   // {sprite, t0, t1, baseScale}
  const smokes = [];    // {x,z,active,popAt,createdAt,radius,sprites:[{sprite,offX,offZ,offY,rot}]}
  const grenades = [];  // {mesh, x0,z0, x1,z1, t0,t1}

  function spawnTracer(fromVec3, toVec3, enemy) {
    const dir = toVec3.clone().sub(fromVec3);
    const len = dir.length();
    if (len < 0.01) return;
    dir.normalize();
    const mid = fromVec3.clone().addScaledVector(dir, len / 2);
    const geo = new THREE.CylinderGeometry(0.007, 0.007, len, 4, 1, true);
    const mat = new THREE.MeshBasicMaterial({
      color: enemy ? 0xe2432c : 0xffe196, transparent: true, opacity: 0.85,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(mid);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    scene.add(mesh);
    tracers.push({ mesh, t0: performance.now(), t1: performance.now() + 90 });
  }

  function spawnImpact(point, isBot, isPlayerHit) {
    const tex = isBot || isPlayerHit ? bloodTex : sparkTex;
    const mat = new THREE.SpriteMaterial({
      map: tex, transparent: true, depthWrite: false,
      blending: isBot || isPlayerHit ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.position.copy(point);
    const scale = isBot || isPlayerHit ? 0.35 : 0.22;
    sprite.scale.set(scale, scale, scale);
    scene.add(sprite);
    impacts.push({ sprite, t0: performance.now(), t1: performance.now() + (isBot || isPlayerHit ? 320 : 220), baseScale: scale });
  }

  function spawnGrenadeArc(x0, z0, x1, z1) {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 6, 6),
      new THREE.MeshLambertMaterial({ color: 0x3a3a34 })
    );
    mesh.position.set(x0, 1.2, z0);
    scene.add(mesh);
    grenades.push({ mesh, x0, z0, x1, z1, t0: performance.now(), t1: performance.now() + SMOKE_POP_DELAY });
  }

  function spawnSmokeCloud(x, z) {
    const group = new THREE.Group();
    const sprites = [];
    for (let i = 0; i < 4; i++) {
      const mat = new THREE.SpriteMaterial({ map: smokeTex, transparent: true, opacity: 0, depthWrite: false });
      const sprite = new THREE.Sprite(mat);
      const offX = (Math.random() - 0.5) * 1.4;
      const offZ = (Math.random() - 0.5) * 1.4;
      const offY = 0.4 + Math.random() * 0.8;
      const s = 1.6 + Math.random() * 0.8;
      sprite.position.set(offX, offY, offZ);
      sprite.scale.set(s, s, s);
      group.add(sprite);
      sprites.push(sprite);
    }
    group.position.set(x, 0, z);
    scene.add(group);
    const now = performance.now();
    const cloud = { x, z, active: false, popAt: now + SMOKE_POP_DELAY, createdAt: 0, radius: SMOKE_RADIUS, group, sprites };
    smokes.push(cloud);
    return cloud;
  }

  function update() {
    const now = performance.now();

    for (let i = tracers.length - 1; i >= 0; i--) {
      const t = tracers[i];
      const life = 1 - (now - t.t0) / (t.t1 - t.t0);
      if (life <= 0) { scene.remove(t.mesh); t.mesh.geometry.dispose(); t.mesh.material.dispose(); tracers.splice(i, 1); continue; }
      t.mesh.material.opacity = 0.85 * life;
    }

    for (let i = impacts.length - 1; i >= 0; i--) {
      const p = impacts[i];
      const life = 1 - (now - p.t0) / (p.t1 - p.t0);
      if (life <= 0) { scene.remove(p.sprite); p.sprite.material.dispose(); impacts.splice(i, 1); continue; }
      p.sprite.material.opacity = life;
      const s = p.baseScale * (1 + (1 - life) * 0.8);
      p.sprite.scale.set(s, s, s);
    }

    for (let i = grenades.length - 1; i >= 0; i--) {
      const g = grenades[i];
      const t = Math.min(1, (now - g.t0) / (g.t1 - g.t0));
      g.mesh.position.x = g.x0 + (g.x1 - g.x0) * t;
      g.mesh.position.z = g.z0 + (g.z1 - g.z0) * t;
      g.mesh.position.y = 1.2 - Math.abs(t - 0.5) * 1.8 + 0.3; // gentle arc
      if (t >= 1) {
        scene.remove(g.mesh); g.mesh.geometry.dispose(); g.mesh.material.dispose();
        grenades.splice(i, 1);
        spawnSmokeCloud(g.x1, g.z1);
      }
    }

    for (let i = smokes.length - 1; i >= 0; i--) {
      const s = smokes[i];
      if (!s.active && now >= s.popAt) { s.active = true; s.createdAt = now; }
      if (s.active) {
        const age = now - s.createdAt;
        const fadeIn = Math.min(1, age / 400);
        const fadeOut = 1 - Math.max(0, (age - (SMOKE_LIFETIME - 800)) / 800);
        const op = Math.max(0, Math.min(fadeIn, fadeOut)) * 0.8;
        s.sprites.forEach((sp, idx) => { sp.material.opacity = op; sp.rotation.z += 0.0002 * (idx % 2 ? 1 : -1); });
        if (age > SMOKE_LIFETIME) {
          scene.remove(s.group);
          s.sprites.forEach(sp => sp.material.dispose());
          smokes.splice(i, 1);
        }
      }
    }
  }

  function clearAll() {
    for (const t of tracers) { scene.remove(t.mesh); t.mesh.geometry.dispose(); t.mesh.material.dispose(); }
    tracers.length = 0;
    for (const p of impacts) { scene.remove(p.sprite); p.sprite.material.dispose(); }
    impacts.length = 0;
    for (const g of grenades) { scene.remove(g.mesh); g.mesh.geometry.dispose(); g.mesh.material.dispose(); }
    grenades.length = 0;
    for (const s of smokes) { scene.remove(s.group); s.sprites.forEach(sp => sp.material.dispose()); }
    smokes.length = 0;
  }

  return { spawnTracer, spawnImpact, spawnGrenadeArc, update, smokes, clearAll };
}
