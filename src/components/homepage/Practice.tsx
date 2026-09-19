import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../shared/Reveal';

interface PracticeItem {
  icon: string;
  key: string;
}

const practices: PracticeItem[] = [
  { icon: '🏛️', key: 'commercial' },
  { icon: '🛡️', key: 'compliance' },
  { icon: '⚖️', key: 'litigation' },
  { icon: '📜', key: 'enforcement' },
];

export const PracticeAreas: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="practice" className="py-20 px-6 md:px-16 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-3">
          {t('practiceAreas.heading')}
        </h2>
        <div className="w-12 h-0.5 bg-[#c5a363] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((item, index) => (
            <Reveal
              as="div"
              key={index}
              variant={index < practices.length / 2 ? 'slide-left' : 'slide-right'}
              delay={(index % (practices.length / 2)) * 100}
              once={false}
              className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#c5a363]/40"
            >
              <div className="w-10 h-10 bg-[#f5efe6] text-[#c5a363] flex items-center justify-center rounded mb-6 text-lg">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg text-[#0e1e38] font-semibold mb-3">
                {t(`practiceAreas.items.${item.key}.title`)}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {t(`practiceAreas.items.${item.key}.description`)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};