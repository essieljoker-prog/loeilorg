import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.quote': 'Devis Gratuit',
    
    // Hero
    'hero.subtitle': 'L’œil ORG • Événements & Beauté',
    'hero.title': 'Nous rendons votre cérémonie originale et inoubliable',
    'hero.cta.quote': 'Demander un devis',
    'hero.cta.whatsapp': 'Contact WhatsApp',
    'hero.scroll': 'Découvrir',
    
    // Intro
    'intro.subtitle': 'Qui sommes-nous',
    'intro.title': "L'art de créer des moments d'exception",
    'intro.text': "Depuis plusieurs années, L’œil ORG accompagne ses clients dans la réalisation de leurs projets les plus ambitieux. Notre mission est de transformer vos rêves en réalité, en apportant une touche d'élégance et d'originalité à chaque événement.",
    'intro.feature1': 'Expertise reconnue en Wedding Planning',
    'intro.feature2': 'Services de beauté haut de gamme',
    'intro.feature3': 'Accompagnement personnalisé de A à Z',
    'intro.feature4': "Réseau de prestataires d'exception",
    'intro.more': 'En savoir plus sur nous',
    
    // Services Section
    'services.subtitle': 'Ce que nous offrons',
    'services.title': "Nos Services d'Exception",
    'services.all': 'Voir tous nos services',
    'services.learnMore': 'En savoir plus',
    
    // Gallery Section
    'gallery.subtitle': 'Galerie',
    'gallery.title': 'Aperçu de nos réalisations',
    'gallery.viewAll': 'Voir toute la galerie',
    'gallery.viewImage': "Voir l'image",
    'gallery.all': 'Tout',
    'gallery.weddings': 'Mariages',
    'gallery.beauty': 'Beauté',
    'gallery.events': 'Événements',
    'gallery.view': 'Voir',
    
    // Testimonials
    'testimonials.subtitle': 'Témoignages',
    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.1.name': 'Sophie & Marc',
    'testimonials.1.role': 'Mariés en 2023',
    'testimonials.1.content': "L’œil ORG a transformé notre mariage en un conte de fées. Chaque détail était parfait, nous n'avons eu qu'à profiter de notre journée.",
    'testimonials.2.name': 'Elena Dubois',
    'testimonials.2.role': 'Cliente Beauté',
    'testimonials.2.content': "Le service de maquillage est exceptionnel. Je me suis sentie tellement belle pour mon gala. Je recommande vivement !",
    'testimonials.3.name': 'Jean-Pierre',
    'testimonials.3.role': 'Anniversaire 50 ans',
    'testimonials.3.content': "Une organisation sans faille pour mes 50 ans. Le service traiteur était délicieux et la décoration sublime.",
    
    // CTA Banner
    'cta.title': 'Prêt à rendre votre événement inoubliable ?',
    'cta.text': 'Contactez-nous dès aujourd\'hui pour une consultation gratuite et commencez à planifier votre moment d\'exception.',
    'cta.services': 'Nos Services',
    
    // Footer
    'footer.tagline': 'Nous rendons votre cérémonie originale et inoubliable. Excellence, élégance et créativité au service de vos plus beaux moments.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    
    // Contact Page
    'contact.subtitle': 'Contactez-nous',
    'contact.title': 'Parlons de Votre Projet',
    'contact.infoTitle': 'Coordonnées',
    'contact.infoDesc': 'Vous avez une question ou vous souhaitez obtenir un devis personnalisé ? Notre équipe est à votre écoute pour vous accompagner dans tous vos projets.',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
    'contact.followUs': 'Suivez-nous',
    'contact.quickContact': 'Contact Rapide',
    'contact.whatsappDesc': 'Besoin d\'une réponse immédiate ? Contactez-nous directement sur WhatsApp.',
    'contact.whatsappBtn': 'Discuter sur WhatsApp',
    'contact.formName': 'Nom Complet',
    'contact.formNamePlaceholder': 'Votre nom...',
    'contact.formEmail': 'Email',
    'contact.formEmailPlaceholder': 'votre@email.com',
    'contact.formType': 'Type d\'Événement',
    'contact.typeOther': 'Autre',
    'contact.formMessage': 'Message',
    'contact.formMessagePlaceholder': 'Comment pouvons-nous vous aider ?',
    'contact.formSubmit': 'Envoyer ma demande',
    'contact.formNote': 'Nous vous répondrons sous 24h à 48h.',
    
    // About Page
    'about.subtitle': 'À Propos de L’œil ORG',
    'about.title': 'Notre Histoire & Notre Passion',
    'about.visionTitle': 'Une vision d\'excellence',
    'about.story1': 'L’œil ORG est né d\'une passion profonde pour l\'élégance et le détail. Fondée avec l\'idée que chaque cérémonie mérite d\'être unique, notre entreprise s\'est rapidement imposée comme une référence dans l\'organisation d\'événements et les services de beauté haut de gamme.',
    'about.story2': 'Notre nom, "L’œil ORG", reflète notre capacité à voir au-delà de l\'ordinaire. Nous avons cet œil attentif qui capte les nuances, les émotions et les détails qui font toute la différence entre un bon événement et un moment inoubliable.',
    'about.exp': 'Années d\'expérience',
    'about.success': 'Événements réussis',
    'about.missionTitle': 'Notre Mission',
    'about.missionText': 'Accompagner nos clients dans les moments les plus importants de leur vie en leur offrant des services d\'organisation et de beauté qui dépassent leurs attentes, tout en respectant leur budget et leur vision.',
    'about.visionTextTitle': 'Notre Vision',
    'about.visionText': 'Devenir le partenaire privilégié pour tous ceux qui recherchent l\'excellence et l\'originalité, en restant à la pointe des tendances tout en préservant l\'élégance intemporelle.',
    'about.whySubtitle': 'Nos Atouts',
    'about.whyTitle': 'Pourquoi nous choisir ?',
    'about.feature1': 'Équipe Experte',
    'about.feature1Desc': 'Des professionnels passionnés et formés.',
    'about.feature2': 'Sur Mesure',
    'about.feature2Desc': 'Chaque projet est unique et personnalisé.',
    'about.feature3': 'Qualité Garantie',
    'about.feature3Desc': 'Nous ne faisons aucun compromis sur la qualité.',
    'about.feature4': 'Passion',
    'about.feature4Desc': 'Nous aimons ce que nous faisons, et ça se voit.',
    'about.premium': 'Qualité Premium',
    
    // Services Page Details
    'services.wedding': 'Wedding Planning',
    'services.weddingDesc': 'Une organisation complète pour le plus beau jour de votre vie. Nous gérons chaque aspect pour que vous puissiez vivre votre rêve sans stress.',
    'services.weddingF1': 'Recherche de lieux d\'exception',
    'services.weddingF2': 'Gestion des prestataires',
    'services.weddingF3': 'Design et décoration florale',
    'services.weddingF4': 'Coordination du jour J',
    
    'services.beauty': 'Beauté & Esthétique',
    'services.beautyDesc': 'Sublimez votre beauté naturelle avec nos services professionnels. Maquillage, coiffure et soins pour toutes vos occasions spéciales.',
    'services.beautyF1': 'Maquillage professionnel',
    'services.beautyF2': 'Coiffure événementielle',
    'services.beautyF3': 'Soins du visage',
    'services.beautyF4': 'Conseils en image',
    
    'services.catering': 'Service Traiteur',
    'services.cateringDesc': 'Une expérience culinaire raffinée pour vos invités. Des menus personnalisés qui raviront les papilles les plus exigeantes.',
    'services.cateringF1': 'Menus sur mesure',
    'services.cateringF2': 'Cocktails et buffets',
    'services.cateringF3': 'Service à table professionnel',
    'services.cateringF4': 'Pâtisserie fine',
    
    'services.requestQuote': 'Demander un devis personnalisé',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.quote': 'Free Quote',
    
    // Hero
    'hero.subtitle': 'L’œil ORG • Events & Beauty',
    'hero.title': 'We make your ceremony original and unforgettable',
    'hero.cta.quote': 'Request a Quote',
    'hero.cta.whatsapp': 'WhatsApp Contact',
    'hero.scroll': 'Discover',
    
    // Intro
    'intro.subtitle': 'Who we are',
    'intro.title': 'The art of creating exceptional moments',
    'intro.text': 'For several years, L’œil ORG has been supporting its clients in the realization of their most ambitious projects. Our mission is to transform your dreams into reality, bringing a touch of elegance and originality to every event.',
    'intro.feature1': 'Recognized expertise in Wedding Planning',
    'intro.feature2': 'High-end beauty services',
    'intro.feature3': 'Personalized support from A to Z',
    'intro.feature4': 'Exceptional network of providers',
    'intro.more': 'Learn more about us',
    
    // Services Section
    'services.subtitle': 'What we offer',
    'services.title': 'Our Exceptional Services',
    'services.all': 'See all our services',
    'services.learnMore': 'Learn more',
    
    // Gallery Section
    'gallery.subtitle': 'Gallery',
    'gallery.title': 'Overview of our achievements',
    'gallery.viewAll': 'View full gallery',
    'gallery.viewImage': 'View image',
    'gallery.all': 'All',
    'gallery.weddings': 'Weddings',
    'gallery.beauty': 'Beauty',
    'gallery.events': 'Events',
    'gallery.view': 'View',
    
    // Testimonials
    'testimonials.subtitle': 'Testimonials',
    'testimonials.title': 'What our clients say',
    'testimonials.1.name': 'Sophie & Marc',
    'testimonials.1.role': 'Married in 2023',
    'testimonials.1.content': "L’œil ORG transformed our wedding into a fairy tale. Every detail was perfect, we just had to enjoy our day.",
    'testimonials.2.name': 'Elena Dubois',
    'testimonials.2.role': 'Beauty Client',
    'testimonials.2.content': "The makeup service is exceptional. I felt so beautiful for my gala. I highly recommend!",
    'testimonials.3.name': 'Jean-Pierre',
    'testimonials.3.role': '50th Birthday',
    'testimonials.3.content': "Flawless organization for my 50th birthday. The catering was delicious and the decoration sublime.",
    
    // CTA Banner
    'cta.title': 'Ready to make your event unforgettable?',
    'cta.text': 'Contact us today for a free consultation and start planning your exceptional moment.',
    'cta.services': 'Our Services',
    
    // Footer
    'footer.tagline': 'We make your ceremony original and unforgettable. Excellence, elegance and creativity at the service of your most beautiful moments.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    
    // Contact Page
    'contact.subtitle': 'Contact Us',
    'contact.title': 'Let\'s Talk About Your Project',
    'contact.infoTitle': 'Contact Information',
    'contact.infoDesc': 'Do you have a question or would you like to get a personalized quote? Our team is at your disposal to support you in all your projects.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.followUs': 'Follow Us',
    'contact.quickContact': 'Quick Contact',
    'contact.whatsappDesc': 'Need an immediate answer? Contact us directly on WhatsApp.',
    'contact.whatsappBtn': 'Chat on WhatsApp',
    'contact.formName': 'Full Name',
    'contact.formNamePlaceholder': 'Your name...',
    'contact.formEmail': 'Email',
    'contact.formEmailPlaceholder': 'your@email.com',
    'contact.formType': 'Event Type',
    'contact.typeOther': 'Other',
    'contact.formMessage': 'Message',
    'contact.formMessagePlaceholder': 'How can we help you?',
    'contact.formSubmit': 'Send my request',
    'contact.formNote': 'We will get back to you within 24h to 48h.',
    
    // About Page
    'about.subtitle': 'About L’œil ORG',
    'about.title': 'Our History & Our Passion',
    'about.visionTitle': 'A vision of excellence',
    'about.story1': 'L’œil ORG was born from a deep passion for elegance and detail. Founded with the idea that every ceremony deserves to be unique, our company quickly established itself as a reference in event organization and high-end beauty services.',
    'about.story2': 'Our name, "L’œil ORG", reflects our ability to see beyond the ordinary. We have that attentive eye that captures the nuances, emotions and details that make all the difference between a good event and an unforgettable moment.',
    'about.exp': 'Years of experience',
    'about.success': 'Successful events',
    'about.missionTitle': 'Our Mission',
    'about.missionText': 'Support our clients in the most important moments of their lives by offering organization and beauty services that exceed their expectations, while respecting their budget and vision.',
    'about.visionTextTitle': 'Our Vision',
    'about.visionText': 'Become the preferred partner for all those seeking excellence and originality, staying at the forefront of trends while preserving timeless elegance.',
    'about.whySubtitle': 'Our Strengths',
    'about.whyTitle': 'Why choose us?',
    'about.feature1': 'Expert Team',
    'about.feature1Desc': 'Passionate and trained professionals.',
    'about.feature2': 'Tailor-made',
    'about.feature2Desc': 'Each project is unique and personalized.',
    'about.feature3': 'Guaranteed Quality',
    'about.feature3Desc': 'We make no compromise on quality.',
    'about.feature4': 'Passion',
    'about.feature4Desc': 'We love what we do, and it shows.',
    'about.premium': 'Premium Quality',
    
    // Services Page Details
    'services.wedding': 'Wedding Planning',
    'services.weddingDesc': 'Complete organization for the most beautiful day of your life. We manage every aspect so you can live your dream without stress.',
    'services.weddingF1': 'Search for exceptional venues',
    'services.weddingF2': 'Vendor management',
    'services.weddingF3': 'Design and floral decoration',
    'services.weddingF4': 'Day-of coordination',
    
    'services.beauty': 'Beauty & Aesthetics',
    'services.beautyDesc': 'Enhance your natural beauty with our professional services. Makeup, hairstyling, and treatments for all your special occasions.',
    'services.beautyF1': 'Professional makeup',
    'services.beautyF2': 'Event hairstyling',
    'services.beautyF3': 'Facial treatments',
    'services.beautyF4': 'Image consulting',
    
    'services.catering': 'Catering Service',
    'services.cateringDesc': 'A refined culinary experience for your guests. Personalized menus that will delight even the most demanding palates.',
    'services.cateringF1': 'Tailor-made menus',
    'services.cateringF2': 'Cocktails and buffets',
    'services.cateringF3': 'Professional table service',
    'services.cateringF4': 'Fine pastry',
    
    'services.requestQuote': 'Request a personalized quote',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
