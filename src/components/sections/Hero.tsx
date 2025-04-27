import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [splineError, setSplineError] = useState(false);
  
  const images = [
    "/images/ferrite-transformer.jpg",
    "/images/cmc-choke.png",
    "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const stats = [
    { label: 'Quality Rating', value: '99.8%' },
    { label: 'Global Clients', value: '200+' },
    { label: 'Years Experience', value: '25+' }
  ];

  const handleSplineError = () => {
    console.error('Spline scene failed to load');
    setSplineError(true);
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Spline Animation Background */}
     
      {/* Fallback gradient background when Spline fails */}
      <div className={`absolute inset-0 ${splineError ? 'bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800' : 'bg-gradient-to-br from-primary-950/90 via-primary-900/80 to-primary-800/70'}`} />
      
      <div className="relative w-full py-20 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-8 border border-white/20 mt-16 md:mt-0">
                <span className="text-primary-200">ISO 9001:2015 Certified</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary-300 mx-3" />
                <span className="text-primary-200">Industry Leader</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Precision Magnetic <br />
                <span className="text-primary-300">Components</span> for <br />
                Modern Electronics
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-4 max-w-lg">
                Industry-leading manufacturer of high-quality ferrite transformers and magnetic components, engineered for optimal performance in demanding applications.
              </p>
              <p className="text-lg md:text-xl text-primary-300 mb-8 max-w-lg font-medium">
                Backed by SAP-driven precision and industry-standard processes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/quote">
                  <Button size="lg" variant="primary" className="bg-primary-600 hover:bg-primary-500 px-8">
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-700 px-8">
                    Explore Products <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-primary-300">{stat.value}</div>
                    <div className="text-sm text-primary-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Product showcase ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-white w-4' 
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Industry-Leading Technology</h3>
                  <p className="text-primary-100 mb-6">
                    Our advanced manufacturing facilities produce components with precision tolerances and exceptional reliability.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center justify-center p-4 bg-primary-900/50 rounded-lg border border-primary-700/30">
                      <Shield className="w-8 h-8 text-primary-300" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-primary-900/50 rounded-lg border border-primary-700/30">
                      <Award className="w-8 h-8 text-primary-300" />
                    </div>
                    <div className="flex items-center justify-center p-4 bg-primary-900/50 rounded-lg border border-primary-700/30">
                      <Users className="w-8 h-8 text-primary-300" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary-400/30 rounded-tr-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary-400/30 rounded-bl-3xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;