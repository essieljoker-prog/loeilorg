import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Button } from '@/src/components/Button';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Parlons de Votre Projet" 
          subtitle="Contactez-nous" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-ink">Coordonnées</h3>
              <p className="text-ink/60 leading-relaxed">
                Vous avez une question ou vous souhaitez obtenir un devis personnalisé ? Notre équipe est à votre écoute pour vous accompagner dans tous vos projets.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40 mb-1">Téléphone</h4>
                  <p className="text-lg font-medium">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40 mb-1">Email</h4>
                  <p className="text-lg font-medium">contact@loeilorg.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40 mb-1">Adresse</h4>
                  <p className="text-lg font-medium">123 Avenue de l'Élégance, Paris</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest text-ink/40">Suivez-nous</h4>
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
                <h4 className="text-xl font-serif">Contact Rapide</h4>
              </div>
              <p className="text-sm text-ink/60 mb-6">Besoin d'une réponse immédiate ? Contactez-nous directement sur WhatsApp.</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] border-none">
                  Discuter sur WhatsApp
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">Nom Complet</label>
                  <input type="text" className="w-full bg-beige/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/20 transition-all" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">Email</label>
                  <input type="email" className="w-full bg-beige/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/20 transition-all" placeholder="votre@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">Type d'Événement</label>
                <select className="w-full bg-beige/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/20 transition-all appearance-none">
                  <option>Mariage</option>
                  <option>Anniversaire</option>
                  <option>Événement Corporatif</option>
                  <option>Service Beauté</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-ink/40 ml-1">Message</label>
                <textarea rows={5} className="w-full bg-beige/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold/20 transition-all resize-none" placeholder="Décrivez votre projet..." />
              </div>

              <Button size="lg" className="w-full">
                Envoyer ma demande
              </Button>
              <p className="text-center text-[10px] text-ink/40 uppercase tracking-widest">
                Nous vous répondrons sous 24h à 48h.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 rounded-[3rem] overflow-hidden h-[400px] shadow-lg relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca97ef0867b24!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647432000000!5m2!1sen!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
