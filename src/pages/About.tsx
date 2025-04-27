import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedSection from '../components/ui/AnimatedSection';
import Timeline from '../components/sections/Timeline';
import { Users, Target, Globe2, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every component we manufacture, ensuring the highest quality standards."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuous innovation drives our research and development to create cutting-edge solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and deliver customized solutions."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Sustainability",
      description: "Environmental responsibility is at the core of our manufacturing processes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-emerald-50 to-white">
          <Container>
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Transforming Power Electronics Since 1997
                </h1>
                <p className="text-xl text-gray-600">
                  From humble beginnings to industry leadership, our journey has been driven by innovation, quality, and customer success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-primary-900">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedSection animation="fade-right">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                  <p className="text-xl text-emerald-100 leading-relaxed">
                    To deliver innovative magnetic components that power the future of electronics, while maintaining the highest standards of quality and reliability.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
                  <p className="text-xl text-emerald-100 leading-relaxed">
                    To be the global leader in magnetic component solutions, driving technological advancement and sustainable practices in power electronics.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
          <Container>
            <AnimatedSection>
              <SectionHeading
                title="Our Journey"
                subtitle="A timeline of innovation, growth, and excellence in magnetic component manufacturing"
                centered
              />
            </AnimatedSection>
            
            <Timeline />
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;