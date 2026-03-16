import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '@/src/components/SectionHeading';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: t('gallery.all') },
    { id: 'wedding', label: t('gallery.weddings') },
    { id: 'beauty', label: t('gallery.beauty') },
    { id: 'events', label: t('gallery.events') }
  ];

  const galleryItems = [
    { id: 1, category: "wedding", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
    { id: 2, category: "events", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" },
    { id: 3, category: "events", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800" },
    { id: 4, category: "beauty", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800" },
    { id: 5, category: "beauty", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800" },
    { id: 6, category: "wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
    { id: 7, category: "events", image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800" },
    { id: 8, category: "events", image: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800" },
    { id: 9, category: "beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title={t('gallery.title')} 
          subtitle={t('gallery.subtitle')} 
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id 
                  ? "bg-gold text-white shadow-lg" 
                  : "bg-white text-ink/60 hover:bg-beige border border-beige"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer relative"
                onClick={() => setSelectedImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-ink">
                    {t('gallery.view')}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImage} 
                className="max-w-full max-h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
