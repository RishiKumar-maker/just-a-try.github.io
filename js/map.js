// ============================================================================
// map.js — compound layout (grid-based), collision helpers.
// The grid is authored in 2D (col=x, row=z) and extruded into 3D by world.js.
// Kept separate from rendering so bot AI / movement math stays cheap.
// ============================================================================

export const TILE = { FLOOR: 0, CONCRETE: 1, METAL: 2, CRATE: 3, BRICK: 4 };

// Per-type wall height (world units). Crates are deliberately short so
// players can shoot/peek over them while standing, and even more so if
// they jump — real verticality, unlike the old 2.5D raycaster.
export const WALL_HEIGHT = {
  [TILE.CONCRETE]: 2.6,
  [TILE.METAL]: 2.6,
  [TILE.BRICK]: 2.6,
  [TILE.CRATE]: 1.15,
};

export const WALL_COLOR = {
  [TILE.CONCRETE]: 0x6b6f68,
  [TILE.METAL]: 0x5a6672,
  [TILE.CRATE]: 0x8a6a3c,
  [TILE.BRICK]: 0x7a4638,
};

export const MAP_SIZE = 24;

function buildMap() {
  const g = [];
  for (let z = 0; z < MAP_SIZE; z++) g.push(new Array(MAP_SIZE).fill(TILE.FLOOR));

  const fillRect = (x1, z1, x2, z2, t) => {
    for (let z = z1; z <= z2; z++) for (let x = x1; x <= x2; x++) {
      if (x >= 0 && x < MAP_SIZE && z >= 0 && z < MAP_SIZE) g[z][x] = t;
    }
  };
  const hollowRect = (x1, z1, x2, z2, t, gaps) => {
    for (let x = x1; x <= x2; x++) { g[z1][x] = t; g[z2][x] = t; }
    for (let z = z1; z <= z2; z++) { g[z][x1] = t; g[z][x2] = t; }
    gaps.forEach(([gx, gz]) => { g[gz][gx] = TILE.FLOOR; });
  };

  // outer perimeter
  fillRect(0, 0, MAP_SIZE - 1, 0, TILE.CONCRETE);
  fillRect(0, MAP_SIZE - 1, MAP_SIZE - 1, MAP_SIZE - 1, TILE.CONCRETE);
  fillRect(0, 0, 0, MAP_SIZE - 1, TILE.CONCRETE);
  fillRect(MAP_SIZE - 1, 0, MAP_SIZE - 1, MAP_SIZE - 1, TILE.CONCRETE);

  // four CQB buildings at the quadrants, each a through-lane with an inner pillar —
  // no single dominant chokepoint anymore, and open lanes run around their outsides
  hollowRect(3, 3, 7, 7, TILE.CONCRETE, [[5, 3], [5, 7]]);
  g[5][5] = TILE.BRICK;
  hollowRect(16, 3, 20, 7, TILE.METAL, [[18, 3], [18, 7]]);
  g[5][18] = TILE.BRICK;
  hollowRect(3, 16, 7, 20, TILE.METAL, [[5, 16], [5, 20]]);
  g[18][5] = TILE.BRICK;
  hollowRect(16, 16, 20, 20, TILE.CONCRETE, [[18, 16], [18, 20]]);
  g[18][18] = TILE.BRICK;

  // open central plaza (no walls) with scattered low crate cover — a proper
  // contested mid-map area for real firefights, jumpable/peekable
  g[10][10] = TILE.CRATE; g[10][13] = TILE.CRATE;
  g[13][10] = TILE.CRATE; g[13][13] = TILE.CRATE;
  g[9][12] = TILE.CRATE; g[14][12] = TILE.CRATE;
  g[12][9] = TILE.CRATE; g[12][14] = TILE.CRATE;

  // short lane-breaking wall stubs between the buildings and the plaza
  fillRect(9, 6, 9, 7, TILE.CONCRETE);
  fillRect(14, 6, 14, 7, TILE.CONCRETE);
  fillRect(9, 16, 9, 17, TILE.CONCRETE);
  fillRect(14, 16, 14, 17, TILE.CONCRETE);

  // standalone pillars at the map's cardinal mid-edges — sightline breaks + near-spawn cover
  [[12, 3], [12, 20], [3, 12], [20, 12]].forEach(([x, z]) => { g[z][x] = TILE.BRICK; });

  return g;
}

