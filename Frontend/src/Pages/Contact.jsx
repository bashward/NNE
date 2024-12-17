import React from 'react';

function Contact() {
  return (
    <div className="py-16 px-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12">
        Have a question about our custom solutions or want more information? Reach out to our team.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input 
                type="text" 
                placeholder="First name" 
                className="w-1/2 border p-2 rounded focus:outline-red-600" 
              />
              <input 
                type="text" 
                placeholder="Last name" 
                className="w-1/2 border p-2 rounded focus:outline-red-600" 
              />
            </div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border p-2 rounded focus:outline-red-600" 
            />
            <input 
              type="tel" 
              placeholder="Phone number" 
              className="w-full border p-2 rounded focus:outline-red-600" 
            />
            <textarea 
              placeholder="Message" 
              className="w-full border p-2 rounded focus:outline-red-600 h-32"
            ></textarea>
            <button type="submit" className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Other Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">Email</h3>
            <p className="text-gray-600"><a href="mailto:info@nne.com" className="text-red-600 hover:underline">info@nne.com</a></p>
          </div>
          <div>
            <h3 className="font-bold">Call Us</h3>
            <p className="text-gray-600">+1 (555) 000-0000 (Mon-Fri, 9am-5pm)</p>
          </div>
          <div>
            <h3 className="font-bold">Visit Us</h3>
            <p className="text-gray-600">1234 Ferrite Lane, Coil City, 56789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

