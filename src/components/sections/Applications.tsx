import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { Zap, Cpu, Car, Factory, Monitor, Database, Wind, Activity, ArrowRight, CheckCircle } from 'lucide-react';

type ApplicationCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  image: string;
};

const Applications: React.FC = () => {
  const applications: ApplicationCard[] = [
    {
      icon: <Zap size={24} />,
      title: 'Power Electronics',
      description: 'Switching power supplies, inverters, UPS systems, and power conversion equipment.',
      color: 'from-blue-400/80 to-blue-500/80',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Industrial Controls',
      description: 'PLC systems, motor drives, robotics, and factory automation equipment.',
      color: 'from-indigo-400/80 to-indigo-500/80',
      image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg'
    },
    {
      icon: <Car size={24} />,
      title: 'Automotive',
      description: 'Electric vehicle charging, powertrain systems, and automotive control modules.',
      color: 'from-green-400/80 to-green-500/80',
      image: 'https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg'
    },
    {
      icon: <Factory size={24} />,
      title: 'Energy Management',
      description: 'Grid infrastructure, energy meters, and power monitoring equipment.',
      color: 'from-yellow-400/80 to-yellow-500/80',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg'
    },
    {
      icon: <Monitor size={24} />,
      title: 'Medical Devices',
      description: 'Patient monitoring equipment, diagnostic devices, and medical power supplies.',
      color: 'from-red-400/80 to-red-500/80',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg'
    },
    {
      icon: <Database size={24} />,
      title: 'Telecommunications',
      description: 'Network infrastructure, server power supplies, and communication equipment.',
      color: 'from-purple-400/80 to-purple-500/80',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg'
    },
    {
      icon: <Wind size={24} />,
      title: 'Renewable Energy',
      description: 'Solar inverters, wind power systems, and energy storage solutions.',
      color: 'from-teal-400/80 to-teal-500/80',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg'
    },
    {
      icon: <Activity size={24} />,
      title: 'Test & Measurement',
      description: 'Precision test equipment, measurement devices, and laboratory instrumentation.',
      color: 'from-orange-400/80 to-orange-500/80',
      image: 'https://images.pexels.com/photos/3912458/pexels-photo-3912458.jpeg'
    },
  ];

  return (
    <section id="applications" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Industry Applications"
            subtitle="Our magnetic components power critical systems across multiple industries, meeting the most demanding requirements."
            centered
          />
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} mix-blend-multiply opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {app.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection animation="fade-up" delay={400} className="mt-16">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Custom Engineering Solutions</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Don't see your specific application? Our engineering team specializes in custom magnetic component design for unique requirements and specialized applications.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-primary-100">
                    <div className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-primary-300" />
                    </div>
                    <span>Prototype development and testing</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <div className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-primary-300" />
                    </div>
                    <span>Performance optimization for specific applications</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <div className="w-8 h-8 rounded-full bg-primary-800 flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-primary-300" />
                    </div>
                    <span>Specialized materials and construction techniques</span>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  className="w-full sm:w-auto bg-primary-700 text-white hover:bg-primary-800"
                >
                  Request Custom Solution <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Custom engineering solutions" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default Applications;