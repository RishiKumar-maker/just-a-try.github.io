import * as THREE from '../vendor/three.module.js';

const _axis = new THREE.Vector3();
// Perturbs a normalized direction by a small random cone angle (radians).
// Used for weapon spread and bot aim inaccuracy — cheap approximate cone jitter.
export function jitterDirection(dir, spread) {
  if (spread <= 0) return dir.clone();
  _axis.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
  const angle = (Math.random() - 0.5) * 2 * spread;
  return dir.clone().applyAxisAngle(_axis, angle).normalize();
}

export function fmtTime(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

export function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
export function lerp(a, b, t) { return a + (b - a) * t; }
