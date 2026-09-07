import React from 'react';

export const PracticeCTA: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#f4f1eb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-[#0e1e38] font-normal mb-3">
          Need Supreme Legal Counsel?
        </h2>
        <p className="text-slate-600 text-xs md:text-sm mb-8">
          Speak with Arthur Noble and our senior advisory panel today.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-[#0e1e38] hover:bg-[#0b172a] text-white font-semibold text-xs px-8 py-3.5 uppercase tracking-wider transition"
        >
          CONTACT US TODAY
        </a>
      </div>
    </section>
  );
};