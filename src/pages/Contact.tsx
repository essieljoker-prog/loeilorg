import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Twitter, CheckCircle } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: t('services.wedding'),
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Client-side Validation
    if (!formState.name || !formState.email || !formState.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', type: t('services.wedding'), message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={t('seo.contact.title')} 
        description={t('seo.contact.description')} 
      />
      <div className="container mx-auto px-6">
        <SectionHeading 
          title={t('contact.title')} 
          subtitle={t('contact.subtitle')} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            {/* ... existing info content ... */}
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-ink">{t('contact.infoTitle')}</h3>
              <p className="text-ink/60 leading-relaxed">
                {t('contact.infoDesc')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40 mb-1">{t('contact.phone')}</h4>
                  <p className="text-lg font-medium">+229 46 56 43 01</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40 mb-1">{t('contact.email')}</h4>
                  <p className="text-lg font-medium">loeilorg@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40 mb-1">{t('contact.address')}</h4>
                  <p className="text-lg font-medium">Cotonou, Bénin</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40">{t('contact.followUs')}</h4>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-ink hover:bg-gold hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gold/5 p-8 rounded-[2rem] border border-gold/10">
              <div className="flex items-center space-x-4 mb-4">
                <MessageCircle className="text-gold" size={32} />
                <h4 className="text-xl font-serif">{t('contact.quickContact')}</h4>
              </div>
              <p className="text-sm text-ink/60 mb-6">{t('contact.whatsappDesc')}</p>
              <a href="https://wa.me/22946564301" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] border-none">
                  {t('contact.whatsappBtn')}
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-beige"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-serif">{t('contact.successTitle') || 'Message Envoyé'}</h3>
                <p className="text-ink/60 max-w-xs mx-auto">
                  {t('contact.successDesc') || 'Merci pour votre message. Nous vous répondrons dans les plus brefs délais.'}
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline" type="button">
                  {t('contact.sendAnother') || 'Envoyer un autre message'}
                </Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.formName')}</label>
                    <input 
                      id="name"
                      type="text" 
                      name="name"
                      required
                      aria-required="true"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-beige/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/20 transition-all" 
                      placeholder={t('contact.formNamePlaceholder')} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.formEmail')}</label>
                    <input 
                      id="email"
                      type="email" 
                      name="email"
                      required
                      aria-required="true"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-beige/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/20 transition-all" 
                      placeholder={t('contact.formEmailPlaceholder')} 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.formType')}</label>
                  <select 
                    id="type"
                    name="type"
                    value={formState.type}
                    onChange={handleChange}
                    className="w-full bg-beige/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/20 transition-all appearance-none"
                  >
                    <option>{t('services.wedding')}</option>
                    <option>{t('services.beauty')}</option>
                    <option>{t('services.catering')}</option>
                    <option>{t('contact.typeOther')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.formMessage')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    rows={5} 
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-beige/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/20 transition-all resize-none" 
                    placeholder={t('contact.formMessagePlaceholder')} 
                  />
                </div>

                <Button size="lg" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? t('contact.formSubmitting') || 'Envoi...' : t('contact.formSubmit')}
                </Button>
                <p className="text-center text-[10px] text-ink/40 uppercase tracking-widest">
                  {t('contact.formNote')}
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 rounded-[3rem] overflow-hidden h-[400px] shadow-lg relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.044158943485!2d2.420177411030932!3d6.376383593588724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235502adbb6f19%3A0xbad2c5a7e383a673!2sL'oeilOrg!5e0!3m2!1sen!2sbj!4v1711375200000!5m2!1sen!2sbj" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="L'oeil ORG Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
