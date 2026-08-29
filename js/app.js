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

  // Update Ambient Background Glows with High Vibrancy
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

// Initialize Theme Picker
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
  }
];

let currentTrackIndex = 0;
let isPlaying = false;
let isCustomAudio = false;
let isLofiEnabled = false;
let visualizerModeIndex = 0; // 0: Smooth Wave, 1: Minimal Bars, 2: Circular Aura
const VISUALIZER_MODES = ['Smooth Wave', 'Minimal Bars', 'Pulse Ribbon'];

// ==========================================
// 2. WEB AUDIO API & GENERATIVE SYNTH ENGINE
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

    // Analyser Node (placed BEFORE masterGain to decouple visualizer from volume)
    analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 512;
    analyserNode.smoothingTimeConstant = 0.76;

    // Master Gain (Controls output volume only)
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(parseFloat(document.getElementById('volumeSlider').value), audioCtx.currentTime);

    // Lo-fi Biquad Filter (Lowpass)
    lofiFilterNode = audioCtx.createBiquadFilter();
    lofiFilterNode.type = 'lowpass';
    lofiFilterNode.frequency.setValueAtTime(20000, audioCtx.currentTime); // Default wide open

    // Connect chain: Sources -> lofiFilter -> analyserNode -> masterGain -> destination
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
  // Detune slightly for lush chorus
  osc1.detune.setValueAtTime((Math.random() - 0.5) * 15, now);

  // Envelope ADSR
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

  // Trigger next chord slice based on BPM
  const intervalMs = (60 / track.bpm) * 1500 + Math.random() * 800;
  synthTimer = setTimeout(triggerAmbientSynthVoice, intervalMs);
}

// Deep Sustained Sub-Bass Drone
function startSubBassDrone() {
  if (!audioCtx || isCustomAudio) return;
  stopSubBassDrone();

  const track = TRACK_PRESETS[currentTrackIndex];
  const baseFreq = track.synthScale[0] / 2; // Sub octave

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

// Timeline state for synth presets
let synthTrackDuration = 180; // 3 minutes virtual track for each preset
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

  const progressBarFill = document.getElementById('progressBarFill');
  const progressBarThumb = document.getElementById('progressBarThumb');
  const currentTimeDisplay = document.getElementById('currentTimeDisplay');
  const durationDisplay = document.getElementById('durationDisplay');

  if (progressBarFill) progressBarFill.style.width = `${progressPct}%`;
  if (progressBarThumb) progressBarThumb.style.left = `${progressPct}%`;
  if (currentTimeDisplay) currentTimeDisplay.textContent = formatTime(validCur);
  if (durationDisplay) durationDisplay.textContent = formatTime(validDur);
}

