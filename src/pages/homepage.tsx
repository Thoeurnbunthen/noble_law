import React from 'react';
import { Hero } from '../components/homepage/Hero';
import { PracticeAreas } from '../components/homepage/Practice';
import { AboutSection } from '../components/homepage/AboutSection';
import { Testimonials } from '../components/homepage/Testimonials';

import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#fcfbf9]">
      <main>
        <Hero />
        <PracticeAreas />
        <AboutSection />
        <Testimonials />
       
      </main>
      <Footer />
    </div>
  );
};

export default Home;