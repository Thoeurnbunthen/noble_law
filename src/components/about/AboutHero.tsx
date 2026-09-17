import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#0b172a] text-white pt-36 pb-20 px-6 md:px-16 text-center">
      <div className="max-w-4xl mx-auto">

        <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-wide">
          {t('aboutHero.heading')}
        </h1>
      </div>
    </section>
  );
};