function startAudioPlayback() {
  initAudioContext();
  isPlaying = true;
  updatePlayButtonUI(true);

  if (isCustomAudio && customAudioElement) {
    customAudioElement.play();
    document.getElementById('engineStatusBadge').textContent = 'Custom Audio Playing';
  } else {
    triggerAmbientSynthVoice();
    startSubBassDrone();
    document.getElementById('engineStatusBadge').textContent = 'Generative Synth Active';

    // Start virtual clock for synth
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
  document.getElementById('engineStatusBadge').textContent = 'Playback Paused';
}

function togglePlay() {
  if (isPlaying) {
    pauseAudioPlayback();
  } else {
    startAudioPlayback();
  }
}

function updatePlayButtonUI(playing) {
  const playIconContainer = document.getElementById('playIconContainer');
  const playButtonText = document.getElementById('playButtonText');
  const playRing = document.getElementById('playRing');
  const bigCircle = document.getElementById('bigCircle');

  if (playing) {
    playIconContainer.innerHTML = '<i data-lucide="pause" class="w-5 h-5 fill-current"></i>';
    playButtonText.textContent = 'Pause Experience';
    playRing.classList.remove('opacity-0');
    playRing.classList.add('opacity-100');
    bigCircle.style.transform = 'scale(1.05)';
  } else {
    playIconContainer.innerHTML = '<i data-lucide="play" class="w-5 h-5 ml-0.5 fill-current"></i>';
    playButtonText.textContent = 'Play Experience';
    playRing.classList.remove('opacity-100');
    playRing.classList.add('opacity-0');
    bigCircle.style.transform = 'scale(1)';
  }
  lucide.createIcons();
}

// ==========================================
// 3. CANVAS REAL-TIME VISUALIZER
// ==========================================
const canvas = document.getElementById('waveformCanvas');
const ctx = canvas.getContext('2d');

// Handle high-DPI displays
function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio || 700;
  canvas.height = rect.height * window.devicePixelRatio || 120;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let visualizerAngle = 0;

// Persistent smoothing buffers for Pulse Ribbon (Lerp Dampening)
let ribbonSmoothedEnergy = 0;
let ribbonSmoothedBass = 0;
let ribbonSmoothedFreqs = new Float32Array(64);

function renderVisualizer() {
  requestAnimationFrame(renderVisualizer);

  const width = canvas.width;
  const height = canvas.height;

  // Clear canvas with smooth visualizer backdrop
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

  // Modulate ambient hero background glow smoothly with audio energy (Apple Music vibe)
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

  // Smooth time angle increment for ambient physics
  visualizerAngle += isReceivingSignal ? (0.04 + overallEnergy * 0.05) : 0.025;

  if (visualizerModeIndex === 0) {
    // MODE 0: Enhanced Smooth Liquid Waveform (Double-Pass Neon Bloom + Crisp Core)
    const points = 36;
    const sliceWidth = width / (points - 1);
    const wavePoints = [];

    for (let i = 0; i < points; i++) {
      const x = i * sliceWidth;
      let audioVal = 0;
      if (isReceivingSignal) {
        // Sample frequency band with gentle curvature & boost
        const freqIdx = Math.floor((i / points) * 48);
        const rawVal = dataArray[freqIdx] / 255;
        // Enhanced dynamic amplitude scaling (power curve for punchy reactivity)
        const boostedVal = Math.pow(rawVal, 0.82) * 1.35;
        audioVal = boostedVal * (height * 0.44);
      } else {
        // Idle ambient breathing wave
        audioVal = Math.sin(visualizerAngle + i * 0.35) * (height * 0.14);
      }

      const ripple = Math.sin(visualizerAngle * 1.8 + i * 0.45) * audioVal;
      const y = height / 2 + ripple;
      wavePoints.push({ x, y });
    }

    // Draw soft ambient gradient fill under wave
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

    // Pass 1: Wide Radiant Neon Bloom Aura (Bloom Pass)
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

    // Pass 2: Crisp Core & Glowing Center Stroke (Core Pass)
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

    // Secondary subtle counter-wave with ethereal white glow
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1.6 * window.devicePixelRatio;
    ctx.shadowBlur = 10 * window.devicePixelRatio;
    ctx.shadowColor = 'rgba(233, 228, 224, 0.6)';
    ctx.strokeStyle = 'rgba(233, 228, 224, 0.55)';
    for (let i = 0; i < points; i++) {
      const x = i * sliceWidth;
      let audioVal = isReceivingSignal ? (dataArray[(i * 2) % 36] / 255) * (height * 0.28) : Math.cos(visualizerAngle + i * 0.4) * (height * 0.09);
      const y = height / 2 - Math.cos(visualizerAngle * 1.4 + i * 0.4) * audioVal;
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevX = (i - 1) * sliceWidth;
        const prevY = height / 2 - Math.cos(visualizerAngle * 1.4 + (i - 1) * 0.4) * (isReceivingSignal ? (dataArray[((i - 1) * 2) % 36] / 255) * (height * 0.28) : Math.cos(visualizerAngle + (i - 1) * 0.4) * (height * 0.09));
        const xc = (prevX + x) / 2;
        const yc = (prevY + y) / 2;
        ctx.quadraticCurveTo(prevX, prevY, xc, yc);
      }
    }
    ctx.stroke();
    ctx.restore();

  } else if (visualizerModeIndex === 1) {
    // MODE 1: Minimalist Frequency Bars (High Dynamic Range + Radiant Neon Bloom)
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
        // Dynamic non-linear scaling for punchy bars
        val = Math.pow(rawVal, 0.78) * (height * 0.88);
      } else {
        val = (Math.sin(visualizerAngle * 2.2 + i * 0.28) * 0.5 + 0.5) * (height * 0.28) + 6;
      }

      val = Math.max(5, val);
      const x = i * (barWidth + gap) + gap / 2;
      const y = (height - val) / 2;

      // Glowing gradient bar
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
    // MODE 2: Pulse Ribbon (Attack & Decay Envelope + Spatial Smoothing + Double-Pass Neon Ribbon Bloom)
    const slices = 52;
    const targetBass = isReceivingSignal ? (((dataArray[1] || 0) + (dataArray[2] || 0) + (dataArray[3] || 0)) / (3 * 255)) : 0;
    const targetEnergy = isReceivingSignal ? Math.min(1, Math.max(0, (overallEnergy * 0.65 + targetBass * 0.85))) : 0;

    // 1. Attack & Decay Envelope: Fast/Smooth Rise (Attack = 0.20) and Slow/Lingering Release (Decay = 0.05)
    const energyAttack = 0.20;
    const energyDecay = 0.052;
    if (targetEnergy > ribbonSmoothedEnergy) {
      ribbonSmoothedEnergy += (targetEnergy - ribbonSmoothedEnergy) * energyAttack;
    } else {
      ribbonSmoothedEnergy += (targetEnergy - ribbonSmoothedEnergy) * energyDecay;
    }

    if (targetBass > ribbonSmoothedBass) {
      ribbonSmoothedBass += (targetBass - ribbonSmoothedBass) * energyAttack;
    } else {
      ribbonSmoothedBass += (targetBass - ribbonSmoothedBass) * energyDecay;
    }

    const energyFactor = ribbonSmoothedEnergy;

    // 2. Frequency Buffer Attack & Decay Update
    const freqAttack = 0.22;
    const freqDecay = 0.058;
    for (let k = 0; k < 64; k++) {
      const rawTarget = isReceivingSignal ? ((dataArray[k] || 0) / 255) : 0;
      if (rawTarget > ribbonSmoothedFreqs[k]) {
        ribbonSmoothedFreqs[k] += (rawTarget - ribbonSmoothedFreqs[k]) * freqAttack;
      } else {
        ribbonSmoothedFreqs[k] += (rawTarget - ribbonSmoothedFreqs[k]) * freqDecay;
      }
    }

    // Safe margin ceiling to prevent clipping canvas edges
    const safeMargin = 10 * window.devicePixelRatio;
    const maxAmplitude = height * 0.38;

    for (let j = 0; j < 3; j++) {
      // Generate smooth ribbon points with Spatial Smoothing & continuous blending
      const ribbonPoints = [];
      const baseOffset = (j - 1) * (6 + energyFactor * 14); // Clean 6px parallel spacing when idle, expands smoothly on beat

      for (let i = 0; i < slices; i++) {
        const x = (i / (slices - 1)) * width;
        
        // Idle state: Very gentle, long-wavelength, non-twisting fluid drift
        const idleDrift = Math.sin(visualizerAngle * 0.6 + i * 0.07) * (height * 0.03);

        // 3. Spatial Smoothing: 3-point Gaussian kernel across neighboring frequency bins
        const freqIdx = Math.floor((i / slices) * 36) + j * 2;
        const prevFreq = ribbonSmoothedFreqs[Math.max(0, freqIdx - 1)] || 0;
        const currFreq = ribbonSmoothedFreqs[freqIdx] || 0;
        const nextFreq = ribbonSmoothedFreqs[Math.min(63, freqIdx + 1)] || 0;
        const spatialFreq = (prevFreq * 0.25 + currFreq * 0.50 + nextFreq * 0.25);

        // 4. Continuous mathematical wave without hard if-else switching
        const boostedFreq = Math.min(maxAmplitude, Math.pow(spatialFreq, 0.85) * (height * 0.44));
        const dynamicBounce = Math.sin(visualizerAngle * (1.05 + j * 0.35 * energyFactor) + i * (0.08 + 0.11 * energyFactor)) * boostedFreq;

        // Seamless slope transition between parallel idle and dynamic beat motion
        const rawY = height / 2 + baseOffset + (idleDrift * (1 - energyFactor * 0.6)) + (dynamicBounce * energyFactor);
        
        // Safe clamping ceiling
        const clampedY = Math.max(safeMargin, Math.min(height - safeMargin, rawY));
        ribbonPoints.push({ x, y: clampedY });
      }

      // Function to trace Catmull-Rom spline
      const traceSplinePath = () => {
        ctx.beginPath();
        ctx.moveTo(ribbonPoints[0].x, ribbonPoints[0].y);
        for (let i = 0; i < ribbonPoints.length - 1; i++) {
          const p0 = ribbonPoints[Math.max(0, i - 1)];
          const p1 = ribbonPoints[i];
          const p2 = ribbonPoints[i + 1];
          const p3 = ribbonPoints[Math.min(ribbonPoints.length - 1, i + 2)];

          // Catmull-Rom control points
          const cp1x = p1.x + (p2.x - p0.x) / 6;
          const cp1y = p1.y + (p2.y - p0.y) / 6;
          const cp2x = p2.x - (p3.x - p1.x) / 6;
          const cp2y = p2.y - (p3.y - p1.y) / 6;

          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
        }
      };

      // PASS 1: Broad Radiant Bloom Stroke
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      traceSplinePath();

      if (j === 0) {
        ctx.strokeStyle = `rgba(${currentTheme.glowRgb}, 0.85)`;
        ctx.lineWidth = (4.5 + energyFactor * 3.5) * window.devicePixelRatio;
        ctx.shadowBlur = (15 + energyFactor * 42) * window.devicePixelRatio;
        ctx.shadowColor = `rgba(${currentTheme.glowRgb}, ${(0.55 + energyFactor * 0.45).toFixed(2)})`;
      } else if (j === 1) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.lineWidth = (3.5 + energyFactor * 2.8) * window.devicePixelRatio;
        ctx.shadowBlur = (12 + energyFactor * 28) * window.devicePixelRatio;
        ctx.shadowColor = `rgba(233, 228, 224, ${(0.45 + energyFactor * 0.45).toFixed(2)})`;
      } else {
        ctx.strokeStyle = `rgba(${currentTheme.rgb}, 0.75)`;
        ctx.lineWidth = (3.0 + energyFactor * 2.5) * window.devicePixelRatio;
        ctx.shadowBlur = (10 + energyFactor * 32) * window.devicePixelRatio;
        ctx.shadowColor = `rgba(${currentTheme.glowRgb}, ${(0.40 + energyFactor * 0.50).toFixed(2)})`;
      }
      ctx.stroke();
      ctx.restore();

      // PASS 2: Crisp Glowing Core Stroke
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      traceSplinePath();

      if (j === 0) {
        ctx.strokeStyle = currentTheme.light;
        ctx.lineWidth = (1.8 + energyFactor * 1.2) * window.devicePixelRatio;
        ctx.shadowBlur = 8 * window.devicePixelRatio;
        ctx.shadowColor = '#FFFFFF';
      } else if (j === 1) {
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = (1.5 + energyFactor * 1.0) * window.devicePixelRatio;
        ctx.shadowBlur = 10 * window.devicePixelRatio;
        ctx.shadowColor = '#FFFFFF';
      } else {
        ctx.strokeStyle = currentTheme.glow;
        ctx.lineWidth = (1.4 + energyFactor * 1.0) * window.devicePixelRatio;
        ctx.shadowBlur = 6 * window.devicePixelRatio;
        ctx.shadowColor = '#FFFFFF';
      }
      ctx.stroke();
      ctx.restore();
    }
  }
}
renderVisualizer();

