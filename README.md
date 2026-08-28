# IconiWave 🌊✨

> **Editorial Web Audio Visualizer & Generative Ambient Synthesizer**  
> พัฒนาด้วย HTML5 Canvas, Web Audio API, Tailwind CSS และ Lucide Icons

[![GitHub Pages](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square&logo=github)](https://pipatphongkam.github.io/IconiWave/)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg?style=flat-square)](LICENSE)

---

## 🎧 ทดลองใช้งานจริง (Live Demo)
ทดลองเล่นและสัมผัสประสบการณ์ Visualizer แบบ Real-time บนเบราว์เซอร์ได้ที่:  
👉 **[https://pipatphongkam.github.io/IconiWave/](https://pipatphongkam.github.io/IconiWave/)**

---

## 📸 ภาพรวมและฟีเจอร์เด่น (Overview & Features)

**IconiWave** คือเว็บแอปพลิเคชันเล่นเสียงและแสดงผลคลื่นเสียงแบบ Real-time ในไฟล์เดียว (Single-file) ที่ผสมผสานงานศิลปะรูปปั้นคลาสสิก เข้ากับสไตล์ Editorial Web Design แบบ Bauhaus และ Apple Music

### 🌟 ฟีเจอร์หลัก (Key Highlights):
1. **Generative Ambient Synthesizer**: ระบบสร้างเสียงสังเคราะห์ Polyphonic Ambient แบบ Real-time ในตัว พร้อม 3 บรรยากาศเสียงสำเร็จรูป (*Design*, *Neptune*, *Ethereal*)
2. **Audio File Player**: รองรับการอัปโหลดไฟล์เสียงของผู้ใช้เอง (`.mp3`, `.wav`, `.ogg`, `.m4a`) เพื่อแสดงกราฟิกคลื่นเสียงตามเพลงที่ต้องการ
3. **Decoupled Volume Physics**: ต่อสายสัญญาณเสียงตรงเข้า AnalyserNode ก่อนส่งไป Master Gain ทำให้ระดับการเต้นของคลื่นเสียงไม่ลดลงตามการหรี่เสียงหรือปิดเสียง (Mute)
4. **Interactive Timeline & Scrubber**: แถบควบคุมเวลาที่คลิกลากข้ามช่วงเพลงได้อิสระ พร้อมตัวเลขบอกเวลา `mm:ss` แบบ Real-time และ Tooltip แสดงเวลาขณะเลื่อนเมาส์
5. **Real-time Dynamic Palette Theme Switcher**: ปรับเปลี่ยนธีมสี Dark Editorial ได้ 6 โทนสี:
   - 🏺 **Terracotta Orange** (`#943A1F` / `#D15834`)
   - 🔴 **Crimson Red** (`#8B1E1E` / `#E03131`)
   - 💜 **Deep Violet** (`#6B359C` / `#B16CF5`)
   - 🟡 **Amber Gold** (`#A17016` / `#F0AD35`)
   - 🟢 **Emerald Sage** (`#23694A` / `#43BA84`)
   - 🔵 **Cobalt Blue** (`#1E4B8B` / `#488CF2`)
6. **3 Audio Visualizer Modes**:
   - **Smooth Wave**: คลื่นเสียงของเหลวพริ้วไหว พร้อมการไล่เฉดสี Gradient
   - **Minimal Bars**: แท่งความถี่เสียงแบบ High Dynamic Range พร้อมเอฟเฟกต์ Neon Bloom
   - **Pulse Ribbon**: ริบบิ้นคลื่นเสียง 3 มิติ คำนวณด้วย Catmull-Rom Spline พร้อมระบบ Attack & Decay Envelope และ Spatial Smoothing ที่นุ่มนวล
7. **Double-Pass Neon Bloom & Audio-Reactive Ambient Glow**: แสง Ambient เรืองรองด้านหลังที่เต้นตามแรงบีตของเสียงเบสแบบ Real-time
8. **Warm Lo-Fi Filter**: สวิตช์เปิด/ปิดฟิลเตอร์จำลองเสียงโทนอุ่นแบบแผ่นเสียงไวนิลและเทปคาสเซ็ท

---

## 🛠 เทคโนโลยีที่ใช้ (Tech Stack)
- **Web Audio API**: จัดการระบบเสียง Polyphonic Oscillator, BiquadFilterNode, AnalyserNode และ Audio Routing
- **HTML5 Canvas (2D Context)**: เรนเดอร์กราฟิกความละเอียดสูง (High-DPI), Catmull-Rom Splines และ Double-pass Neon Bloom
- **Tailwind CSS (CDN)**: จัดเลย์เอาต์ Typography และ UI แบบ Responsive
- **Lucide Icons (CDN)**: ชุดไอคอนสไตล์ Minimalist
- **Pure Vanilla JavaScript**: โค้ด JavaScript มาตรฐาน ทำงานได้ทันทีโดยไม่ต้องใช้ Bundler หรือ Build Tools

---

## 🚀 วิธีการติดตั้งและใช้งาน (Getting Started)

โคลน Repository นี้ลงในเครื่อง แล้วเปิดไฟล์ `index.html` ผ่านเว็บเบราว์เซอร์ได้ทันที:

```bash
git clone [https://github.com/PipatphongKam/IconiWave.git](https://github.com/PipatphongKam/IconiWave.git)
cd IconiWave
# เปิดไฟล์ index.html ผ่านเบราว์เซอร์ หรือใช้ VS Code Extension "Live Server"
