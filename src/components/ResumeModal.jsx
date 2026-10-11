import React from 'react';
import { profileData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#181818] border border-neutral-800 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-[#1c1c1c] print:hidden">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-file-pdf text-[#ef4444] text-lg" />
            <h3 className="font-bold font-mono text-white text-sm sm:text-base">
              Rajat_Sahu_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#ef4444] hover:bg-red-600 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
              title="Print or Save PDF"
            >
              <i className="fa-solid fa-download text-xs" />
              <span>Download / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark text-lg" />
            </button>
          </div>
        </div>

        {/* Realistic Styled Printable PDF Document Container */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-[#141414] text-neutral-200">
          <div className="bg-white text-neutral-900 rounded-lg p-6 sm:p-10 shadow-xl max-w-2xl mx-auto font-sans leading-relaxed text-xs sm:text-sm print:m-0 print:p-0 print:shadow-none print:w-full">
            
            {/* Resume Header */}
            <div className="border-b-2 border-neutral-900 pb-4 mb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-neutral-900">
                  {profileData.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-wider mt-0.5">
                  B.Tech CS(IT) Student • Aspiring Software Developer
                </p>
              </div>

              <div className="text-right text-[11px] sm:text-xs text-neutral-600 space-y-1 mt-3 sm:mt-0 font-mono">
                <p>
                  <i className="fa-solid fa-envelope text-red-600 mr-1.5" />
                  <a href={`mailto:${profileData.email}`} className="hover:underline">{profileData.email}</a>
                </p>
                <p>
                  <i className="fa-solid fa-phone text-red-600 mr-1.5" />
                  <a href={`tel:${profileData.phone}`} className="hover:underline">{profileData.phone}</a>
                </p>
                <p>
                  <i className="fa-brands fa-linkedin text-red-600 mr-1.5" />
                  <a href="https://www.linkedin.com/in/rajat-sahu-444272386" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/rajat-sahu-444272386
                  </a>
                </p>
                <p>
                  <i className="fa-brands fa-github text-red-600 mr-1.5" />
                  <a href="https://github.com/rajatsahu990-bit" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/rajatsahu990-bit
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-location-dot text-red-600 mr-1.5" />
                  Greater Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Profile Objective */}
            <div className="mb-5">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                Professional Objective
              </h2>
              <p className="text-neutral-700 text-xs sm:text-[13px] leading-relaxed">
                Motivated 2nd-year B.Tech CS(IT) (Computer Science & Information Technology) student at GL Bajaj Institute of Technology and Management with a strong foundation in programming and web technologies. Eager to solve real-world technical problems, build robust software applications, and collaborate in innovative software engineering teams.
              </p>
            </div>

            {/* Education (Updated with exact requested details) */}
            <div className="mb-5">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Education
              </h2>

              <div className="space-y-3">
                {/* College */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-xs sm:text-sm">
                      Bachelor of Technology (B.Tech) in Computer Science - CS(IT)
                    </h3>
                    <p className="text-neutral-600 text-xs font-medium">
                      GL Bajaj Institute of Technology and Management
                    </p>
                    <p className="text-neutral-500 text-[11px] mt-0.5">
                      Current Year: 2nd Year CS(IT) • Core Courses: DSA, Python, Web Development
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded whitespace-nowrap">
                    Pass out in 2029
                  </span>
                </div>

                {/* Intermediate */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-xs sm:text-sm">
                      Intermediate (Class XII)
                    </h3>
                    <p className="text-neutral-600 text-xs font-medium">
                      Brightland School
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded whitespace-nowrap">
                    2024
                  </span>
                </div>

                {/* High School */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-xs sm:text-sm">
                      High School (Class X)
                    </h3>
                    <p className="text-neutral-600 text-xs font-medium">
                      Bright School
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded whitespace-nowrap">
                    2022
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-5">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-bold text-neutral-900">Programming Languages:</span>
                  <span className="text-neutral-700 ml-1.5">JavaScript (JS), Python</span>
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Web Development:</span>
                  <span className="text-neutral-700 ml-1.5">HTML5, CSS3, Bootstrap</span>
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Version Control & Tools:</span>
                  <span className="text-neutral-700 ml-1.5">Git, GitHub</span>
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Current Focus:</span>
                  <span className="text-neutral-700 ml-1.5">Full Stack Systems, Algorithms (In Progress)</span>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                Projects
              </h2>
              <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-neutral-900 text-xs">
                    Software & Web Applications
                  </h3>
                  <span className="text-[10px] font-mono text-red-600 font-semibold uppercase">
                    Development Under Progress
                  </span>
                </div>
                <p className="text-neutral-600 text-xs mt-1">
                  Actively engineering responsive front-end projects, Python utilities, and practicing hands-on problem solving using Git and GitHub version control.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-3.5 border-t border-neutral-800 bg-[#1c1c1c] flex items-center justify-between print:hidden">
          <p className="text-xs font-mono text-neutral-400">
            Use "Download / Save PDF" to export as a clean document.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-mono transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
