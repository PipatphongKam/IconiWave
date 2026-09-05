// Initialize Lucide Icons
lucide.createIcons();

// ==========================================
// 0. THEMES PALETTE CONFIGURATION & CONTROLLER
// ==========================================
const THEMES = [
  {
    id: 'terracotta',
    name: 'Terracotta Orange',
    primary: '#943A1F',
    light: '#d9532d',
    glow: '#D15834',
    dark: '#742C15',
    rgb: '148, 58, 31',
    glowRgb: '209, 88, 52'
  },
  {
    id: 'crimson',
    name: 'Crimson Red',
    primary: '#8b1e1e',
    light: '#c92a2a',
    glow: '#e03131',
    dark: '#661414',
    rgb: '139, 30, 30',
    glowRgb: '224, 49, 49'
  },
  {
    id: 'violet',
    name: 'Deep Violet',
    primary: '#6b359c',
    light: '#9c51e0',
    glow: '#b16cf5',
    dark: '#4e2373',
    rgb: '107, 53, 156',
    glowRgb: '177, 108, 245'
  },
  {
    id: 'amber',
    name: 'Amber Gold',
    primary: '#a17016',
    light: '#d49826',
    glow: '#f0ad35',
    dark: '#7a520d',
    rgb: '161, 112, 22',
    glowRgb: '240, 173, 53'
  },
  {
    id: 'emerald',
    name: 'Emerald Sage',
    primary: '#23694a',
    light: '#349469',
    glow: '#43ba84',
    dark: '#164731',
    rgb: '35, 105, 74',
    glowRgb: '67, 186, 132'
  },
  {
    id: 'cobalt',
    name: 'Cobalt Blue',
    primary: '#1e4b8b',
    light: '#2f6fd1',
    glow: '#488cf2',
    dark: '#143563',
    rgb: '30, 75, 139',
    glowRgb: '72, 140, 242'
  }
];

let currentTheme = THEMES[0];

function applyTheme(themeId) {
  const found = THEMES.find(t => t.id === themeId);
  if (!found) return;
  currentTheme = found;

  const root = document.documentElement;
  root.style.setProperty('--accent-primary', currentTheme.primary);
  root.style.setProperty('--accent-light', currentTheme.light);
  root.style.setProperty('--accent-glow', currentTheme.glow);
  root.style.setProperty('--accent-dark', currentTheme.dark);
  root.style.setProperty('--accent-rgb', currentTheme.rgb);
  root.style.setProperty('--accent-glow-rgb', currentTheme.glowRgb);

  // Update Big Circle & Spheres with Enhanced Neon Glow
  const bigCircle = document.getElementById('bigCircle');
  if (bigCircle) {
    bigCircle.style.background = `linear-gradient(135deg, ${currentTheme.light}, ${currentTheme.primary}, ${currentTheme.dark})`;
    bigCircle.style.boxShadow = `0 0 50px rgba(${currentTheme.glowRgb}, 0.65), 0 0 140px rgba(${currentTheme.rgb}, 0.55)`;
  }

  const smallSphere = document.getElementById('smallSphere');
  if (smallSphere) {
    smallSphere.style.background = `linear-gradient(to top, ${currentTheme.dark}, ${currentTheme.primary})`;
    smallSphere.style.boxShadow = `0 0 25px rgba(${currentTheme.glowRgb}, 0.85), 0 10px 40px rgba(${currentTheme.rgb}, 0.65)`;
  }

  // Update Duotone Overlay
  const duotoneOverlay = document.getElementById('duotoneOverlay');
  if (duotoneOverlay) {
    duotoneOverlay.style.backgroundColor = `rgba(${currentTheme.rgb}, 0.2)`;
  }

  // Update Ambient Background Glows
  const heroGlow = document.getElementById('ambientHeroGlow');
  if (heroGlow) {
    heroGlow.style.background = `radial-gradient(circle, rgba(${currentTheme.rgb}, 0.45) 0%, rgba(${currentTheme.glowRgb}, 0.30) 45%, transparent 70%)`;
  }
  const leftGlow = document.getElementById('ambientLeftGlow');
  if (leftGlow) {
    leftGlow.style.background = `radial-gradient(circle, rgba(${currentTheme.rgb}, 0.28) 0%, transparent 70%)`;
  }
  const bottomGlow = document.getElementById('ambientBottomGlow');
  if (bottomGlow) {
    bottomGlow.style.background = `radial-gradient(circle, rgba(${currentTheme.rgb}, 0.35) 0%, transparent 70%)`;
  }
  const centerGlow = document.getElementById('ambientCenterGlow');
  if (centerGlow) {
    centerGlow.style.backgroundColor = `rgba(${currentTheme.rgb}, 0.12)`;
  }

  // Update Canvas Glow reflection box
  const canvasGlow = document.getElementById('canvasGlowReflection');
  if (canvasGlow) {
    canvasGlow.style.backgroundColor = `rgba(${currentTheme.glowRgb}, 0.35)`;
  }

  // Update Progress Bar Thumb glow
  const thumb = document.getElementById('progressBarThumb');
  if (thumb) {
    thumb.style.borderColor = currentTheme.primary;
    thumb.style.boxShadow = `0 0 18px rgba(${currentTheme.glowRgb}, 1), 0 0 6px rgba(255, 255, 255, 0.9)`;
  }

  // Update Theme Picker Active Rings
  document.querySelectorAll('.theme-dot-btn').forEach(btn => {
    if (btn.dataset.themeId === currentTheme.id) {
      btn.classList.add('ring-2', 'ring-white', 'scale-125');
      btn.classList.remove('opacity-80');
    } else {
      btn.classList.remove('ring-2', 'ring-white', 'scale-125');
      btn.classList.add('opacity-80');
    }
  });
}

function initThemePicker() {
  const container = document.getElementById('themePickerContainer');
  if (!container) return;
  container.innerHTML = '';

  THEMES.forEach(t => {
    const btn = document.createElement('button');
    btn.dataset.themeId = t.id;
    btn.title = t.name;
    btn.className = `theme-dot-btn w-3.5 h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-200 hover:scale-130 cursor-pointer relative ${t.id === currentTheme.id ? 'ring-2 ring-white scale-125' : 'opacity-80 hover:opacity-100'}`;
    btn.style.backgroundColor = t.primary;
    btn.style.boxShadow = `0 0 6px rgba(${t.rgb}, 0.6)`;
    btn.addEventListener('click', () => applyTheme(t.id));
    container.appendChild(btn);
  });
}
initThemePicker();

// ==========================================
// 1. STATE & PRESETS
// ==========================================
const TRACK_PRESETS = [
  {
    id: '01',
    title: 'DESIGN',
    category: 'OUR VERSION • EXPERIENCE 01',
    artist: 'IconiWave Sound Lab',
    description: 'Our audio engine crafts a modern and soothing resonance, creating the key to deep immersion, ambient mindfulness, and emotional focus.',
    artwork: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    synthScale: [220, 261.63, 329.63, 392.00, 440.00, 523.25], // A minor pentatonic / ambient
    bpm: 65,
    chordRoot: 'Am9'
  },
  {
    id: '02',
    title: 'NEPTUNE',
    category: 'ATMOSPHERE • EXPERIENCE 02',
    artist: 'Solaris Synthetics',
    description: 'Sub-aquatic bass textures intertwined with celestial overtone pads, invoking the vast solitude of deep blue planetary oceans.',
    artwork: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    synthScale: [174.61, 220.00, 261.63, 349.23, 392.00, 523.25], // Fmaj7 / Lydian
    bpm: 54,
    chordRoot: 'Fmaj7#11'
  },
  {
    id: '03',
    title: 'ETHEREAL',
    category: 'HARMONICS • EXPERIENCE 03',
    artist: 'Chrono Sculptor',
    description: 'Warm analog warmth and gentle vintage tape flutter, radiating tranquil waves of harmonic meditation and timeless elegance.',
    artwork: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=900&q=80',
    synthScale: [196.00, 246.94, 293.66, 392.00, 493.88, 587.33], // G major 9
    bpm: 72,
    chordRoot: 'Gmaj9'
  },
  {
    id: '04',
    title: 'ROSA VELVET',
    category: 'ROMANTIC NOCTURNE • OPUS 1902',
    artist: 'AudiWave Orchestral Waltz',
    description: 'A delicate 3/4 vintage waltz featuring warm acoustic upright bass, antique felt piano, celesta music box, and subtle vinyl dust.',
    artwork: 'assets/skin_vintage_rose.jpg',
    synthScale: [261.63, 329.63, 392.00, 493.88, 523.25, 659.25], // Cmaj7 / romantic waltz
    bpm: 84,
    chordRoot: 'Cmaj7'
  }
];

