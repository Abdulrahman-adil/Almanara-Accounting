import React, { useState, FormEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Construct WhatsApp Message
    const text = `*New Inquiry from Website*%0A` +
      `Name: ${formData.name}%0A` +
      `Company: ${formData.company}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Service: ${formData.service}%0A` +
      `Message: ${formData.message}`;

    // Small delay to show success message before redirecting
    setTimeout(() => {
       window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
       setSubmitted(false);
       setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-bold mb-6">{t.contact.section.title}</h2>
            <p className="text-slate-300 mb-10 text-lg">
              {t.contact.section.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-slate-400">{t.contact.info.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-slate-400" dir="ltr">{t.contact.info.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-slate-400">{t.contact.info.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-slate-600">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.phone}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      dir="ltr"
                      placeholder="+971 50 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.company}</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.service}</label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none bg-white"
                  >
                    <option value="">-- Select --</option>
                    {t.contact.form.serviceOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.message}</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;