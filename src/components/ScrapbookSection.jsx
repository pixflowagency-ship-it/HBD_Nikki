import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, BookOpen, Layers, Maximize2, Tag } from 'lucide-react';
import { storyConfig } from '../data/storyData';
import { sound } from '../utils/soundEffects';

export default function ScrapbookSection({ onSelectPhoto }) {
  const { scrapbook } = storyConfig;
  const [selectedChapter, setSelectedChapter] = useState('all');

  const filteredPhotos = selectedChapter === 'all'
    ? scrapbook.photos
    : scrapbook.photos.filter((p) => {
        const chapter = scrapbook.chapters.find((c) => c.id === selectedChapter);
        return chapter && chapter.photoIds.includes(p.id);
      });

  const handlePhotoClick = (photo) => {
    sound.playChime();
    onSelectPhoto(photo);
  };

  const getWashiClass = (color) => {
    if (color === 'rose') return 'washi-tape-rose';
    if (color === 'kraft') return 'washi-tape-kraft';
    return 'washi-tape-gold';
  };

  return (
    <section
      id="scrapbook"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 scrapbook-board overflow-hidden"
    >
      {/* Background Scrapbook Texture Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/assets/backgrounds/scrapbook.jpg')" }}
      />

      {/* Background Scrapbook ambient overlays */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1e151c] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#140f17] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EE] text-[#641D37] text-xs font-mono uppercase tracking-widest font-bold shadow-md mb-4 border border-[#9A7657]/30">
            <Camera size={14} />
            <span>20 POLAROIDS • 4 YEARS • 7 CHAPTERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-cream tracking-wide">
            {scrapbook.title}
          </h2>

          <p className="mt-2 text-xl sm:text-2xl font-handwriting text-gold">
            {scrapbook.subtitle}
          </p>

          <p className="mt-3 text-sm text-cream/70 font-sans max-w-xl mx-auto">
            {scrapbook.description}
          </p>

          {/* Chapter Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedChapter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all ${
                selectedChapter === 'all'
                  ? 'bg-gold text-midnight font-bold shadow-md scale-105'
                  : 'bg-[#2a1f1b] text-cream/70 hover:text-gold border border-gold/20'
              }`}
            >
              All Photos (20)
            </button>
            {scrapbook.chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapter(ch.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all ${
                  selectedChapter === ch.id
                    ? 'bg-gold text-midnight font-bold shadow-md scale-105'
                    : 'bg-[#2a1f1b] text-cream/70 hover:text-gold border border-gold/20'
                }`}
              >
                {ch.title} ({ch.photoIds.length})
              </button>
            ))}
          </div>
        </div>

        {/* Chapters and Photos Display */}
        {scrapbook.chapters.map((chapter) => {
          // If a specific chapter is selected and it's not this one, don't show it
          if (selectedChapter !== 'all' && selectedChapter !== chapter.id) {
            return null;
          }

          const chapterPhotos = scrapbook.photos.filter((p) =>
            chapter.photoIds.includes(p.id)
          );

          return (
            <div key={chapter.id} className="mb-20 last:mb-12">
              {/* Chapter Header Banner */}
              <div className="relative mb-8 pb-4 border-b border-gold/30 flex flex-col md:flex-row md:items-end justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                      {chapter.number}
                    </span>
                    <span className="text-gold/40">•</span>
                    <span className="text-xs text-cream/60 font-sans">
                      {chapter.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-cream mt-1">
                    {chapter.title}
                  </h3>
                  <p className="text-sm font-serif italic text-gold-light/90 mt-1 max-w-2xl">
                    "{chapter.description}"
                  </p>
                </div>

                <div className="text-xs font-mono text-cream/50 bg-[#1e1518] px-3 py-1 rounded-full border border-gold/20 self-start md:self-auto">
                  {chapterPhotos.length} {chapterPhotos.length === 1 ? 'Photograph' : 'Photographs'}
                </div>
              </div>

              {/* Photo Polaroids Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 items-stretch">
                {chapterPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handlePhotoClick(photo)}
                    className={`group cursor-pointer relative bg-[#FAF5EE] text-[#241c19] p-4 rounded-xl shadow-xl hover:shadow-2xl border border-[#9A7657]/40 flex flex-col justify-between transition-all duration-300 ${photo.rotation}`}
                  >
                    {/* Washi Tape */}
                    <div
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 rounded-sm z-10 ${getWashiClass(
                        photo.tapeColor
                      )}`}
                    />

                    {/* Polaroid Top Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#241c19] shadow-inner mb-4">
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%23241c19"/><text x="50%" y="45%" fill="%23D8B46A" font-family="serif" font-size="20" text-anchor="middle">Photo ${photo.id}</text><text x="50%" y="60%" fill="%23FAF5EE" font-family="sans-serif" font-size="14" text-anchor="middle">Memory ${photo.id}</text></svg>`;
                        }}
                      />

                      {/* Hover Overlay with expand icon */}
                      <div className="absolute inset-0 bg-midnight/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2.5 rounded-full bg-gold text-midnight shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Maximize2 size={16} />
                        </span>
                      </div>

                      {/* Photo Badge / Sticker */}
                      <span className="absolute bottom-2 right-2 text-sm bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-white">
                        {photo.sticker}
                      </span>
                    </div>

                    {/* Polaroid Bottom Note Area */}
                    <div className="flex flex-col justify-between flex-grow">
                      <p className="font-handwriting text-xl sm:text-2xl text-[#3b1220] leading-snug font-bold">
                        {photo.caption}
                      </p>

                      <div className="mt-3 pt-2 border-t border-[#9A7657]/20 flex items-center justify-between text-xs">
                        <span className="font-mono text-[#9A7657] uppercase tracking-wider text-[11px]">
                          {photo.note}
                        </span>
                        <span className="font-mono text-[10px] text-[#9A7657]/70 font-bold">
                          #{String(photo.id).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Section Closing Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-2xl bg-[#1e151c]/90 border border-gold/40 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md">
            <Sparkles className="mx-auto text-gold mb-3" size={24} />
            <p className="font-serif italic text-lg sm:text-2xl text-cream leading-relaxed">
              "{scrapbook.closingQuote}"
            </p>
            <span className="block mt-3 text-xs font-mono uppercase tracking-widest text-gold/80">
              Four Years • Yuvi & Nikki • Unfinished Story
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

