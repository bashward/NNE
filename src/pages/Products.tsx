import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Download, FileText, ChevronRight } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      category: "Ferrite Transformers",
      categorySlug: "ferrite-transformers",
      items: [
        {
          name: "Engineered Solutions",
          slug: "engineered-solutions",
          description: "Bespoke magnetic components tailored to your specific requirements",
          specs: [
            "Custom designs available",
            "Application-specific optimization",
            "Comprehensive design support"
          ],
          image: "images/ferrite-transformer.jpg"
        },
        {
          name: "Standard Portfolio",
          slug: "standard-portfolio",
          description: "Pre-engineered solutions for common applications",
          specs: [
            "Enhanced thermal management",
            "Proven reliability",
            "Quick turnaround time"
          ],
          image: "/images/ferrite-transformer-standard.png"
        }
      ]
    },
    
    {
      category: "Toroidals",
      categorySlug: "toroidals",
      items: [
        {
          name: "Premium Series",
          slug: "premium-series",
          description: "High-performance toroidal solutions for precision applications",
          specs: [
            "Superior noise reduction",
            "Compact form factor",
            "Optimized efficiency"
          ],
          image: "images/toroidal.png"
        },
        {
          name: "Industrial Range",
          slug: "industrial-range",
          description: "Robust toroidal solutions for demanding environments",
          specs: [
            "Enhanced durability",
            "Thermal optimization",
            "Versatile mounting options"
          ],
          image: "images/toroidal-standard.png"
        }
      ]
    },
    {
      category: "CMC Choke",
      categorySlug: "cmc-choke",
      items: [
        {
          name: "EMI Suppression Series",
          slug: "emi-suppression-series",
          description: "Advanced electromagnetic interference suppression solutions",
          specs: [
            "High common-mode attenuation",
            "Wide frequency range coverage",
            "Compact design footprint"
          ],
          image: "images/cmc-choke.png"
        },
        {
          name: "Power Line Series",
          slug: "power-line-series",
          description: "Specialized filters for power line applications",
          specs: [
            "Superior EMI reduction",
            "Multiple current ratings",
            "Certified compliance"
          ],
          image: "images/cmc-choke-standard.png"
        }
      ]
    },
    {
      category: "Air Coil",
      categorySlug: "air-coil",
      items: [
        {
          name: "Precision Wound Series",
          slug: "precision-wound-series",
          description: "High-Q air core inductors for precision applications",
          specs: [
            "Minimal parasitic effects",
            "High frequency stability",
            "Custom inductance values"
          ],
          image: "images/air-coil.png"
        },
        {
          name: "RF Applications",
          slug: "rf-applications",
          description: "Specialized air coils for radio frequency systems",
          specs: [
            "Low loss design",
            "Precise inductance control",
            "Temperature stability"
          ],
          image: "images/air-coil-standard.png"
        }
      ]
    },
    {
      category: "Drum/Inductors",
      categorySlug: "drum-inductors",
      items: [
        {
          name: "Power Series",
          slug: "power-series",
          description: "High-current inductors for power applications",
          specs: [
            "Excellent saturation characteristics",
            "Low core losses",
            "Thermal management features"
          ],
          image: "images/drum-inductor.png"
        },
        {
          name: "Filter Applications",
          slug: "filter-applications",
          description: "Specialized inductors for filtering solutions",
          specs: [
            "High inductance stability",
            "Low DCR options",
            "Multiple mounting styles"
          ],
          image: "images/drum-inductor-standard.png"
        }
      ]
    },
    {
      category: "Ferrite Cores",
      categorySlug: "ferrite-cores",
      items: [
        {
          name: "Power Ferrites",
          slug: "power-ferrites",
          description: "High-performance ferrite cores for power applications",
          specs: [
            "Low core losses",
            "High saturation flux density",
            "Temperature stability"
          ],
          image: "images/ferrite-cores.png"
        },
        {
          name: "EMI Suppression Cores",
          slug: "emi-suppression-cores",
          description: "Specialized cores for EMI reduction",
          specs: [
            "Wide frequency range",
            "High permeability",
            "Multiple shapes available"
          ],
          image: "images/ferrite-cores-standard.png"
        }
      ]
    },
    {
      category: "Powder Cores",
      categorySlug: "powder-cores",
      items: [
        {
          name: "High Flux Cores",
          slug: "high-flux-cores",
          description: "Advanced powder cores for high-current applications",
          specs: [
            "High saturation flux density",
            "Low core loss",
            "Excellent temperature stability"
          ],
          image: "images/powder-cores.png"
        },
        {
          name: "MPP Cores",
          slug: "mpp-cores",
          description: "Molypermalloy powder cores for precision applications",
          specs: [
            "High permeability stability",
            "Low core losses",
            "Superior DC bias performance"
          ],
          image: "images/powder-cores-standard.png"
        }
      ]
    },
    {
      category: "Bobbins",
      categorySlug: "bobbins",
      items: [
        {
          name: "Standard Bobbins",
          slug: "standard-bobbins",
          description: "High-quality bobbins for transformer assembly",
          specs: [
            "Multiple pin configurations",
            "UL94V-0 rated materials",
            "Precise dimensional control"
          ],
          image: "images/bobbins.png"
        },
        {
          name: "Custom Bobbins",
          slug: "custom-bobbins",
          description: "Custom-designed bobbins for specific applications",
          specs: [
            "Application-specific designs",
            "Various material options",
            "Optimized winding space"
          ],
          image: "images/bobbin-standard.png"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="Product Catalog"
              subtitle="Browse our comprehensive range of magnetic components engineered for optimal performance"
              centered
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mt-8 mb-12 flex justify-center space-x-4">
              <Button variant="outline" className="flex items-center">
                <Download size={18} className="mr-2" />
                Download Catalog
              </Button>
              <Button variant="outline" className="flex items-center">
                <FileText size={18} className="mr-2" />
                Technical Specs
              </Button>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {products.map((category, idx) => (
              <AnimatedSection
                key={idx}
                animation={idx % 2 === 0 ? 'fade-left' : 'fade-right'}
                delay={150 + idx * 100}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary-900 px-8 py-6">
                    <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.items.map((product, productIdx) => (
                        <AnimatedSection
                          key={productIdx}
                          animation="fade-up"
                          delay={200 + productIdx * 50}
                        >
                          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                            <div className="h-48 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                              <p className="text-gray-600 mb-4">{product.description}</p>
                              <ul className="space-y-2 mb-6">
                                {product.specs.map((spec, specIdx) => (
                                  <li key={specIdx} className="flex items-center text-sm text-gray-600">
                                    <ChevronRight size={16} className="text-primary-600 mr-2" />
                                    {spec}
                                  </li>
                                ))}
                              </ul>
                              <div className="flex justify-between items-center">
                                <Link to={`/products/${category.categorySlug}/${product.slug}`}>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </Link>
                                <Link to="/quote">
                                  <Button variant="primary" size="sm">
                                    Request Quote
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our engineering team can design and manufacture custom magnetic components tailored to your specific requirements.
              </p>
              <Link to="/quote">
                <Button variant="primary" size="lg">
                  Contact Our Engineers
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Products;