import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { storyConfig } from '../data/storyData';

export default function Footer() {
  const { meta } = storyConfig;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0a0d1a] border-t border-gold/20 py-12 px-4 sm:px-6 text-cream/70 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-2">
          <span className="w-8 h-8 rounded-full bg-burgundy/50 border border-gold/40 flex items-center justify-center text-gold">
            ✨
          </span>
          <span className="font-cinzel text-base sm:text-lg tracking-widest text-gold font-bold">
            {meta.siteTitle}
          </span>
        </div>

        <p className="font-serif italic text-sm sm:text-base text-cream/80">
          "{meta.subtitle}"
        </p>

        {/* Section Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-sans text-cream/60 pt-2">
          <button onClick={() => scrollTo('invitation')} className="hover:text-gold transition-colors">
            The Invitation
          </button>
          <span>•</span>
          <button onClick={() => scrollTo('beginning')} className="hover:text-gold transition-colors">
            Batido
          </button>
          <span>•</span>
          <button onClick={() => scrollTo('scrapbook')} className="hover:text-gold transition-colors">
            Scrapbook
          </button>
          <span>•</span>
          <button onClick={() => scrollTo('cinema')} className="hover:text-gold transition-colors">
            Cinema Room
          </button>
          <span>•</span>
          <button onClick={() => scrollTo('magical')} className="hover:text-gold transition-colors">
            Magical Universe
          </button>
          <span>•</span>
          <button onClick={() => scrollTo('baingan')} className="hover:text-gold transition-colors">
            Baingan Chronicles
          </button>
          <span>•</span>
          <button onClick={() => scrollTo('letter')} className="hover:text-gold transition-colors">
            Final Letter
          </button>
          <span>•</span>
          <button onClick={() => scrollTo('finale')} className="hover:text-gold transition-colors">
            Birthday Finale
          </button>
        </div>

        {/* Signature */}
        <div className="pt-6 border-t border-gold/15">
          <p className="font-handwriting text-2xl sm:text-3xl text-gold font-bold">
            {meta.footerSignature}
          </p>
          <p className="text-[11px] font-mono text-cream/40 mt-1">
            Dedicated to Nikki on 15 November • 4 Years of Unbreakable Friendship
          </p>
        </div>
      </div>
    </footer>
  );
}

