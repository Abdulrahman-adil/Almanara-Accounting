import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.pricing.section.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.pricing.section.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.pricing.plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${
                plan.recommended ? 'ring-2 ring-brand-500 scale-105 z-10' : 'border border-slate-100'
              }`}
            >
              {plan.recommended && (
                <div className="bg-brand-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 text-center">
                  Recommended / موصى به
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-brand-600 mb-6">{plan.price}</div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <a 
                  href="#contact"
                  className={`block w-full py-3 px-6 rounded-lg text-center font-semibold transition-colors ${
                    plan.recommended 
                      ? 'bg-brand-600 text-white hover:bg-brand-700' 
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;