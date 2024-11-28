import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Target, PiggyBank } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Inteligência Artificial',
    description: 'Utilizamos IA avançada para otimizar campanhas e análise de dados em tempo real.',
  },
  {
    icon: Clock,
    title: 'Agilidade',
    description: 'Processos automatizados que garantem resultados mais rápidos e eficientes.',
  },
  {
    icon: Target,
    title: 'Precisão',
    description: 'Decisões baseadas em dados com alto nível de assertividade.',
  },
  {
    icon: PiggyBank,
    title: 'Custo-Benefício',
    description: 'Tecnologia avançada com preços competitivos para seu negócio.',
  },
];

export function AiAdvantage() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="font-extrabold">I</span>novação com IA
          </h2>
          <p className="text-xl text-gray-300">
            Marketing digital potencializado por Inteligência Artificial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}