import React from 'react';
import { useTranslation } from 'react-i18next';

export const ContactDetails: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div>
        <h3 className="font-serif text-xl text-[#0e1e38] font-semibold mb-4">
          {t('contactDetails.heading')}
        </h3>
        <ul className="space-y-3 text-xs text-slate-600">
          <li className="flex items-center space-x-3">
            <span className="text-[#c5a363]">📞</span>
            <span>{t('contactDetails.phone')}</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-[#c5a363]">✉️</span>
            <span>{t('contactDetails.email')}</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-[#c5a363]">📍</span>
            <span>{t('contactDetails.address')}</span>
          </li>
        </ul>
      </div>

      {/* Global Channels */}
      <div>
        <h4 className="font-serif text-sm text-[#0e1e38] font-semibold mb-3">
          {t('contactDetails.channelsHeading')}
        </h4>
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          {[t('contactDetails.facebook'), t('contactDetails.telegram')].map((channel) => (
            <span
              key={channel}
              className="bg-[#f0ebe1] px-4 py-1.5 rounded-sm font-medium"
            >
              {channel}
            </span>
          ))}
        </div>
      </div>

      {/* Coordinates Map */}
      <div>
        <span className="text-[#c5a363] text-[10px] font-semibold tracking-widest uppercase mb-2 block">
          {t('contactDetails.mapLabel')}
        </span>
        <div className="rounded-sm overflow-hidden border border-slate-200 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
            alt="Old World Map"
            className="w-full h-44 object-cover"
          />
        </div>
      </div>
    </div>
  );
};