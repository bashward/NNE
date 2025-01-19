import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Precision Ferrite & Toroidal Solutions
          </h1>
          <p className="text-lg text-gray-600">
            Engineered for Reliability, Efficiency, and Innovation
          </p>
          <div className="mt-6">
            <Link
              to="/products"
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              View Products
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-8">
          {/* Transformer Image */}
          <div className="relative w-64 h-auto inline-block">
            <img
              src="/transformer.png"
              alt="Transformer"
              className="w-full h-auto object-contain"
            />
            {/* Hotspot */}
            <div
              className="absolute group"
              style={{
                top: '45%',   // Adjust as needed
                left: '70%',  // Adjust as needed
              }}
            >
              <div className="w-3 h-3 bg-red-600 rounded-full hover:cursor-pointer relative">
                {/* Tooltip */}
                <div className="hidden group-hover:block absolute left-5 -top-2 bg-white text-black text-sm p-2 border shadow rounded whitespace-nowrap">
                  High-Purity Copper Windings
                </div>
              </div>
            </div>
          </div>

          {/* Toroidal Coil Image */}
          <div className="relative w-64 h-auto inline-block">
            <img
              src="/toroidal.png"
              alt="Toroidal Coil"
              className="w-full h-auto object-contain"
            />
            {/* Hotspot */}
            <div
              className="absolute group"
              style={{
                top: '30%',   // Adjust as needed
                left: '60%',  // Adjust as needed
              }}
            >
              <div className="w-3 h-3 bg-red-600 rounded-full hover:cursor-pointer relative">
                {/* Tooltip */}
                <div className="hidden group-hover:block absolute left-5 -top-2 bg-white text-black text-sm p-2 border shadow rounded whitespace-nowrap">
                  Precision Wound Coil
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Custom-Engineered Transformations</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          We specialize in crafting custom ferrite transformers, toroidal coils, and inductors that meet your unique specifications.
          From high-frequency applications to efficient power solutions, we’re here to provide reliability and performance.
        </p>
        <div className="mt-4">
          <Link to="/about" className="text-red-600 hover:underline">
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Ferrite Transformers</h3>
            <p className="text-gray-600">High-efficiency designs for various power applications.</p>
          </div>
          <div className="bg-white p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Toroidal Coils</h3>
            <p className="text-gray-600">Precision wound inductors optimized for low interference.</p>
          </div>
          <div className="bg-white p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
            <p className="text-gray-600">Tailored designs to match unique technical specifications.</p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <h4 className="font-bold mb-2">Quality Materials</h4>
            <p className="text-gray-600">International-grade copper and ferrite cores.</p>
          </div>
          <div className="text-center">
            <h4 className="font-bold mb-2">Engineering Expertise</h4>
            <p className="text-gray-600">Decades of experience in power electronics.</p>
          </div>
          <div className="text-center">
            <h4 className="font-bold mb-2">Reliability & Efficiency</h4>
            <p className="text-gray-600">Products designed for durability and performance.</p>
          </div>
          <div className="text-center">
            <h4 className="font-bold mb-2">Dedicated Support</h4>
            <p className="text-gray-600">Expert guidance and responsive communication.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6">Contact us to discuss your custom requirements or learn more about our capabilities.</p>
        <Link
          to="/contact"
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default Home;
