import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

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

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      isScrolled ? 'glass py-8 shadow-md' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="L'oeil ORG - Home">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter flex items-center transition-colors duration-300">
            <span className="text-brand-brown">L'</span>
            <span className="text-brand-orange italic">oeil</span>
            <span className={cn(
              "ml-2 px-2 py-0.5 text-[10px] md:text-xs rounded font-sans font-black tracking-widest uppercase transition-colors duration-300",
              "bg-brand-brown text-white"
            )}>ORG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8" role="navigation">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              aria-current={location.pathname === link.path ? 'page' : undefined}
              className={cn(
                'text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold',
                location.pathname === link.path ? 'text-gold' : (isScrolled ? 'text-ink' : 'text-white')
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            aria-label={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
            className={cn(
              "flex items-center space-x-1 text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors",
              isScrolled ? "text-ink" : "text-white"
            )}
          >
            <Globe size={14} />
            <span>{language === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          <Link to="/contact">
            <Button size="sm" className="hidden lg:flex">
              {t('nav.quote')}
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            aria-label={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
            className={cn(
              "flex items-center space-x-1 text-xs font-bold uppercase tracking-widest",
              isScrolled ? "text-ink" : "text-white"
            )}
          >
            <Globe size={14} />
            <span>{language === 'fr' ? 'EN' : 'FR'}</span>
          </button>
          <button 
            className={cn("p-2", isScrolled ? "text-ink" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
                  {t('hero.cta.quote')}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
