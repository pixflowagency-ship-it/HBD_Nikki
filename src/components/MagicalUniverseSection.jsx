import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Sparkles, Smile, Flame, Shield, Star, RefreshCw } from 'lucide-react';
import { storyConfig } from '../data/storyData';
import { sound } from '../utils/soundEffects';

export default function MagicalUniverseSection() {
  const { potterhead, shinchan } = storyConfig.magicalUniverse;

  // Potterhead Spell State
  const [spellCast, setSpellCast] = useState(false);

  // Shinchan Bakchodi Dialogue State
  const [currentDialogueIdx, setCurrentDialogueIdx] = useState(0);
  const [shinchanActive, setShinchanActive] = useState(false);

  const handleCastSpell = () => {
    sound.playWandSpell();
    setSpellCast(true);
  };

  const handleBakchodiClick = () => {
    sound.playBoing();
    setCurrentDialogueIdx((prev) => (prev + 1) % shinchan.dialogues.length);
  };

  const handleShinchanMode = () => {
    sound.playBoing();
    setShinchanActive(true);
    setTimeout(() => {
      setShinchanActive(false);
    }, 2500);
  };

  return (
    <section
      id="magical"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#120f1c] via-midnight to-[#1a121d] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto space-y-24">
        {/* ================================================================= */}
        {/* PART A: THE WIZARDING WORLD (POTTERHEAD) */}
        {/* ================================================================= */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#260e1d] via-[#150e20] to-[#0d0a17] border-2 border-gold/40 shadow-[0_0_50px_rgba(216,180,106,0.15)] overflow-hidden">
          {/* Subtle Hogwarts Castle Skyline Silhouette in Background */}
          <div className="absolute bottom-0 right-0 left-0 h-40 opacity-20 pointer-events-none flex items-end justify-between px-4">
            <div className="w-12 h-28 bg-gold rounded-t-full" />
            <div className="w-8 h-36 bg-gold rounded-t-full" />
            <div className="w-20 h-24 bg-gold rounded-t-lg" />
            <div className="w-14 h-40 bg-gold rounded-t-full" />
            <div className="w-10 h-32 bg-gold rounded-t-full" />
            <div className="w-16 h-20 bg-gold rounded-t-md" />
            <div className="w-8 h-36 bg-gold rounded-t-full" />
          </div>

          {/* Floating Flickering Candles */}
          <div className="w-full flex justify-around mb-8 pointer-events-none">
            {[1, 2, 3, 4, 5].map((candle) => (
              <div
                key={candle}
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: `${candle * 0.7}s` }}
              >
                {/* Flame */}
                <div className="w-2 h-3.5 rounded-full bg-amber-400 shadow-[0_0_12px_#F59E0B] animate-pulse" />
                {/* Candle body */}
                <div className="w-2 h-8 bg-[#FAF5EE]/90 rounded-b-sm border border-gold/30 shadow-inner" />
              </div>
            ))}
          </div>

          {/* Header & Narrative */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/50 border border-gold/40 text-gold text-xs font-mono tracking-widest uppercase mb-4">
              <Wand2 size={13} />
              <span>THE WIZARDING WORLD • POTTERHEAD SPECIAL</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-cinzel font-bold text-cream">
              {potterhead.heading}
            </h3>

            <p className="mt-4 font-serif italic text-lg sm:text-2xl text-gold-light max-w-2xl mx-auto leading-relaxed">
              "{potterhead.quote}"
            </p>

            {/* House Badge & Traits */}
            <div className="mt-6 inline-block bg-burgundy/30 border border-gold/30 px-4 py-2 rounded-2xl text-xs sm:text-sm font-cinzel text-cream/90">
              ⚡ {potterhead.houseBadge}
            </div>

            {/* Interactive Wand Cast Button */}
            <div className="mt-8">
              <button
                onClick={handleCastSpell}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-midnight font-cinzel font-bold text-sm sm:text-base tracking-wider shadow-[0_0_25px_rgba(216,180,106,0.4)] hover:shadow-[0_0_35px_rgba(216,180,106,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <Sparkles size={18} />
                <span>{potterhead.spellButton}</span>
              </button>
            </div>

            {/* Spell Reveal Animation */}
            <AnimatePresence>
              {spellCast && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-6 rounded-2xl bg-gradient-to-b from-burgundy/60 to-midnight-deep/90 border-2 border-gold shadow-[0_0_40px_rgba(216,180,106,0.3)] max-w-xl mx-auto"
                >
                  <div className="flex items-center justify-center gap-2 text-gold font-cinzel font-bold text-2xl sm:text-3xl tracking-widest">
                    <span>✨</span>
                    <span>{potterhead.incantation}</span>
                    <span>✨</span>
                  </div>

                  <p className="mt-3 font-serif italic text-base sm:text-lg text-cream leading-relaxed">
                    "{potterhead.spellReveal}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ================================================================= */}
        {/* PART B: THE SHINCHAN ZONE */}
        {/* ================================================================= */}
        <div
          className={`relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#3b0b11] via-[#241315] to-[#120f1c] border-2 border-red-500/50 shadow-[0_0_50px_rgba(238,51,56,0.2)] overflow-hidden transition-all duration-300 ${
            shinchanActive ? 'animate-bounce scale-[1.01]' : ''
          }`}
        >
          {/* Shinchan Energy Background Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
            style={{ backgroundImage: "url('/assets/backgrounds/shinchan-energy.jpg')" }}
          />

          {/* Comic Dots Background Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EE3338_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/30 border border-red-500/50 text-red-300 text-xs font-mono tracking-widest uppercase mb-4 font-bold">
              <Smile size={14} className="text-yellow-400" />
              <span>{shinchan.subheading}</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-cinzel font-bold text-yellow-300 drop-shadow-[0_2px_10px_rgba(254,214,0,0.4)]">
              {shinchan.heading}
            </h3>

            <div className="mt-4 font-sans text-base sm:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
              <p>One moment we're discussing life, the next moment we're doing the most ridiculous things possible.</p>
              <p className="mt-2 text-yellow-200 font-handwriting text-2xl sm:text-3xl font-bold">
                And honestly, that's what makes this friendship special.
              </p>
            </div>

            {/* Comic Speech Bubble with Dialogue */}
            <motion.div
              key={currentDialogueIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-8 relative max-w-xl mx-auto bg-[#FAF5EE] text-[#241c19] p-5 sm:p-7 rounded-3xl shadow-2xl border-4 border-[#EE3338] text-center"
            >
              {/* Comic bubble arrow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[16px] border-t-[#EE3338]" />

              <span className="text-xs font-mono uppercase tracking-widest text-[#EE3338] font-bold block mb-1">
                💬 NIKKI x SHINCHAN ARCHIVES:
              </span>

              <p className="font-handwriting text-2xl sm:text-3xl text-[#451224] font-bold leading-snug">
                "{shinchan.dialogues[currentDialogueIdx]}"
              </p>
            </motion.div>

            {/* Interactive Playful Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleBakchodiClick}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-midnight font-cinzel font-bold text-sm sm:text-base tracking-wider shadow-lg hover:shadow-yellow-400/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <RefreshCw size={16} />
                <span>{shinchan.bakchodiButton}</span>
              </button>

              <button
                onClick={handleShinchanMode}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-cinzel font-bold text-sm sm:text-base tracking-wider shadow-lg hover:shadow-red-600/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>{shinchan.shinchanModeButton}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

