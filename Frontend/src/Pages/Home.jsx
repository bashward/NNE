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
            Your Trusted Partner for Customized Power Solutions
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

        {/* Image Auto-Scrolling Carousel */}
  <div className="relative w-full overflow-hidden bg-white">
      <div
        ref={marqueeRef}
        className="flex space-x-8 animate-marquee"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* ✅ Dynamically loops images without manual duplication */}
        {images.concat(images).map((item, index) => (
          <div key={index} className="relative w-64 h-auto inline-block">
            <img src={item.src} alt={`Image ${index}`} className="w-full h-auto object-contain -rotate-90" />
            
            {/* ✅ Hotspot with hover effect */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 group">
              <div className="w-4 h-4 bg-red-600 ring-2 ring-white rounded-full hover:cursor-pointer relative z-10">
                <div
                  className="
                    hidden 
                    group-hover:block 
                    absolute
                    bottom-[110%]
                    left-1/2
                    -translate-x-1/2
                    bg-white
                    text-black
                    text-sm
                    p-2
                    border
                    shadow
                    rounded
                    z-50
                    whitespace-normal
                  "
                >
                  {item.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">Innovative Power Solutions</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          With decades of experience, we specialize in providing innovative and customized power solutions.
          Our expertise in ferrite transformers, toroidal coils, and inductors ensures exceptional performance,
          efficiency, and reliability.
        </p>
        <div className="mt-4">
          <Link to="/about" className="text-red-600 hover:underline">
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Product Range</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Ferrite Transformers */}
          <div
            className="bg-white p-6 shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
            onClick={() => window.location.href = '/products/ferrite-transformers'}
          >
            <h3 className="text-xl font-bold mb-2">Ferrite Transformers</h3>
            <p className="text-gray-600">
              Designed for high-frequency and high-power applications, offering unmatched efficiency and reliability.
            </p>
          </div>
          {/* Toroidal Coils */}
          <div
            className="bg-white p-6 shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
            onClick={() => window.location.href = '/products/toroidal-coils'}
          >
            <h3 className="text-xl font-bold mb-2">Toroidal Coils</h3>
            <p className="text-gray-600">
              Precision-engineered toroidal coils ideal for low-noise and compact power applications.
            </p>
          </div>
          {/* Custom Solutions */}
          <div
            className="bg-white p-6 shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
            onClick={() => window.location.href = '/products/custom-solutions'}
          >
            <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
            <p className="text-gray-600">
              Tailored to meet your specific technical requirements, ensuring optimal performance for every application.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Collaborate?</h2>
        <p className="text-gray-700 mb-6">
          Get in touch to discuss your requirements and explore how we can deliver tailored power solutions.
        </p>
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

