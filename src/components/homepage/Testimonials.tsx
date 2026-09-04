import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: `"The firm's meticulous strategy saved our international commercial division from severe contractual penalties. Unparalleled legal acumen."`,
    author: 'Eleanor Sterling',
    role: 'SVP, GLOBAL MARKETS',
  },
  {
    quote: `"Noble Law Office delivers legal solutions with high discretion and strategic foresight. They are truly an elite team of legal scholars."`,
    author: 'Marcus Vance',
    role: 'MANAGING PARTNER',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[#c5a363] text-xs font-semibold tracking-widest uppercase mb-2 block">
          CLIENT VOICES
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-3">
          Trusted by Visionaries
        </h2>
        <div className="w-12 h-0.5 bg-[#c5a363] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 italic">
                {item.quote}
              </p>
              <div>
                <h4 className="font-serif text-[#0e1e38] font-bold text-sm">
                  {item.author}
                </h4>
                <p className="text-[#c5a363] text-[10px] font-semibold tracking-widest uppercase mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};