let currentTrackIndex = 0;
let isPlaying = false;
let isCustomAudio = false;
let isLofiEnabled = false;
let visualizerModeIndex = 0; // 0: Smooth Wave, 1: Minimal Bars, 2: Pulse Ribbon
const VISUALIZER_MODES = ['Smooth Wave', 'Minimal Bars', 'Pulse Ribbon'];

// Active Skin State: 'classic' | 'cdDeck'
let activeSkin = 'classic';

// ==========================================
// 2. WEB AUDIO API & GENERATIVE ENGINE
// ==========================================
let audioCtx = null;
let analyserNode = null;
let masterGain = null;
let lofiFilterNode = null;
let customAudioElement = null;
let customAudioSource = null;
let synthTimer = null;
let synthBassOsc = null;
let synthBassGain = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();

    analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 512;
    analyserNode.smoothingTimeConstant = 0.76;

    masterGain = audioCtx.createGain();
    const currentVol = parseFloat(document.getElementById('volumeSlider').value);
    masterGain.gain.setValueAtTime(currentVol, audioCtx.currentTime);

    lofiFilterNode = audioCtx.createBiquadFilter();
    lofiFilterNode.type = 'lowpass';
    lofiFilterNode.frequency.setValueAtTime(20000, audioCtx.currentTime);

    lofiFilterNode.connect(analyserNode);
    analyserNode.connect(masterGain);
    masterGain.connect(audioCtx.destination);
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Generative Ambient Synth Voice
function triggerAmbientSynthVoice() {
  if (!isPlaying || isCustomAudio || !audioCtx) return;

  const track = TRACK_PRESETS[currentTrackIndex];
  const scale = track.synthScale;
  const freq1 = scale[Math.floor(Math.random() * scale.length)];
  const freq2 = scale[Math.floor(Math.random() * scale.length)] * 1.5;

  const now = audioCtx.currentTime;
  const duration = 4.5 + Math.random() * 3;

  // Polyphonic Pad Oscillator 1 (Warm Triangle)
  const osc1 = audioCtx.createOscillator();
  const gain1 = audioCtx.createGain();
  osc1.type = 'triangle';
  osc1.frequency.setValueAtTime(freq1, now);
  osc1.detune.setValueAtTime((Math.random() - 0.5) * 15, now);

  gain1.gain.setValueAtTime(0.001, now);
  gain1.gain.exponentialRampToValueAtTime(0.08, now + 1.8);
  gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc1.connect(gain1);
  gain1.connect(lofiFilterNode);

  osc1.start(now);
  osc1.stop(now + duration + 0.1);

  // Polyphonic Pad Oscillator 2 (Sine Overtone)
  const osc2 = audioCtx.createOscillator();
  const gain2 = audioCtx.createGain();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(freq2, now);
  osc2.detune.setValueAtTime((Math.random() - 0.5) * 20, now);

  gain2.gain.setValueAtTime(0.001, now);
  gain2.gain.exponentialRampToValueAtTime(0.04, now + 2.0);
  gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 1.2);

  osc2.connect(gain2);
  gain2.connect(lofiFilterNode);

  osc2.start(now);
  osc2.stop(now + duration * 1.2 + 0.1);

  const intervalMs = (60 / track.bpm) * 1500 + Math.random() * 800;
  synthTimer = setTimeout(triggerAmbientSynthVoice, intervalMs);
}

// Deep Sustained Sub-Bass Drone
function startSubBassDrone() {
  if (!audioCtx || isCustomAudio) return;
  stopSubBassDrone();

  const track = TRACK_PRESETS[currentTrackIndex];
  const baseFreq = track.synthScale[0] / 2;

  synthBassOsc = audioCtx.createOscillator();
  synthBassGain = audioCtx.createGain();

  synthBassOsc.type = 'sine';
  synthBassOsc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);

  synthBassGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  synthBassGain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 2.5);

  synthBassOsc.connect(synthBassGain);
  synthBassGain.connect(lofiFilterNode);

  synthBassOsc.start();
}

function stopSubBassDrone() {
  if (synthBassOsc) {
    try {
      synthBassGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        if (synthBassOsc) {
          synthBassOsc.stop();
          synthBassOsc.disconnect();
          synthBassOsc = null;
        }
      }, 600);
    } catch (e) {
      synthBassOsc = null;
    }
  }
}

// Mechanical Sound Effects for AudiWave Retro Player
function playSnapSound() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  const osc1 = audioCtx.createOscillator();
  const g1 = audioCtx.createGain();
  osc1.type = 'triangle';
  osc1.frequency.setValueAtTime(2200, now);
  osc1.frequency.exponentialRampToValueAtTime(180, now + 0.04);
  g1.gain.setValueAtTime(0.9, now);
  g1.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
  osc1.connect(g1);
  g1.connect(audioCtx.destination);
  osc1.start(now);
  osc1.stop(now + 0.05);

  const osc2 = audioCtx.createOscillator();
  const g2 = audioCtx.createGain();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(320, now);
  osc2.frequency.exponentialRampToValueAtTime(60, now + 0.06);
  g2.gain.setValueAtTime(0.8, now);
  g2.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
  osc2.connect(g2);
  g2.connect(audioCtx.destination);
  osc2.start(now);
  osc2.stop(now + 0.08);
}

function playEjectSound() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(340, now);
  osc.frequency.exponentialRampToValueAtTime(120, now + 0.12);

  g.gain.setValueAtTime(0.5, now);
  g.gain.exponentialRampToValueAtTime(0.001, now + 0.13);

  osc.connect(g);
  g.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.14);
}

function playLaserSeekSound() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  for (let i = 0; i < 3; i++) {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(700 + i * 350, now + i * 0.05);
    osc.frequency.exponentialRampToValueAtTime(1800, now + i * 0.05 + 0.035);

    g.gain.setValueAtTime(0.1, now + i * 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.04);

    osc.connect(g);
    g.connect(audioCtx.destination);
    osc.start(now + i * 0.05);
    osc.stop(now + i * 0.05 + 0.045);
  }
}

function playBeep(freq = 900, duration = 0.06) {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  g.gain.setValueAtTime(0.2, now);
  g.gain.exponentialRampToValueAtTime(0.001, now + duration);

  osc.connect(g);
  g.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.01);
}

// Timeline state
let synthTrackDuration = 180;
let synthCurrentTime = 0;
let synthClockInterval = null;

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function updateTimelineUI(currentTime, duration) {
  if (isDraggingScrubber) return;
  const validDur = duration && duration > 0 ? duration : synthTrackDuration;
  const validCur = Math.min(currentTime || 0, validDur);
  const progressPct = (validCur / validDur) * 100;

  // Update Classic UI
  const progressBarFill = document.getElementById('progressBarFill');
  const progressBarThumb = document.getElementById('progressBarThumb');
  const currentTimeDisplay = document.getElementById('currentTimeDisplay');
  const durationDisplay = document.getElementById('durationDisplay');

  if (progressBarFill) progressBarFill.style.width = `${progressPct}%`;
  if (progressBarThumb) progressBarThumb.style.left = `${progressPct}%`;
  if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(validCur);
  if (durationDisplay) durationDisplay.textContent = formatTime(validDur);

  // Update AudiWave CD Deck LCD UI
  const lcdTimeCounter = document.getElementById('lcdTimeCounter');
  const lcdProgressBarFill = document.getElementById('lcdProgressBarFill');
  if (lcdTimeCounter) lcdTimeCounter.textContent = formatTime(validCur);
  if (lcdProgressBarFill) lcdProgressBarFill.style.width = `${progressPct}%`;
}

