import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Code2, GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Conseil et Gouvernance",
    description: "Accompagnement dans la mise en place et le pilotage de la gouvernance sécurité, diagnostic cybersécurité et mise en conformité aux normes ISO 27001.",
  },
  {
    icon: <Server className="w-12 h-12 text-blue-600" />,
    title: "Intégration de Solutions IT",
    description: "Mise en place et intégration de solutions adaptées aux besoins IT, avec conseils sur les bonnes pratiques de gestion.",
  },
  {
    icon: <Code2 className="w-12 h-12 text-blue-600" />,
    title: "Infogérance",
    description: "Maintien en condition opérationnelle et support N2/N3 sur différentes solutions techniques.",
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    title: "Formation",
    description: "Formations managériales et techniques spécifiques pour maîtriser les aspects fonctionnels et techniques des solutions installées.",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous offrons des services variés à nos clients pour atteindre leurs objectifs IT.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
