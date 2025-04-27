import React, { useState, useRef } from 'react';
import Button from '../ui/Button';
import { Mail, Phone, Clock, Building2, Send, Upload, X, FileText } from 'lucide-react';

interface ContactProps {
  showAttachments?: boolean;
}

const Contact: React.FC<ContactProps> = ({ showAttachments = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, files });
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    });
    setFiles([]);
    alert('Your message has been sent. We will contact you shortly!');
  };

  const inquiryTypes = [
    'Product Information',
    'Technical Consultation',
    'Custom Design Request',
    'Quote Request',
    'Quality Certification',
    'Other',
  ];

  return (
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

      {showAttachments && (
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
      )}

      <div>
        <Button 
          type="submit"
          className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          Send Message <Send size={16} className="ml-2" />
        </Button>
      </div>
    </form>
  );
};

export default Contact;