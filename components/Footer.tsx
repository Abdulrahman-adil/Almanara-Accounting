import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div className="text-center md:text-start">
            <h3 className="text-xl font-bold text-white mb-2">{t.meta.title}</h3>
            <p className="text-sm max-w-md mx-auto md:mx-0">
              {t.footer.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6">
             {/* Quick Links could go here if needed again, simplified for footer */}
             <p className="text-sm text-slate-500">{t.footer.rights}</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;