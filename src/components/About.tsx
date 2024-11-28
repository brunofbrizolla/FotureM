import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Estratégias personalizadas para cada negócio',
  'Equipe especializada e certificada',
  'Resultados mensuráveis e transparentes',
  'Suporte dedicado e ágil',
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transformamos sua presença digital em resultados reais
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A Foture Marketink é especializada em criar estratégias digitais que 
              impulsionam seu negócio. Combinamos expertise técnica com criatividade 
              para entregar resultados excepcionais.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Nossa equipe"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}