function startAudioPlayback() {
  initAudioContext();
  isPlaying = true;
  updatePlayButtonUI(true);

  if (isCustomAudio && customAudioElement) {
    customAudioElement.play().catch(e => console.log('Playback:', e));
    const badge = document.getElementById('engineStatusBadge');
    if (badge) badge.textContent = 'Custom Audio Playing';
  } else {
    triggerAmbientSynthVoice();
    startSubBassDrone();
    const badge = document.getElementById('engineStatusBadge');
    if (badge) badge.textContent = 'Generative Synth Active';

    if (synthClockInterval) clearInterval(synthClockInterval);
    synthClockInterval = setInterval(() => {
      if (!isPlaying || isCustomAudio) return;
      synthCurrentTime += 0.5;
      if (synthCurrentTime >= synthTrackDuration) {
        synthCurrentTime = 0;
        setTrackPreset(currentTrackIndex + 1);
      }
      updateTimelineUI(synthCurrentTime, synthTrackDuration);
    }, 500);
  }

  syncAudiWaveDeckPlayback(true);
}

function pauseAudioPlayback() {
  isPlaying = false;
  updatePlayButtonUI(false);

  if (synthTimer) {
    clearTimeout(synthTimer);
    synthTimer = null;
  }
  if (synthClockInterval) {
    clearInterval(synthClockInterval);
    synthClockInterval = null;
  }
  stopSubBassDrone();

  if (isCustomAudio && customAudioElement) {
    customAudioElement.pause();
  }
  const badge = document.getElementById('engineStatusBadge');
  if (badge) badge.textContent = 'Playback Paused';

  syncAudiWaveDeckPlayback(false);
}

function togglePlay() {
  if (isPlaying) {
    pauseAudioPlayback();
  } else {
    startAudioPlayback();
  }
}

function updatePlayButtonUI(playing) {
  // Classic Button
  const playIconContainer = document.getElementById('playIconContainer');
  const playButtonText = document.getElementById('playButtonText');
  const playRing = document.getElementById('playRing');
  const bigCircle = document.getElementById('bigCircle');

  if (playing) {
    if (playIconContainer) playIconContainer.innerHTML = '<i data-lucide="pause" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"></i>';
    if (playButtonText) playButtonText.textContent = 'Pause Experience';
    if (playRing) {
      playRing.classList.remove('opacity-0');
      playRing.classList.add('opacity-100');
    }
    if (bigCircle) bigCircle.style.transform = 'scale(1.05)';
  } else {
    if (playIconContainer) playIconContainer.innerHTML = '<i data-lucide="play" class="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 fill-current"></i>';
    if (playButtonText) playButtonText.textContent = 'Play Experience';
    if (playRing) {
      playRing.classList.remove('opacity-100');
      playRing.classList.add('opacity-0');
    }
    if (bigCircle) bigCircle.style.transform = 'scale(1)';
  }
  lucide.createIcons();
}

