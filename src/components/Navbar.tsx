import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'KM' | 'ZH'>('EN');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    if (lang === 'EN') setLang('KM');
    else if (lang === 'KM') setLang('ZH');
    else setLang('EN');
  };

  return (
    <nav className="bg-[#0e1e38] text-white px-6 md:px-16 py-6 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Link to Home */}
        <Link to="/" className="flex items-center space-x-3">
          <div className=" w-9 h-9 flex items-center justify-center rounded-sm overflow-hidden p-1">
            <img 
              src={logo} 
              alt="Noble Law Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <span className="block font-serif tracking-widest text-sm font-bold">NOBLE</span>
            <span className="block text-[10px] tracking-widest text-slate-300">LAW OFFICE</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-white border-b-2 border-[#c5a363] pb-1' : 'text-slate-300 hover:text-white'} transition`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${isActive('/about') ? 'text-white border-b-2 border-[#c5a363] pb-1' : 'text-slate-300 hover:text-white'} transition`}
          >
            About
          </Link>
          <Link 
            to="/practice" 
            className={`${isActive('/practice') ? 'text-white border-b-2 border-[#c5a363] pb-1' : 'text-slate-300 hover:text-white'} transition`}
          >
            Practice
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-white border-b-2 border-[#c5a363] pb-1' : 'text-slate-300 hover:text-white'} transition`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Fixed-Width Language Switcher Button */}
        <div className="hidden md:block">
          <button 
            onClick={toggleLanguage}
            className="w-28 bg-[#c5a363] hover:bg-[#b39152] text-[#0e1e38] font-bold text-xs py-2.5 transition flex items-center justify-center space-x-1.5 rounded-sm shrink-0"
          >
            
            <span className="truncate">{lang === 'EN' ? 'English' : lang === 'KM' ? 'ភាសាខ្មែរ' : '中文'}</span>
          </button>
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

      {/* Mobile Menu Dropdown Links */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-700 flex flex-col space-y-4 text-sm font-medium">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className={isActive('/') ? 'text-white font-semibold' : 'text-slate-300'}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className={isActive('/about') ? 'text-white font-semibold' : 'text-slate-300'}
          >
            About
          </Link>
          <Link 
            to="/practice" 
            onClick={() => setIsOpen(false)} 
            className={isActive('/practice') ? 'text-white font-semibold' : 'text-slate-300'}
          >
            Practice
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className={isActive('/contact') ? 'text-white font-semibold' : 'text-slate-300'}
          >
            Contact
          </Link>
          
          {/* Mobile Language Switcher Button */}
          <button 
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="w-full bg-[#c5a363] text-[#0e1e38] font-bold text-center py-2.5 flex items-center justify-center space-x-2 rounded-sm"
          >
            
            <span>{lang === 'EN' ? 'English' : lang === 'KM' ? 'ភាសាខ្មែរ' : '中文'}</span>
          </button>
        </div>
      )}
    </nav>
  );
};