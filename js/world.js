// ============================================================================
// world.js — scene, camera, renderer, lighting, and the 3D level geometry
// built from map.js's grid. Uses one InstancedMesh per wall type so a ~250
// wall-tile compound costs only 4 draw calls — this is what keeps a real
// WebGL 3D scene light enough for low-spec Chromebook GPUs.
// ============================================================================
import * as THREE from '../vendor/three.module.js';
import { MAP, MAP_SIZE, TILE, WALL_HEIGHT } from './map.js';
import * as TEX from './textures.js';

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: false, powerPreference: 'high-performance', alpha: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = false; // real-time shadows are the single biggest cost on weak GPUs
  return renderer;
}

export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d1210);
  scene.fog = new THREE.Fog(0x0d1210, 6, 21);
  return scene;
}

export function createCamera(aspect) {
  const cam = new THREE.PerspectiveCamera(75, aspect, 0.05, 40);
  cam.rotation.order = 'YXZ'; // yaw then pitch — standard FPS camera order
  return cam;
}

export function addLights(scene) {
  const hemi = new THREE.HemisphereLight(0x8fa8b0, 0x1a1712, 1.15);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d8, 1.3);
  sun.position.set(8, 14, 5);
  sun.castShadow = false;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x8090a0, 0.4);
  fill.position.set(-6, 8, -8);
  scene.add(fill);
}

const wallGeomCache = {};
function geomFor(type) {
  if (!wallGeomCache[type]) {
    wallGeomCache[type] = new THREE.BoxGeometry(1, WALL_HEIGHT[type], 1);
  }
  return wallGeomCache[type];
}
function textureFor(type) {
  switch (type) {
    case TILE.CONCRETE: return TEX.makeConcreteTexture();
    case TILE.METAL: return TEX.makeMetalTexture();
    case TILE.CRATE: return TEX.makeCrateTexture();
    case TILE.BRICK: return TEX.makeBrickTexture();
    default: return null;
  }
}

export function buildLevel(scene) {
  const counts = {};
  for (let z = 0; z < MAP_SIZE; z++) for (let x = 0; x < MAP_SIZE; x++) {
    const t = MAP[z][x];
    if (t === TILE.FLOOR) continue;
    counts[t] = (counts[t] || 0) + 1;
  }

  const wallMeshes = [];
  const dummy = new THREE.Object3D();

  for (const typeStr of Object.keys(counts)) {
    const type = Number(typeStr);
    const count = counts[type];
    const mat = new THREE.MeshLambertMaterial({ map: textureFor(type), color: 0xffffff });
    const mesh = new THREE.InstancedMesh(geomFor(type), mat, count);
    mesh.userData.isWall = true;
    let i = 0;
    for (let z = 0; z < MAP_SIZE; z++) {
      for (let x = 0; x < MAP_SIZE; x++) {
        if (MAP[z][x] !== type) continue;
        dummy.position.set(x + 0.5, WALL_HEIGHT[type] / 2, z + 0.5);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        i++;
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    scene.add(mesh);
    wallMeshes.push(mesh);
  }

  // floor
  const floorMat = new THREE.MeshLambertMaterial({ map: TEX.makeFloorTexture(), color: 0xffffff });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(MAP_SIZE, MAP_SIZE), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(MAP_SIZE / 2, 0, MAP_SIZE / 2);
  scene.add(floor);

  // ceiling only over the enclosed central building (interior spans tiles 10..13 -> world 10..14)
  const ceilMat = new THREE.MeshLambertMaterial({ color: 0x1c2420, side: THREE.DoubleSide });
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), ceilMat);
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(12, WALL_HEIGHT[TILE.METAL], 12);
  scene.add(ceil);

  return { wallMeshes, floor };
}

export function handleResize(renderer, camera) {
  function onResize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', onResize);
  onResize();
}
