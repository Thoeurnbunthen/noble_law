import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../shared/Reveal';

interface PracticeDetail {
  number: string;
  key: string;
  image: string;
}

const practices: PracticeDetail[] = [
  {
    number: '01',
    key: 'compliance',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '02',
    key: 'litigation',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '03',
    key: 'enforcement',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '04',
    key: 'injunction',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop',
  },
];

export const PracticeList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {practices.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <Reveal
              as="div"
              key={index}
              variant={isEven ? 'slide-left' : 'slide-right'}
              threshold={0.2}
              once={false}
              className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Text Side */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-[#c5a363] font-serif text-sm font-semibold">{item.number}</span>
                  <div className="w-8 h-1px bg-[#c5a363]"></div>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#0e1e38] font-semibold mb-4">
                  {t(`practiceList.items.${item.key}.title`)}
                </h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {t(`practiceList.items.${item.key}.description`)}
                </p>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="rounded-sm overflow-hidden shadow-sm border border-slate-100">
                  <img
                    src={item.image}
                    alt={t(`practiceList.items.${item.key}.title`)}
                    className="w-full h-260px md:h-320px object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};