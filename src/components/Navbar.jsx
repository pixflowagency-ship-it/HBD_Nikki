import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, Heart } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Navbar({ activeSection, storyProgress }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const navItems = [
    { id: 'invitation', label: 'The Invitation' },
    { id: 'beginning', label: 'Batido' },
    { id: 'scrapbook', label: 'The Scrapbook' },
    { id: 'cinema', label: 'The Cinema' },
    { id: 'magical', label: 'Magical Universe' },
    { id: 'baingan', label: 'Baingan Chronicles' },
    { id: 'letter', label: 'Final Letter' },
    { id: 'finale', label: 'Happy Birthday' },
  ];

  const toggleSound = () => {
    sound.isMuted = !sound.isMuted;
    setIsMuted(sound.isMuted);
    if (!sound.isMuted) {
      sound.playChime();
    }
  };

  const scrollTo = (id) => {
    setIsOpen(false);
    sound.playChime();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-gold/15 transition-all duration-300">
        {/* Progress Bar (Requirement #9) */}
        <div className="w-full h-1 bg-midnight-deep">
          <div
            className="h-full bg-gradient-to-r from-burgundy via-gold to-softPink transition-all duration-300 ease-out shadow-[0_0_8px_rgba(216,180,106,0.6)]"
            style={{ width: `${Math.min(100, Math.max(0, storyProgress))}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo / Title */}
          <button
            onClick={() => scrollTo('invitation')}
            className="flex items-center gap-2 group text-left"
          >
            <span className="w-8 h-8 rounded-full bg-burgundy/40 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              ✨
            </span>
            <div>
              <span className="font-cinzel text-xs sm:text-sm tracking-widest text-gold font-bold block">
                THE NIKKI CHRONICLES
              </span>
              <span className="text-[10px] text-cream/60 hidden sm:block font-sans">
                Four Years • Yuvi & Nikki
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all duration-200 ${
                    isActive
                      ? 'bg-gold/20 text-gold border border-gold/40 shadow-[0_0_10px_rgba(216,180,106,0.2)]'
                      : 'text-cream/70 hover:text-gold hover:bg-gold/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Sound Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
              className="p-2 rounded-full border border-gold/30 bg-gold/10 text-gold hover:bg-gold/20 hover:scale-105 transition-all text-xs flex items-center gap-1.5"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              <span className="hidden sm:inline text-[11px] font-sans">
                {isMuted ? 'Muted' : 'Sound ON'}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-cream/80 hover:text-gold border border-cream/20 bg-midnight-light"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-midnight-deep/95 backdrop-blur-xl pt-20 px-6 animate-fadeIn">
          <div className="flex flex-col gap-2 max-w-sm mx-auto">
            <div className="text-center pb-4 border-b border-gold/20">
              <span className="font-cinzel text-sm text-gold tracking-widest block">
                STORY CHAPTERS
              </span>
              <span className="text-xs text-cream/60">
                Tap any chapter to travel
              </span>
            </div>
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left py-3 px-4 rounded-xl font-sans text-sm text-cream/85 hover:text-gold hover:bg-gold/10 border border-transparent hover:border-gold/20 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-gold/60 font-cinzel">0{idx + 1}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

