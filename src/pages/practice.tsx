import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PracticeHero } from '../components/practice/PracticeHero';
import { PracticeList } from '../components/practice/PracticeList';
import { PracticeCTA } from '../components/practice/PracticeCTA';

export const Practice: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#fcfbf9]">
      <Navbar />
      <main>
        <PracticeHero />
        <PracticeList />
        <PracticeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Practice;