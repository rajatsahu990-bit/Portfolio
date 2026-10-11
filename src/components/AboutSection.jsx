import React from 'react';
import { profileData } from '../data/portfolioData';
import developerHero from '../assets/developer-hero.svg';

export default function AboutSection({ onNavigate }) {
  return (
    <section className="md:w-[75vw] w-[92vw] min-h-[85vh] p-4 sm:p-6 lg:p-10 mx-auto pb-24">
      <h1 className="text-center text-white md:text-5xl sm:text-3xl text-2xl font-bold mb-8">
        About Me:
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-start gap-8 md:gap-12">
        {/* Left Column: Bio Content & Education */}
        <div className="about-me-text flex-1 lg:px-6 p-2 md:text-xl sm:text-lg text-sm font-mono text-white/80 leading-relaxed space-y-5">
          <p>
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis font-bold">
              {profileData.name}
            </span>
            . A 2nd-year CS(IT) (Computer Science & Information Technology) student at{" "}
            <span className="border-b-2 border-[#EF4444] border-opacity-50 text-white font-semibold">
              GL Bajaj Institute of Technology and Management
            </span>{" "}
            (batch of 2029).
          </p>

          <p>
            I am passionate about coding, web development, and problem solving. I enjoy exploring modern tools, writing clean code, and working towards building impactful digital experiences.
          </p>

          {/* Education Journey Timeline */}
          <div className="pt-2">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap text-[#ef4444]" />
              <span>Educational Background:</span>
            </h3>

            <div className="space-y-3 font-sans text-xs sm:text-sm">
              {/* B.Tech */}
              <div className="p-3.5 bg-neutral-900/90 border-l-4 border-red-500 rounded-r-xl border border-neutral-800">
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    B.Tech in Computer Science - CS(IT) (2nd Year)
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-[#ef4444] font-mono text-xs font-semibold">
                    Pass out in 2029
                  </span>
                </div>
                <p className="text-neutral-400 font-mono mt-1 text-xs">
                  GL Bajaj Institute of Technology and Management
                </p>
                <p className="text-neutral-300 text-xs mt-1">
                  Currently pursuing core computer science subjects, data structures, and hands-on software development.
                </p>
              </div>

              {/* Intermediate */}
              <div className="p-3.5 bg-neutral-900/90 border-l-4 border-neutral-600 rounded-r-xl border border-neutral-800">
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    Intermediate (Class XII)
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono text-xs">
                    2024
                  </span>
                </div>
                <p className="text-neutral-400 font-mono mt-1 text-xs">
                  Brightland School
                </p>
              </div>

              {/* High School */}
              <div className="p-3.5 bg-neutral-900/90 border-l-4 border-neutral-600 rounded-r-xl border border-neutral-800">
                <div className="flex justify-between items-start flex-wrap gap-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    High School (Class X)
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono text-xs">
                    2022
                  </span>
                </div>
                <p className="text-neutral-400 font-mono mt-1 text-xs">
                  Brightland School
                </p>
              </div>
            </div>
          </div>

          {/* Performance & Status Callout Box */}
          <div className="p-4 sm:p-5 bg-neutral-900/90 border border-neutral-800 flex gap-4 justify-between items-center rounded-xl mt-6 shadow-lg">
            <div className="text-2xl sm:text-3xl text-[#ef4444]/80 flex-shrink-0">
              <i className="fa-solid fa-code animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm font-sans font-medium text-neutral-300 tracking-wide">
              {profileData.noticeText}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('skills')}
              className="px-5 py-2.5 rounded-lg bg-[#ef4444] hover:bg-red-600 text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-md shadow-red-500/20 flex items-center gap-2"
            >
              <span>View Skills</span>
              <i className="fa-solid fa-arrow-right text-xs" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-lg bg-[#1f1f1f] hover:bg-[#282828] border border-white/10 text-white font-mono text-xs tracking-wider transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column: Profile Card */}
        <div className="w-full md:w-[38%] flex flex-col items-center">
          <div className="relative group w-full max-w-[340px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-[#2f2e41] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative bg-[#1c1c1c] border border-neutral-800 rounded-2xl p-6 text-center shadow-2xl">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#161616] border-2 border-[#ef4444]/60 p-2 overflow-hidden shadow-inner flex items-center justify-center">
                <img
                  src={developerHero}
                  alt={profileData.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-white tracking-wide">
                {profileData.name}
              </h3>
              <p className="text-xs font-mono text-[#ef4444] mt-1">
                {profileData.role}
              </p>
              <p className="text-xs text-neutral-400 mt-2 font-sans flex items-center justify-center gap-1.5">
                <i className="fa-solid fa-graduation-cap text-[#ef4444]" />
                GL Bajaj Institute of Tech & Mgt
              </p>

              {/* Contact Quick links */}
              <div className="mt-6 pt-5 border-t border-neutral-800 space-y-2.5 text-xs font-mono text-left">
                <div className="flex items-center gap-2 text-neutral-300 truncate">
                  <i className="fa-solid fa-envelope text-[#ef4444] w-4" />
                  <a href={`mailto:${profileData.email}`} className="hover:text-white truncate">
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <i className="fa-solid fa-phone text-[#ef4444] w-4" />
                  <a href={`tel:${profileData.phone}`} className="hover:text-white">
                    {profileData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <i className="fa-brands fa-whatsapp text-green-500 w-4" />
                  <a href={profileData.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                    WhatsApp Chat
                  </a>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <i className="fa-brands fa-github text-white w-4" />
                  <a href="https://github.com/rajatsahu990-bit" target="_blank" rel="noopener noreferrer" className="hover:text-[#ef4444] truncate">
                    github.com/rajatsahu990-bit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
