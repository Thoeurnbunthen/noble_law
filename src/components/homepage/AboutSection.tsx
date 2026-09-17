import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-[#f4f1eb]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
            alt="Attorney thinking" 
            className="w-full h-380px md:h-420px object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <span className="text-[#c5a363] text-xs font-semibold tracking-widest uppercase mb-3 block">
            {t('aboutSection.eyebrow')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-6 leading-tight">
            {t('aboutSection.heading')}
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
            {t('aboutSection.description')}
          </p>
          <a
            href="#about"
            className="inline-flex items-center text-[#0e1e38] font-semibold text-xs tracking-wider uppercase hover:text-[#c5a363] transition group"
          >
            {t('aboutSection.learnMore')}
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};