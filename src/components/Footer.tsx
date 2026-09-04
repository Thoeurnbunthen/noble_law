import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e1e38] text-slate-400 text-xs px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#c5a363] text-[#0e1e38] font-serif font-bold text-xl w-9 h-9 flex items-center justify-center rounded-sm">
                N
              </div>
              <span className="font-serif tracking-widest text-white text-base font-bold">
                Noble Law Office
              </span>
            </div>
            <p className="leading-relaxed text-slate-400 max-w-sm">
              Upholding justice with unwavering integrity and prestigious excellence. Your premier partner in navigating complex legal terrain.
            </p>
          </div>

          {/* Practice Links */}
          <div>
            <h4 className="font-serif text-[#c5a363] text-sm font-semibold mb-4">
              Practice
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#practice" className="hover:text-white transition">Commercial & Investment Law</a></li>
              <li><a href="#practice" className="hover:text-white transition">Legal Compliance</a></li>
              <li><a href="#practice" className="hover:text-white transition">Civil & Criminal Litigation</a></li>
              <li><a href="#practice" className="hover:text-white transition">Legal Enforcement</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-[#c5a363] text-sm font-semibold mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2.5">
              <li>Phone: 068233233</li>
              <li>Email: contact@noblelawoffice.com</li>
              <li>Location: 100 Prestige Plaza, Suite 400, NY</li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Noble Law Office. All Rights Reserved. Legal Notice.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">X (Twitter)</a>
            <a href="#" className="hover:text-white transition">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};