// ==========================================
// 3. CANVAS REAL-TIME VISUALIZER (CLASSIC)
// ==========================================
const canvas = document.getElementById('waveformCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio || 700;
  canvas.height = rect.height * window.devicePixelRatio || 120;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let visualizerAngle = 0;
let ribbonSmoothedEnergy = 0;
let ribbonSmoothedBass = 0;
let ribbonSmoothedFreqs = new Float32Array(64);

function renderVisualizer() {
  requestAnimationFrame(renderVisualizer);
  if (!canvas || activeSkin !== 'classic') return;

  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  let bufferLength = analyserNode ? analyserNode.frequencyBinCount : 128;
  let dataArray = new Uint8Array(bufferLength);
  let isReceivingSignal = false;
  let overallEnergy = 0;

  if (analyserNode && isPlaying) {
    analyserNode.getByteFrequencyData(dataArray);
    let sum = 0;
    for (let i = 0; i < Math.min(bufferLength, 64); i++) {
      sum += dataArray[i];
      if (dataArray[i] > 3) isReceivingSignal = true;
    }
    overallEnergy = sum / (Math.min(bufferLength, 64) * 255);
  }

  const ambientHeroGlow = document.getElementById('ambientHeroGlow');
  if (ambientHeroGlow) {
    if (isReceivingSignal) {
      const bassBoost = (dataArray[2] || 0) / 255;
      const targetScale = 1.0 + (overallEnergy * 0.14) + (bassBoost * 0.10);
      const targetOpacity = 0.36 + (overallEnergy * 0.18);
      ambientHeroGlow.style.transform = `translate3d(0, 0, 0) scale(${targetScale.toFixed(3)})`;
      ambientHeroGlow.style.opacity = targetOpacity.toFixed(2);
    } else {
      ambientHeroGlow.style.transform = 'translate3d(0, 0, 0) scale(1)';
      ambientHeroGlow.style.opacity = '0.35';
    }
  }

  visualizerAngle += isReceivingSignal ? (0.04 + overallEnergy * 0.05) : 0.025;

  if (visualizerModeIndex === 0) {
    // Mode 0: Smooth Liquid Waveform
    const points = 36;
    const sliceWidth = width / (points - 1);
    const wavePoints = [];

    for (let i = 0; i < points; i++) {
      const x = i * sliceWidth;
      let audioVal = 0;
      if (isReceivingSignal) {
        const freqIdx = Math.floor((i / points) * 48);
        const rawVal = dataArray[freqIdx] / 255;
        const boostedVal = Math.pow(rawVal, 0.82) * 1.35;
        audioVal = boostedVal * (height * 0.44);
      } else {
        audioVal = Math.sin(visualizerAngle + i * 0.35) * (height * 0.14);
      }

      const ripple = Math.sin(visualizerAngle * 1.8 + i * 0.45) * audioVal;
      const y = height / 2 + ripple;
      wavePoints.push({ x, y });
    }

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(wavePoints[0].x, wavePoints[0].y);
    for (let i = 1; i < wavePoints.length; i++) {
      const xc = (wavePoints[i - 1].x + wavePoints[i].x) / 2;
      const yc = (wavePoints[i - 1].y + wavePoints[i].y) / 2;
      ctx.quadraticCurveTo(wavePoints[i - 1].x, wavePoints[i - 1].y, xc, yc);
    }
    ctx.lineTo(width, wavePoints[wavePoints.length - 1].y);
    ctx.lineTo(width, height);
    ctx.closePath();

    const fillGrad = ctx.createLinearGradient(0, height * 0.15, 0, height);
    fillGrad.addColorStop(0, `rgba(${currentTheme.rgb}, 0.55)`);
    fillGrad.addColorStop(0.5, `rgba(${currentTheme.glowRgb}, 0.22)`);
    fillGrad.addColorStop(1, 'rgba(27, 25, 26, 0)');
    ctx.fillStyle = fillGrad;
    ctx.fill();
    ctx.restore();

    // Pass 1: Neon Bloom
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 7 * window.devicePixelRatio;
    ctx.shadowBlur = 38 * window.devicePixelRatio;
    ctx.shadowColor = `rgba(${currentTheme.glowRgb}, 0.95)`;
    ctx.strokeStyle = `rgba(${currentTheme.glowRgb}, 0.75)`;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.moveTo(wavePoints[0].x, wavePoints[0].y);
    for (let i = 1; i < wavePoints.length; i++) {
      const xc = (wavePoints[i - 1].x + wavePoints[i].x) / 2;
      const yc = (wavePoints[i - 1].y + wavePoints[i].y) / 2;
      ctx.quadraticCurveTo(wavePoints[i - 1].x, wavePoints[i - 1].y, xc, yc);
    }
    ctx.lineTo(wavePoints[wavePoints.length - 1].x, wavePoints[wavePoints.length - 1].y);
    ctx.stroke();
    ctx.restore();

    // Pass 2: Core line
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 2.8 * window.devicePixelRatio;
    ctx.shadowBlur = 14 * window.devicePixelRatio;
    ctx.shadowColor = '#FFFFFF';

    const lineGradient = ctx.createLinearGradient(0, 0, width, 0);
    lineGradient.addColorStop(0, currentTheme.primary);
    lineGradient.addColorStop(0.3, '#FFFFFF');
    lineGradient.addColorStop(0.7, currentTheme.glow);
    lineGradient.addColorStop(1, currentTheme.primary);
    ctx.strokeStyle = lineGradient;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.moveTo(wavePoints[0].x, wavePoints[0].y);
    for (let i = 1; i < wavePoints.length; i++) {
      const xc = (wavePoints[i - 1].x + wavePoints[i].x) / 2;
      const yc = (wavePoints[i - 1].y + wavePoints[i].y) / 2;
      ctx.quadraticCurveTo(wavePoints[i - 1].x, wavePoints[i - 1].y, xc, yc);
    }
    ctx.lineTo(wavePoints[wavePoints.length - 1].x, wavePoints[wavePoints.length - 1].y);
    ctx.stroke();
    ctx.restore();

  } else if (visualizerModeIndex === 1) {
    // Mode 1: Minimalist Frequency Bars
    const barCount = 48;
    const barWidth = (width / barCount) * 0.62;
    const gap = (width / barCount) * 0.38;

    ctx.save();
    ctx.shadowBlur = 26 * window.devicePixelRatio;
    ctx.shadowColor = `rgba(${currentTheme.glowRgb}, 0.85)`;

    for (let i = 0; i < barCount; i++) {
      let val = 0;
      if (isReceivingSignal) {
        const idx = Math.floor((i / barCount) * 54);
        const rawVal = dataArray[idx] / 255;
        val = Math.pow(rawVal, 0.78) * (height * 0.88);
      } else {
        val = (Math.sin(visualizerAngle * 2.2 + i * 0.28) * 0.5 + 0.5) * (height * 0.28) + 6;
      }

      val = Math.max(5, val);
      const x = i * (barWidth + gap) + gap / 2;
      const y = (height - val) / 2;

      const barGrad = ctx.createLinearGradient(0, y, 0, y + val);
      if (i % 2 === 0) {
        barGrad.addColorStop(0, '#FFFFFF');
        barGrad.addColorStop(0.3, currentTheme.glow);
        barGrad.addColorStop(0.7, currentTheme.light);
        barGrad.addColorStop(1, currentTheme.primary);
      } else {
        barGrad.addColorStop(0, '#FFFFFF');
        barGrad.addColorStop(0.4, '#E9E4E0');
        barGrad.addColorStop(0.8, '#A59F9A');
        barGrad.addColorStop(1, '#353032');
      }

      ctx.fillStyle = barGrad;
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, val, 3.5);
      ctx.fill();
    }
    ctx.restore();

  } else {
    // Mode 2: Pulse Ribbon
    const slices = 52;
    const targetBass = isReceivingSignal ? (((dataArray[1] || 0) + (dataArray[2] || 0) + (dataArray[3] || 0)) / (3 * 255)) : 0;
    const targetEnergy = isReceivingSignal ? Math.min(1, Math.max(0, (overallEnergy * 0.65 + targetBass * 0.85))) : 0;

    const energyAttack = 0.20;
    const energyDecay = 0.052;
    if (targetEnergy > ribbonSmoothedEnergy) {
      ribbonSmoothedEnergy += (targetEnergy - ribbonSmoothedEnergy) * energyAttack;
    } else {
      ribbonSmoothedEnergy += (targetEnergy - ribbonSmoothedEnergy) * energyDecay;
    }

    const energyFactor = ribbonSmoothedEnergy;
    const safeMargin = 10 * window.devicePixelRatio;
    const maxAmplitude = height * 0.38;

    for (let j = 0; j < 3; j++) {
      const ribbonPoints = [];
      const baseOffset = (j - 1) * (6 + energyFactor * 14);

      for (let i = 0; i < slices; i++) {
        const x = (i / (slices - 1)) * width;
        const idleDrift = Math.sin(visualizerAngle * 0.6 + i * 0.07) * (height * 0.03);
        const dynamicBounce = Math.sin(visualizerAngle * (1.05 + j * 0.35 * energyFactor) + i * (0.08 + 0.11 * energyFactor)) * (maxAmplitude * energyFactor);
        const rawY = height / 2 + baseOffset + (idleDrift * (1 - energyFactor * 0.6)) + dynamicBounce;
        const clampedY = Math.max(safeMargin, Math.min(height - safeMargin, rawY));
        ribbonPoints.push({ x, y: clampedY });
      }

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(ribbonPoints[0].x, ribbonPoints[0].y);
      for (let i = 1; i < ribbonPoints.length; i++) {
        const xc = (ribbonPoints[i - 1].x + ribbonPoints[i].x) / 2;
        const yc = (ribbonPoints[i - 1].y + ribbonPoints[i].y) / 2;
        ctx.quadraticCurveTo(ribbonPoints[i - 1].x, ribbonPoints[i - 1].y, xc, yc);
      }
      ctx.lineWidth = (3.0 + energyFactor * 2.5) * window.devicePixelRatio;
      ctx.strokeStyle = j === 0 ? `rgba(${currentTheme.glowRgb}, 0.85)` : (j === 1 ? '#FFFFFF' : `rgba(${currentTheme.rgb}, 0.75)`);
      ctx.shadowBlur = (12 + energyFactor * 30) * window.devicePixelRatio;
      ctx.shadowColor = `rgba(${currentTheme.glowRgb}, 0.8)`;
      ctx.stroke();
      ctx.restore();
    }
  }
}
renderVisualizer();

// ==========================================
// 4. UI INTERACTIVITY & MARQUEE SYSTEM
// ==========================================
function updateTextWithMarquee(containerId, textElemId, newText, defaultTitle) {
  const container = document.getElementById(containerId);
  const textElem = document.getElementById(textElemId);
  if (!container || !textElem) return;

  textElem.textContent = newText;
  const tooltip = defaultTitle || newText;
  textElem.title = tooltip;
  container.title = tooltip;

  textElem.classList.remove('marquee-active');
  container.classList.add('no-overflow');
  textElem.style.removeProperty('--marquee-shift');
  textElem.style.transform = 'translate3d(0, 0, 0)';

  requestAnimationFrame(() => {
    const containerWidth = container.clientWidth;
    const textWidth = textElem.scrollWidth;

    if (textWidth > containerWidth + 6) {
      const shift = containerWidth - textWidth - 14;
      textElem.style.setProperty('--marquee-shift', `${shift}px`);
      const duration = Math.max(9, Math.min(24, 8 + Math.abs(shift) / 24));
      textElem.style.animationDuration = `${duration.toFixed(1)}s`;
      textElem.classList.add('marquee-active');
      container.classList.remove('no-overflow');
    } else {
      textElem.classList.remove('marquee-active');
      container.classList.add('no-overflow');
      textElem.style.transform = 'translate3d(0, 0, 0)';
      textElem.style.opacity = '1';
    }
  });
}

function refreshAllMarquees() {
  const currentTrack = isCustomAudio
    ? {
        title: document.getElementById('trackTitle').textContent,
        artist: document.getElementById('trackArtist').textContent,
        category: document.getElementById('trackCategory').textContent
      }
    : TRACK_PRESETS[currentTrackIndex];

  updateTextWithMarquee('trackTitleContainer', 'trackTitle', currentTrack.title);
  updateTextWithMarquee('trackArtistContainer', 'trackArtist', currentTrack.artist);
  updateTextWithMarquee('trackCategoryContainer', 'trackCategory', currentTrack.category);
}
window.addEventListener('resize', refreshAllMarquees);

