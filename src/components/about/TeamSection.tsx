import React from 'react';
import { useTranslation } from 'react-i18next';

interface TeamMember {
  key: string;
  image: string;
}

const team: TeamMember[] = [
  {
    key: 'chhimChay',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'kithVeasna',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'hannMuylin',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
  },
];

export const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="font-serif text-3xl md:text-4xl text-[#0e1e38] font-normal mb-3">
          {t('team.heading')}
        </h2>
        <div className="w-12 h-0.5 bg-[#c5a363] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-sm border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={member.image}
                alt={t(`team.members.${member.key}.name`)}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-serif text-lg text-[#0e1e38] font-semibold mb-1">
                  {t(`team.members.${member.key}.name`)}
                </h3>
                <p className="text-[#c5a363] text-[10px] font-semibold tracking-widest uppercase mb-3">
                  {t(`team.members.${member.key}.role`)}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {t(`team.members.${member.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};