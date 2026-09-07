import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Request submitted successfully.');
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-slate-100">
      <h2 className="font-serif text-2xl text-[#0e1e38] font-semibold mb-6">
        Contact From
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-[#0e1e38] mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            placeholder="your name"
            className="w-full px-4 py-2.5 text-xs bg-[#fcfbf9] border border-slate-200 rounded-sm focus:outline-none focus:border-[#c5a363] text-slate-700 placeholder-slate-400"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0e1e38] mb-1.5">
            Email 
          </label>
          <input
            type="email"
            placeholder="your gmail"
            className="w-full px-4 py-2.5 text-xs bg-[#fcfbf9] border border-slate-200 rounded-sm focus:outline-none focus:border-[#c5a363] text-slate-700 placeholder-slate-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

      
        <div>
          <label className="block text-xs font-semibold text-[#0e1e38] mb-1.5">
            Message
          </label>
          <textarea
            rows={5}
            placeholder=""
            className="w-full px-4 py-2.5 text-xs bg-[#fcfbf9] border border-slate-200 rounded-sm focus:outline-none focus:border-[#c5a363] text-slate-700 placeholder-slate-400"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1b2b48] hover:bg-[#0e1e38] text-white text-xs font-semibold py-3.5 uppercase tracking-wider transition duration-200 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};