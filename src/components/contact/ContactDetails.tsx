import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { Reveal } from '../shared/Reveal';

// Opens in the Google Maps app / site when the map or the link is clicked.
const MAP_LINK = 'https://maps.app.goo.gl/36DWu2zZ8TCu4gJ69?g_st=it';

// Paste the `src` URL from Google Maps > Share > Embed a map here (it starts with
// https://www.google.com/maps/embed?pb=...). Short links like maps.app.goo.gl cannot be shown
// inside an iframe. While this is empty, the map is centered on the translated address instead.
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3908.3122773745145!2d104.92886287505414!3d11.601071188602317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM2JzAzLjkiTiAxMDTCsDU1JzUzLjIiRQ!5e0!3m2!1sen!2skh!4v1789805869423!5m2!1sen!2skh';

export const ContactDetails: React.FC = () => {
  const { t } = useTranslation();
  // Real Google Map, centered on the translated address. Opens the full Google Maps app via MAP_LINK.
  const mapEmbedSrc =
    MAP_EMBED_URL ||
    `https://www.google.com/maps?q=${encodeURIComponent(t('contactDetails.address'))}&output=embed`;
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
        <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-sm">
          <iframe
            title="Google Map"
            src={mapEmbedSrc}
            className="w-full h-44 border-0 block"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Transparent overlay: clicking the map opens your Google Maps link */}
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contactDetails.openInMaps', 'Open in Google Maps')}
            className="absolute inset-0"
          />
        </div>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-xs font-semibold text-[#0e1e38] hover:text-[#c5a363] transition duration-200"
        >
         
        </a>
      </div>
    </Reveal>
  );
};