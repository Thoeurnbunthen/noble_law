import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { Reveal } from '../shared/Reveal';

export const ContactDetails: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Reveal as="div" delay={100} once={false} className="space-y-8">
      {/* Contact Details */}
      <div>
        <h3 className="font-serif text-xl text-[#0e1e38] font-semibold mb-4">
          {t('contactDetails.heading')}
        </h3>
        <ul className="space-y-3 text-xs text-slate-600">
          <li className="flex items-center space-x-3">
            <FiPhone className="text-[#c5a363] shrink-0" size={16} />
            <span>{t('contactDetails.phone')}</span>
          </li>
          <li className="flex items-center space-x-3">
            <FiMail className="text-[#c5a363] shrink-0" size={16} />
            <span>{t('contactDetails.email')}</span>
          </li>
          <li className="flex items-center space-x-3">
            <FiMapPin className="text-[#c5a363] shrink-0" size={16} />
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
          {[
            { label: t('contactDetails.facebook'), Icon: FaFacebook },
            { label: t('contactDetails.telegram'), Icon: FaTelegram },
          ].map(({ label, Icon }) => (
            <span
              key={label}
              className="flex items-center space-x-1.5 bg-[#f0ebe1] px-4 py-1.5 rounded-sm font-medium"
            >
              <Icon className="text-[#c5a363]" size={14} />
              <span>{label}</span>
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
    </Reveal>
  );
};