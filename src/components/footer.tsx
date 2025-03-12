import React, { useState, useEffect } from 'react';
import logo from './logoNumea.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Server, Code2, GraduationCap, ChevronDown, Lock } from 'lucide-react';
export default function Footer(){
  const [isScrolled, setIsScrolled] = useState(false);
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

    return(
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
              <img src={logo} style={{height:'100px'}} />
              </div>
              <p className="text-gray-400">
                Le choix de la Confiance, la Sécurité et la Robustesse
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
              <ul className="space-y-2">
                <li><Link to='/' className="text-gray-400 hover:text-white flex items-center"><ChevronDown className="w-4 h-4 mr-2" />Accueil</Link></li>
                <li><a onClick={() => handleScroll("a-propos")} className="text-gray-400 hover:text-white flex items-center"><ChevronDown className="w-4 h-4 mr-2" />A propos</a></li>
                <li><Link to='/services' className="text-gray-400 hover:text-white flex items-center"><ChevronDown className="w-4 h-4 mr-2" />Nos Services</Link></li>
                <li><a onClick={() => handleScroll("contact")} className="text-gray-400 hover:text-white flex items-center"><ChevronDown className="w-4 h-4 mr-2" />Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Nos Services</h3>
              <ul className="space-y-2">
                <li><Link to='/services' className="text-gray-400 hover:text-white flex items-center"><Lock className="w-4 h-4 mr-2" />Conseil & Gouvernance</Link></li>
                <li><Link to='/services' className="text-gray-400 hover:text-white flex items-center"><Server className="w-4 h-4 mr-2" />Intégration de solutions</Link></li>
                <li><Link to='/services' className="text-gray-400 hover:text-white flex items-center"><Code2 className="w-4 h-4 mr-2" />Infogérance</Link></li>
                <li><Link to='/services' className="text-gray-400 hover:text-white flex items-center"><GraduationCap className="w-4 h-4 mr-2" />Formation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Rue Tonkin, Immeuble 8, n° 3<br />
                Avenue Madagascar, 10060<br />
                Rabat - MAROC
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} NUMEA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    );
};