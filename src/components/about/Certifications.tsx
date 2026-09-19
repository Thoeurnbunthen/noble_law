import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../shared/Reveal';
import image from '../../assets/image.png';

export const Certifications: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6 md:px-16 bg-[#f4f1eb] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <Reveal as="div" variant="slide-left" once={false}>

          <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-6 leading-tight">
            {t('certifications.heading')}
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            {t('certifications.description')}
          </p>
        </Reveal>

        {/* Right Frame Image */}
        <Reveal as="div" variant="slide-right" once={false} className="overflow-hidden rounded-sm shadow-md">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
            alt="Law Certification Frame"
            className="w-full h-280px md:h-340px object-cover transition-transform duration-500 hover:scale-110"
          />
        </Reveal>
      </div>
    </section>
  );
};