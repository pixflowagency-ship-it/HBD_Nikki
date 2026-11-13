import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { storyConfig } from '../data/storyData';

export default function FinalLetterSection() {
  const { finalLetter } = storyConfig;

  return (
    <section
      id="letter"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1e131d] via-[#f7efe3] to-[#FAF5EE] text-[#241c19] overflow-hidden transition-colors duration-700"
    >
      {/* Soft warm light beam */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#641D37]/10 border border-[#641D37]/30 text-[#641D37] text-xs font-mono uppercase tracking-widest font-bold mb-4"
          >
            <Heart size={13} fill="#641D37" />
            <span>A PERSONAL LETTER • FROM YUVI TO NIKKI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-bold text-[#451224] tracking-wide"
          >
            {finalLetter.heading}
          </motion.h2>
        </div>

        {/* Vintage Parchment Letter Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-8 sm:p-14 shadow-2xl border-2 border-[#D8B46A]/50 max-w-3xl mx-auto"
        >
          {/* Top Washi Tape Corner */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape-gold w-36 h-7 rounded-sm shadow-sm" />

          {/* Pressed Flower Illustration in Corner */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-80 pointer-events-none">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 65C30 50 35 35 30 15" stroke="#9A7657" strokeWidth="2" strokeLinecap="round"/>
              <ellipse cx="23" cy="38" rx="8" ry="4" transform="rotate(-25 23 38)" fill="#E9B6C4" opacity="0.8"/>
              <ellipse cx="37" cy="48" rx="8" ry="4" transform="rotate(25 37 48)" fill="#E9B6C4" opacity="0.8"/>
              {/* Flower Petals */}
              <circle cx="30" cy="15" r="7" fill="#D8B46A" opacity="0.9"/>
              <circle cx="23" cy="11" r="6" fill="#E9B6C4"/>
              <circle cx="37" cy="11" r="6" fill="#E9B6C4"/>
              <circle cx="26" cy="21" r="6" fill="#E9B6C4"/>
              <circle cx="34" cy="21" r="6" fill="#E9B6C4"/>
              <circle cx="30" cy="15" r="3.5" fill="#641D37"/>
            </svg>
          </div>

          {/* Letter Greeting */}
          <div className="mb-8">
            <h3 className="font-handwriting text-3xl sm:text-4xl text-[#641D37] font-bold">
              {finalLetter.greeting}
            </h3>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 font-serif text-base sm:text-lg text-[#2a2220] leading-relaxed">
            {finalLetter.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={`whitespace-pre-line ${
                  p.includes("You don't have to be perfect")
                    ? 'p-4 rounded-xl bg-[#FAF5EE] border-l-4 border-[#641D37] font-sans text-sm sm:text-base italic text-[#451224]'
                    : p.includes("Happy Birthday")
                    ? 'font-cinzel font-bold text-[#641D37] text-lg sm:text-xl py-2'
                    : ''
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Letter Sign-off */}
          <div className="mt-12 pt-6 border-t border-[#9A7657]/30 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-serif italic text-sm sm:text-base text-[#641D37]">
                {finalLetter.closing}
              </p>
              <p className="font-handwriting text-3xl sm:text-4xl text-[#451224] font-bold mt-1">
                {finalLetter.signature}
              </p>
            </div>

            {/* Red Wax Seal Stamp */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#641D37] to-[#451224] border-2 border-gold flex items-center justify-center text-gold font-cinzel font-bold text-lg shadow-md self-end sm:self-auto">
              Y&N
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

