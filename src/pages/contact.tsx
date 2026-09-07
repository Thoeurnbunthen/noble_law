import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactDetails } from '../components/contact/ContactDetails';
import { OfficeHours } from '../components/contact/OfficeHours';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#fcfbf9]">
      <Navbar />
      <main>
        <ContactHero />
        <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form - 7 Columns */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Sidebar Info - 5 Columns */}
            <div className="lg:col-span-5">
              <ContactDetails />
              <OfficeHours />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;