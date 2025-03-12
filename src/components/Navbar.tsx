import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Briefcase, UserPlus } from 'lucide-react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from './logoNumea.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on home, just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <Link to='/'><img src={logo} style={{height:'100px'}} /></Link>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            
              <motion.a
                className={`font-medium flex items-center space-x-2 ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home size={18} />
                <span><Link to="/">Accueil</Link></span>
              </motion.a>
              {/* //second */}
              <motion.a
                className={`font-medium flex items-center space-x-2 ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Info size={18} />
                <button onClick={() => handleScroll("a-propos")}>À Propos</button>
              </motion.a>
              {/* //third */}
              <motion.a
                className={`font-medium flex items-center space-x-2 ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase size={18} />
                <span><Link to="/services">Nos Services</Link></span>
              </motion.a>
              {/* //forth */}
              <motion.a
                className={`font-medium flex items-center space-x-2 ${
                  isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus size={18} />
                <button onClick={() => handleScroll("contact")}>Nous rejoindre</button>
              </motion.a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg rounded-lg mt-2 overflow-hidden"
            >
              <div className="py-2">
                  <motion.a
                    className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    whileHover={{ x: 10 }}
                  >
                    <Home size={18} />
                    <span><Link to='/'>Accueil</Link></span>
                  </motion.a>

                  <motion.a
                    className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    whileHover={{ x: 10 }}
                  >
                    <Info size={18} />
                    <button onClick={() => handleScroll("a-propos")}>À Propos</button>
                  </motion.a>

                  <motion.a
                    className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    whileHover={{ x: 10 }}
                  >
                    <Briefcase size={18} />
                    <span><Link to='/services'>Nos Services</Link></span>
                  </motion.a>

                  <motion.a
                    className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                    whileHover={{ x: 10 }}
                  >
                    <UserPlus size={18} />
                    <button onClick={() => handleScroll("contact")}>Nous rejoindre</button>
                    </motion.a>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;