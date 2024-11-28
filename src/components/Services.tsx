import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, LineChart, Code } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO',
    description: 'Otimização completa do seu site para os mecanismos de busca, aumentando sua visibilidade online.',
  },
  {
    icon: Globe,
    title: 'Google Business',
    description: 'Gestão profissional da sua presença no Google Business, maximizando sua visibilidade local.',
  },
  {
    icon: LineChart,
    title: 'Google Ads',
    description: 'Campanhas estratégicas de anúncios para atrair clientes qualificados e aumentar suas conversões.',
  },
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites modernos e otimizados para converter visitantes em clientes.',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="font-extrabold">S</span>erviços
          </h2>
          <p className="text-xl text-gray-600">Soluções completas para sua presença digital</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors">
                <service.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="font-extrabold">{service.title[0]}</span>
                {service.title.slice(1)}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}