import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo2.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isKhmer = i18n.language === 'km';

  const toggleLanguage = () => {
    i18n.changeLanguage(isKhmer ? 'en' : 'km');
  };

  const LanguageButtonContent = () => (
    <>
      <span className="text-base leading-none">{isKhmer ? '🇰🇭' : '🇬🇧'}</span>
      <span className="truncate">{isKhmer ? t('language.khmer') : t('language.english')}</span>
    </>
  );

  return (
    <nav className="bg-[#0e1e38] text-white px-6 md:px-16 py-2 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Link to Home */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex items-center justify-center rounded-sm overflow-hidden">
            <img
              src={logo}
              alt="Noble Law Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
          <div className="leading-tight">
            <span className="block font-serif tracking-widest text-sm font-bold">{t('nav.brandName')}</span>
            <span className="block text-[10px] tracking-widest text-slate-300">{t('nav.brandSub')}</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            to="/"
            className={`${isActive('/') ? 'text-white border-b-2 border-[#c5a363] pb-1' : 'text-slate-300 hover:text-white'} transition`}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/about"
            className={`${isActive('/about') ? 'text-white border-b-2 border-[#c5a363] pb-1' : 'text-slate-300 hover:text-white'} transition`}
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/practice"
            className={`${isActive('/practice') ? 'text-white border-b-2 border-[#c5a363] pb-1' : 'text-slate-300 hover:text-white'} transition`}
          >
            {t('nav.practice')}
          </Link>
          <Link
            to="/contact"
            className={`${isActive('/contact') ? 'text-white border-b-2 border-[#c5a363] pb-1' : 'text-slate-300 hover:text-white'} transition`}
          >
            {t('nav.contact')}
          </Link>
        </div>

        {/* Desktop Fixed-Width Language Switcher Button */}
        <div className="hidden md:block">
          <button
            onClick={toggleLanguage}
            aria-label="Switch language"
            className="w-32 bg-[#c5a363] hover:bg-[#b39152] text-[#0e1e38] font-bold text-xs py-2.5 transition flex items-center justify-center space-x-1.5 rounded-sm shrink-0"
          >
            <LanguageButtonContent />
          </button>
        </div>

        {/* Mobile Language Switcher + Hamburger */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleLanguage}
            aria-label="Switch language"
            className="bg-[#c5a363] hover:bg-[#b39152] text-[#0e1e38] font-bold text-xs px-3 py-2 transition flex items-center justify-center space-x-1 rounded-sm shrink-0"
          >
            <span className="text-base leading-none">{isKhmer ? '🇰🇭' : '🇬🇧'}</span>
            <span>{isKhmer ? 'ខ្មែរ' : 'EN'}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none"
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
      </div>

      {/* Mobile Menu Dropdown Links */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-700 flex flex-col space-y-4 text-sm font-medium">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={isActive('/') ? 'text-white font-semibold' : 'text-slate-300'}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={isActive('/about') ? 'text-white font-semibold' : 'text-slate-300'}
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/practice"
            onClick={() => setIsOpen(false)}
            className={isActive('/practice') ? 'text-white font-semibold' : 'text-slate-300'}
          >
            {t('nav.practice')}
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={isActive('/contact') ? 'text-white font-semibold' : 'text-slate-300'}
          >
            {t('nav.contact')}
          </Link>
        </div>
      )}
    </nav>
  );
};
