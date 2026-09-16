import React from 'react';

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#f4f1eb]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
         
          <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-6 leading-tight">
            Our License
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
           Noble Law Office is a duly licensed and authorized legal practice, operating in full compliance with the applicable laws and regulations of Cambodia. 
          </p>
        </div>

        {/* Right Frame Image */}
        <div className="rounded-sm overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop" 
            alt="Law Certification Frame" 
            className="w-full h-280px md:h-340px object-cover"
          />
        </div>
      </div>
    </section>
  );
};