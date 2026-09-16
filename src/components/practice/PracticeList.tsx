import React from 'react';

interface PracticeDetail {
  number: string;
  title: string;
  description: string;
  image: string;
}

const practices: PracticeDetail[] = [
  {
    number: '01',
    title: 'Commercial & Investment Law Compliance',
    description: 'Registering the company, setting up the governance and employment. protecting your IPs , franchise, and assets. Preparing the Agreement and transferring share. Applying for EIA and other permits.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Civil and Criminal litigation ',
    description: 'In criminal proceedings, We have defense attorneys at law to protect your rights in the investigation process and criminal court proceedings. You have rights to remain silent and right to defend yourself  or right to bail . However, we can also  in charge the plaintiff to claim the damages and compensation from the offender in the proceeding. In civil court, there are claims and actions such as to divide testaments, to compensate damages of contracts . and tort , to return the property and assets to resolve for bankruptcy and insolvency , to settle family disputes , to recover unjust enrichment and to to pay the debt. ',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Legal Enforcement',
    description: 'The way the creditors or banks can collect the debt by applying to the court to ensure the payment back. Or the way the owner to apply for return back the property. The procedure is completely complicated that banks, creditors or owners should select the competent and experienced to represent and consult for legal enforcement.  ',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Injunction',
    description: 'We represent the client to apply for injunction to court in order to intervene during lawsuit. Or we can represent to counterclaim. It is the way court can intervene immediately to protect interest and property during litigation proceedings. Without the injunction, property or interest can be transferred or disposed . And it will hard to enforce by law or cannot enforce after litigation proceedings finalized. ',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop',
  },
];

export const PracticeList: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto space-y-24">
        {practices.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Text Side */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-[#c5a363] font-serif text-sm font-semibold">{item.number}</span>
                  <div className="w-8 h-1px bg-[#c5a363]"></div>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#0e1e38] font-semibold mb-4">
                  {item.title}
                </h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="rounded-sm overflow-hidden shadow-sm border border-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-260px md:h-320px object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};