import React from 'react';

export const OfficeHours: React.FC = () => {
  return (
    <div className="bg-[#f4efe6] p-6 rounded-sm mt-6">
      <h3 className="font-serif text-lg text-[#0e1e38] font-semibold mb-3">
        Office Hours
      </h3>
      <div className="space-y-2 text-xs text-slate-600">
        <p>
          <span className="font-medium text-slate-700">Monday - Friday:</span> 08:00 AM - 05:00 PM
        </p>
        <p>
          <span className="font-medium text-slate-700">Saturday:</span> By Pre-appointment only
        </p>
        <p>
          <span className="font-medium text-slate-700">Sunday:</span> Closed
        </p>
      </div>
    </div>
  );
};