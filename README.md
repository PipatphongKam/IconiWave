# IconiWave 🌊✨

> **Editorial Web Audio Visualizer & Generative Ambient Synthesizer**  
> Crafted with HTML5 Canvas, Web Audio API, Tailwind CSS, and Lucide Icons.

[![GitHub Pages](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=github)](https://pipatphongkam.github.io/IconiWave/)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg?style=flat-square)](LICENSE)

---

## 🎧 Live Demo
Experience the visualizer in real-time in your browser:  
👉 **[https://pipatphongkam.github.io/IconiWave/](https://pipatphongkam.github.io/IconiWave/)**

---

## 📸 Overview & Features

**IconiWave** is a single-file modern audio player and real-time visualizer inspired by Greek sculpture aesthetics and Bauhaus/Apple Music editorial web design.

### 🌟 Key Highlights:
1. **Generative Ambient Synthesizer**: Built-in real-time polyphonic ambient sound engine with 3 unique soundscape presets (*Design*, *Neptune*, *Ethereal*).
2. **Audio File Player**: Upload your own audio files (`.mp3`, `.wav`, `.ogg`, `.m4a`) to visualize your own music.
3. **Decoupled Volume Physics**: Canvas visualizer is directly connected to the frequency analyzer before master gain — volume adjustments or muting never flatten the visual waves.
4. **Interactive Timeline & Scrubber**: Full seek/scrub timeline with real-time `mm:ss` indicators, draggable thumb, and hover tooltip.
5. **Real-time Dynamic Palette Theme Switcher**: 6 distinct dark editorial themes:
   - 🏺 **Terracotta Orange** (`#943A1F` / `#D15834`)
   - 🔴 **Crimson Red** (`#8B1E1E` / `#E03131`)
   - 💜 **Deep Violet** (`#6B359C` / `#B16CF5`)
   - 🟡 **Amber Gold** (`#A17016` / `#F0AD35`)
   - 🟢 **Emerald Sage** (`#23694A` / `#43BA84`)
   - 🔵 **Cobalt Blue** (`#1E4B8B` / `#488CF2`)
6. **3 Audio Visualizer Modes**:
   - **Smooth Wave**: Liquid floating waveform with gradient fill and crisp core.
   - **Minimal Bars**: High Dynamic Range frequency bars with radiant neon bloom.
   - **Pulse Ribbon**: 3-line Catmull-Rom spline curves with Attack & Decay envelope and Spatial Gaussian smoothing.
7. **Double-Pass Neon Bloom & Audio-Reactive Ambient Glow**: Multi-layered glowing ambient orbs and intense bloom effects reacting in real-time to bass beats.
8. **Warm Lo-Fi Filter**: Vintage tape/vinyl filter simulation toggle.

---

## 🛠 Tech Stack
- **Web Audio API**: Polyphonic oscillator synthesis, BiquadFilterNode, AnalyserNode, and GainNode routing.
- **HTML5 Canvas (2D Context)**: Catmull-Rom splines, double-pass neon bloom, and high-DPI rendering.
- **Tailwind CSS (CDN)**: Modern responsive typography and layout.
- **Lucide Icons (CDN)**: Crisp minimalist iconography.
- **Pure Vanilla JS**: Zero build step or bundler needed (`index.html` standalone).

---

## 🚀 Getting Started

Simply clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/PipatphongKam/IconiWave.git
cd IconiWave
# Open in your browser (or use Live Server / any local web server)
```

---

## ⌨️ Keyboard Shortcuts
- `Space`: Play / Pause Experience
- `ArrowRight`: Next Preset / Experience
- `ArrowLeft`: Previous Preset / Experience

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
