import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Lightbox({ photo, allPhotos, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === photo.id);
  const total = allPhotos.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-midnight-deep/95 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      {/* Container - Stop propagation so clicking content doesn't close */}
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="w-full flex items-center justify-between pb-3 px-2 text-cream/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-cinzel text-gold tracking-widest uppercase">
              {photo.chapter}
            </span>
            <span className="text-xs text-cream/40">•</span>
            <span className="text-xs font-mono text-cream/60">
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playChime();
              onClose();
            }}
            className="p-2 rounded-full bg-white/10 hover:bg-gold/20 text-cream hover:text-gold transition-colors"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </div>

        {/* Polaroid frame card */}
        <div className="relative bg-[#FAF5EE] text-[#241c19] p-3 sm:p-5 rounded-2xl shadow-2xl max-w-full flex flex-col items-center border border-[#d8b46a]/40">
          {/* Decorative washi tape at top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape-gold w-32 h-6 rounded-sm shadow-sm" />

          {/* Photo container */}
          <div className="relative overflow-hidden rounded-xl bg-[#241c19] max-h-[60vh] sm:max-h-[66vh] flex items-center justify-center">
            <img
              src={photo.src}
              alt={photo.caption}
              className="max-h-[60vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-lg transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null;
                // Fallback placeholder with photo title if image missing
                e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="100%" height="100%" fill="%23241c19"/><text x="50%" y="45%" fill="%23D8B46A" font-family="serif" font-size="24" text-anchor="middle">Photo ${photo.id}</text><text x="50%" y="58%" fill="%23FAF5EE" font-family="sans-serif" font-size="16" text-anchor="middle">Memory with Nikki</text></svg>`;
              }}
            />
          </div>

          {/* Bottom caption area (vintage scrapbook handwritten feel) */}
          <div className="mt-4 text-center max-w-xl px-2">
            <p className="font-handwriting text-2xl sm:text-3xl text-[#451224] font-bold tracking-wide">
              {photo.caption}
            </p>
            {photo.note && (
              <span className="inline-block mt-1 font-mono text-xs uppercase tracking-widest text-[#9A7657] bg-[#FAF5EE] border border-[#9A7657]/30 px-3 py-0.5 rounded-full">
                {photo.sticker} {photo.note}
              </span>
            )}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            sound.playChime();
            onNavigate('prev');
          }}
          className="absolute left-1 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-midnight-light/80 hover:bg-gold/30 text-gold border border-gold/40 backdrop-blur-md transition-transform hover:scale-110"
          title="Previous Photo (Left Arrow)"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            sound.playChime();
            onNavigate('next');
          }}
          className="absolute right-1 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-midnight-light/80 hover:bg-gold/30 text-gold border border-gold/40 backdrop-blur-md transition-transform hover:scale-110"
          title="Next Photo (Right Arrow)"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