// ==========================================
// 4. UI INTERACTIVITY & PRESET MANAGEMENT
// ==========================================
// Dynamic text overflow calculator for smooth Marquee Auto-Scroll
function updateTextWithMarquee(containerId, textElemId, newText, defaultTitle) {
  const container = document.getElementById(containerId);
  const textElem = document.getElementById(textElemId);
  if (!container || !textElem) return;

  textElem.textContent = newText;
  const tooltip = defaultTitle || newText;
  textElem.title = tooltip;
  container.title = tooltip;

  // Reset styles to calculate true scrollWidth
  textElem.classList.remove('marquee-active');
  container.classList.add('no-overflow');
  textElem.style.removeProperty('--marquee-shift');
  textElem.style.transform = 'translate3d(0, 0, 0)';

  // Wait for layout reflow
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

  // Update Typography with smooth Marquee Auto-Scroll
  updateTextWithMarquee('trackTitleContainer', 'trackTitle', track.title);
  updateTextWithMarquee('trackCategoryContainer', 'trackCategory', track.category);
  updateTextWithMarquee('trackArtistContainer', 'trackArtist', track.artist);
  document.getElementById('trackDescription').textContent = track.description;

  // Update Artwork & Duotone transition
  const img = document.getElementById('artworkImage');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = track.artwork;
    img.style.opacity = '1';
  }, 250);

  // Update Indicators
  document.getElementById('presetIndicator').textContent = `${track.id} / 03`;
  document.getElementById('footerCurrentIndex').textContent = track.id;

  // Reset Timeline for Synth Preset
  if (!isCustomAudio) {
    synthCurrentTime = 0;
    updateTimelineUI(0, synthTrackDuration);
  }

  // If playing and using generative synth, smoothly re-trigger
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

