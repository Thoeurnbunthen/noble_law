import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="relative bg-[#0b172a] text-white pt-32 pb-20 md:py-48 px-6 md:px-16 overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Animated Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000ms ease-out scale-105 hover:scale-110"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 23, 42, 0.88), rgba(11, 23, 42, 0.88)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop')`,
        }}
      />

      {/* Decorative Ambient Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c5a363]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="max-w-xl">
          
          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_forwards]">
            {t('hero.heading')}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            {t('hero.subtitle')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            {/* Navigates to /contact */}
            <Link
              to="/contact"
              className="bg-[#c5a363] hover:bg-[#b39152] text-[#0e1e38] font-semibold text-xs px-6 py-3.5 text-center uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c5a363]/20 rounded-sm"
            >
              {t('hero.contactUs')}
            </Link>

            {/* Navigates to /about */}
            <Link
              to="/about"
              className="border border-slate-400 hover:border-white text-white font-semibold text-xs px-6 py-3.5 text-center uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-white/5 rounded-sm"
            >
              {t('hero.exploreHistory')}
            </Link>
          </div>

        </div>
      </div>

      {/* CSS Keyframe Style Injection */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};