export const MAP = buildMap();

export function tileAt(x, z) {
  const ix = Math.floor(x), iz = Math.floor(z);
  if (ix < 0 || iz < 0 || ix >= MAP_SIZE || iz >= MAP_SIZE) return TILE.CONCRETE;
  return MAP[iz][ix];
}
export function isWall(x, z) { return tileAt(x, z) !== TILE.FLOOR; }
export function wallHeightAt(x, z) {
  const t = tileAt(x, z);
  return t === TILE.FLOOR ? 0 : WALL_HEIGHT[t];
}

// Cheap grid-stepped LOS check (no raycaster/mesh dependency) — used for
// sampling many candidate cover points per frame without hammering WebGL raycasts.
export function hasLineOfSight2D(x1, z1, x2, z2) {
  const dx = x2 - x1, dz = z2 - z1;
  const dist = Math.hypot(dx, dz);
  const steps = Math.ceil(dist * 4);
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    if (isWall(x1 + dx * t, z1 + dz * t)) return false;
  }
  return true;
}

// Fallback fixed points, used only if a random floor sample can't be found
// (shouldn't normally happen — kept as a safety net).
export const SPAWN_POINTS = [
  { x: 2.5, z: 2.5 }, { x: 21.5, z: 2.5 }, { x: 2.5, z: 21.5 }, { x: 21.5, z: 21.5 },
  { x: 12, z: 2.5 }, { x: 2.5, z: 12 }, { x: 21.5, z: 12 }, { x: 12, z: 21.5 },
];

export const PICKUP_SPOTS = [
  { x: 5, z: 4, type: "health" }, { x: 19, z: 5, type: "ammo" },
  { x: 6, z: 18, type: "ammo" }, { x: 18, z: 17, type: "health" },
  { x: 12, z: 7.5, type: "smoke" }, { x: 12, z: 16.5, type: "smoke" },
  { x: 7.5, z: 12, type: "ammo" }, { x: 16.5, z: 12, type: "health" },
];

export function farthestSpawn(fromX, fromZ) {
  let best = SPAWN_POINTS[0], bestD = -1;
  for (const s of SPAWN_POINTS) {
    const d = Math.hypot(s.x - fromX, s.z - fromZ);
    if (d > bestD) { bestD = d; best = s; }
  }
  return best;
}

// TDM-style "spawn anywhere": sample random walkable floor tiles across the
// whole map rather than a fixed set of corner points, retrying until one is
// far enough from the reference point (falls back to a fixed corner if a
// suitably-far spot can't be found, which shouldn't normally happen).
export function randomSpawnAwayFrom(x, z, minDist, maxAttempts = 40) {
  for (let i = 0; i < maxAttempts; i++) {
    const rx = 1.5 + Math.random() * (MAP_SIZE - 3);
    const rz = 1.5 + Math.random() * (MAP_SIZE - 3);
    if (collides(rx, rz, 0.35)) continue;
    if (Math.hypot(rx - x, rz - z) < minDist) continue;
    return { x: rx, z: rz };
  }
  return farthestSpawn(x, z);
}

/* ---------------- Collision (XZ plane, grid-based, cheap) ---------------- */
export function collides(x, z, radius) {
  return (
    isWall(x - radius, z) || isWall(x + radius, z) ||
    isWall(x, z - radius) || isWall(x, z + radius) ||
    isWall(x - radius * 0.7, z - radius * 0.7) || isWall(x + radius * 0.7, z + radius * 0.7) ||
    isWall(x - radius * 0.7, z + radius * 0.7) || isWall(x + radius * 0.7, z - radius * 0.7)
  );
}
// axis-separated slide-collision so movement along walls feels smooth
export function tryMove(entity, nx, nz, radius) {
  if (!collides(nx, entity.z, radius)) entity.x = nx;
  if (!collides(entity.x, nz, radius)) entity.z = nz;
}

export function pickPatrolWaypoint() {
  for (let tries = 0; tries < 12; tries++) {
    const x = 2 + Math.random() * (MAP_SIZE - 4);
    const z = 2 + Math.random() * (MAP_SIZE - 4);
    if (!isWall(x, z)) return { x, z };
  }
  return { x: 12, z: 12 };
}