function setTrackPreset(index) {
  currentTrackIndex = (index + TRACK_PRESETS.length) % TRACK_PRESETS.length;
  const track = TRACK_PRESETS[currentTrackIndex];

  // Update Classic Typography
  updateTextWithMarquee('trackTitleContainer', 'trackTitle', track.title);
  updateTextWithMarquee('trackCategoryContainer', 'trackCategory', track.category);
  updateTextWithMarquee('trackArtistContainer', 'trackArtist', track.artist);
  const descEl = document.getElementById('trackDescription');
  if (descEl) descEl.textContent = track.description;

  // Update Artwork
  const img = document.getElementById('artworkImage');
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = track.artwork;
      img.style.opacity = '1';
    }, 250);
  }

  // Update Indicators
  const indicator = document.getElementById('presetIndicator');
  if (indicator) indicator.textContent = `${track.id} / 04`;
  const footerIdx = document.getElementById('footerCurrentIndex');
  if (footerIdx) footerIdx.textContent = track.id;

  // Update CD Deck View Elements
  const lcdTrackNum = document.getElementById('lcdTrackNum');
  if (lcdTrackNum) lcdTrackNum.textContent = track.id;

  const lcdStatusSub = document.getElementById('lcdStatusSub');
  if (lcdStatusSub) lcdStatusSub.textContent = track.title;

  const inlayTrackTitle = document.getElementById('inlayTrackTitle');
  if (inlayTrackTitle) inlayTrackTitle.textContent = track.title;

  const inlayArtist = document.getElementById('inlayArtist');
  if (inlayArtist) inlayArtist.textContent = track.artist;

  // Reset Timeline for Synth Preset
  if (!isCustomAudio) {
    synthCurrentTime = 0;
    updateTimelineUI(0, synthTrackDuration);
  }

  if (isPlaying && !isCustomAudio) {
    if (synthTimer) clearTimeout(synthTimer);
    startSubBassDrone();
    triggerAmbientSynthVoice();
  }
}

// Next / Prev Buttons
document.getElementById('nextTrackBtn').addEventListener('click', () => {
  setTrackPreset(currentTrackIndex + 1);
});
document.getElementById('prevTrackBtn').addEventListener('click', () => {
  setTrackPreset(currentTrackIndex - 1);
});

// Play / Pause Main Button
document.getElementById('mainPlayBtn').addEventListener('click', togglePlay);

// Visualizer Style Switcher
document.getElementById('toggleWaveStyle').addEventListener('click', () => {
  visualizerModeIndex = (visualizerModeIndex + 1) % VISUALIZER_MODES.length;
  const modeName = VISUALIZER_MODES[visualizerModeIndex];
  document.getElementById('waveStyleName').textContent = modeName;
  document.getElementById('canvasModeLabel').textContent = `Real-time ${modeName}`;
});

if (canvas) {
  canvas.addEventListener('click', () => {
    document.getElementById('toggleWaveStyle').click();
  });
}

// Volume Controls (Bidirectional sync with CD Deck)
const volumeSlider = document.getElementById('volumeSlider');
const cdVolumeSlider = document.getElementById('cdVolumeSlider');
const volumeIcon = document.getElementById('volumeIcon');
const volumeReadout = document.getElementById('volumeReadout');

function setMasterVolume(val) {
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(val, audioCtx.currentTime);
  }
  if (customAudioElement) {
    customAudioElement.volume = val;
  }
  if (volumeSlider) volumeSlider.value = val;
  if (cdVolumeSlider) cdVolumeSlider.value = Math.round(val * 100);
  if (volumeReadout) volumeReadout.textContent = `${Math.round(val * 100)}%`;

  if (volumeIcon) {
    if (val === 0) volumeIcon.setAttribute('data-lucide', 'volume-x');
    else if (val < 0.5) volumeIcon.setAttribute('data-lucide', 'volume-1');
    else volumeIcon.setAttribute('data-lucide', 'volume-2');
    lucide.createIcons();
  }
}

volumeSlider.addEventListener('input', (e) => {
  setMasterVolume(parseFloat(e.target.value));
});

if (cdVolumeSlider) {
  cdVolumeSlider.addEventListener('input', (e) => {
    setMasterVolume(parseFloat(e.target.value) / 100);
  });
}

document.getElementById('muteBtn').addEventListener('click', () => {
  if (volumeSlider.value > 0) {
    volumeSlider.dataset.prevVal = volumeSlider.value;
    setMasterVolume(0);
  } else {
    setMasterVolume(parseFloat(volumeSlider.dataset.prevVal || 0.75));
  }
});

// Lo-Fi / Tube Warmth Filter Toggle
function toggleLoFiWarmth() {
  initAudioContext();
  isLofiEnabled = !isLofiEnabled;

  const fxStatus = document.getElementById('fxStatus');
  const btnBassBoost = document.getElementById('btnBassBoost');
  const bassLed = document.getElementById('bassLed');
  const lcdBassBadge = document.getElementById('lcdBassBadge');

  if (isLofiEnabled) {
    if (fxStatus) {
      fxStatus.textContent = 'ON';
      fxStatus.className = 'text-green-400 font-mono font-bold';
    }
    if (btnBassBoost) btnBassBoost.classList.add('active');
    if (bassLed) bassLed.style.background = 'var(--amber-lit)';
    if (lcdBassBadge) lcdBassBadge.classList.add('active');
    lofiFilterNode.frequency.setTargetAtTime(1400, audioCtx.currentTime, 0.1);
  } else {
    if (fxStatus) {
      fxStatus.textContent = 'OFF';
      fxStatus.className = 'font-mono theme-transition';
      fxStatus.style.color = 'var(--accent-primary)';
    }
    if (btnBassBoost) btnBassBoost.classList.remove('active');
    if (bassLed) bassLed.style.background = '#522600';
    if (lcdBassBadge) lcdBassBadge.classList.remove('active');
    lofiFilterNode.frequency.setTargetAtTime(20000, audioCtx.currentTime, 0.1);
  }
}

document.getElementById('fxLoFiBtn').addEventListener('click', toggleLoFiWarmth);

// ==========================================
// 5. AUDIO FILE & ARTWORK UPLOAD
// ==========================================
function handleAudioUpload(file) {
  if (!file) return;
  initAudioContext();

  if (customAudioElement) {
    customAudioElement.pause();
    customAudioElement = null;
  }

  const fileURL = URL.createObjectURL(file);
  customAudioElement = new Audio(fileURL);
  customAudioElement.loop = true;
  customAudioElement.volume = parseFloat(volumeSlider.value);

  customAudioSource = audioCtx.createMediaElementSource(customAudioElement);
  customAudioSource.connect(lofiFilterNode);

  isCustomAudio = true;
  const cleanTitle = file.name.replace(/\.[^/.]+$/, '').toUpperCase();

  // Update Classic UI
  updateTextWithMarquee('trackTitleContainer', 'trackTitle', cleanTitle);
  updateTextWithMarquee('trackArtistContainer', 'trackArtist', 'User Uploaded Audio');
  updateTextWithMarquee('trackCategoryContainer', 'trackCategory', 'USER FILE • EXTERNAL');
  document.getElementById('trackDescription').textContent = `Now streaming "${file.name}" with real-time waveform processing.`;

  // Update CD Deck UI
  const inlayTrackTitle = document.getElementById('inlayTrackTitle');
  if (inlayTrackTitle) inlayTrackTitle.textContent = cleanTitle;
  const lcdStatusSub = document.getElementById('lcdStatusSub');
  if (lcdStatusSub) lcdStatusSub.textContent = cleanTitle.slice(0, 14);

  customAudioElement.addEventListener('loadedmetadata', () => {
    updateTimelineUI(customAudioElement.currentTime, customAudioElement.duration);
  });

  customAudioElement.addEventListener('timeupdate', () => {
    if (!isDraggingScrubber && customAudioElement.duration) {
      updateTimelineUI(customAudioElement.currentTime, customAudioElement.duration);
    }
  });

  startAudioPlayback();
}

