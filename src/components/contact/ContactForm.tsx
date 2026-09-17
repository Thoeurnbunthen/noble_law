import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Editor } from '@tinymce/tinymce-react';

import 'tinymce/tinymce';
import 'tinymce/models/dom/model';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/autoresize';
// Safe to load globally: these only contain `.tox-*` prefixed selectors (TinyMCE's own UI chrome).
import 'tinymce/skins/ui/oxide/skin.css';
import 'tinymce/skins/ui/oxide/content.css';
// NOT safe to load globally: this file has a bare `body { margin: 1rem }` rule meant for the
// editor's own iframe document. Pull it in as a raw string (`?inline`) and hand it to TinyMCE via
// `content_style` so it only ever gets injected inside that iframe, never into the page's <body>.
import editorContentCss from 'tinymce/skins/content/default/content.css?inline';

const CONTACT_EMAIL = 'contact@noblelawoffice.com';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const plainMessage = new DOMParser().parseFromString(formData.message, 'text/html').body.textContent ?? '';
    const subject = `Contact Form Submission from ${formData.fullName}`;
    const body = `Name: ${formData.fullName}\nEmail: ${formData.email}\n\n${plainMessage}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-100">
      <h2 className="font-serif text-2xl text-[#0e1e38] font-semibold mb-6">
        {t('contactForm.heading')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-[#0e1e38] mb-1.5">
            {t('contactForm.fullName')}
          </label>
          <input
            type="text"
            placeholder={t('contactForm.fullNamePlaceholder')}
            className="w-full px-4 py-2.5 text-xs bg-[#fcfbf9] border border-slate-200 rounded-sm focus:outline-none focus:border-[#c5a363] text-slate-700 placeholder-slate-400"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0e1e38] mb-1.5">
            {t('contactForm.email')}
          </label>
          <input
            type="email"
            placeholder={t('contactForm.emailPlaceholder')}
            className="w-full px-4 py-2.5 text-xs bg-[#fcfbf9] border border-slate-200 rounded-sm focus:outline-none focus:border-[#c5a363] text-slate-700 placeholder-slate-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>


        <div>
          <label className="block text-xs font-semibold text-[#0e1e38] mb-1.5">
            {t('contactForm.message')}
          </label>
          <Editor
            licenseKey="gpl"
            value={formData.message}
            onEditorChange={(content) => setFormData({ ...formData, message: content })}
            init={{
              height: 180,
              menubar: false,
              statusbar: false,
              branding: false,
              skin: false,
              content_style: editorContentCss,
              plugins: 'lists link autoresize',
              toolbar: 'bold italic underline | bullist numlist | link',
              placeholder: t('contactForm.messagePlaceholder'),
              autoresize_bottom_margin: 16,
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1b2b48] hover:bg-[#0e1e38] text-white text-xs font-semibold py-3.5 uppercase tracking-wider transition duration-200 mt-2"
        >
          {t('contactForm.submit')}
        </button>
      </form>
    </div>
  );
};