// Canvas click also switches visualizer style
canvas.addEventListener('click', () => {
  document.getElementById('toggleWaveStyle').click();
});

// Volume Slider
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');
volumeSlider.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(val, audioCtx.currentTime);
  }
  if (val === 0) {
    volumeIcon.setAttribute('data-lucide', 'volume-x');
  } else if (val < 0.5) {
    volumeIcon.setAttribute('data-lucide', 'volume-1');
  } else {
    volumeIcon.setAttribute('data-lucide', 'volume-2');
  }
  lucide.createIcons();
});

// Mute button toggle
document.getElementById('muteBtn').addEventListener('click', () => {
  if (volumeSlider.value > 0) {
    volumeSlider.dataset.prevVal = volumeSlider.value;
    volumeSlider.value = 0;
  } else {
    volumeSlider.value = volumeSlider.dataset.prevVal || 0.75;
  }
  volumeSlider.dispatchEvent(new Event('input'));
});

// Lo-Fi FX Mode
const fxLoFiBtn = document.getElementById('fxLoFiBtn');
const fxStatus = document.getElementById('fxStatus');
fxLoFiBtn.addEventListener('click', () => {
  initAudioContext();
  isLofiEnabled = !isLofiEnabled;
  if (isLofiEnabled) {
    fxStatus.textContent = 'ON';
    fxStatus.className = 'text-green-400 font-mono font-bold';
    lofiFilterNode.frequency.setTargetAtTime(1400, audioCtx.currentTime, 0.1);
  } else {
    fxStatus.textContent = 'OFF';
    fxStatus.className = 'font-mono theme-transition';
    fxStatus.style.color = 'var(--accent-primary)';
    lofiFilterNode.frequency.setTargetAtTime(20000, audioCtx.currentTime, 0.1);
  }
});

