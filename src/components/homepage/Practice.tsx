import React from 'react';

interface PracticeItem {
  icon: string;
  title: string;
  description: string;
}

const practices: PracticeItem[] = [
  {
    icon: '🏛️',
    title: 'Commercial & Investment',
    description: 'Comprehensive advisory on venture structures, cross-border investments, mergers, and corporate security.',
  },
  {
    icon: '🛡️',
    title: 'Legal Compliance',
    description: 'Robust frameworks aligning your enterprise operations with local laws, environmental regulations, and corporate ethics.',
  },
  {
    icon: '⚖️',
    title: 'Civil & Criminal Litigation',
    description: 'Uncompromising courtroom representation from defense strategies to high-profile dispute resolutions.',
  },
  {
    icon: '📜',
    title: 'Legal Enforcement',
    description: 'Direct legal execution and strategic defense to guard corporate IP, brand integrity, and operational licenses.',
  },
];

export const PracticeAreas: React.FC = () => {
  return (
    <section id="practice" className="py-20 px-6 md:px-16 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-3">
          Our Primary Practice
        </h2>
        <div className="w-12 h-0.5 bg-[#c5a363] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 text-left hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-[#f5efe6] text-[#c5a363] flex items-center justify-center rounded mb-6 text-lg">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg text-[#0e1e38] font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};