import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Scroll, HeartHandshake } from 'lucide-react';
import { storyConfig } from '../data/storyData';
import { sound } from '../utils/soundEffects';

export default function BainganSection() {
  const { bainganChronicles } = storyConfig;
  const [showRules, setShowRules] = useState(false);

  const handleToggleRules = () => {
    sound.playBoing();
    setShowRules(!showRules);
  };

  return (
    <section
      id="baingan"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a121d] via-[#101426] to-[#1e131d] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-400/40 text-purple-300 text-xs font-mono tracking-widest uppercase mb-4">
            <span>🍆</span>
            <span>THE BAINGAN CHRONICLES • LEVEL 100 BAKCHODI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-cream tracking-wide">
            {bainganChronicles.heading}
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-handwriting text-gold">
            Three avatars, one single chaotic braincell.
          </p>
        </div>

        {/* The 3 Legendary Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {bainganChronicles.cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${card.color} border-2 border-gold/30 shadow-2xl flex flex-col items-center text-center group cursor-pointer`}
              onClick={() => sound.playBoing()}
            >
              {/* Badge corner sticker */}
              <div className="absolute top-3 right-3 text-xs font-mono uppercase bg-black/40 px-2 py-0.5 rounded-full border border-white/10 text-cream/70">
                Identity #{idx + 1}
              </div>

              {/* Big Emoji icon */}
              <div className="w-24 h-24 rounded-full bg-black/40 border-2 border-gold/40 flex items-center justify-center text-5xl mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {card.emoji}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-gold tracking-widest mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base font-serif italic text-cream/90 leading-relaxed">
                "{card.description}"
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 w-full text-center">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gold/80">
                  Tap for certified sound ✦
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* THE ZERO-BOUNDARY FRIENDSHIP */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-[#FAF5EE] text-[#241c19] shadow-2xl border-2 border-[#9A7657]/40 max-w-4xl mx-auto my-12">
          {/* Top washi tape */}
          <div className="absolute -top-3 left-12 washi-tape-rose w-32 h-6" />
          <div className="absolute -top-3 right-12 washi-tape-gold w-32 h-6" />

          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#641D37] font-bold block mb-2">
              UNFILTERED • COMFORTABLE • ZERO MASKS
            </span>

            <h3 className="text-2xl sm:text-4xl font-cinzel font-bold text-[#451224] tracking-wide mb-6">
              {bainganChronicles.zeroBoundary.title}
            </h3>

            <div className="space-y-4 font-serif text-base sm:text-lg text-[#241c19]/90 leading-relaxed">
              {bainganChronicles.zeroBoundary.lines.map((line, idx) => (
                <p
                  key={idx}
                  className={idx === 1 ? 'font-handwriting text-2xl sm:text-3xl text-[#641D37] font-bold' : ''}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Reveal Rules Button */}
            <div className="mt-8">
              <button
                onClick={handleToggleRules}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#641D37] to-[#451224] text-[#F4E9D8] font-cinzel font-bold text-sm sm:text-base tracking-wider shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <Scroll size={18} />
                <span>
                  {showRules ? 'Hide Friendship Rules' : bainganChronicles.rulesButton}
                </span>
              </button>
            </div>
          </div>

          {/* Stamped Friendship Rules (revealed on click) */}
          <AnimatePresence>
            {showRules && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-10 pt-8 border-t-2 border-[#241c19]/15 overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bainganChronicles.rules.map((rule) => (
                    <motion.div
                      key={rule.number}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 rounded-xl bg-[#FAF5EE] border-2 border-dashed border-[#9A7657]/50 flex items-start gap-3 shadow-sm hover:border-[#641D37] transition-colors"
                    >
                      <span className="font-mono text-sm font-bold text-[#641D37] px-2 py-0.5 rounded bg-[#641D37]/10">
                        {rule.number}
                      </span>
                      <p className="font-serif text-sm sm:text-base text-[#241c19] font-medium">
                        {rule.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <span className="font-handwriting text-2xl text-[#641D37] font-bold">
                    Official Treaty of Bakchodi — Signed by Yuvi & Nikki ✍️
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

