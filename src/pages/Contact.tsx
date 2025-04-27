import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { Mail, Phone, Clock, Building2, Send, CheckCircle2, Users, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading(
      <div className="flex items-center space-x-3">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        <div>
          <p className="font-semibold text-white">Sending message...</p>
          <p className="text-sm text-gray-200">Please wait</p>
        </div>
      </div>,
      {
        position: 'bottom-center',
        style: {
          background: '#1e40af',
          color: 'white',
          padding: '16px',
          borderRadius: '12px',
        },
      }
    );
  
    try {
      const response = await fetch('https://formspree.io/f/mqaqabzo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
  
      if (response.ok) {
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });

        toast.success(
          <div className="flex items-center space-x-3">
            <div>
              <p className="font-semibold text-gray-900">Message sent successfully!</p>
              <p className="text-sm text-gray-600">We'll get back to you soon</p>
            </div>
          </div>,
          {
            id: toastId,
            position: 'bottom-center',
            duration: 5000,
            style: {
              background: 'white',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
          }
        );
      } else {
        console.error('Form submission failed:', data);
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submit error:', error);
      toast.error(
        <div className="flex items-center space-x-3">
          <div>
            <p className="font-semibold text-gray-900">Failed to send message</p>
            <p className="text-sm text-gray-600">Please try again later</p>
          </div>
        </div>,
        {
          id: toastId,
          position: 'bottom-center',
          duration: 5000,
          style: {
            background: 'white',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        }
      );
    }
  };
  

  const inquiryTypes = [
    'Product Information',
    'Technical Consultation',
    'Custom Design Request',
    'Quote Request',
    'Quality Certification',
    'Other'
  ];

  const trustPoints = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certified"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "200+ Global Clients",
      description: "Trusted by industry leaders"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "99.8% Quality Rating",
      description: "Excellence in every component"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-10 animate-grid"
            style={{
              backgroundImage: `linear-gradient(#2563eb22 1px, transparent 1px),
                               linear-gradient(90deg, #2563eb22 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-primary-900/95 backdrop-blur-sm" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white mb-6">
                  Let's Build Something{' '}
                  <span className="text-blue-400">Powerful</span> Together
                </h1>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                  From concept to creation, our engineering team is ready to help you develop the perfect magnetic solution for your application.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedSection animation="fade-right">
                <div className="relative">
                  <div className="sticky top-32 space-y-12">
                    {/* Trust Points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      {trustPoints.map((point, index) => (
                        <div 
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                            {React.cloneElement(point.icon, { className: "text-blue-400" })}
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                          <p className="text-blue-200 text-sm">{point.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Headquarters</h3>
                          <p className="text-blue-200 mt-1">
                            Plot no. D23,<br />
                            Industrial Area, Pandoga,<br />
                            Himachal Pradesh 177207
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Phone</h3>
                          <a href="tel:+919953087659" className="text-blue-200 hover:text-white transition-colors block mt-1">
                            +91-9953087659
                          </a>
                          <a href="tel:+919910781004" className="text-blue-200 hover:text-white transition-colors block mt-1">
                            +91-9910781004
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Email</h3>
                          <a href="mailto:nitinthakur@nnelectronics.org" className="text-blue-200 hover:text-white transition-colors block mt-1">
                            nitinthakur@nnelectronics.org
                          </a>
                          <a href="mailto:sales@nnelectronics.org" className="text-blue-200 hover:text-white transition-colors block mt-1">
                            sales@nnelectronics.org
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Business Hours</h3>
                          <p className="text-blue-200 mt-1">
                            Monday-Saturday: 9AM-5PM IST<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20 glow">
                  <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-field">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                          required
                        />
                        <label htmlFor="name" className="text-blue-200">Full Name*</label>
                      </div>
                      <div className="form-field">
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder=" "
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                          required
                        />
                        <label htmlFor="company" className="text-blue-200">Company Name*</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-field">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" "
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                          required
                        />
                        <label htmlFor="email" className="text-blue-200">Email Address*</label>
                      </div>
                      <div className="form-field">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder=" "
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                        />
                        <label htmlFor="phone" className="text-blue-200">Phone Number</label>
                      </div>
                    </div>

                    <div className="form-field">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white appearance-none"
                        required
                      >
                        <option value="" disabled>Select Inquiry Type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type} className="bg-blue-900">
                            {type}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="inquiryType" className="text-blue-200">Inquiry Type*</label>
                    </div>

                    <div className="form-field">
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=" "
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white resize-none"
                        required
                      />
                      <label htmlFor="message" className="text-blue-200">Your Message*</label>
                    </div>

                    <div>
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        Send Message <Send size={16} className="ml-2" />
                      </Button>
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-up" delay={200} className="mt-12">
              <div className="rounded-2xl overflow-hidden h-[400px] shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0295549923185!2d76.1634018!3d31.523348199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391adf0028b18463%3A0x41be499596289f4a!2sN%20N%20Magnetics%20and%20Electronics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1745747580747!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;