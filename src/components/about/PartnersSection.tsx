import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../shared/Reveal';

const partnerKeys = ['exalt', 'banks', 'businessmen'];

export const PartnersSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-3">
          {t('partners.heading')}
        </h2>
        <div className="w-12 h-0.5 bg-[#c5a363] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {partnerKeys.map((key, index) => (
            <Reveal
              as="div"
              key={index}
              variant="slide-left"
              delay={index * 80}
              once={false}
              className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#c5a363]/40"
            >
              <h3 className="font-serif text-lg text-[#c5a363] font-semibold mb-3">
                {t(`partners.items.${key}.title`)}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {t(`partners.items.${key}.description`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};