// ==========================================
// 5. CUSTOM AUDIO FILE UPLOAD
// ==========================================
const audioFileInput = document.getElementById('audioFileInput');
audioFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  initAudioContext();

  if (customAudioElement) {
    customAudioElement.pause();
    customAudioElement = null;
  }

  const fileURL = URL.createObjectURL(file);
  customAudioElement = new Audio(fileURL);
  customAudioElement.loop = true;

  // Connect HTML5 audio element to Web Audio graph
  customAudioSource = audioCtx.createMediaElementSource(customAudioElement);
  customAudioSource.connect(lofiFilterNode);

  isCustomAudio = true;
  const uploadedTitle = file.name.replace(/\.[^/.]+$/, '').toUpperCase();
  updateTextWithMarquee('trackTitleContainer', 'trackTitle', uploadedTitle);
  updateTextWithMarquee('trackArtistContainer', 'trackArtist', 'User Uploaded Audio');
  updateTextWithMarquee('trackCategoryContainer', 'trackCategory', 'USER FILE • EXTERNAL');
  document.getElementById('trackDescription').textContent = `Now streaming "${file.name}" with real-time waveform processing.`;

  // Duration & time tracking
  customAudioElement.addEventListener('loadedmetadata', () => {
    updateTimelineUI(customAudioElement.currentTime, customAudioElement.duration);
  });

  customAudioElement.addEventListener('timeupdate', () => {
    if (!isDraggingScrubber && customAudioElement.duration) {
      updateTimelineUI(customAudioElement.currentTime, customAudioElement.duration);
    }
  });

  startAudioPlayback();
});

