import React from 'react';

interface PracticeDetail {
  number: string;
  title: string;
  description: string;
  image: string;
}

const practices: PracticeDetail[] = [
  {
    number: '01',
    title: 'Commercial & Investment Law',
    description: 'Tailored structures to secure cross-border wealth, foreign direct investments, and legacy-tier market expansions. We help you design optimal joint ventures, manage regulatory protocols, and mitigate asset risks across various jurisdictions.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Legal Compliance & Enforcement',
    description: 'Rigorous corporate governance to build internal compliance programs and bulletproof defense layers. Our defense systems guard critical corporate assets, resolve statutory discrepancies, and enforce contract compliance.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Conjunction (Advisory & Mediation)',
    description: 'Delivering elegant conflict-resolution and cross-industry contract mediation. Our objective remains focused on protecting legacy relations while extracting optimal conditions and high-value strategic positions.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Civil & Criminal Litigation',
    description: 'Aggressive, scholar-level trial strategy and courtroom defense. From early investigative reviews to supreme corporate protection, we represent you with profound conviction and robust litigation frameworks.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop',
  },
];

export const PracticeList: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto space-y-24">
        {practices.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Text Side */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-[#c5a363] font-serif text-sm font-semibold">{item.number}</span>
                  <div className="w-8 h-[1px] bg-[#c5a363]"></div>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#0e1e38] font-semibold mb-4">
                  {item.title}
                </h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="rounded-sm overflow-hidden shadow-sm border border-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[260px] md:h-[320px] object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};