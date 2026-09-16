import React from 'react';

interface Partner {
  title: string;
  description: string;
}

const partners: Partner[] = [
  {
    title: 'eXalt Property Company',
    description: 'A key real estate appraisal and property development. Now We are in MOU for legal consulting and drafting. ',
  },
  {
    title: 'Banks and Financial Institutions',
    description: 'Supporting and reviewing the contracts and security. We are the Representatives for claims, conjunction and legal enforcement at court of Cambodia. Sincerely , we have both experience and knowledge on this field.',
  },
  {
    title: 'Businessmen and Private Enterprises',
    description: 'providing day-to-day legal counsel, contract drafting, litigation and application. ',
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