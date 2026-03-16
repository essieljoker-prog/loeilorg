import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Button } from './Button';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À Propos', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Galerie', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter text-ink">
            L’œil <span className="text-gold">ORG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold',
                location.pathname === link.path ? 'text-gold' : 'text-ink'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm" className="hidden lg:flex">
              Devis Gratuit
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ink p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-beige overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={cn(
                    'text-lg font-serif transition-colors',
                    location.pathname === link.path ? 'text-gold' : 'text-ink'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="pt-4">
                <Button className="w-full">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
