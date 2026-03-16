import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/SectionHeading';
import { CheckCircle2, Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Notre Histoire & Notre Passion" 
          subtitle="À Propos de L’œil ORG" 
        />

        {/* Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-gold">Une vision d'excellence</h3>
            <p className="text-lg text-ink/70 leading-relaxed">
              L’œil ORG est né d'une passion profonde pour l'élégance et le détail. Fondée avec l'idée que chaque cérémonie mérite d'être unique, notre entreprise s'est rapidement imposée comme une référence dans l'organisation d'événements et les services de beauté haut de gamme.
            </p>
            <p className="text-lg text-ink/70 leading-relaxed">
              Notre nom, "L’œil ORG", reflète notre capacité à voir au-delà de l'ordinaire. Nous avons cet œil attentif qui capte les nuances, les émotions et les détails qui font toute la différence entre un bon événement et un moment inoubliable.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h4 className="text-4xl font-serif text-gold">10+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-ink/50">Années d'expérience</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-serif text-gold">500+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-ink/50">Événements réussis</p>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" 
                alt="About us" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold rounded-full flex items-center justify-center text-white p-4 text-center text-xs font-bold uppercase tracking-tighter -rotate-12">
              Qualité Premium
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2rem] shadow-sm border border-beige"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Notre Mission</h3>
            <p className="text-ink/60 leading-relaxed">
              Accompagner nos clients dans les moments les plus importants de leur vie en leur offrant des services d'organisation et de beauté qui dépassent leurs attentes, tout en respectant leur budget et leur vision.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-12 rounded-[2rem] shadow-sm border border-beige"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Notre Vision</h3>
            <p className="text-ink/60 leading-relaxed">
              Devenir le partenaire privilégié pour tous ceux qui recherchent l'excellence et l'originalité, en restant à la pointe des tendances tout en préservant l'élégance intemporelle.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-ink text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <SectionHeading 
              title="Pourquoi nous choisir ?" 
              subtitle="Nos Atouts" 
              className="text-white"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: <Users />, title: "Équipe Experte", desc: "Des professionnels passionnés et formés." },
                { icon: <CheckCircle2 />, title: "Sur Mesure", desc: "Chaque projet est unique et personnalisé." },
                { icon: <Award />, title: "Qualité Garantie", desc: "Nous ne faisons aucun compromis sur la qualité." },
                { icon: <Heart />, title: "Passion", desc: "Nous aimons ce que nous faisons, et ça se voit." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-serif">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
