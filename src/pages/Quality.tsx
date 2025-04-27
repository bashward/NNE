import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Shield, CheckCircle2, Target, Users, ClipboardCheck, Microscope, Factory, Award } from 'lucide-react';

const Quality: React.FC = () => {
  const qualityManagement = [
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Process Compliance",
      description: "Well-laid process and system to ensure compliance & regular audit. Stringent quality control norms and standards are maintained by our trained personnel."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Control",
      description: "Continuous emphasis on quality control at each level of the production stage. Defined quality Parameters/AQL charts."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated QA Team",
      description: "A vigilant QA team, dedicated to the continuous improvement of our products & services."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Raw Material Quality",
      description: "Meticulous attention towards the quality of raw material procurement."
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Modern Testing",
      description: "In-house modern testing equipment for comprehensive quality assurance."
    }
  ];

  const objectives = [
    {
      title: "Customer Satisfaction",
      description: "Total customer satisfaction by consistent delivery of the products conforming to Quality & Cost."
    },
    {
      title: "Safe Environment",
      description: "Ensure a safe working environment for all its employees."
    },
    {
      title: "Workforce Development",
      description: "Upgradation of skill and motivation of the workforce to make them valuable Associates in achieving the company's overall Quality objectives."
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      pdfUrl: "/certifications/ISO90012015.pdf"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      pdfUrl: "/certifications/ISO140012015.pdf"
    },
    {
      name: "IATF 16949:2016",
      description: "Automotive Quality Management",
      pdfUrl: "/certifications/ISO450012018.pdf"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <Container>
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Commitment to Quality
                </h1>
                <p className="text-xl text-gray-600">
                  N.N Magnetics and Electronics strongly believes in the policy of quality assurance with Customer Centric adoption. We never compromise with quality in any circumstances while meeting customer requirements.
                </p>
              </div>
            </AnimatedSection>

            {/* Quality Stats */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Quality Acceptance Rate</div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Testing Coverage</div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-2">ISO</div>
                  <div className="text-gray-600">9001:2015 Certified</div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Quality Management Section */}
        <section className="py-20 bg-white">
          <Container>
            <AnimatedSection>
              <SectionHeading
                title="Total Quality Management"
                subtitle="Our comprehensive approach to ensuring the highest standards of quality"
                centered
              />
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityManagement.map((item, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="bg-blue-50 rounded-xl p-6 h-full group hover:bg-blue-100 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-blue-800 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Quality Objectives */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-primary-900">
          <Container>
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Quality Objectives
                </h2>
                <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                  Our strategic goals for maintaining excellence in quality
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {objective.title}
                    </h3>
                    <p className="text-blue-200">
                      {objective.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <Container>
            <AnimatedSection>
              <SectionHeading
                title="Quality Certifications"
                subtitle="Our commitment to quality is validated by international standards"
                centered
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-12 bg-gradient-to-r from-blue-900 to-primary-900 rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-12">
                    <div className="flex items-center mb-8">
                      <Award className="w-12 h-12 text-blue-300" />
                      <h3 className="text-2xl font-bold text-white ml-4">Certified Excellence</h3>
                    </div>
                    <div className="space-y-6">
                      {certifications.map((cert, index) => (
                        <div key={index} className="group">
                          <div className="flex items-center justify-between text-blue-100">
                            <div className="flex items-center">
                              <CheckCircle2 className="w-6 h-6 mr-3 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                              <div>
                                <span className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                                  {cert.name}
                                </span>
                                <p className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                                  {cert.description}
                                </p>
                              </div>
                            </div>
                            <a
                              href={cert.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-300 hover:text-blue-200 transition-colors duration-300 ml-4"
                            >
                              Click here
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-full min-h-[300px] lg:min-h-0">
                    <img 
                      src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Quality certification"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quality;