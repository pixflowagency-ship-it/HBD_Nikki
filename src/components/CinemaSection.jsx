import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, RotateCcw, Sparkles } from 'lucide-react';
import { storyConfig } from '../data/storyData';
import { sound } from '../utils/soundEffects';

export default function CinemaSection() {
  const { cinema } = storyConfig;
  const [selectedVideo, setSelectedVideo] = useState(cinema.videoSources[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // When video changes, reset state
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
      setHasEnded(false);
      videoRef.current.load();
    }
  }, [selectedVideo]);

  const togglePlay = () => {
    sound.playChime();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasEnded(false);
      }).catch((err) => {
        console.warn("Video play error:", err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setCurrentTime(current);
    setProgress((current / total) * 100);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * (videoRef.current.duration || 0);
    videoRef.current.currentTime = newTime;
    setProgress(percentage * 100);
  };

  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section
      id="cinema"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#140f17] via-[#0d0d16] to-[#120f1c] flex items-center justify-center overflow-hidden"
    >
      {/* Ambient Theater Backlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/40 border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-4">
            <Film size={13} />
            <span>THE CINEMA ROOM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-cream tracking-wide">
            {cinema.heading}
          </h2>

          <p className="mt-2 text-xl sm:text-2xl font-serif italic text-gold">
            {cinema.subheading}
          </p>

          <p className="mt-3 text-sm text-cream/70 font-sans italic">
            "{cinema.preNotice}"
          </p>

          {/* Video Selector Tabs (if multiple videos exist) */}
          {cinema.videoSources.length > 1 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {cinema.videoSources.map((v) => (
                <button
                  key={v.id}
                  onClick={() => {
                    sound.playChime();
                    setSelectedVideo(v);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-cinzel transition-all ${
                    selectedVideo.id === v.id
                      ? 'bg-gold text-midnight font-bold shadow-md scale-105'
                      : 'bg-midnight-light text-cream/70 hover:text-gold border border-gold/20'
                  }`}
                >
                  {v.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Cinematic Video Player Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-[#241c24] via-[#17131d] to-[#0e0c14] border-2 border-gold/40 shadow-[0_0_50px_rgba(216,180,106,0.2)]"
        >
          {/* Top Film Strip Aesthetics */}
          <div className="flex items-center justify-between pb-3 px-2 border-b border-gold/15 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-gold/90 font-bold">
                NOW SCREENING: {selectedVideo.title.toUpperCase()}
              </span>
            </div>
            <span className="text-[11px] font-mono text-cream/50">
              AUDIO & VIDEO TRIBUTE
            </span>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center group shadow-2xl">
            <video
              ref={videoRef}
              src={selectedVideo.src}
              poster={selectedVideo.poster}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              className="w-full h-full object-contain"
              playsInline
            />

            {/* Big Center Play Overlay Button when paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-midnight/50 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gold to-gold-light text-midnight flex items-center justify-center shadow-[0_0_30px_rgba(216,180,106,0.6)] group-hover:scale-110 active:scale-95 transition-transform pl-1.5">
                  <Play size={36} fill="#101426" />
                </div>
                <span className="mt-4 font-cinzel text-sm sm:text-base text-cream font-bold tracking-widest drop-shadow">
                  Click to Watch Video
                </span>
                <span className="text-xs text-cream/70 font-sans mt-1">
                  (Audio included • Turn up volume)
                </span>
              </div>
            )}

            {/* Custom Control Bar at Bottom of Video */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 opacity-90 hover:opacity-100 transition-opacity">
              {/* Progress Slider */}
              <div
                onClick={handleSeek}
                className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-3 relative overflow-hidden group/bar"
              >
                <div
                  className="h-full bg-gradient-to-r from-burgundy via-gold to-gold-light rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-cream text-xs font-mono">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:text-gold transition-colors"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:text-gold transition-colors"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <span>
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                        setIsPlaying(true);
                      }
                    }}
                    title="Replay from start"
                    className="p-1.5 rounded-lg hover:text-gold transition-colors"
                  >
                    <RotateCcw size={16} />
                  </button>

                  <button
                    onClick={toggleFullScreen}
                    title="Fullscreen"
                    className="p-1.5 rounded-lg hover:text-gold transition-colors"
                  >
                    <Maximize size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* After video ends notification */}
          {hasEnded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-2xl bg-gold/15 border border-gold/40 text-center"
            >
              <Sparkles className="mx-auto text-gold mb-1" size={18} />
              <p className="font-serif italic text-gold text-base sm:text-lg">
                "{cinema.postNotice}"
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

