import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const whatsappNumber = '+351938602478';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-br from-black to-purple-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60" />
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          alt="Marketing Digital"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="font-extrabold">T</span>ransforme sua presença digital com a
            <span className="text-purple-400"> Foture Marketink</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Estratégias inovadoras de marketing digital para impulsionar seu negócio ao próximo nível
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2 group">
                Comece Agora{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                Fale Conosco
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}