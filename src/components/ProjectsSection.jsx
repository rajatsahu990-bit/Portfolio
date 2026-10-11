import React from 'react';
import { profileData } from '../data/portfolioData';

export default function ProjectsSection() {
  return (
    <section className="sm:max-w-[85vw] md:max-w-[75vw] max-w-[96vw] m-auto min-h-[85vh] pt-6 pb-24">
      <h1 className="text-center text-white md:text-5xl text-3xl font-bold mb-4">
        Some Projects of mine:
      </h1>
      <p className="text-center text-neutral-400 font-mono text-xs sm:text-sm max-w-xl mx-auto mb-10">
        Hands-on software development, practical code repositories, and web applications.
      </p>

      {/* Development Under Progress Showcase Card */}
      <div className="max-w-3xl mx-auto">
        <div className="relative group">
          {/* Ambient Red Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-[#2f2e41] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />

          <div className="relative bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-8 sm:p-12 text-center shadow-2xl flex flex-col items-center">
            {/* Animated Status Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-neutral-900 border border-neutral-700/80 flex items-center justify-center mb-6 shadow-inner relative">
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ef4444]" />
              </span>
              <i className="fa-solid fa-code text-4xl sm:text-5xl text-[#ef4444] animate-pulse" />
            </div>

            {/* Title requested by user */}
            <h2 className="text-2xl sm:text-4xl font-mono font-bold tracking-wider text-white mb-3">
              DEVELOPMENT UNDER PROGRESS
            </h2>

            <p className="text-neutral-400 font-mono text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-6">
              Exciting web applications, software tools, and Python projects are currently in active development. They will be documented, open-sourced, and launched live right here soon!
            </p>

            {/* Terminal status box */}
            <div className="w-full max-w-md bg-neutral-950/90 border border-neutral-800 rounded-xl p-4 font-mono text-left text-xs mb-8">
              <div className="flex items-center gap-1.5 mb-3 border-b border-neutral-800 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="ml-2 text-neutral-500 text-[11px]">dev-status.sh</span>
              </div>
              <p className="text-green-400">$ git status</p>
              <p className="text-neutral-300 mt-1">On branch main</p>
              <p className="text-neutral-400 mt-1">Changes in progress: [HTML5, CSS3, JS, Python, Bootstrap]</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[#ef4444]">Building:</span>
                <div className="flex-1 bg-neutral-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-[#ef4444] h-full w-2/3 rounded-full animate-pulse" />
                </div>
                <span className="text-neutral-400 text-[10px]">Active</span>
              </div>
            </div>

            {/* Active Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['JavaScript', 'HTML5', 'CSS3', 'Python', 'Bootstrap', 'Git', 'GitHub'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-neutral-900 border border-white/5 text-neutral-300 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={profileData.socials.find(s => s.name === 'github')?.link || 'https://github.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-mono text-xs flex items-center gap-2 transition"
              >
                <i className="fa-brands fa-github text-sm" />
                <span>Visit GitHub Profile</span>
              </a>

              <a
                href={profileData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#ef4444] hover:bg-red-600 text-white font-mono text-xs font-semibold flex items-center gap-2 transition shadow-md shadow-red-500/20"
              >
                <i className="fa-brands fa-whatsapp text-sm" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
