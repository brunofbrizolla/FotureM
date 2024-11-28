import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = '+351938602478';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      whileHover={{ scale: 1.1 }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <MessageCircle size={32} />
      </div>
    </motion.a>
  );
}