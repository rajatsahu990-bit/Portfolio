import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import { profileData } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Sync state with URL path
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('about')) {
        setActiveTab('about');
      } else if (path.includes('projects')) {
        setActiveTab('projects');
      } else if (path.includes('skills')) {
        setActiveTab('skills');
      } else if (path.includes('contact')) {
        setActiveTab('contact');
      } else {
        setActiveTab('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // AudioContext unavailable or blocked
    }
  };

  const handleTabChange = (tabId) => {
    playClickSound();
    setActiveTab(tabId);
    const path = tabId === 'home' ? '/' : `/${tabId}`;
    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#161616] text-white flex flex-col justify-between selection:bg-[#ef4444] selection:text-white relative">
      {/* Background ambient lighting */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#2f2e41]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Minimal Top Header Bar */}
      <header className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-30">
        <button
          onClick={() => handleTabChange('home')}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700/80 flex items-center justify-center font-mono font-bold text-sm text-white group-hover:border-[#ef4444] transition-colors">
            RS
          </span>
          <span className="font-mono text-xs text-neutral-300 font-semibold tracking-wider group-hover:text-white transition-colors hidden sm:inline">
            RAJAT SAHU<span className="text-[#ef4444]">.</span>
          </span>
        </button>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Status pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Open to Work</span>
          </div>

          {/* Sound Effect Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition text-xs"
            title={soundEnabled ? "Mute UI sounds" : "Enable UI sounds"}
          >
            <i className={soundEnabled ? "fa-solid fa-volume-high text-[#ef4444]" : "fa-solid fa-volume-xmark"} />
          </button>

          {/* Resume Quick Button */}
          <button
            onClick={() => {
              playClickSound();
              setResumeOpen(true);
            }}
            className="px-3.5 py-1.5 rounded-lg bg-[#ef4444] hover:bg-red-600 text-white font-mono text-xs font-semibold tracking-wider transition shadow-md shadow-red-500/20 flex items-center gap-1.5"
          >
            <i className="fa-regular fa-file-pdf text-xs" />
            <span>CV</span>
          </button>
        </div>
      </header>

      {/* Main Dynamic View Area */}
      <main className="flex-1 w-full transition-opacity duration-300">
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            <HomeSection
              onNavigate={handleTabChange}
              onOpenResume={() => setResumeOpen(true)}
            />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-fade-in">
            <AboutSection onNavigate={handleTabChange} />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="animate-fade-in">
            <ProjectsSection />
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="animate-fade-in">
            <SkillsSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fade-in">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Clean Minimal Footer */}
      <footer className="w-full text-center py-6 pb-20 text-[11px] font-mono text-neutral-500 z-10 border-t border-white/5">
        <p>
          Designed & Built for <span className="text-neutral-300 font-semibold">{profileData.name}</span> • {new Date().getFullYear()}
        </p>
        <p className="mt-1 text-neutral-600">
          React • Tailwind CSS • Vite
        </p>
      </footer>

      {/* Signature Floating Dock Navigation matching rajxryan.vercel.app */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
