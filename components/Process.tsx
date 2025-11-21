import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.process.section.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.process.section.description}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {t.process.steps.map((step, idx) => (
              <div key={idx} className="group relative bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
                
                {/* Number Bubble */}
                <div className="w-14 h-14 mx-auto bg-white border-4 border-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold text-xl mb-6 group-hover:border-brand-600 group-hover:scale-110 transition-all">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;