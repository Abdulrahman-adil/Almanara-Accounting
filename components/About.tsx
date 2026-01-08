import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { CheckCircle2 } from 'lucide-react'
import about from '../img/about.jpg'
const About: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={about}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-lg -z-10 hidden lg:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-500 rounded-lg -z-10 hidden lg:block"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {t.about.section.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t.about.content}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {t.about.values.map((value, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  <span className="font-medium text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
