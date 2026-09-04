import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0e1e38] text-white px-6 md:px-16 py-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-[#c5a363] text-[#0e1e38] font-serif font-bold text-xl w-9 h-9 flex items-center justify-center rounded-sm">
            N
          </div>
          <div className="leading-tight">
            <span className="block font-serif tracking-widest text-sm font-bold">NOBLE</span>
            <span className="block text-[10px] tracking-widest text-slate-300">LAW OFFICE</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#home" className="text-white border-b-2 border-[#c5a363] pb-1">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#practice" className="hover:text-white transition">Practice</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#consultation" className="bg-[#c5a363] hover:bg-[#b39152] text-[#0e1e38] font-semibold text-xs px-5 py-2.5 uppercase tracking-wider transition">
            Consultation
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-700 flex flex-col space-y-4 text-sm font-medium">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-slate-300">About</a>
          <a href="#practice" className="text-slate-300">Practice</a>
          <a href="#contact" className="text-slate-300">Contact</a>
          <a href="#consultation" className="bg-[#c5a363] text-[#0e1e38] font-semibold text-center py-2 uppercase tracking-wider">
            Consultation
          </a>
        </div>
      )}
    </nav>
  );
};