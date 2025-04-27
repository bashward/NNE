import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import { Mail, Phone, MapPin, Clock, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { scrollToSection } = useSmoothScroll();

  const handleIndustriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      scrollToSection('applications');
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">N.N Magnetics & Electronics Pvt. Ltd.</h3>
            <p className="text-gray-400 mb-4">
              Leading manufacturer of high-quality magnetic components for industrial applications.
              Precision engineering since 1997.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/n-n-magnetics-and-electronics-pvt-ltd" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/ferrite-transformers/engineered-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Ferrite Transformers
                </Link>
              </li>
              <li>
                <Link to="/products/toroidals/premium-series" className="text-gray-400 hover:text-white transition-colors">
                  Toroidal Transformers
                </Link>
              </li>
              <li>
                <Link to="/products/cmc-choke/emi-suppression-series" className="text-gray-400 hover:text-white transition-colors">
                  Line Filters
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-400 hover:text-white transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Plot no. 307, Udyog Vihar Industrial Area, Phase-6, Sector 37, Gurugram, Haryana 122004</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-400 flex-shrink-0" />
                <a href="tel:+18005551234" className="text-gray-400 hover:text-white transition-colors">
                  +91-9953087659
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-400 flex-shrink-0" />
                <a href="mailto:sales@nnelectronics.org" className="text-gray-400 hover:text-white transition-colors">
                  sales@nnelectronics.org
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Monday-Saturday: 9AM-5PM IST</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#applications" onClick={handleIndustriesClick} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Industries Served
                </a>
              </li>
              <li>
                <Link to="/quality" className="text-gray-400 hover:text-white transition-colors">
                  Technical Resources
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-gray-400 hover:text-white transition-colors">
                  Quality Certifications
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Company History
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} N.N Magnetics & Electronics Pvt. Ltd. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;