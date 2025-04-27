import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  return (
    <header className="fixed w-full z-50 px-4 py-4">
      <Container>
        <div className={`rounded-3xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
            : 'bg-white/50 backdrop-blur-md'
        }`}>
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center">
              <Link to="/" className="block">
                <img 
                  src={logo}
                  alt="NNE Logo" 
                  className="h-10 md:h-12"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/about" className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                location.pathname === '/about' 
                  ? 'bg-primary-700 text-white' 
                  : 'bg-primary-50/80 text-primary-800 hover:bg-primary-100'
              }`}>
                About Us
              </Link>
              <Link to="/products" className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                location.pathname === '/products' 
                  ? 'bg-primary-700 text-white' 
                  : 'bg-primary-50/80 text-primary-800 hover:bg-primary-100'
              }`}>
                Products
              </Link>
              <Link to="/quality" className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                location.pathname === '/quality' 
                  ? 'bg-primary-700 text-white' 
                  : 'bg-primary-50/80 text-primary-800 hover:bg-primary-100'
              }`}>
                Quality
              </Link>
              <Link to="/contact" className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                location.pathname === '/contact' 
                  ? 'bg-primary-700 text-white' 
                  : 'bg-primary-50/80 text-primary-800 hover:bg-primary-100'
              }`}>
                Contact
              </Link>
            </nav>

            <div className="hidden md:block">
              <Link to="/quote">
                <Button variant="primary" className="shadow-lg hover:shadow-xl">Request Quote</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full bg-primary-50/80 text-primary-800 hover:bg-primary-100 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X size={24} className="transform rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="transform rotate-180 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="mx-4 mb-4 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 space-y-2 transform transition-transform duration-500 ease-in-out">
                <Link 
                  to="/about" 
                  className={`block px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === '/about' 
                      ? 'bg-primary-700 text-white' 
                      : 'bg-primary-50/80 text-primary-800 hover:bg-primary-100'
                  }`}
                  style={{
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.1s'
                  }}
                >
                  About Us
                </Link>
                <Link 
                  to="/products" 
                  className={`block px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === '/products' 
                      ? 'bg-primary-700 text-white' 
                      : 'bg-primary-50/80 text-primary-800 hover:bg-primary-100'
                  }`}
                  style={{
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.2s'
                  }}
                >
                  Products
                </Link>
                <Link 
                  to="/quality" 
                  className={`block px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === '/quality' 
                      ? 'bg-primary-700 text-white' 
                      : 'bg-primary-50/80 text-primary-800 hover:bg-primary-100'
                  }`}
                  style={{
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.3s'
                  }}
                >
                  Quality
                </Link>
                <Link 
                  to="/contact" 
                  className={`block px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === '/contact' 
                      ? 'bg-primary-700 text-white' 
                      : 'bg-primary-50/80 text-primary-800 hover:bg-primary-100'
                  }`}
                  style={{
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.4s'
                  }}
                >
                  Contact
                </Link>
                <div 
                  className="pt-2"
                  style={{
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: '0.5s'
                  }}
                >
                  <Link to="/quote">
                    <Button variant="primary" className="w-full shadow-lg hover:shadow-xl">Request Quote</Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;