document.getElementById('audioFileInput').addEventListener('change', (e) => {
  handleAudioUpload(e.target.files[0]);
});

const cdAudioFileInput = document.getElementById('cdAudioFileInput');
if (cdAudioFileInput) {
  cdAudioFileInput.addEventListener('change', (e) => {
    handleAudioUpload(e.target.files[0]);
  });
}

// Artwork Upload & Random Preset
const imageFileInput = document.getElementById('imageFileInput');
if (imageFileInput) {
  imageFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      document.getElementById('artworkImage').src = url;
    }
  });
}

const ARTWORK_COLLECTION = [
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=900&q=80'
];

document.getElementById('changeArtworkPresetBtn').addEventListener('click', () => {
  const randIdx = Math.floor(Math.random() * ARTWORK_COLLECTION.length);
  const img = document.getElementById('artworkImage');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = ARTWORK_COLLECTION[randIdx];
    img.style.opacity = '1';
  }, 200);
});

// Custom Disc Screenprint Artwork Upload (CD Deck)
const discArtInput = document.getElementById('discArtInput');
if (discArtInput) {
  discArtInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const cdSkinImg = document.getElementById('cdSkinImg');
    if (cdSkinImg) {
      cdSkinImg.src = url;
      cdSkinImg.style.display = 'block';
    }
  });
}

// ==========================================
// 6. TIMELINE SEEK & SCRUBBING ENGINE
// ==========================================
const progressBarContainer = document.getElementById('progressBarContainer');
const progressBarFill = document.getElementById('progressBarFill');
const progressBarThumb = document.getElementById('progressBarThumb');
const progressHoverFill = document.getElementById('progressHoverFill');
const progressTooltip = document.getElementById('progressTooltip');
const currentTimeDisplay = document.getElementById('currentTimeDisplay');
const durationDisplay = document.getElementById('durationDisplay');

let isDraggingScrubber = false;

function getTrackDuration() {
  if (isCustomAudio && customAudioElement && customAudioElement.duration) {
    return customAudioElement.duration;
  }
  return synthTrackDuration;
}

function calculateScrubRatio(clientX) {
  const rect = progressBarContainer.getBoundingClientRect();
  const clickX = clientX - rect.left;
  return Math.max(0, Math.min(1, clickX / rect.width));
}

function applySeek(ratio) {
  const totalDur = getTrackDuration();
  const targetTime = ratio * totalDur;

  if (isCustomAudio && customAudioElement && customAudioElement.duration) {
    customAudioElement.currentTime = targetTime;
  } else {
    synthCurrentTime = targetTime;
  }

  const pct = ratio * 100;
  if (progressBarFill) progressBarFill.style.width = `${pct}%`;
  if (progressBarThumb) progressBarThumb.style.left = `${pct}%`;
  if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(targetTime);
  if (durationDisplay) durationDisplay.textContent = formatTime(totalDur);

  // Sync CD Deck LCD
  const lcdTimeCounter = document.getElementById('lcdTimeCounter');
  const lcdProgressBarFill = document.getElementById('lcdProgressBarFill');
  if (lcdTimeCounter) lcdTimeCounter.textContent = formatTime(targetTime);
  if (lcdProgressBarFill) lcdProgressBarFill.style.width = `${pct}%`;
}

if (progressBarContainer) {
  progressBarContainer.addEventListener('mousedown', (e) => {
    isDraggingScrubber = true;
    applySeek(calculateScrubRatio(e.clientX));
  });

  progressBarContainer.addEventListener('mousemove', (e) => {
    const ratio = calculateScrubRatio(e.clientX);
    const totalDur = getTrackDuration();
    if (progressHoverFill) progressHoverFill.style.width = `${ratio * 100}%`;
    if (progressTooltip) {
      progressTooltip.style.left = `${ratio * 100}%`;
      progressTooltip.textContent = formatTime(ratio * totalDur);
    }
    if (isDraggingScrubber) applySeek(ratio);
  });

  progressBarContainer.addEventListener('mouseleave', () => {
    if (!isDraggingScrubber && progressHoverFill) progressHoverFill.style.width = '0%';
  });
}

// Scrubber for CD Deck LCD Progress Bar
const lcdProgressBarWrapper = document.getElementById('lcdProgressBarWrapper');
if (lcdProgressBarWrapper) {
  lcdProgressBarWrapper.addEventListener('click', (e) => {
    const rect = lcdProgressBarWrapper.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    applySeek(ratio);
  });
}

window.addEventListener('mousemove', (e) => {
  if (isDraggingScrubber) applySeek(calculateScrubRatio(e.clientX));
});

window.addEventListener('mouseup', () => {
  if (isDraggingScrubber) {
    isDraggingScrubber = false;
    if (progressHoverFill) progressHoverFill.style.width = '0%';
  }
});

// Navigation shortcuts
document.getElementById('navNowPlaying').addEventListener('click', togglePlay);
document.getElementById('navVisualizer').addEventListener('click', () => {
  document.getElementById('toggleWaveStyle').click();
});
document.getElementById('navSoundFx').addEventListener('click', toggleLoFiWarmth);
document.getElementById('navPresets').addEventListener('click', () => {
  document.getElementById('nextTrackBtn').click();
});

// Info Modal
const infoModal = document.getElementById('infoModal');
document.getElementById('modalInfoBtn').addEventListener('click', () => {
  infoModal.classList.remove('hidden');
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  infoModal.classList.add('hidden');
});
document.getElementById('closeModalBtn2').addEventListener('click', () => {
  infoModal.classList.add('hidden');
});
infoModal.addEventListener('click', (e) => {
  if (e.target === infoModal) infoModal.classList.add('hidden');
});

// Global Keybindings
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
    e.preventDefault();
    togglePlay();
  } else if (e.code === 'ArrowRight' && e.target.tagName !== 'INPUT') {
    setTrackPreset(currentTrackIndex + 1);
  } else if (e.code === 'ArrowLeft' && e.target.tagName !== 'INPUT') {
    setTrackPreset(currentTrackIndex - 1);
  }
});

// ============================================================
// 7. AUDIWAVE ROMANTIC CD DECK ENGINE & DRAG & DROP
// ============================================================
let isDiscLoaded = false;
const DISC_SKIN_PRESETS = {
  'vintage-rose': 'assets/skin_vintage_rose.jpg',
  'botanical': 'assets/vintage_velvet_rose.jpg',
  'golden-sheen': null
};

function syncAudiWaveDeckPlayback(playing) {
  const playerChassis = document.querySelector('.player-chassis');
  const cdDisc = document.getElementById('cdDisc');
  const lcdStatusText = document.getElementById('lcdStatusText');
  const playBtnLabel = document.getElementById('playBtnLabel');
  const lcdDiscIcon = document.getElementById('lcdDiscIcon');

  if (playing) {
    if (playerChassis) playerChassis.classList.add('is-playing');
    if (cdDisc) {
      cdDisc.classList.remove('decelerating');
      cdDisc.classList.add('spinning');
    }
    if (lcdStatusText) lcdStatusText.textContent = 'PLAYING';
    if (playBtnLabel) playBtnLabel.textContent = 'PAUSE';
    if (lcdDiscIcon) lcdDiscIcon.classList.add('active');
  } else {
    if (playerChassis) playerChassis.classList.remove('is-playing');
    if (cdDisc) {
      cdDisc.classList.remove('spinning');
      cdDisc.classList.add('decelerating');
    }
    if (lcdStatusText) lcdStatusText.textContent = isDiscLoaded ? 'PAUSE' : 'NO DISC';
    if (playBtnLabel) playBtnLabel.textContent = 'PLAY';
  }
}

