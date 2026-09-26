import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import logo from '../assets/logo2.png';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0e1e38] text-slate-400 text-xs px-6 md:px-16 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 pb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-sm overflow-hidden shrink-0">
                <img
                  src={logo}
                  alt="Noble Law Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif tracking-widest text-white text-base font-bold">
                {t('footer.brand')}
              </span>
            </Link>
            <p className="leading-relaxed text-slate-400 max-w-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Page Links */}
          <div>
            <h4 className="font-serif text-[#c5a363] text-sm font-semibold mb-4">
              {t('footer.pagesHeading')}
            </h4>
            <ul className="space-y-2.5">
             
              <li><Link to="/about" className="hover:text-white transition">{t('nav.about')}</Link></li>
              <li><Link to="/practice" className="hover:text-white transition">{t('nav.practice')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-[#c5a363] text-sm font-semibold mb-4">
              {t('footer.contactHeading')}
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center space-x-2">
                <FiPhone className="text-[#c5a363] shrink-0" size={14} />
                <span>{t('footer.phoneLabel')}: {t('footer.phone')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-[#c5a363] shrink-0" size={14} />
                <span>{t('footer.emailLabel')}: {t('footer.email')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMapPin className="text-[#c5a363] shrink-0" size={14} />
                <span>{t('footer.locationLabel')}: {t('footer.location')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaFacebook className="text-[#c5a363] shrink-0" size={14} />
                <Link to="/contact" className="hover:text-white transition">{t('footer.facebook')}</Link>
              </li>
              <li className="flex items-center space-x-2">
                <FaTelegram className="text-[#c5a363] shrink-0" size={14} />
                <Link to="/contact" className="hover:text-white transition">{t('footer.telegram')}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};