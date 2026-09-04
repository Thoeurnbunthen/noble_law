import React from 'react';

const clientLogos = [
  'eXalt Property Company',
  'Banks & Financial',
  'Businessman & Co.',
];

export const Clients: React.FC = () => {
  return (
    <section className="py-14 px-6 md:px-16 bg-[#0e1e38] border-b border-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[#c5a363] text-[10px] font-semibold tracking-widest uppercase mb-8 block">
          CLIENTS & PARTNER NETWORK
        </span>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-80">
          {clientLogos.map((client, index) => (
            <span 
              key={index} 
              className="font-serif text-white text-lg sm:text-xl font-medium tracking-wide hover:opacity-100 transition"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};