function audiWaveInsertDisc() {
  initAudioContext();
  const loadedDiscSlot = document.getElementById('loadedDiscSlot');
  const cdDisc = document.getElementById('cdDisc');
  const playerChassis = document.querySelector('.player-chassis');
  const laserPickupHead = document.getElementById('laserPickupHead');
  const lcdTrackNum = document.getElementById('lcdTrackNum');
  const lcdStatusText = document.getElementById('lcdStatusText');
  const lcdStatusSub = document.getElementById('lcdStatusSub');
  const lcdDiscIcon = document.getElementById('lcdDiscIcon');
  const playBtnLabel = document.getElementById('playBtnLabel');

  if (!cdDisc || !loadedDiscSlot) return;

  // Move Disc element into center spindle slot
  loadedDiscSlot.appendChild(cdDisc);
  cdDisc.style.transform = '';
  cdDisc.classList.add('snap-anim');
  setTimeout(() => cdDisc.classList.remove('snap-anim'), 350);

  // Play mechanical clamp sound
  playSnapSound();

  // Update State
  isDiscLoaded = true;
  if (playerChassis) playerChassis.classList.add('has-disc', 'is-playing');
  cdDisc.classList.remove('decelerating');
  cdDisc.classList.add('spinning');

  // Laser optical sweep
  if (laserPickupHead) laserPickupHead.style.left = '45%';
  playLaserSeekSound();

  // LCD Update
  const track = TRACK_PRESETS[currentTrackIndex];
  if (lcdTrackNum) lcdTrackNum.textContent = track.id;
  if (lcdStatusText) lcdStatusText.textContent = 'PLAYING';
  if (lcdStatusSub) lcdStatusSub.textContent = track.title;
  if (lcdDiscIcon) lcdDiscIcon.classList.add('active');
  if (playBtnLabel) playBtnLabel.textContent = 'PAUSE';

  // Start continuous audio playback
  if (!isPlaying) {
    startAudioPlayback();
  }
}

function audiWaveEjectDisc() {
  initAudioContext();
  playEjectSound();

  if (isPlaying) {
    pauseAudioPlayback();
  }

  const cdDisc = document.getElementById('cdDisc');
  const discDockArea = document.getElementById('discDockArea');
  const playerChassis = document.querySelector('.player-chassis');
  const laserPickupHead = document.getElementById('laserPickupHead');
  const lcdStatusText = document.getElementById('lcdStatusText');
  const lcdStatusSub = document.getElementById('lcdStatusSub');
  const lcdDiscIcon = document.getElementById('lcdDiscIcon');
  const playBtnLabel = document.getElementById('playBtnLabel');

  if (cdDisc) {
    cdDisc.classList.remove('spinning');
    cdDisc.classList.add('decelerating');
  }

  isDiscLoaded = false;

  setTimeout(() => {
    if (cdDisc && discDockArea) {
      cdDisc.classList.remove('decelerating');
      discDockArea.appendChild(cdDisc);
      cdDisc.style.transform = '';
    }
    if (playerChassis) playerChassis.classList.remove('has-disc', 'is-playing');
    if (laserPickupHead) laserPickupHead.style.left = '20%';

    if (lcdStatusText) lcdStatusText.textContent = 'NO DISC';
    if (lcdStatusSub) lcdStatusSub.textContent = 'PLEASE INSERT RECORD';
    if (lcdDiscIcon) lcdDiscIcon.classList.remove('active');
    if (playBtnLabel) playBtnLabel.textContent = 'PLAY';
  }, 450);
}

