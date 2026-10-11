import React from 'react';
import { skillsData } from '../data/portfolioData';
import skillsIllustration from '../assets/skills-illustration.svg';

export default function SkillsSection() {
  return (
    <section className="md:w-[75vw] w-[92vw] min-h-[85vh] sm:p-6 p-4 mx-auto pb-24">
      <h1 className="text-center text-white md:text-5xl text-3xl font-bold mb-3">
        My Tech Skills
      </h1>
      <p className="text-center text-neutral-400 font-mono text-xs sm:text-sm max-w-lg mx-auto mb-10">
        Current technical proficiencies, development tools, and technologies actively being mastered.
      </p>

      {/* Skills Grid matching square VC card layout from reference */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className={`p-6 bg-neutral-800/80 hover:bg-neutral-800 border ${
              skill.inProgress
                ? 'border-red-500/40 bg-red-950/20'
                : 'border-neutral-700/50 hover:border-[#ef4444]/60'
            } grid place-items-center aspect-square rounded-2xl hover:fill-[#ef4444] hover:text-[#ef4444] hover:-translate-y-1 ease-in-out duration-200 cursor-pointer group shadow-lg transition-all`}
            title={skill.name}
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <i
                className={`${skill.iconClass} text-4xl sm:text-5xl text-neutral-200 group-hover:text-[#ef4444] transition-colors ${
                  skill.inProgress ? 'animate-spin text-[#ef4444]' : ''
                }`}
              />
              <span
                className={`text-xs sm:text-sm font-mono font-bold tracking-wider text-center transition-colors ${
                  skill.inProgress ? 'text-[#ef4444] animate-pulse' : 'text-neutral-300 group-hover:text-white'
                }`}
              >
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Architecture Blueprint Illustration */}
      <div className="grid place-items-center md:my-8 my-10 pt-10">
        <div className="w-[70vw] sm:w-[320px] lg:w-[280px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 p-4 shadow-xl">
          <p className="text-[11px] font-mono text-center text-neutral-400 mb-2 uppercase tracking-widest">
            Learning Roadmap
          </p>
          <img
            src={skillsIllustration}
            alt="My Tech Skills Roadmap"
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
