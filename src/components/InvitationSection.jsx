import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowDown, Mail, Heart, Calendar } from 'lucide-react';
import { storyConfig } from '../data/storyData';
import { sound } from '../utils/soundEffects';

export default function InvitationSection({ onOpenStory }) {
  const [isOpened, setIsOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0, isBirthday: false });
  const { invitation, meta } = storyConfig;

  // Birthday countdown calculation for 15 November
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let bday = new Date(currentYear, 10, 15); // Month is 0-indexed: 10 = November

      // If Nov 15 already passed this year, point to next year
      if (now.getTime() > bday.getTime() + 86400000) {
        bday = new Date(currentYear + 1, 10, 15);
      }

      const diff = bday.getTime() - now.getTime();
      const isToday = now.getMonth() === 10 && now.getDate() === 15;

      if (isToday) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0, isBirthday: true });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, mins, secs, isBirthday: false });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => {
    sound.playChime();
    setIsOpened(true);
    setTimeout(() => {
      onOpenStory();
    }, 900);
  };

  const handleSkip = () => {
    sound.playChime();
    onOpenStory();
  };

  return (
    <section
      id="invitation"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden bg-midnight-deep stars-bg"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/assets/backgrounds/magical-atmosphere.jpg')" }}
      />

      {/* Ambient Radial Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-br from-burgundy/25 via-gold/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-softPink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Birthday Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm font-cinzel tracking-widest mb-6 shadow-sm"
        >
          <Sparkles size={14} className="text-gold animate-spin" style={{ animationDuration: '6s' }} />
          <span>{invitation.badge}</span>
          <span className="text-cream/40">•</span>
          <span className="font-sans text-cream/80">{meta.birthdayDate}</span>
        </motion.div>

        {/* Narrative Opening Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 space-y-2"
        >
          <p className="font-serif italic text-lg sm:text-2xl text-cream/90">
            "{invitation.leadLine}"
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl text-gold font-medium">
            "{invitation.originLine}"
          </p>
          <p className="text-xs sm:text-sm tracking-widest uppercase font-mono text-softPink/80 pt-2">
            {invitation.subtext}
          </p>
        </motion.div>

        {/* Main Website Title with Shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="my-4 sm:my-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-bold tracking-wider gold-text-shimmer drop-shadow-lg">
            {invitation.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-cream/70 font-sans max-w-md mx-auto">
            {invitation.universeNote}
          </p>
        </motion.div>

        {/* The Magical Glowing Wax-Sealed Envelope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="my-8 relative group cursor-pointer"
          onClick={handleOpen}
        >
          <div className="relative w-72 sm:w-88 h-44 sm:h-52 bg-gradient-to-b from-[#2a1c22] via-[#1e1520] to-[#120f18] rounded-2xl border-2 border-gold/40 p-6 shadow-[0_0_35px_rgba(216,180,106,0.25)] flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-gold group-hover:shadow-[0_0_50px_rgba(216,180,106,0.45)]">
            {/* Golden corner flourishes */}
            <span className="absolute top-2 left-2 text-gold/40 text-xs">✦</span>
            <span className="absolute top-2 right-2 text-gold/40 text-xs">✦</span>
            <span className="absolute bottom-2 left-2 text-gold/40 text-xs">✦</span>
            <span className="absolute bottom-2 right-2 text-gold/40 text-xs">✦</span>

            {/* Glowing Wax Seal Button in Center */}
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-burgundy via-burgundy-light to-burgundy-deep border-2 border-gold/80 flex items-center justify-center shadow-lg transition-transform duration-500 ${isOpened ? 'scale-125 rotate-45' : 'group-hover:rotate-12'}`}>
              <span className="text-gold font-cinzel font-bold text-lg">N</span>
            </div>

            <div className="mt-3 text-center">
              <span className="font-handwriting text-2xl text-cream block font-bold">
                {invitation.envelopeText}
              </span>
              <span className="text-[11px] font-mono tracking-wider text-gold/80 uppercase">
                {invitation.envelopeSubtitle}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <button
            onClick={handleOpen}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold-dark text-midnight font-cinzel font-bold tracking-wider text-sm sm:text-base shadow-[0_0_20px_rgba(216,180,106,0.4)] hover:shadow-[0_0_30px_rgba(216,180,106,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <Sparkles size={18} />
            <span>{invitation.ctaText}</span>
          </button>

          <button
            onClick={handleSkip}
            className="text-xs text-cream/50 hover:text-gold transition-colors font-sans underline underline-offset-4"
          >
            {invitation.skipText}
          </button>
        </motion.div>

        {/* Birthday Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 py-2 px-5 rounded-full bg-midnight-light/60 border border-gold/20 text-xs text-cream/80 flex items-center gap-2"
        >
          <Calendar size={13} className="text-gold" />
          {timeLeft.isBirthday ? (
            <span className="text-gold font-bold">🎉 Today is Nikki's Birthday! Happy Birthday! 🎂</span>
          ) : (
            <span>
              Birthday Special • <strong className="text-gold">15 November</strong> • 4 Years of Unbreakable Bond
            </span>
          )}
        </motion.div>

        {/* Down Indicator */}
        <button
          onClick={handleOpen}
          className="mt-8 text-cream/40 hover:text-gold animate-bounce transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}

