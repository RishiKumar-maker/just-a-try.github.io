import { MAP, MAP_SIZE, TILE } from './map.js';
import { WEAPONS } from './weapons.js';
import { fmtTime } from './util.js';

const el = (id) => document.getElementById(id);
const dom = {
  health: el("healthBar"), healthVal: el("healthValue"),
  ammoMag: el("ammoMag"), ammoReserve: el("ammoReserve"), weaponName: el("weaponName"),
  smokeCount: el("smokeCount"), statKills: el("statKills"), statDeaths: el("statDeaths"),
  timer: el("matchTimer"), diffBadge: el("diffbadge"), killfeed: el("killfeed"),
  hitmarker: el("hitmarker"), vignette: el("vignette-damage"), smokeOverlay: el("smoke-overlay"),
  reloadInd: el("reload-indicator"), deathscreen: el("deathscreen"), respawnCd: el("respawnCountdown"),
  spawnProtected: el("spawnProtected"),
  scoreboard: el("scoreboard"), scoreboardBody: el("scoreboardBody"), crosshair: el("crosshair"),
  scopeMask: el("scope-mask"),
  minimap: el("minimap"),
};
const miniCtx = dom.minimap.getContext("2d");

let killfeed = [];
let hitMarkerT = 0;
let hitMarkerHeadshot = false;

export function pushFeed(text, cls) {
  killfeed.push({ text, cls: cls || "", t: performance.now() });
  if (killfeed.length > 6) killfeed.shift();
}
export function showHitMarker(isHeadshot) { hitMarkerT = performance.now() + 180; hitMarkerHeadshot = !!isHeadshot; }
export function flashDamage() {
  dom.vignette.classList.remove("hit"); void dom.vignette.offsetWidth; dom.vignette.classList.add("hit");
}
export function showDeathScreen(show) { dom.deathscreen.classList.toggle("hidden", !show); }
export function updateRespawnCountdown(msLeft) {
  dom.respawnCd.textContent = "RESPAWNING IN " + Math.max(0, Math.ceil(msLeft / 1000));
}
export function showScoreboard(show, player, bots) {
  if (show) renderScoreboard(player, bots);
  dom.scoreboard.classList.toggle("hidden", !show);
}
function renderScoreboard(player, bots) {
  const rows = [{ name: "YOU", k: player.kills, d: player.deaths, you: true }]
    .concat(bots.map(b => ({ name: b.name, k: b.kills, d: b.deaths })));
  rows.sort((a, b) => b.k - a.k);
  dom.scoreboardBody.innerHTML = rows.map(r =>
    `<tr${r.you ? ' style="color:#ff6b1a"' : ""}><td>${r.name}</td><td>${r.k}</td><td>${r.d}</td></tr>`
  ).join("");
}

function resizeMinimap() {
  const rect = dom.minimap.getBoundingClientRect();
  const size = Math.round(rect.width) || 150;
  dom.minimap.width = size; dom.minimap.height = size;
}
window.addEventListener("resize", resizeMinimap);
resizeMinimap();

function renderMinimap(player, bots, yaw) {
  const size = dom.minimap.width;
  const scale = size / MAP_SIZE;
  miniCtx.clearRect(0, 0, size, size);
  for (let z = 0; z < MAP_SIZE; z++) {
    for (let x = 0; x < MAP_SIZE; x++) {
      if (MAP[z][x] !== TILE.FLOOR) {
        miniCtx.fillStyle = MAP[z][x] === TILE.CRATE ? "rgba(224,162,51,0.55)" : "rgba(180,190,175,0.55)";
        miniCtx.fillRect(x * scale, z * scale, scale, scale);
      }
    }
  }
  for (const bot of bots) {
    if (!bot.alive) continue;
    miniCtx.fillStyle = "#e2432c";
    miniCtx.beginPath(); miniCtx.arc(bot.x * scale, bot.z * scale, 3, 0, Math.PI * 2); miniCtx.fill();
  }
  miniCtx.save();
  miniCtx.translate(player.x * scale, player.z * scale);
  miniCtx.rotate(-(yaw || 0));
  miniCtx.fillStyle = "#6fbf3f";
  miniCtx.beginPath();
  miniCtx.moveTo(0, -6); miniCtx.lineTo(4, 4); miniCtx.lineTo(-4, 4);
  miniCtx.closePath(); miniCtx.fill();
  miniCtx.restore();
}

export function isPointInSmoke(x, z, smokes) {
  return smokes.some(s => s.active && Math.hypot(x - s.x, z - s.z) < s.radius);
}

export function updateHUD(player, elapsedMs, bots, smokes, yaw) {
  const w = WEAPONS[player.weapon];
  const lo = player.loadout[player.weapon];
  const pct = Math.max(0, player.health / player.maxHealth) * 100;
  dom.health.style.width = pct + "%";
  dom.healthVal.textContent = Math.ceil(Math.max(0, player.health));
  dom.ammoMag.textContent = player.reloading ? "--" : lo.mag;
  dom.ammoReserve.textContent = lo.reserve;
  dom.weaponName.textContent = w.name;
  dom.smokeCount.textContent = "SMOKE x" + player.smoke;
  dom.statKills.textContent = player.kills;
  dom.statDeaths.textContent = player.deaths;
  dom.timer.textContent = fmtTime(elapsedMs);
  dom.reloadInd.classList.toggle("hidden", !player.reloading);

  const now = performance.now();
  dom.spawnProtected.classList.toggle("hidden", now >= player.spawnProtectedUntil);
  dom.hitmarker.classList.toggle("show", now < hitMarkerT);
  dom.hitmarker.classList.toggle("headshot", now < hitMarkerT && hitMarkerHeadshot);

  const inSmoke = isPointInSmoke(player.x, player.z, smokes);
  dom.smokeOverlay.style.background = inSmoke ? "rgba(200,200,195,0.35)" : "rgba(200,200,195,0)";

  dom.scopeMask.classList.toggle("hidden", !player.scoped);

  const scale = 1 + (player.moving ? (player.sprinting ? 0.35 : 0.18) : 0);
  dom.crosshair.style.transform = `translate(-50%,-50%) scale(${player.scoped ? 0 : scale})`;

  dom.killfeed.innerHTML = killfeed.map(f => {
    const age = now - f.t;
    const cls = "feed-msg " + f.cls + (age > 3200 ? " fade" : "");
    return `<div class="${cls}">${f.text}</div>`;
  }).join("");

  if (!dom.scoreboard.classList.contains("hidden")) renderScoreboard(player, bots);
  renderMinimap(player, bots, yaw);
}
