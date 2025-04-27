import React, { useState, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { ClipboardList, FileCheck, Send, Upload, X, FileText, Star, Users, Shield, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
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
      const formDataToSend = new FormData();
      
      // Correctly append each form field to FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      // Append files if any exist
      files.forEach((file, index) => {
        formDataToSend.append(`file${index}`, file);
      });

      console.log('Sending request to Formspree...');
      const response = await fetch('https://formspree.io/f/mqaqabzo', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        console.log('Form submission successful');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
        setFiles([]);

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
      console.error('Form submission error:', error);
      
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

  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Submit Requirements",
      description: "Fill out our detailed quote request form with your project specifications"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Technical Review",
      description: "Our engineering team analyzes your requirements within 24 hours"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Detailed Quote",
      description: "Receive a comprehensive quote with technical specifications"
    }
  ];

  const trustPoints = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "25+ Years Experience",
      description: "Proven expertise in magnetic components"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "100+ OEM Partners",
      description: "Trusted by industry leaders"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ISO 9001:2015",
      description: "Certified quality management"
    }
  ];

  const inquiryTypes = [
    'Product Information',
    'Technical Consultation',
    'Custom Design Request',
    'Quote Request',
    'Quality Certification',
    'Other',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
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
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Get Your Custom{' '}
                <span className="text-blue-400">Quote</span>
              </h1>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                From prototype to production, we'll help you find the perfect magnetic solution for your application.
              </p>
              <div className="mt-8 flex items-center justify-center space-x-2 text-blue-300">
                <CheckCircle2 className="w-5 h-5" />
                <span>Trusted by over 100 OEMs for high-precision transformer components</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-blue-600/20" />
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={300 + index * 100}
                    className="group"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {React.cloneElement(step.icon, { className: "text-blue-400" })}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                      <p className="text-blue-200">{step.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <AnimatedSection className="lg:col-span-8" animation="fade-right">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20 glow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {trustPoints.map((point, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                        {React.cloneElement(point.icon, { className: "text-blue-400" })}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                      <p className="text-blue-200 text-sm">{point.description}</p>
                    </div>
                  ))}
                </div>

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
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white resize-none"
                      required
                    />
                    <label htmlFor="message" className="text-blue-200">Your Message*</label>
                  </div>

                  <div>
                    <div
                      className={`mt-4 border-2 border-dashed rounded-lg p-6 transition-all duration-300 ${
                        dragActive 
                          ? 'border-blue-400 bg-blue-500/10' 
                          : 'border-white/10 bg-white/5'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div className="text-center cursor-pointer">
                        <Upload className="mx-auto h-12 w-12 text-blue-400 mb-4" />
                        <p className="text-blue-200 mb-2">
                          <span className="font-semibold text-blue-400">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-sm text-blue-300">
                          PDF, DOC, XLS, DWG up to 10MB each
                        </p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        multiple
                        onChange={handleFileInput}
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.dxf"
                      />
                    </div>

                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 text-blue-400 mr-2" />
                              <span className="text-blue-200">{file.name}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-blue-300 hover:text-red-400 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <Button 
                      type="submit"
                      className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      Send Message <Send size={16} className="ml-2" />
                    </Button>
                  </div>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-4" animation="fade-left">
              <div className="sticky top-32">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 glow mb-8">
                  <h3 className="text-xl font-bold text-white mb-6">What You'll Receive</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-blue-200">Detailed technical specifications</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-blue-200">Pricing breakdown by quantity</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-blue-200">Lead time estimates</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-blue-200">Custom design recommendations</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 glow">
                  <h3 className="text-xl font-bold text-white mb-6">Sample Quote</h3>
                  <img 
                    src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Sample quote document" 
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-blue-200 text-sm">
                    Our quotes include detailed specifications and recommendations tailored to your application.
                  </p>
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

export default Quote;