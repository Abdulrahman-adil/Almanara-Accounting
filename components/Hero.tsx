import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank');
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-start">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-brand-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-brand-700 transition-all transform hover:-translate-y-1"
              >
                {t.hero.ctaPrimary}
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-white text-brand-700 border border-brand-200 rounded-lg font-semibold text-lg shadow-sm hover:bg-brand-50 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-brand-200/30 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/finance_hero/600/400" 
                alt="Accounting and Finance" 
                className="rounded-xl w-full object-cover h-[400px]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-100">
                 <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-500">Monthly Growth</p>
                        <p className="text-2xl font-bold text-brand-600">+24%</p>
                    </div>
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;