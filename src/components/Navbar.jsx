import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isActive ? "#2f2e41" : "#808080"} className="w-6 h-6 nav-icon group-hover:text-[#ef4444] transition-all duration-200">
          <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
          <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About',
      path: '/about',
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isActive ? "#2f2e41" : "#808080"} className="w-6 h-6 nav-icon group-hover:text-[#ef4444] transition-all duration-200">
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Projects',
      path: '/projects',
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isActive ? "#2f2e41" : "#808080"} className="w-6 h-6 nav-icon group-hover:text-[#ef4444] transition-all duration-200">
          <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'skills',
      label: 'Skills',
      path: '/skills',
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isActive ? "#2f2e41" : "#808080"} className="w-6 h-6 nav-icon group-hover:text-[#ef4444] transition-all duration-200">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      path: '/contact',
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isActive ? "#2f2e41" : "#808080"} className="w-6 h-6 nav-icon group-hover:text-[#ef4444] transition-all duration-200">
          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM12 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.75 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const handleNavClick = (item) => {
    setActiveTab(item.id);
    window.history.pushState(null, '', item.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed flex flex-row justify-center bottom-0 left-0 right-0 m-auto w-full h-[6vh] mb-4 z-40">
      <div className="flex flex-row justify-evenly items-center rounded-2xl bg-white shadow-2xl h-fit m-auto gap-2 sm:gap-4 xl:w-[25vw] min-[500px]:w-[380px] min-[400px]:w-[330px] w-[310px] py-1.5 px-3 border border-neutral-200/50 backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              aria-label={item.label}
              title={item.label}
              className="relative group p-1.5 rounded-full transition-transform active:scale-95 focus:outline-none"
            >
              <div className={`grid place-items-center rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-colors ${
                isActive ? 'bg-neutral-100 shadow-inner' : 'hover:bg-neutral-100/60'
              }`}>
                {item.icon(isActive)}
              </div>

              {/* Tooltip */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1f1f1f] text-white text-[11px] font-mono px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                {item.label}
              </span>

              {/* Active Dot Indicator */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#ef4444] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
