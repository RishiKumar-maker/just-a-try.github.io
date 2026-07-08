// ============================================================================
// audio.js — every sound is synthesized at runtime (noise bursts + tone
// beeps), so there are no audio files to fetch, license, or cache.
// ============================================================================

let actx = null;
let noiseBuffer = null;

export function ensureAudio() {
  if (actx) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  actx = new Ctx();
  const len = actx.sampleRate * 0.5;
  noiseBuffer = actx.createBuffer(1, len, actx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
}

function noiseBurst({ duration = 0.08, freq = 1200, q = 0.8, gain = 0.35, type = "bandpass" }) {
  if (!actx) return;
  const src = actx.createBufferSource();
  src.buffer = noiseBuffer;
  const filter = actx.createBiquadFilter();
  filter.type = type; filter.frequency.value = freq; filter.Q.value = q;
  const g = actx.createGain();
  g.gain.setValueAtTime(gain, actx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
  src.connect(filter); filter.connect(g); g.connect(actx.destination);
  src.start(); src.stop(actx.currentTime + duration + 0.02);
}
function toneBeep({ freq = 900, freq2 = null, duration = 0.06, gain = 0.2, type = "sine" }) {
  if (!actx) return;
  const osc = actx.createOscillator();
  osc.type = type; osc.frequency.setValueAtTime(freq, actx.currentTime);
  if (freq2) osc.frequency.exponentialRampToValueAtTime(freq2, actx.currentTime + duration);
  const g = actx.createGain();
  g.gain.setValueAtTime(gain, actx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
  osc.connect(g); g.connect(actx.destination);
  osc.start(); osc.stop(actx.currentTime + duration + 0.02);
}

export function play(kind, distant) {
  if (!actx) return;
  const dGain = distant ? 0.4 : 1;
  const dFreqMul = distant ? 0.6 : 1;
  switch (kind) {
    case "rifle": noiseBurst({ duration: 0.09, freq: 1400 * dFreqMul, gain: 0.32 * dGain }); break;
    case "smg": noiseBurst({ duration: 0.06, freq: 1700 * dFreqMul, gain: 0.26 * dGain }); break;
    case "shotgun":
      noiseBurst({ duration: 0.18, freq: 500 * dFreqMul, q: 0.5, gain: 0.4 * dGain });
      toneBeep({ freq: 90, duration: 0.15, gain: 0.25 * dGain, type: "sine" });
      break;
    case "sniper":
      noiseBurst({ duration: 0.05, freq: 2600 * dFreqMul, q: 1.2, gain: 0.4 * dGain, type: "highpass" });
      toneBeep({ freq: 140, duration: 0.28, gain: 0.3 * dGain, type: "sine" });
      break;
    case "hitmarker": toneBeep({ freq: 1900, duration: 0.045, gain: 0.22 }); break;
    case "kill": toneBeep({ freq: 900, freq2: 1500, duration: 0.14, gain: 0.25 }); break;
    case "reload":
      toneBeep({ freq: 260, duration: 0.04, gain: 0.18, type: "square" });
      setTimeout(() => toneBeep({ freq: 320, duration: 0.05, gain: 0.16, type: "square" }), 160);
      break;
    case "throw": noiseBurst({ duration: 0.2, freq: 800, q: 0.4, gain: 0.12, type: "lowpass" }); break;
    case "pickup": toneBeep({ freq: 700, freq2: 1050, duration: 0.12, gain: 0.2 }); break;
    case "jump": toneBeep({ freq: 220, freq2: 340, duration: 0.09, gain: 0.12 }); break;
    case "land": toneBeep({ freq: 160, duration: 0.07, gain: 0.16, type: "triangle" }); break;
  }
}
