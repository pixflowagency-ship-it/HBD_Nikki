import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FallingParticles from './components/FallingParticles';
import Lightbox from './components/Lightbox';
import InvitationSection from './components/InvitationSection';
import BeginningSection from './components/BeginningSection';
import ScrapbookSection from './components/ScrapbookSection';
import CinemaSection from './components/CinemaSection';
import MagicalUniverseSection from './components/MagicalUniverseSection';
import BainganSection from './components/BainganSection';
import FinalLetterSection from './components/FinalLetterSection';
import BirthdayFinaleSection from './components/BirthdayFinaleSection';
import Footer from './components/Footer';
import { storyConfig } from './data/storyData';

export default function App() {
  const [activeSection, setActiveSection] = useState('invitation');
  const [storyProgress, setStoryProgress] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Track scroll position to update active section & story progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setStoryProgress(progress);

      const sectionIds = [
        'invitation',
        'beginning',
        'scrapbook',
        'cinema',
        'magical',
        'baingan',
        'letter',
        'finale',
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateLightbox = (direction) => {
    if (!selectedPhoto) return;
    const all = storyConfig.scrapbook.photos;
    const currentIndex = all.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % all.length;
      setSelectedPhoto(all[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + all.length) % all.length;
      setSelectedPhoto(all[prevIndex]);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-midnight text-cream overflow-x-hidden">
      {/* Floating Sparkles & Golden Dust */}
      <FallingParticles count={24} />

      {/* Navigation Bar with Progress Bar & Audio Controls */}
      <Navbar activeSection={activeSection} storyProgress={storyProgress} />

      {/* Main Content Flow — The 7 Chapters/Sections */}
      <main>
        {/* Page 01: The Invitation — Intro Screen */}
        <InvitationSection onOpenStory={() => scrollTo('beginning')} />

        {/* Page 02: The Beginning — Batido */}
        <BeginningSection onGoToScrapbook={() => scrollTo('scrapbook')} />

        {/* Page 03: The Scrapbook — Four Years Together (20 Photos) */}
        <ScrapbookSection onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Page 04: The Cinema Room — Our Special Video */}
        <CinemaSection />

        {/* Page 05: The Magical Universe — Potterhead + Shinchan */}
        <MagicalUniverseSection />

        {/* Page 06: The Baingan Chronicles — Our Madness */}
        <BainganSection />

        {/* Page 07: The Final Letter — For Nikki */}
        <FinalLetterSection />

        {/* Final Screen: Happy Birthday Nikki */}
        <BirthdayFinaleSection onReplay={() => scrollTo('invitation')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Photo Lightbox Modal */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          allPhotos={storyConfig.scrapbook.photos}
          onClose={() => setSelectedPhoto(null)}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </div>
  );
}

