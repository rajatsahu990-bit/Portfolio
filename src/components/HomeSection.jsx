import React from 'react';
import { profileData } from '../data/portfolioData';
import developerHero from '../assets/developer-hero.svg';

export default function HomeSection({ onNavigate, onOpenResume }) {
  return (
    <section className="min-h-[88vh] flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 py-10 gap-10 md:gap-16">
      {/* Left: Introduction */}
      <div className="welcome-text flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>Available for New Roles & Projects</span>
        </div>

        <h1 className="md:text-6xl text-4xl font-bold text-white tracking-tight leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
            {profileData.name}
          </span>
        </h1>

        <h2>
          <p className="text-white font-mono mt-3 text-lg sm:text-xl tracking-widest text-white/90">
            {profileData.tagline}
          </p>
        </h2>

        <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-md font-sans leading-relaxed">
          {profileData.bioShort}
        </p>

        {/* Social Icons matching rajxryan.vercel.app */}
        <div className="flex flex-row justify-center md:justify-start gap-4 mt-8">
          {profileData.socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.text}
              title={social.text}
              className="group"
            >
              <div className="grid place-items-center rounded-full w-11 h-11 bg-neutral-900 border border-white/5 cursor-pointer hover:bg-[#ef4444] transition-all duration-200 hover:scale-110 shadow-md">
                <i className={`${social.class} text-white text-lg transition-transform group-hover:scale-110`} />
              </div>
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="md:flex flex-row items-center gap-4 mt-10 hidden">
          <div
            onClick={() => onNavigate('contact')}
            className="group flex items-center gap-3 cursor-pointer bg-[#1c1c1c] hover:bg-[#222222] border border-white/10 rounded-xl px-4 py-2.5 transition-all duration-300"
          >
            <span className="text-xs text-white/80 font-mono">Hiring for Tech Roles?</span>
            <button
              type="button"
              className="text-xs font-medium text-white bg-[#ef4444] hover:bg-red-600 rounded-lg px-3 py-1.5 transition-all shadow-md group-hover:shadow-red-500/25"
            >
              Let's Talk
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenResume}
            className="text-xs font-mono font-semibold tracking-wider text-white bg-[#1f1f1f] hover:bg-[#282828] border border-white/10 rounded-xl px-5 py-3 transition-all hover:border-[#ef4444]/50 shadow-md flex items-center gap-2"
          >
            <i className="fa-regular fa-file-pdf text-[#ef4444]" />
            Resume
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex flex-row items-center gap-3 mt-8 w-full justify-center">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="text-xs font-mono bg-[#ef4444] hover:bg-red-600 text-white rounded-lg px-4 py-2.5 transition-all font-semibold shadow-lg shadow-red-500/20"
          >
            Let's Talk
          </button>
          <button
            type="button"
            onClick={onOpenResume}
            className="text-xs font-mono bg-[#1f1f1f] hover:bg-[#252525] border border-white/10 text-white rounded-lg px-4 py-2.5 transition-all flex items-center gap-2"
          >
            <i className="fa-regular fa-file-pdf text-[#ef4444]" />
            Resume
          </button>
        </div>
      </div>

      {/* Right: Hero Developer Graphic */}
      <div className="self-img flex-1 flex justify-center items-center relative w-full">
        <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full scale-75 -z-10 pointer-events-none" />
        <div className="w-[80vw] sm:w-[420px] lg:w-[460px] max-w-full transform hover:scale-[1.02] transition-transform duration-500 drop-shadow-2xl">
          <img
            src={developerHero}
            alt="Rajat Sahu - Developer Graphic"
            className="w-full h-auto object-contain animate-float"
          />
        </div>
      </div>
    </section>
  );
}
