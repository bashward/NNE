import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [clickedProduct, setClickedProduct] = useState(null); // Track clicked product
  const navigate = useNavigate();

  const products = [
    {
      name: 'Ferrite Transformers',
      description:
        'Designed for high-frequency and high-power applications, offering unmatched efficiency and reliability.',
      image: '/transformer.png',
      link: '/products/ferrite-transformers',
    },
    {
      name: 'Toroidal Coils',
      description:
        'Precision-engineered toroidal coils ideal for low-noise and compact power applications.',
      image: '/toroidal.png',
      link: '/products/toroidal-coils',
    },
    {
      name: 'Custom Solutions',
      description:
        'Tailored to meet your specific technical requirements, ensuring optimal performance for every application.',
      image: '/custom-solutions.png',
      link: '/products/custom-solutions',
    },
  ];

  const handleProductClick = (index, product) => {
    setClickedProduct(index); // Set the clicked product
    setTimeout(() => {
      navigate(product.link); // Navigate after animation completes
    }, 800); // Match the animation duration
  };

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
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              View Products
            </button>
          </div>
        </div>
      </section>

      {/* Our Product Range */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Product Range</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(index, product)}
              className={`group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-transform duration-300 cursor-pointer ${
                clickedProduct === index ? 'absolute z-50 top-0 left-0 w-full h-full scale-100' : ''
              }`}
              style={
                clickedProduct === index
                  ? {
                      transition: 'all 0.8s ease-in-out',
                      zIndex: 50,
                    }
                  : {}
              }
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover group-hover:brightness-90 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-90 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-200">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Remaining sections */}
      {/* Value Proposition */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <h4 className="font-bold mb-2">Premium Materials</h4>
            <p className="text-gray-600">International-grade copper and ferrite cores for maximum durability.</p>
          </div>
          <div className="text-center">
            <h4 className="font-bold mb-2">Unmatched Expertise</h4>
            <p className="text-gray-600">A team of professionals with decades of experience in power electronics.</p>
          </div>
          <div className="text-center">
            <h4 className="font-bold mb-2">Tailored Solutions</h4>
            <p className="text-gray-600">Custom designs crafted to meet unique customer requirements.</p>
          </div>
          <div className="text-center">
            <h4 className="font-bold mb-2">Customer Focus</h4>
            <p className="text-gray-600">Dedicated to delivering exceptional support and technical assistance.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Collaborate?</h2>
        <p className="text-gray-700 mb-6">
          Get in touch to discuss your requirements and explore how we can deliver tailored power solutions.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default Home;
