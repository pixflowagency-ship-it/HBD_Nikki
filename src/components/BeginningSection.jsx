import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react';
import { storyConfig } from '../data/storyData';
import { sound } from '../utils/soundEffects';

export default function BeginningSection({ onGoToScrapbook }) {
  const { beginning } = storyConfig;

  const handleClick = () => {
    sound.playChime();
    onGoToScrapbook();
  };

  return (
    <section
      id="beginning"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight-deep via-[#161220] to-[#1e151c] overflow-hidden"
    >
      {/* Warm ambient cafe glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4"
          >
            <MapPin size={12} />
            <span>{beginning.tag}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-cinzel font-bold text-cream tracking-wide"
          >
            {beginning.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-xl sm:text-3xl font-serif italic text-gold"
          >
            {beginning.subheading}
          </motion.p>
        </div>

        {/* Cafe Scene Illustration & Story Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Illustrated Cafe Scene (Vintage Film Aesthetic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#2a1e1b] via-[#201518] to-[#150d12] border-2 border-gold/30 p-6 shadow-2xl flex flex-col items-center justify-between overflow-hidden group">
              {/* Vintage film border corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold/60" />

              {/* Hanging Warm Cafe Lights */}
              <div className="w-full flex justify-around pt-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-10 bg-gold/40" />
                  <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_#D8B46A] animate-candle" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gold/40" />
                  <div className="w-5 h-5 rounded-full bg-gold-light shadow-[0_0_18px_#ebd49d] animate-pulse" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-12 bg-gold/40" />
                  <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_#D8B46A] animate-candle" />
                </div>
              </div>

              {/* Batido Cafe Table with 2 Seats & Drinks */}
              <div className="my-auto w-full flex flex-col items-center">
                {/* Steam Rising Animation */}
                <div className="flex gap-16 mb-2">
                  <span className="text-gold/60 animate-bounce text-sm">~</span>
                  <span className="text-gold/60 animate-bounce delay-150 text-sm">~</span>
                </div>

                {/* The Two Drinks on the Table */}
                <div className="flex items-center gap-14 mb-1">
                  {/* Left Cup (Yuvi's drink) */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-10 rounded-b-xl border-2 border-gold/70 bg-burgundy/40 flex items-center justify-center shadow-inner relative">
                      <div className="w-1.5 h-7 -top-2 left-3 absolute bg-softPink/80 rounded-full rotate-12" />
                    </div>
                    <span className="text-[10px] font-mono text-cream/60 mt-1">Yuvi</span>
                  </div>

                  {/* Table Lamp / Floral Centerpiece */}
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold animate-ping mb-1" />
                    <div className="w-8 h-1 rounded bg-gold/40" />
                  </div>

                  {/* Right Cup (Nikki's drink) */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-10 rounded-b-xl border-2 border-gold/70 bg-gold/30 flex items-center justify-center shadow-inner relative">
                      <div className="w-1.5 h-7 -top-2 left-3 absolute bg-gold/80 rounded-full -rotate-12" />
                    </div>
                    <span className="text-[10px] font-mono text-gold mt-1 font-bold">Nikki</span>
                  </div>
                </div>

                {/* The Wooden Table Top */}
                <div className="w-48 sm:w-56 h-3 rounded-full bg-[#523321] border border-gold/40 shadow-lg" />
                {/* Table Stand */}
                <div className="w-3 h-10 bg-[#3d2416]" />
                <div className="w-24 h-2 rounded-full bg-[#2a170c] border border-gold/20" />
              </div>

              {/* Bottom Quote inside cafe Polaroid */}
              <div className="w-full text-center py-2 px-3 bg-black/40 rounded-xl border border-gold/20 backdrop-blur-sm">
                <span className="font-handwriting text-gold text-lg font-bold block">
                  {beginning.cafeAtmosphere.location}
                </span>
                <span className="text-[11px] text-cream/70 font-sans">
                  {beginning.cafeAtmosphere.quote}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Storytelling Sequence */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-5"
          >
            <div className="bg-[#FAF5EE] text-[#241c19] p-6 sm:p-8 rounded-3xl shadow-2xl border border-gold/40 relative">
              {/* Washi Tape */}
              <div className="absolute -top-3 right-8 washi-tape-rose w-28 h-6 rounded-sm" />

              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#241c19]/15">
                <Clock size={16} className="text-[#641D37]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#641D37] font-bold">
                  Memory Log: 4 Years Ago
                </span>
              </div>

              <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-[#241c19]/90">
                {beginning.storyLines.map((line, idx) => (
                  <p
                    key={idx}
                    className={idx === 1 ? 'font-bold text-[#641D37] text-xl font-cinzel' : ''}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Stamp on paper */}
              <div className="mt-6 pt-3 border-t border-[#241c19]/10 flex items-center justify-between">
                <span className="font-handwriting text-xl text-[#9A7657]">
                  "And somehow, the best stories are unplanned."
                </span>
                <div className="border-2 border-[#641D37] rounded-md px-2 py-0.5 text-[10px] font-mono uppercase font-bold text-[#641D37] -rotate-6">
                  BATIDO ORIGIN
                </div>
              </div>
            </div>

            {/* Interactive Button */}
            <div className="pt-2">
              <button
                onClick={handleClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-midnight font-cinzel font-bold text-sm sm:text-base tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(216,180,106,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>{beginning.ctaButton}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

