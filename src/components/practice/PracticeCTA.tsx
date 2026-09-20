import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../shared/Reveal';

export const PracticeCTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-6 md:px-16 bg-[#f4f1eb] text-center">
      <Reveal as="div" className="group max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-[#0e1e38] font-normal mb-3">
          {t('practiceCTA.heading')}
        </h2>
        <div className="w-0 h-0.5 bg-[#c5a363] mx-auto mb-6 transition-all duration-700 delay-300 group-data-[inview=true]:w-16" />
        <p className="text-slate-600 text-xs md:text-sm mb-8">
          {t('practiceCTA.subtitle')}
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#0e1e38] hover:bg-[#0b172a] text-white font-semibold text-xs px-8 py-3.5 uppercase tracking-wider transition"
        >
          {t('practiceCTA.button')}
        </a>
      </Reveal>
    </section>
  );
};