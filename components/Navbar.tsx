import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className={`font-bold text-2xl ${isScrolled ? 'text-brand-900' : 'text-brand-800'} ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.meta.title}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {t.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              <Globe className="w-4 h-4 mx-1" />
              {language === Language.AR ? 'English' : 'العربية'}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="mr-2 ml-2 text-slate-600 p-2"
              aria-label="Switch Language"
            >
              <span className="text-sm font-bold">{language === Language.AR ? 'EN' : 'عربي'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {t.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-md"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-md text-base font-medium hover:bg-brand-700 transition-colors"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;