import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Heart, Gift } from 'lucide-react';
import { storyConfig } from '../data/storyData';
import { sound } from '../utils/soundEffects';

export default function BirthdayFinaleSection({ onReplay }) {
  const { birthdayFinale } = storyConfig;
  const [candlesLit, setCandlesLit] = useState(true);
  const [hasBlownCandles, setHasBlownCandles] = useState(false);

  const triggerConfetti = () => {
    sound.playCelebration();
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D8B46A', '#641D37', '#E9B6C4', '#FED600', '#FFFFFF']
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D8B46A', '#641D37', '#E9B6C4']
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D8B46A', '#641D37', '#E9B6C4']
      });
    }, 400);
  };

  const handleBlowCandles = () => {
    setCandlesLit(false);
    setHasBlownCandles(true);
    triggerConfetti();
  };

  const handleRelight = () => {
    sound.playChime();
    setCandlesLit(true);
  };

  const handleReplayClick = () => {
    sound.playChime();
    onReplay();
  };

  return (
    <section
      id="finale"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF5EE] via-[#150d1a] to-midnight-deep text-cream flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/assets/backgrounds/birthday-finale.jpg')" }}
      />

      {/* Golden Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-burgundy/30 via-gold/20 to-softPink/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Celebration Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs sm:text-sm font-cinzel font-bold tracking-widest uppercase mb-6 shadow-lg"
        >
          <Sparkles size={16} />
          <span>CELEBRATING 15 NOVEMBER</span>
          <Sparkles size={16} />
        </motion.div>

        {/* Main Birthday Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold tracking-wider gold-text-shimmer drop-shadow-2xl"
        >
          {birthdayFinale.mainText}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-2xl font-serif italic text-cream/90 max-w-2xl leading-relaxed"
        >
          "{birthdayFinale.subheading}"
        </motion.p>

        {/* ======================================================= */}
        {/* INTERACTIVE BIRTHDAY CAKE WITH BLOW-OUT CANDLES */}
        {/* ======================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-10 relative flex flex-col items-center"
        >
          <div className="relative p-6 flex flex-col items-center">
            {/* 3 Candles */}
            <div className="flex gap-8 mb-[-4px] z-20">
              {[1, 2, 3].map((candle) => (
                <div key={candle} className="flex flex-col items-center">
                  {/* Flame */}
                  {candlesLit && (
                    <div
                      className="w-3.5 h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 animate-pulse glow-candle cursor-pointer"
                      onClick={handleBlowCandles}
                      title="Tap to blow candle!"
                    />
                  )}
                  {!candlesLit && (
                    <div className="w-1 h-3 bg-gray-400/50 rounded-full animate-bounce text-[9px] text-cream/60">
                      💨
                    </div>
                  )}
                  {/* Candle Wick & Stick */}
                  <div className="w-1 h-2 bg-gray-300" />
                  <div className="w-4 h-12 bg-gradient-to-b from-softPink to-burgundy rounded-t-sm shadow-md border-t border-white/40" />
                </div>
              ))}
            </div>

            {/* Cake Top Tier */}
            <div className="w-44 sm:w-56 h-14 rounded-2xl bg-gradient-to-r from-[#FAF5EE] via-[#fffdfa] to-[#FAF5EE] border-2 border-gold shadow-lg flex items-center justify-around px-4 relative z-10">
              <span className="text-xs text-[#641D37]">🍓</span>
              <span className="text-xs text-gold">✨</span>
              <span className="text-xs text-[#641D37]">🍓</span>
              <span className="text-xs text-gold">✨</span>
              <span className="text-xs text-[#641D37]">🍓</span>
            </div>

            {/* Cake Bottom Tier */}
            <div className="w-56 sm:w-72 h-16 rounded-2xl bg-gradient-to-r from-[#641D37] via-[#85294a] to-[#641D37] border-2 border-gold/70 shadow-2xl flex items-center justify-center -mt-2">
              <span className="font-handwriting text-2xl sm:text-3xl text-gold font-bold">
                Nikki • 4 Years Strong
              </span>
            </div>

            {/* Cake Plate */}
            <div className="w-64 sm:w-80 h-3 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light shadow-xl -mt-1" />
          </div>

          {/* Interactive Blow / Relight Buttons */}
          <div className="mt-3 flex gap-3">
            {candlesLit ? (
              <button
                onClick={handleBlowCandles}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-gold to-gold-light text-midnight font-cinzel font-bold text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>🎂 Blow Out the Candles</span>
              </button>
            ) : (
              <button
                onClick={handleRelight}
                className="px-6 py-2 rounded-full bg-midnight-light border border-gold/40 text-gold font-cinzel text-xs sm:text-sm hover:bg-gold/10 transition-all flex items-center gap-1.5"
              >
                <span>🔥 Relight the Candles</span>
              </button>
            )}

            <button
              onClick={triggerConfetti}
              className="px-5 py-2 rounded-full bg-burgundy/60 border border-gold/40 text-cream font-cinzel text-xs sm:text-sm hover:bg-burgundy hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <Sparkles size={14} className="text-gold" />
              <span>More Confetti!</span>
            </button>
          </div>
        </motion.div>

        {/* Final Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto my-4 space-y-4"
        >
          <p className="font-serif italic text-base sm:text-xl text-gold-light">
            "{birthdayFinale.finalLine}"
          </p>

          <p className="font-handwriting text-2xl sm:text-3xl text-gold font-bold whitespace-pre-line">
            {birthdayFinale.signature}
          </p>
        </motion.div>

        {/* Replay Button (Requirement: Return to Intro Screen) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <button
            onClick={handleReplayClick}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-midnight font-cinzel font-bold tracking-widest text-sm sm:text-base shadow-[0_0_25px_rgba(216,180,106,0.4)] hover:shadow-[0_0_40px_rgba(216,180,106,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <RotateCcw size={18} />
            <span>{birthdayFinale.replayButton}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

