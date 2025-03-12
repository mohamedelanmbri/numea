
import { motion } from 'framer-motion';
import { Shield, Server, Code2, GraduationCap, ChevronDown, Phone, Mail, MapPin, Briefcase, Users, Target, Lock } from 'lucide-react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import { useInView } from 'react-intersection-observer';
import ServicesSection from './components/services';
import Footer from './components/footer';
import './index.css';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Bienvenue chez NUMEA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl mb-8"
          >
            Le choix de la Confiance, la Sécurité et la Robustesse
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            En savoir plus
          </motion.button>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-10"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="a-propos" ref={ref} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Qui Sommes-Nous ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NUMEA est une société de consulting et de service en Systèmes d'Information à taille humaine.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "Cybersécurité",
                description: "Protection complète de vos systèmes"
              },
              {
                icon: <Server className="w-12 h-12 text-blue-600" />,
                title: "Infrastructure IT",
                description: "Solutions robustes et évolutives"
              },
              {
                icon: <Code2 className="w-12 h-12 text-blue-600" />,
                title: "Solutions Métier",
                description: "Applications adaptées à vos besoins"
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
                title: "Formation",
                description: "Développement des compétences"
              }
            ].map((service, index) => (
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

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
              <p className="text-gray-600">
                Notre stratégie s'appuie sur une vision globale de la protection de toute catégorie de l'information, ainsi que la digitalisation des processus de nos clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Notre Équipe</h3>
              <p className="text-gray-600">
                Une équipe d'experts passionnés qui s'engage à fournir des solutions innovantes et adaptées à vos besoins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-gray-600">
                Devenir le partenaire de référence en transformation digitale et sécurité des systèmes d'information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <ServicesSection/>
      </section>

      {/* Contact Section */}
<section id='contact' className="py-20 bg-white">
          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Besoin d'aide ? Contactez-nous</h2>
            
          </motion.div>
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12">
      
      {/* Contact Info */}
      <div>
        <h2 className="text-4xl font-bold mb-8">Contactez-nous</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <MapPin className="w-6 h-6 text-blue-600 mr-4" />
            <p>Rue Tonkin, Immeuble 8, n° 3<br />Avenue Madagascar, 10060<br />Rabat - MAROC</p>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-blue-600 mr-4" />
            <p>+212 (0)5 30 03 30 01</p>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-blue-600 mr-4" />
            <p>contact@numea.ma</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6">
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.846127896865!2d-6.849278!3d34.016222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMzTCsDAwJzU4LjQiTiA2wrA1MCc1Ny40Ilc!5e0!3m2!1sen!2sma!4v1646930487045!5m2!1sen!2sma"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form className="space-y-6">
          <div>
            <input type="text" placeholder="Nom / Raison sociale" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <input type="email" placeholder="E-mail" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <input type="text" placeholder="Objet" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <Footer/>

      <Chatbot />
    </div>
  );
}

export default App;