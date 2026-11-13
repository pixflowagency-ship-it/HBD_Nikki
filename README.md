# ✨ THE NIKKI CHRONICLES
### Four Years. Countless Memories. One Crazy Friendship.
**Dedicated to Nikki on 15 November • Created by Yuvi**

---

## 📖 Overview
**The Nikki Chronicles** is an interactive, cinematic, and responsive birthday website created for Nikki. It documents a 4-year journey of friendship, starting from a random first meeting at Batido, surviving ups and downs and a year of silence, standing together with unwavering belief, and celebrating an unfiltered zero-boundary bond full of unlimited bakchodi.

---

## 🗺️ Website Structure (The 7 Sections)
1. **The Invitation — Intro Screen**: Midnight blue magical entrance, floating golden stars, glowing wax-sealed envelope, 15 November birthday indicator, and "Open Your Story ✨" trigger.
2. **The Beginning — Batido**: Cozy illustrated cafe scene with warm lights, two cups, and the story of how an unplanned meeting at Batido turned into a 4-year journey.
3. **The Scrapbook — Four Years Together**: Real physical scrapbook aesthetic with 20 polaroid photographs across 7 chronological chapters, washi tapes, stickers, handwritten notes, and an interactive full-screen lightbox with navigation.
4. **The Cinema Room — Our Special Video**: Cinematic custom video player (`special-video.mp4`) with custom play/pause, volume, timeline, fullscreen, and video switcher.
5. **The Magical Universe — Potterhead + Shinchan**:
   - *Part A: The Wizarding World*: Floating flicker candles, castle silhouettes, and interactive "Expecto Bestfriendum!" wand spell.
   - *Part B: The Shinchan Zone*: Kasukabe comic bubbles, bouncy animations, "Press for Bakchodi", and "Unlock Shinchan Mode".
6. **The Baingan Chronicles — Our Madness**: The 3 legendary identities (Baingan 🍆, Bhanta 🍆, Shinchan 😭), zero-boundary friendship manifesto, and the 6 Official Friendship Rules.
7. **The Final Letter — For Nikki & Birthday Finale**:
   - Emotional handwritten letter on warm cream paper from Yuvi to Nikki.
   - Interactive birthday cake with candles to blow out, confetti explosion, and "Replay Our Story" button.

---

## 🛠️ Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)
- **Canvas Confetti**
- **Web Audio API** (sound effects & magical chimes)

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start the development server
npm run dev

# 3. Build for production (tested & verified)
npm run build

# 4. Preview the production build
npm run preview
```

---

## ⚙️ How to Customize
All stories, captions, photo assignments, video sources, letter paragraphs, and nicknames are centralized in:
📂 `src/data/storyData.js`

- **Change photo captions & notes**: Edit `storyConfig.scrapbook.photos` in `src/data/storyData.js`.
- **Change the letter**: Edit `storyConfig.finalLetter.paragraphs` in `src/data/storyData.js`.
- **Change videos**: Place new videos in `public/assets/videos/` and update `storyConfig.cinema.videoSources`.

---

## ☁️ Deployment on Vercel
The website is configured with `vercel.json` and optimized for Vercel:
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of The Nikki Chronicles"
   ```
2. Push to GitHub, then import repository on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`

---

*Made with love, madness and memories — Yuvi ❤️*