// ==========================================
// 6. CUSTOM ARTWORK UPLOAD & RANDOM PRESET
// ==========================================
const imageFileInput = document.getElementById('imageFileInput');
imageFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    document.getElementById('artworkImage').src = url;
  }
});

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

// ==========================================
// 7. TIMELINE SEEK & SCRUBBING ENGINE
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

  // Update UI displays immediately
  const pct = ratio * 100;
  progressBarFill.style.width = `${pct}%`;
  progressBarThumb.style.left = `${pct}%`;
  currentTimeDisplay.textContent = formatTime(targetTime);
  durationDisplay.textContent = formatTime(totalDur);
}

// Mouse Events for Progress Bar
progressBarContainer.addEventListener('mousedown', (e) => {
  isDraggingScrubber = true;
  const ratio = calculateScrubRatio(e.clientX);
  applySeek(ratio);
});

progressBarContainer.addEventListener('mousemove', (e) => {
  const ratio = calculateScrubRatio(e.clientX);
  const totalDur = getTrackDuration();
  const hoverTime = ratio * totalDur;

  // Update hover ghost fill and tooltip
  progressHoverFill.style.width = `${ratio * 100}%`;
  progressTooltip.style.left = `${ratio * 100}%`;
  progressTooltip.textContent = formatTime(hoverTime);

  // If actively dragging, seek along with cursor
  if (isDraggingScrubber) {
    applySeek(ratio);
  }
});

progressBarContainer.addEventListener('mouseleave', () => {
  if (!isDraggingScrubber) {
    progressHoverFill.style.width = '0%';
  }
});

// Global window events so dragging continues smoothly even if cursor moves outside bar
window.addEventListener('mousemove', (e) => {
  if (isDraggingScrubber) {
    const ratio = calculateScrubRatio(e.clientX);
    applySeek(ratio);
  }
});

window.addEventListener('mouseup', (e) => {
  if (isDraggingScrubber) {
    isDraggingScrubber = false;
    progressHoverFill.style.width = '0%';
  }
});

// Touch Support for Mobile / Tablets
progressBarContainer.addEventListener('touchstart', (e) => {
  if (e.touches.length > 0) {
    isDraggingScrubber = true;
    const ratio = calculateScrubRatio(e.touches[0].clientX);
    applySeek(ratio);
  }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  if (isDraggingScrubber && e.touches.length > 0) {
    const ratio = calculateScrubRatio(e.touches[0].clientX);
    applySeek(ratio);
  }
}, { passive: true });

window.addEventListener('touchend', () => {
  if (isDraggingScrubber) {
    isDraggingScrubber = false;
  }
});

// Navigation buttons shortcuts
document.getElementById('navNowPlaying').addEventListener('click', () => {
  togglePlay();
});
document.getElementById('navVisualizer').addEventListener('click', () => {
  document.getElementById('toggleWaveStyle').click();
});
document.getElementById('navSoundFx').addEventListener('click', () => {
  document.getElementById('fxLoFiBtn').click();
});
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

// Global Keybindings (Space to Play/Pause, Arrow keys for tracks)
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

// Initial Marquee check on load
window.addEventListener('load', refreshAllMarquees);
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
