import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [clickedProduct, setClickedProduct] = useState(null); // Track clicked product
  const navigate = useNavigate();

  const products = [
    {
      name: 'Ferrite Core Transformers',
      description: 'High Efficiency Transformers for industrial and commercial applications.',
      image: '/transformer.png',
      link: '/products/ferrite-transformers',
    },
    {
      name: 'Drum Core, Rod Core & Air Coil Inductors',
      description: 'All geometries available.',
      image: '/drm-coils.png',
      link: '/products/toroidal-coils',
    },
    {
      name: 'Toroidal Inductors',
      description: 'Efficient Inductors for industry standards.',
      image: '/tor1.png',
      link: '',
    },
    {
      name: 'Common Mode Chokes/ Differential Mode Chokes',
      description: 'High Efficiency Transformers for industrial and commercial applications.',
      image: '/inductors.png',
      link: '/products/inductors',
    },
    {
      name: 'Low Frequency Transformers',
      description: 'High efficiency Transformers for industrial and commercial applications.',
      image: '',
      link: '',
    },
      {
      name: 'Ferrite Cores',
      description: 'All geometries available',
      image: '/core.png',
      link: '/products/ferrite-transformers',
    },
     {
      name: '  Drum Cores',
      description: 'All geometries available.',
      image: '/toroidal.png',
      link: '/products/toroidal-coils',
    },
    {
      name: 'Powder Cores',
      description: 'Efficient solution for your power circuits.',
      image: '',
      link: '',
    },
    {
      name: 'Bobbins',
      description: 'All geometries available',
      image: '/bobbins.png',
      link: '',
    },
    {
      name: 'Custom Solutions',
      description: 'Tailored solutions for unique technical and application requirements.',
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
    <div className="py-16 px-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fadeIn">
        Explore Our Product Portfolio
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12 animate-fadeIn delay-200">
        We offer a wide range of products designed to meet diverse industrial and commercial requirements. Click on any product below to learn more.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
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
            {/* Image Section */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover group-hover:brightness-90 transition duration-300"
            />

            {/* Overlay with Default Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-90 transition duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 z-10">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-red-500">
                {product.name}
              </h2>
              <p className="text-sm text-gray-200">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
