import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative bg-[#0b172a] text-white pt-32 pb-20 md:py-48 px-6 md:px-16 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 23, 42, 0.88), rgba(11, 23, 42, 0.88)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop')`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl">
          <span className="text-[#c5a363] text-xs font-semibold tracking-widest uppercase mb-4 block">
            PRESTIGIOUS LEGAL COUNSEL
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6">
            Justice. Integrity. Excellence.
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
            Noble Law Office stands as a trusted fortress of legal clarity and supreme strategy. We empower legacy-defining moves and defend with absolute rigor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#consultation" 
              className="bg-[#c5a363] hover:bg-[#b39152] text-[#0e1e38] font-semibold text-xs px-6 py-3.5 text-center uppercase tracking-wider transition"
            >
              Book a Consultation
            </a>
            <a 
              href="#about" 
              className="border border-slate-400 hover:border-white text-white font-semibold text-xs px-6 py-3.5 text-center uppercase tracking-wider transition"
            >
              Explore History
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};