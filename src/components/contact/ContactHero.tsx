import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../shared/Reveal';

export const ContactHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#0e1e38] text-white pt-36 pb-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">

        <Reveal as="h1" trigger="mount" className="font-serif text-4xl sm:text-5xl font-normal tracking-wide">
          {t('contactHero.heading')}
        </Reveal>
      </div>
    </section>
  );
};
