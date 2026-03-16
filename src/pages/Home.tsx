import { motion } from 'motion/react';
import { ArrowRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/Button';
import { SectionHeading } from '@/src/components/SectionHeading';
import { ServiceCard } from '@/src/components/ServiceCard';

const services = [
  {
    title: "Wedding Planning",
    description: "Une organisation complète pour le plus beau jour de votre vie. De la conception à la coordination le jour J.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Événements Privés",
    description: "Anniversaires, baptêmes, fiançailles. Nous créons des moments magiques pour toutes vos célébrations.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Beauté & Esthétique",
    description: "Maquillage professionnel, coiffure et soins du visage pour vous sublimer lors de vos événements.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "Sophie & Marc",
    role: "Mariés en 2023",
    content: "L’œil ORG a transformé notre mariage en un conte de fées. Chaque détail était parfait, nous n'avons eu qu'à profiter de notre journée.",
    avatar: "https://i.pravatar.cc/150?u=sophie"
  },
  {
    name: "Elena Dubois",
    role: "Cliente Beauté",
    content: "Le service de maquillage est exceptionnel. Je me suis sentie tellement belle pour mon gala. Je recommande vivement !",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Jean-Pierre",
    role: "Anniversaire 50 ans",
    content: "Une organisation sans faille pour mes 50 ans. Le service traiteur était délicieux et la décoration sublime.",
    avatar: "https://i.pravatar.cc/150?u=jp"
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Wedding"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold font-medium tracking-[0.3em] uppercase mb-6"
          >
            L’œil ORG • Événements & Beauté
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight text-balance"
          >
            Nous rendons votre cérémonie <br className="hidden md:block" />
            <span className="italic">originale et inoubliable</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Demander un devis
              </Button>
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-ink">
                Contact WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <div className="w-px h-12 bg-white/30 mx-auto mb-2" />
          <span className="text-[10px] uppercase tracking-[0.2em]">Découvrir</span>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800" 
                  alt="Founder"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl hidden md:block max-w-xs">
                <p className="font-serif italic text-lg text-gold mb-2">"L'excellence est dans chaque détail."</p>
                <p className="text-xs uppercase tracking-widest font-bold">L’œil ORG Team</p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <SectionHeading 
                title="L'art de créer des moments d'exception" 
                subtitle="Qui sommes-nous" 
                centered={false} 
              />
              <p className="text-lg text-ink/70 leading-relaxed">
                Depuis plusieurs années, L’œil ORG accompagne ses clients dans la réalisation de leurs projets les plus ambitieux. Notre mission est de transformer vos rêves en réalité, en apportant une touche d'élégance et d'originalité à chaque événement.
              </p>
              <ul className="space-y-4">
                {[
                  "Expertise reconnue en Wedding Planning",
                  "Services de beauté haut de gamme",
                  "Accompagnement personnalisé de A à Z",
                  "Réseau de prestataires d'exception"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-3 text-ink/80"
                  >
                    <CheckCircle2 className="text-gold" size={20} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="ghost" className="group">
                  En savoir plus sur nous <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Nos Services d'Exception" 
            subtitle="Ce que nous offrons" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title}
                description={service.description}
                image={service.image}
                index={index} 
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="outline" size="lg">
                Voir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <SectionHeading 
              title="Aperçu de nos réalisations" 
              subtitle="Galerie" 
              centered={false} 
              className="mb-0"
            />
            <Link to="/gallery">
              <Button variant="ghost" className="group">
                Voir toute la galerie <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=600"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-pink-soft/30">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Ce que disent nos clients" 
            subtitle="Témoignages" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm relative"
              >
                <Quote className="text-gold/20 absolute top-6 right-8" size={48} />
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-ink/70 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-ink/50 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-ink rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif">Prêt à rendre votre événement inoubliable ?</h2>
              <p className="text-white/60 text-lg">
                Contactez-nous dès aujourd'hui pour une consultation gratuite et commencez à planifier votre moment d'exception.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Demander un devis
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-ink">
                    Nos Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
