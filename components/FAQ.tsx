import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          {t.faq.section.title}
        </h2>

        <div className="space-y-4">
          {t.faq.items.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-4 text-start bg-white hover:bg-slate-50 transition-colors flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-slate-800">{item.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;