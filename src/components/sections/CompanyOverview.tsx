import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { Shield, Factory, Award, Zap } from 'lucide-react';

const CompanyOverview: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Excellence in Magnetic Component Manufacturing"
            subtitle="With over 25 years of experience, we deliver precision-engineered magnetic components that exceed industry standards."
            centered
          />
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatedSection animation="fade-right" delay={200} className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3846254/pexels-photo-3846254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern manufacturing facility" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-bold mb-4 text-white">State-of-the-Art Facilities</h3>
                  <p className="text-gray-200 text-lg">
                    Our ISO-certified manufacturing plants utilize advanced automation and precision equipment.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-left" delay={400} className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Why Choose Us?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Factory className="w-7 h-7 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Vertically Integrated</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Complete in-house control from design to manufacturing ensures superior quality.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Shield className="w-7 h-7 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Rigorous testing protocols with 100% functional verification.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-7 h-7 text-purple-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Certified Excellence</h4>
                        <p className="text-gray-600 leading-relaxed">
                          ISO 9001, 14001 and VDE certified manufacturing processes. Excellence at every step.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Zap className="w-7 h-7 text-orange-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Engineering</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Specialized team with deep electromagnetic expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary-700 mb-1">50K+</div>
                  <p className="text-gray-600 font-medium">Monthly Units</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary-700 mb-1">200+</div>
                  <p className="text-gray-600 font-medium">Clients</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary-700 mb-1">25+</div>
                  <p className="text-gray-600 font-medium">Years Active</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary-700 mb-1">4M+</div>
                  <p className="text-gray-600 font-medium">Components Shipped</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default CompanyOverview;