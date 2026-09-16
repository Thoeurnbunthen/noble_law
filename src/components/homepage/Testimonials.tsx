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
    <section className="py-20 px-6 md:px-16 bg-[#fcfbf9] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header with Fade-In Animation */}
        <div className="animate-[fadeIn_0.8s_ease-out_forwards]">
          <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-3">
            Trusted by Visionaries
          </h2>
          <div className="w-12 h-0.5 bg-[#c5a363] mx-auto mb-12 transition-all duration-500 hover:w-20"></div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-[#c5a363]/40 overflow-hidden"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`,
                opacity: 0,
              }}
            >
              {/* Decorative Accent Background Quote Icon */}
              <div className="absolute -top-4 -right-2 text-slate-100 font-serif text-9xl select-none pointer-events-none transition-colors duration-300 group-hover:text-[#c5a363]/10">
                &ldquo;
              </div>

              {/* Quote Content */}
              <p className="relative z-10 text-slate-600 text-sm md:text-base leading-relaxed mb-8 italic">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="relative z-10 border-t border-slate-100 pt-4 transition-colors duration-300 group-hover:border-[#c5a363]/20">
                <h4 className="font-serif text-[#0e1e38] font-bold text-sm tracking-wide">
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

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};