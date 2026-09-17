import React from 'react';
import { Footer } from '../components/Footer';
import { AboutHero } from '../components/about/AboutHero';
import { TeamSection } from '../components/about/TeamSection';
import { Certifications } from '../components/about/Certifications';
import { PartnersSection } from '../components/about/PartnersSection';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#fcfbf9]">
      <main>
        <AboutHero />
        <TeamSection />
        <Certifications />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;