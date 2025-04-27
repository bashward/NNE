import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { ArrowLeft, CheckCircle2, Download, ArrowRight } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { category, product } = useParams();

  // Comprehensive product data
  const productData = {
    'ferrite-transformers': {
      'engineered-solutions': {
        name: "Engineered Solutions",
        description: "Bespoke magnetic components tailored to your specific requirements",
        fullDescription: "Our engineered solutions provide custom-designed magnetic components that perfectly match your application requirements. Each component is meticulously designed and tested to ensure optimal performance.",
        features: [
          "Custom designs for specific applications",
          "Comprehensive engineering support",
          "Prototype development",
          "Performance optimization",
          "Thermal management solutions",
          "EMI/EMC compliance"
        ],
        specifications: {
          "Power Range": "1W to 5kW",
          "Frequency": "10kHz to 1MHz",
          "Temperature Range": "-40°C to +125°C",
          "Efficiency": "Up to 98%",
          "Isolation": "Up to 6kV"
        },
        applications: [
          "Switch Mode Power Supplies",
          "DC-DC Converters",
          "Industrial Controls",
          "Medical Equipment",
          "Telecommunications"
        ],
        image: "/images/ferrite-transformer.jpg"
      },
      'standard-portfolio': {
        name: "Standard Portfolio",
        description: "Pre-engineered solutions for common applications",
        fullDescription: "Our standard portfolio offers proven, reliable magnetic components designed for common applications. These components provide excellent performance while maintaining cost-effectiveness.",
        features: [
          "Standardized designs",
          "Quick delivery",
          "Proven reliability",
          "Cost-effective solutions",
          "Multiple mounting options",
          "RoHS compliant"
        ],
        specifications: {
          "Power Range": "1W to 1kW",
          "Frequency": "20kHz to 500kHz",
          "Temperature Range": "-20°C to +100°C",
          "Efficiency": "Up to 96%",
          "Isolation": "Up to 4kV"
        },
        applications: [
          "Consumer Electronics",
          "LED Lighting",
          "Office Equipment",
          "Home Appliances",
          "Industrial Power Supplies"
        ],
        image: "/images/ferrite-transformer-standard.png"
      }
    },
    'toroidals': {
      'premium-series': {
        name: "Premium Series",
        description: "High-performance toroidal solutions for precision applications",
        fullDescription: "Our Premium Series toroidal transformers represent the pinnacle of magnetic component design, offering superior performance and reliability for demanding applications.",
        features: [
          "Ultra-low noise operation",
          "High power density",
          "Premium grade materials",
          "Advanced thermal management",
          "Custom mounting options",
          "100% testing and verification"
        ],
        specifications: {
          "Power Range": "50VA to 3kVA",
          "Frequency": "50/60Hz",
          "Temperature Rise": "<50°C at full load",
          "Efficiency": ">95%",
          "Regulation": "<3%"
        },
        applications: [
          "Audio Equipment",
          "Medical Devices",
          "Test & Measurement",
          "Laboratory Equipment",
          "High-end Power Supplies"
        ],
        image: "/images/toroidal.png"
      },
      'industrial-range': {
        name: "Industrial Range",
        description: "Robust toroidal solutions for demanding environments",
        fullDescription: "Engineered for reliability in industrial environments, our Industrial Range toroidal transformers deliver consistent performance under challenging conditions.",
        features: [
          "Ruggedized construction",
          "Enhanced thermal performance",
          "Multiple mounting options",
          "Vacuum impregnation",
          "Industrial-grade materials",
          "Extended operational life"
        ],
        specifications: {
          "Power Range": "100VA to 5kVA",
          "Voltage": "Up to 1000V",
          "Temperature Range": "-25°C to +155°C",
          "Insulation Class": "H (180°C)",
          "Protection": "IP23 to IP54"
        },
        applications: [
          "Industrial Controls",
          "Factory Automation",
          "Power Distribution",
          "Motor Drives",
          "Heavy Equipment"
        ],
        image: "/images/toroidal-standard.png"
      }
    },
    'cmc-choke': {
      'emi-suppression-series': {
        name: "EMI Suppression Series",
        description: "Advanced electromagnetic interference suppression solutions",
        fullDescription: "Our EMI Suppression Series common mode chokes are engineered to provide superior electromagnetic interference reduction across a wide frequency range.",
        features: [
          "High common mode attenuation",
          "Wide frequency range coverage",
          "Compact design footprint",
          "Multiple core materials",
          "Custom inductance values",
          "RoHS compliant"
        ],
        specifications: {
          "Current Rating": "1A to 50A",
          "Frequency Range": "10kHz to 30MHz",
          "Impedance": "Up to 2kΩ at 100MHz",
          "Temperature Range": "-40°C to +125°C",
          "Isolation": "2kV standard"
        },
        applications: [
          "Switch Mode Power Supplies",
          "Industrial Equipment",
          "Medical Devices",
          "Automotive Electronics",
          "Telecommunications"
        ],
        image: "/images/cmc-choke.png"
      },
      'power-line-series': {
        name: "Power Line Series",
        description: "Specialized filters for power line applications",
        fullDescription: "Our Power Line Series chokes are designed for optimal performance in power line filtering applications, providing excellent noise suppression and high current handling capability.",
        features: [
          "Superior EMI reduction",
          "Multiple current ratings",
          "Certified compliance",
          "Robust construction",
          "High saturation current",
          "Low DCR design"
        ],
        specifications: {
          "Current Rating": "10A to 100A",
          "Inductance": "0.1mH to 10mH",
          "DC Resistance": "<50mΩ",
          "Rated Voltage": "Up to 600VAC",
          "Safety Approvals": "UL, VDE, CSA"
        },
        applications: [
          "Industrial Power Supplies",
          "Solar Inverters",
          "EV Charging",
          "UPS Systems",
          "Motor Drives"
        ],
        image: "/images/cmc-choke-standard.png"
      }
    },
    'air-coil': {
      'precision-wound-series': {
        name: "Precision Wound Series",
        description: "High-Q air core inductors for precision applications",
        fullDescription: "Our Precision Wound air core inductors are designed for applications requiring minimal parasitic effects and high frequency stability.",
        features: [
          "Minimal parasitic effects",
          "High frequency stability",
          "Custom inductance values",
          "Self-shielding design",
          "Low loss construction",
          "Precision winding"
        ],
        specifications: {
          "Inductance Range": "0.1µH to 1000µH",
          "Q Factor": ">200 at 1MHz",
          "SRF": ">100MHz",
          "Current Rating": "Up to 30A",
          "Temperature Range": "-55°C to +125°C"
        },
        applications: [
          "RF Circuits",
          "Test Equipment",
          "Medical Devices",
          "Scientific Instruments",
          "Communication Systems"
        ],
        image: "/images/air-coil.png"
      },
      'rf-applications': {
        name: "RF Applications",
        description: "Specialized air coils for radio frequency systems",
        fullDescription: "Our RF Applications series air coils are optimized for high-frequency performance with minimal losses and excellent stability.",
        features: [
          "Low loss design",
          "Precise inductance control",
          "Temperature stability",
          "High Q factor",
          "Custom configurations",
          "RF optimized"
        ],
        specifications: {
          "Frequency Range": "1MHz to 1GHz",
          "Q Factor": ">250 at 100MHz",
          "Power Rating": "Up to 100W",
          "Stability": "<50ppm/°C",
          "Tolerance": "±2% standard"
        },
        applications: [
          "RF Power Amplifiers",
          "Matching Networks",
          "Filter Circuits",
          "Antenna Tuning",
          "Broadcasting Equipment"
        ],
        image: "/images/air-coil-standard.png"
      }
    },
    'drum-inductors': {
      'power-series': {
        name: "Power Series",
        description: "High-current inductors for power applications",
        fullDescription: "Our Power Series drum inductors are engineered for high-current applications requiring excellent saturation characteristics and thermal management.",
        features: [
          "Excellent saturation characteristics",
          "Low core losses",
          "Thermal management features",
          "High current handling",
          "Minimal EMI emission",
          "Robust construction"
        ],
        specifications: {
          "Current Rating": "10A to 200A",
          "Inductance": "1µH to 10mH",
          "Saturation Current": "Up to 250A",
          "DCR": "<1mΩ",
          "Temperature Rise": "<40°C at rated current"
        },
        applications: [
          "DC-DC Converters",
          "Solar Inverters",
          "Motor Drives",
          "UPS Systems",
          "Battery Storage"
        ],
        image: "/images/drum-inductor.png"
      },
      'filter-applications': {
        name: "Filter Applications",
        description: "Specialized inductors for filtering solutions",
        fullDescription: "Our Filter Applications drum inductors provide high inductance stability and low DCR for optimal filtering performance.",
        features: [
          "High inductance stability",
          "Low DCR options",
          "Multiple mounting styles",
          "Custom designs available",
          "High frequency capability",
          "Compact footprint"
        ],
        specifications: {
          "Inductance Range": "10µH to 100mH",
          "Current Rating": "5A to 100A",
          "Core Loss": "<100mW/cm³",
          "Operating Frequency": "Up to 500kHz",
          "Temperature Range": "-40°C to +130°C"
        },
        applications: [
          "Output Filters",
          "EMI Suppression",
          "Power Factor Correction",
          "Harmonic Filters",
          "Grid-Tie Inverters"
        ],
        image: "/images/drum-inductor-standard.png"
      }
    },
    'ferrite-cores': {
      'power-ferrites': {
        name: "Power Ferrites",
        description: "High-performance ferrite cores for power applications",
        fullDescription: "Our power ferrite cores are engineered for optimal performance in high-frequency power conversion applications, offering excellent magnetic properties and thermal stability.",
        features: [
          "Low core losses",
          "High saturation flux density",
          "Excellent temperature stability",
          "Multiple material grades",
          "Wide size range",
          "Custom shapes available"
        ],
        specifications: {
          "Material Grades": "N27, N87, N97",
          "Frequency Range": "20kHz to 500kHz",
          "Initial Permeability": "1500 to 3000",
          "Saturation Flux Density": ">380mT",
          "Core Loss": "<80kW/m³"
        },
        applications: [
          "SMPS Transformers",
          "Power Inductors",
          "EMI Suppression",
          "High-frequency Transformers",
          "Resonant Converters"
        ],
        image: "/images/ferrite-cores.png"
      },
      'emi-suppression-cores': {
        name: "EMI Suppression Cores",
        description: "Specialized cores for EMI reduction",
        fullDescription: "Our EMI suppression cores are designed to effectively reduce electromagnetic interference across a wide frequency range, ensuring compliance with EMC standards.",
        features: [
          "High permeability",
          "Wide frequency coverage",
          "Multiple shapes and sizes",
          "Split core options",
          "Snap-fit designs",
          "Custom solutions available"
        ],
        specifications: {
          "Material Grades": "MnZn, NiZn",
          "Frequency Range": "1MHz to 1GHz",
          "Initial Permeability": "2000 to 15000",
          "Temperature Range": "-40°C to +125°C",
          "Impedance": "Up to 1kΩ at 100MHz"
        },
        applications: [
          "Cable Shielding",
          "Power Supply Filtering",
          "Data Line Protection",
          "Common Mode Chokes",
          "Signal Integrity"
        ],
        image: "/images/ferrite-cores-standard.png"
      }
    },
    'powder-cores': {
      'high-flux-cores': {
        name: "High Flux Cores",
        description: "Advanced powder cores for high-current applications",
        fullDescription: "Our High Flux powder cores deliver exceptional performance in high-current applications, combining high saturation flux density with excellent temperature stability.",
        features: [
          "High saturation flux density",
          "Low core losses",
          "Excellent temperature stability",
          "Distributed air gap",
          "Stable permeability",
          "Multiple coating options"
        ],
        specifications: {
          "Material": "50% Ni-Fe alloy",
          "Permeability Range": "14µ to 160µ",
          "Saturation Flux Density": ">1.5T",
          "Core Loss": "<120mW/cm³",
          "Temperature Range": "-55°C to +200°C"
        },
        applications: [
          "Output Inductors",
          "Current Sensors",
          "Power Filters",
          "Energy Storage",
          "DC/DC Converters"
        ],
        image: "/images/powder-cores.png"
      },
      'mpp-cores': {
        name: "MPP Cores",
        description: "Molypermalloy powder cores for precision applications",
        fullDescription: "Our MPP (Molypermalloy Powder) cores offer superior performance in applications requiring high stability and low losses across a wide range of operating conditions.",
        features: [
          "High permeability stability",
          "Low core losses",
          "Superior DC bias performance",
          "Excellent temperature stability",
          "Consistent AL value",
          "Multiple size options"
        ],
        specifications: {
          "Permeability Range": "14µ to 550µ",
          "Saturation Flux Density": ">0.7T",
          "Core Loss": "<80mW/cm³",
          "Temperature Stability": "<±0.1%/°C",
          "DC Bias Performance": "Up to 80% rated HDC"
        },
        applications: [
          "Precision Inductors",
          "Filter Inductors",
          "Pulse Transformers",
          "Current Transformers",
          "Broadband Transformers"
        ],
        image: "/images/powder-cores-standard.png"
      }
    },
    'bobbins': {
      'standard-bobbins': {
        name: "Standard Bobbins",
        description: "High-quality bobbins for transformer assembly",
        fullDescription: "Our standard bobbins are manufactured to precise specifications, ensuring reliable performance and ease of assembly in transformer manufacturing.",
        features: [
          "Multiple pin configurations",
          "UL94V-0 rated materials",
          "Precise dimensional control",
          "Standardized mounting",
          "Various sizes available",
          "High temperature resistance"
        ],
        specifications: {
          "Material": "PBT, PA66",
          "Flammability Rating": "UL94V-0",
          "Temperature Rating": "130°C",
          "Pin Types": "Vertical, Horizontal",
          "Color": "Black, White"
        },
        applications: [
          "SMPS Transformers",
          "Current Transformers",
          "Power Inductors",
          "Common Mode Chokes",
          "Pulse Transformers"
        ],
        image: "/images/bobbins.png"
      },
      'custom-bobbins': {
        name: "Custom Bobbins",
        description: "Custom-designed bobbins for specific applications",
        fullDescription: "We offer custom bobbin solutions tailored to your specific requirements, optimizing performance and manufacturability for your unique applications.",
        features: [
          "Application-specific designs",
          "Various material options",
          "Optimized winding space",
          "Custom pin layouts",
          "Special mounting features",
          "Prototype development"
        ],
        specifications: {
          "Materials Available": "PBT, PA66, PPS, LCP",
          "Temperature Range": "-40°C to +180°C",
          "Creepage Distance": "Custom to requirement",
          "Clearance": "Custom to requirement",
          "Tolerance": "±0.1mm"
        },
        applications: [
          "Medical Transformers",
          "Automotive Components",
          "Aerospace Applications",
          "Military Equipment",
          "Custom Power Supplies"
        ],
        image: "/images/bobbin-standard.png"
      }
    }
  };

  const productInfo = productData[category as keyof typeof productData]?.[product as string];

  if (!productInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-32 pb-20">
          <Container>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
              <Link to="/products">
                <Button variant="primary">Return to Products</Button>
              </Link>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8">
              <ArrowLeft size={20} className="mr-2" />
              Back to Products
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-right">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                  <img
                    src={productInfo.image}
                    alt={productInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{productInfo.name}</h1>
                <p className="text-xl text-gray-600 mb-8">{productInfo.fullDescription}</p>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productInfo.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-700">
                          <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(productInfo.specifications).map(([key, value], index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-500">{key}</div>
                          <div className="font-medium text-gray-900">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Applications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productInfo.applications.map((application, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-700">
                          <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0" />
                          <span>{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link to="/quote">
                      <Button variant="primary" size="lg" className="shadow-lg">
                        Request Quote <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="lg">
                      Download Datasheet <Download size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;