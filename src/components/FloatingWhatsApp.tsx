import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/22946564301"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-24 right-8 md:bottom-8 md:right-8 z-[9999999] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer pointer-events-auto"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </a>
  );
};