function setupAudiWaveDragAndDrop() {
  const cdDisc = document.getElementById('cdDisc');
  const cdDeckDropZone = document.getElementById('cdDeckDropZone');
  const jewelCaseFrame = document.getElementById('jewelCaseFrame');

  if (!cdDisc || !cdDeckDropZone) return;

  let startX = 0, startY = 0;
  let isDragging = false;
  let hasMoved = false;
  let dragOrigin = 'case';

  const onPointerDown = (e) => {
    isDragging = true;
    hasMoved = false;
    dragOrigin = isDiscLoaded ? 'deck' : 'case';
    startX = e.clientX;
    startY = e.clientY;
    cdDisc.classList.add('is-dragging');
    try {
      cdDisc.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.hypot(dx, dy) > 8) {
      hasMoved = true;
    }
    cdDisc.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(1.06) rotate(-4deg)`;

    if (dragOrigin === 'case') {
      const dropRect = cdDeckDropZone.getBoundingClientRect();
      const isOver = e.clientX >= dropRect.left && e.clientX <= dropRect.right &&
                     e.clientY >= dropRect.top && e.clientY <= dropRect.bottom;
      cdDeckDropZone.classList.toggle('drag-over', isOver);
    } else if (jewelCaseFrame) {
      const caseRect = jewelCaseFrame.getBoundingClientRect();
      const isOverCase = e.clientX >= caseRect.left && e.clientX <= caseRect.right &&
                         e.clientY >= caseRect.top && e.clientY <= caseRect.bottom;
      jewelCaseFrame.classList.toggle('drag-over-case', isOverCase);
    }
  };

  const onPointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    cdDisc.classList.remove('is-dragging');
    cdDeckDropZone.classList.remove('drag-over');
    if (jewelCaseFrame) jewelCaseFrame.classList.remove('drag-over-case');
    try {
      cdDisc.releasePointerCapture(e.pointerId);
    } catch (err) {}

    if (dragOrigin === 'case') {
      const dropRect = cdDeckDropZone.getBoundingClientRect();
      const isOver = e.clientX >= dropRect.left && e.clientX <= dropRect.right &&
                     e.clientY >= dropRect.top && e.clientY <= dropRect.bottom;

      if (isOver && hasMoved) {
        cdDisc.style.transform = '';
        audiWaveInsertDisc();
      } else if (!hasMoved) {
        // Direct click to insert!
        cdDisc.style.transform = '';
        audiWaveInsertDisc();
      } else {
        cdDisc.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
        cdDisc.style.transform = '';
        setTimeout(() => { cdDisc.style.transition = ''; }, 300);
      }
    } else {
      let isOverCase = false;
      if (jewelCaseFrame) {
        const caseRect = jewelCaseFrame.getBoundingClientRect();
        isOverCase = e.clientX >= caseRect.left && e.clientX <= caseRect.right &&
                     e.clientY >= caseRect.top && e.clientY <= caseRect.bottom;
      }

      if (isOverCase && hasMoved) {
        cdDisc.style.transform = '';
        audiWaveEjectDisc();
      } else if (!hasMoved) {
        // Direct click on spinning CD toggles Play/Pause
        cdDisc.style.transform = '';
        togglePlay();
      } else {
        cdDisc.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
        cdDisc.style.transform = '';
        setTimeout(() => { cdDisc.style.transition = ''; }, 300);
      }
    }
  };

  cdDisc.addEventListener('pointerdown', onPointerDown);
  cdDisc.addEventListener('pointermove', onPointerMove);
  cdDisc.addEventListener('pointerup', onPointerUp);
  cdDisc.addEventListener('pointercancel', onPointerUp);

  // HTML5 Drag & Drop Support
  cdDisc.addEventListener('dragstart', (e) => {
    cdDisc.classList.add('is-dragging');
    e.dataTransfer.setData('text/plain', 'audiwave-cd');
    e.dataTransfer.effectAllowed = 'move';
  });

  cdDisc.addEventListener('dragend', () => {
    cdDisc.classList.remove('is-dragging');
    cdDeckDropZone.classList.remove('drag-over');
    if (jewelCaseFrame) jewelCaseFrame.classList.remove('drag-over-case');
  });

  cdDeckDropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (!isDiscLoaded) {
      e.dataTransfer.dropEffect = 'move';
      cdDeckDropZone.classList.add('drag-over');
    }
  });

  cdDeckDropZone.addEventListener('dragleave', () => {
    cdDeckDropZone.classList.remove('drag-over');
  });

  cdDeckDropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    cdDeckDropZone.classList.remove('drag-over');
    if (!isDiscLoaded) {
      audiWaveInsertDisc();
    }
  });

  if (jewelCaseFrame) {
    jewelCaseFrame.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (isDiscLoaded) {
        e.dataTransfer.dropEffect = 'move';
        jewelCaseFrame.classList.add('drag-over-case');
      }
    });

    jewelCaseFrame.addEventListener('dragleave', () => {
      jewelCaseFrame.classList.remove('drag-over-case');
    });

    jewelCaseFrame.addEventListener('drop', (e) => {
      e.preventDefault();
      jewelCaseFrame.classList.remove('drag-over-case');
      if (isDiscLoaded) {
        audiWaveEjectDisc();
      }
    });
  }
}

function setupAudiWaveKeypad() {
  const btnPlayPause = document.getElementById('btnPlayPause');
  const btnStop = document.getElementById('btnStop');
  const btnEject = document.getElementById('btnEject');
  const btnDeckEject = document.getElementById('btnDeckEject');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnBassBoost = document.getElementById('btnBassBoost');

  if (btnPlayPause) {
    btnPlayPause.addEventListener('click', () => {
      initAudioContext();
      playBeep(1200);

      if (!isDiscLoaded) {
        playBeep(300, 0.15);
        const lcdStatusText = document.getElementById('lcdStatusText');
        if (lcdStatusText) {
          lcdStatusText.textContent = 'NO DISC';
          lcdStatusText.style.color = '#ff4444';
          setTimeout(() => {
            lcdStatusText.style.color = '';
            lcdStatusText.textContent = 'NO DISC';
          }, 1200);
        }
        return;
      }
      togglePlay();
    });
  }

  if (btnStop) {
    btnStop.addEventListener('click', () => {
      initAudioContext();
      playBeep(800);
      if (!isDiscLoaded) return;
      pauseAudioPlayback();
      synthCurrentTime = 0;
      if (customAudioElement) customAudioElement.currentTime = 0;
      updateTimelineUI(0, getTrackDuration());
      const lcdStatusText = document.getElementById('lcdStatusText');
      if (lcdStatusText) lcdStatusText.textContent = 'STOP';
    });
  }

  const handleEject = () => {
    if (isDiscLoaded) {
      audiWaveEjectDisc();
    } else {
      playBeep(600);
    }
  };

  if (btnEject) btnEject.addEventListener('click', handleEject);
  if (btnDeckEject) btnDeckEject.addEventListener('click', handleEject);

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      initAudioContext();
      playBeep(1000);
      setTrackPreset(currentTrackIndex - 1);
      playLaserSeekSound();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      initAudioContext();
      playBeep(1100);
      setTrackPreset(currentTrackIndex + 1);
      playLaserSeekSound();
    });
  }

  if (btnBassBoost) {
    btnBassBoost.addEventListener('click', () => {
      playBeep(isLofiEnabled ? 250 : 400, 0.08);
      toggleLoFiWarmth();
    });
  }

  // Disc Skin Presets
  document.querySelectorAll('.btn-disc-select').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-disc-select').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const discKey = btn.dataset.disc;
      const asset = DISC_SKIN_PRESETS[discKey];
      const cdSkinImg = document.getElementById('cdSkinImg');
      if (cdSkinImg) {
        if (asset) {
          cdSkinImg.src = asset;
          cdSkinImg.style.display = 'block';
        } else {
          cdSkinImg.style.display = 'none';
        }
      }
    });
  });
}

// Dust Particle Canvas Animation
let dustAnimationFrame = null;
function initVintageDustCanvas() {
  const canvas = document.getElementById('vintageDustCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 35; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.6,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.45 + 0.25
    });
  }

  function loop() {
    if (activeSkin === 'cdDeck') {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 120, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(255, 190, 80, 0.7)';
        ctx.fill();
      }
    }
    dustAnimationFrame = requestAnimationFrame(loop);
  }
  if (!dustAnimationFrame) loop();
}

// ==========================================
// 8. SKIN / MODE SWITCHER LOGIC
// ==========================================
function switchSkin(skin) {
  activeSkin = skin;
  const classicView = document.getElementById('classicView');
  const cdDeckView = document.getElementById('cdDeckView');
  const btnSkinClassic = document.getElementById('btnSkinClassic');
  const btnSkinCdDeck = document.getElementById('btnSkinCdDeck');

  if (skin === 'cdDeck') {
    document.body.classList.add('skin-cd-deck');
    if (classicView) classicView.classList.add('hidden');
    if (cdDeckView) cdDeckView.classList.remove('hidden');

    if (btnSkinClassic) {
      btnSkinClassic.className = 'flex items-center space-x-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 text-offwhite-muted hover:text-offwhite cursor-pointer';
    }
    if (btnSkinCdDeck) {
      btnSkinCdDeck.className = 'flex items-center space-x-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 bg-[#8b1523] text-white shadow-[0_0_12px_rgba(139,21,35,0.7)] border border-[#d4af37] cursor-pointer';
    }

    // Sync CD Deck state with current audio state
    if (isPlaying) {
      const cdDisc = document.getElementById('cdDisc');
      const loadedDiscSlot = document.getElementById('loadedDiscSlot');
      if (cdDisc && loadedDiscSlot && !isDiscLoaded) {
        loadedDiscSlot.appendChild(cdDisc);
        isDiscLoaded = true;
      }
      syncAudiWaveDeckPlayback(true);
    }

    const currentTrack = TRACK_PRESETS[currentTrackIndex];
    const lcdTrackNum = document.getElementById('lcdTrackNum');
    if (lcdTrackNum) lcdTrackNum.textContent = currentTrack.id;

    const lcdStatusSub = document.getElementById('lcdStatusSub');
    if (lcdStatusSub) lcdStatusSub.textContent = isCustomAudio ? 'USER AUDIO' : currentTrack.title;

    const inlayTrackTitle = document.getElementById('inlayTrackTitle');
    if (inlayTrackTitle) inlayTrackTitle.textContent = isCustomAudio ? 'CUSTOM TRACK' : currentTrack.title;

    const inlayArtist = document.getElementById('inlayArtist');
    if (inlayArtist) inlayArtist.textContent = isCustomAudio ? 'User Upload' : currentTrack.artist;

    initVintageDustCanvas();

  } else {
    document.body.classList.remove('skin-cd-deck');
    if (cdDeckView) cdDeckView.classList.add('hidden');
    if (classicView) classicView.classList.remove('hidden');

    if (btnSkinClassic) {
      btnSkinClassic.className = 'flex items-center space-x-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 theme-transition bg-[var(--accent-primary)] text-white shadow-md cursor-pointer';
    }
    if (btnSkinCdDeck) {
      btnSkinCdDeck.className = 'flex items-center space-x-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 text-offwhite-muted hover:text-offwhite cursor-pointer';
    }

    resizeCanvas();
    refreshAllMarquees();
    updatePlayButtonUI(isPlaying);
  }
}

document.getElementById('btnSkinClassic').addEventListener('click', () => switchSkin('classic'));
document.getElementById('btnSkinCdDeck').addEventListener('click', () => switchSkin('cdDeck'));

// Initialize CD Deck Listeners
setupAudiWaveDragAndDrop();
setupAudiWaveKeypad();

// Initial Marquee & Entrance
window.addEventListener('load', () => {
  refreshAllMarquees();
});
refreshAllMarquees();

// ==========================================
// CINEMATIC ENTRANCE ANIMATION TRIGGER
// ==========================================
function triggerCinematicEntrance() {
  requestAnimationFrame(() => {
    document.body.classList.add('page-loaded');
    setTimeout(() => {
      const overlay = document.getElementById('cinematicOverlay');
      if (overlay) overlay.remove();
    }, 2400);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', triggerCinematicEntrance);
} else {
  triggerCinematicEntrance();
}
