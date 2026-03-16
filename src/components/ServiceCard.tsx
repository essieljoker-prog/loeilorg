import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  key?: React.Key;
}

export const ServiceCard = ({ title, description, image, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-serif mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {description}
        </p>
        <Link to="/contact">
          <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-ink">
            En savoir plus <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
