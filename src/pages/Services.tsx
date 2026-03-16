import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/SectionHeading';
import { Button } from '@/src/components/Button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    title: "Wedding Planning",
    description: "Organisation complète de mariages : recherche de lieux, traiteur, décoration, coordination jour J.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    features: ["Planification budgétaire", "Sélection des prestataires", "Design floral", "Gestion des invités"]
  },
  {
    title: "Événements Corporatifs",
    description: "Gala, lancements de produits, séminaires. Une image de marque renforcée par des événements prestigieux.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    features: ["Logistique complète", "Technique & Audiovisuel", "Hôtesses d'accueil", "Restauration premium"]
  },
  {
    title: "Service Traiteur",
    description: "Une gastronomie raffinée pour tous vos événements. Menus personnalisés et service d'exception.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    features: ["Cuisine gastronomique", "Cocktails dînatoires", "Pâtisserie fine", "Service à table"]
  },
  {
    title: "Maquillage & Formation",
    description: "Maquillage professionnel pour mariées et événements. Nous proposons aussi des formations certifiantes.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    features: ["Maquillage mariée", "Cours d'auto-maquillage", "Formation pro", "Produits de luxe"]
  },
  {
    title: "Coiffure & Soins",
    description: "Coiffures événementielles, soins du visage, pédicure et manucure pour une beauté complète.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
    features: ["Chignons de mariée", "Soins hydratants", "Nail Art", "Massage relaxant"]
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Des Services Pensés pour Vous" 
          subtitle="Notre Expertise" 
        />

        <div className="space-y-24">
          {allServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-4xl font-serif text-ink">{service.title}</h3>
                <p className="text-lg text-ink/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                        <Check size={12} />
                      </div>
                      <span className="text-sm font-medium text-ink/80">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <Link to="/contact">
                    <Button className="group">
                      Réserver ce service <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
