// ============================================================================
// textures.js — procedurally generated tileable textures using canvas 2D.
// Keeps the game fully self-contained (no external image files) while still
// giving each wall type a distinct, slightly noisy, non-flat surface.
// If you later drop in real texture images, swap the .map on each material
// created in world.js instead of calling makeTexture() for that type.
// ============================================================================
import * as THREE from '../vendor/three.module.js';

function noiseCanvas(size, baseColor, variance, drawExtra) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, size, size);
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * variance;
    d[i] = Math.min(255, Math.max(0, d[i] + n));
    d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n));
    d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
  if (drawExtra) drawExtra(ctx, size);
  return c;
}

function toTexture(canvas, repeatX = 1, repeatY = 1) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  return tex;
}

export function makeConcreteTexture() {
  const c = noiseCanvas(128, '#6b6f68', 22, (ctx, s) => {
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      const y = (s / 4) * i + 4;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(s, y); ctx.stroke();
    }
  });
  return toTexture(c);
}
export function makeMetalTexture() {
  const c = noiseCanvas(128, '#5a6672', 14, (ctx, s) => {
    ctx.strokeStyle = 'rgba(15,18,20,0.5)';
    ctx.lineWidth = 2;
    for (let i = 1; i < 3; i++) {
      const y = (s / 3) * i;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(s, y); ctx.stroke();
    }
    // rivets
    ctx.fillStyle = 'rgba(20,22,24,0.6)';
    for (let ry = 0; ry < 3; ry++) for (let rx = 0; rx < 3; rx++) {
      ctx.beginPath();
      ctx.arc(12 + rx * (s - 24) / 2, 12 + ry * (s - 24) / 2, 2.4, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  return toTexture(c);
}
export function makeCrateTexture() {
  const c = noiseCanvas(128, '#8a6a3c', 18, (ctx, s) => {
    ctx.strokeStyle = 'rgba(50,32,14,0.55)';
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, s - 12, s - 12);
    ctx.beginPath(); ctx.moveTo(6, s / 2); ctx.lineTo(s - 6, s / 2); ctx.stroke();
    for (let i = 0; i < 5; i++) {
      const x = 10 + i * ((s - 20) / 4);
      ctx.strokeStyle = 'rgba(50,32,14,0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, 8); ctx.lineTo(x, s - 8); ctx.stroke();
    }
  });
  return toTexture(c);
}
export function makeBrickTexture() {
  const c = noiseCanvas(128, '#7a4638', 16, (ctx, s) => {
    ctx.strokeStyle = 'rgba(40,20,14,0.5)';
    ctx.lineWidth = 2;
    const rows = 6;
    for (let r = 0; r <= rows; r++) {
      const y = (s / rows) * r;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(s, y); ctx.stroke();
    }
    for (let r = 0; r < rows; r++) {
      const y = (s / rows) * r;
      const offset = (r % 2) * (s / 8);
      for (let x = offset; x < s; x += s / 4) {
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + s / rows); ctx.stroke();
      }
    }
  });
  return toTexture(c);
}
const MAP_SIZE_REPEAT = 24;
export function makeFloorTexture() {
  const c = noiseCanvas(128, '#33362f', 12, (ctx, s) => {
    ctx.strokeStyle = 'rgba(0,0,0,0.12)';
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * s, 0);
      ctx.lineTo(Math.random() * s, s);
      ctx.stroke();
    }
  });
  return toTexture(c, MAP_SIZE_REPEAT, MAP_SIZE_REPEAT);
}

export function makeSmokeSpriteTexture() {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const grad = ctx.createRadialGradient(size / 2, size / 2, size * 0.05, size / 2, size / 2, size * 0.5);
  grad.addColorStop(0, 'rgba(220,220,215,0.9)');
  grad.addColorStop(0.6, 'rgba(200,200,195,0.45)');
  grad.addColorStop(1, 'rgba(200,200,195,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
export function makeGlowSpriteTexture(hex) {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, hex);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
