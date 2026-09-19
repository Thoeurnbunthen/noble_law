import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../shared/Reveal';

export const OfficeHours: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Reveal as="div" delay={180} once={false} className="bg-[#f4efe6] p-6 rounded-sm mt-6">
      <h3 className="font-serif text-lg text-[#0e1e38] font-semibold mb-3">
        {t('officeHours.heading')}
      </h3>
      <div className="space-y-2 text-xs text-slate-600">
        <p>
          <span className="font-medium text-slate-700">{t('officeHours.weekdaysLabel')}</span> {t('officeHours.weekdaysValue')}
        </p>
        <p>
          <span className="font-medium text-slate-700">{t('officeHours.saturdayLabel')}</span> {t('officeHours.saturdayValue')}
        </p>
        <p>
          <span className="font-medium text-slate-700">{t('officeHours.sundayLabel')}</span> {t('officeHours.sundayValue')}
        </p>
      </div>
    </Reveal>
  );
};