import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { CheckCircle2, ClipboardCheck, ArrowRight, Shield, Award, FileCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    { id: 'iso9001', name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { id: 'iso14001', name: 'ISO 14001:2015', description: 'Environmental Management' },
    { id: 'iatf16949', name: 'IATF 16949:2016', description: 'Automotive Quality' }
  ];

  const qualityFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Automated Testing",
      description: "100% electrical testing on all units with automated validation systems"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Process Control",
      description: "Statistical process control and real-time monitoring systems"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Documentation",
      description: "Complete lot traceability and comprehensive documentation"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Quality Standards & Certifications"
            subtitle="Our commitment to excellence is validated through rigorous standards compliance and industry certifications"
            centered
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatedSection className="lg:col-span-8" animation="fade-right">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Quality Assurance Process</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {qualityFeatures.map((feature, index) => (
                    <AnimatedSection
                      key={index}
                      animation="fade-up"
                      delay={index * 100}
                      className="group"
                    >
                      <div className="p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-4 group-hover:text-primary-700 transition-colors duration-300">
                          {feature.icon}
                        </div>
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-primary-900 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-primary-800 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl text-white">
                  <h4 className="text-xl font-semibold mb-4">Industry-Leading Standards</h4>
                  <p className="text-primary-100 mb-6">
                    Our magnetic components are manufactured to exceed industry standards with defect rates below 50 PPM, ensuring optimal performance in your critical applications.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-primary-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-white">99.95%</div>
                      <div className="text-primary-200 text-sm">First Pass Yield</div>
                    </div>
                    <div className="text-center p-4 bg-primary-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-white">&lt;50</div>
                      <div className="text-primary-200 text-sm">PPM Defect Rate</div>
                    </div>
                    <div className="text-center p-4 bg-primary-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-primary-200 text-sm">Tested Units</div>
                    </div>
                    <div className="text-center p-4 bg-primary-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-primary-200 text-sm">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4" animation="fade-left">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <AnimatedSection
                      key={cert.id}
                      animation="fade-up"
                      className="group"
                    >
                      <div className="p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary-900 transition-colors duration-300">
                              {cert.name}
                            </h4>
                            <p className="text-sm text-gray-600 group-hover:text-primary-800 transition-colors duration-300">
                              {cert.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={400} className="mt-12">
          <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 mix-blend-overlay bg-cover bg-center" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Transform Your Product's Performance?
                </h2>
                <p className="text-primary-100 mb-8 text-lg leading-relaxed">
                  Let our engineering team help you find the perfect magnetic component solution for your application. Get a detailed quote tailored to your specifications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/quote">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Request Quote <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-white/20 rounded-bl-3xl" />
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="space-y-6">
                      <div className="flex items-center text-white">
                        <CheckCircle2 className="w-5 h-5 text-primary-300 mr-3" />
                        <span>Custom design and engineering support</span>
                      </div>
                      <div className="flex items-center text-white">
                        <CheckCircle2 className="w-5 h-5 text-primary-300 mr-3" />
                        <span>Rapid prototyping capabilities</span>
                      </div>
                      <div className="flex items-center text-white">
                        <CheckCircle2 className="w-5 h-5 text-primary-300 mr-3" />
                        <span>Comprehensive testing and validation</span>
                      </div>
                      <div className="flex items-center text-white">
                        <CheckCircle2 className="w-5 h-5 text-primary-300 mr-3" />
                        <span>Industry-leading quality standards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Certifications;