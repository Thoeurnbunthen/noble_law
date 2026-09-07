import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/homepage/Hero';
import { PracticeAreas } from '../components/homepage/Practice';
import { AboutSection } from '../components/homepage/AboutSection';
import { Testimonials } from '../components/homepage/Testimonials';
// import { Clients } from '../components/homepage/Clients';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#fcfbf9]">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <AboutSection />
        <Testimonials />
        {/* <Clients /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;