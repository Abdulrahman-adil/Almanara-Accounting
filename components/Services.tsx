import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { iconMap } from '../constants';
import { LucideIcon } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.services.section.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.services.section.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((item) => {
            const Icon: LucideIcon = iconMap[item.iconName] || iconMap.Calculator;
            
            return (
              <div 
                key={item.id}
                className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg hover:border-brand-100 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
                  <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;