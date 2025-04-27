import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: "Ferrite Transformers",
      image: "/images/ferrite-transformer.jpg",
      description: "High-frequency switching transformers optimized for modern power supplies",
    },
    {
      title: "Toroidals",
      image: "/images/toroidal.png",
      description: "Low-profile, high-efficiency transformers for power conversion",
    },
    {
      title: "Line Filters",
      image: "/images/cmc-choke.png",
      description: "EMI/RFI suppression solutions for sensitive electronics",
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Our Product Categories"
            subtitle="Precision-engineered magnetic components for demanding applications"
            centered
          />
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 200}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{category.title}</h3>
                  <p className="text-gray-100 mb-4 opacity-100 transition-opacity duration-300 drop-shadow-lg">
                    {category.description}
                  </p>
                  <Link to="/products" className="inline-flex items-center text-white hover:text-primary-200 transition-colors">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              These are just a few examples from our extensive product range. Explore our complete catalog to discover more specialized solutions for your specific needs.
            </p>
            <Link to="/products">
              <Button size="lg" variant="primary" className="shadow-lg">
                View Full Catalog <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default ProductCategories;