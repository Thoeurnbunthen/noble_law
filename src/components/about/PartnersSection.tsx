import React from 'react';

interface Partner {
  title: string;
  description: string;
}

const partners: Partner[] = [
  {
    title: 'eXalt Property Company',
    description: 'Corporate asset management, real estate acquisitions defense, and high-stakes lease mediation.',
  },
  {
    title: 'Banks & Institutions',
    description: 'Consulted on strict financial system legal architectures and state litigation compliance.',
  },
  {
    title: 'Businessman Network',
    description: 'Ongoing private client wealth strategy and operational safety frameworks.',
  },
];

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto text-center">
       
        <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-3">
          Our Partners & Clients
        </h2>
        <div className="w-12 h-0.5 bg-[#c5a363] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm shadow-sm border border-slate-100"
            >
              <h3 className="font-serif text-lg text-[#c5a363] font-semibold mb-3">
                {partner.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};