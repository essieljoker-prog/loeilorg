import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-serif font-bold tracking-tighter">
            L’œil <span className="text-gold">ORG</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Nous rendons votre cérémonie originale et inoubliable. Excellence, élégance et créativité au service de vos plus beaux moments.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif font-medium mb-6">Liens Rapides</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/" className="hover:text-gold transition-colors">Accueil</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">À Propos</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Galerie</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif font-medium mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>Wedding Planning</li>
            <li>Organisation d'Événements</li>
            <li>Service Traiteur</li>
            <li>Maquillage Professionnel</li>
            <li>Coiffure & Soins</li>
            <li>Pédicure & Manucure</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif font-medium mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>123 Avenue de l'Élégance, Paris, France</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+33 1 23 45 67 89</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>contact@loeilorg.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-xs uppercase tracking-widest">
        <p>© {new Date().getFullYear()} L’œil ORG. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
