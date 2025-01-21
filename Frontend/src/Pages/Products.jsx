import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const products = [
    {
      name: 'Ferrite Transformers',
      description: 'High-efficiency transformers for industrial and commercial applications.',
      image: '/transformer.png',
      link: '/products/ferrite-transformers',
    },
    {
      name: 'Toroidal Coils',
      description: 'Precision-engineered toroidal coils for compact and noise-sensitive environments.',
      image: '/toroidal.png',
      link: '/products/toroidal-coils',
    },
    {
      name: 'Inductors',
      description: 'Custom inductors designed for high-performance power electronics.',
      image: '/inductors.png',
      link: '/products/inductors',
    },
    {
      name: 'Custom Solutions',
      description: 'Tailored solutions for unique technical and application requirements.',
      image: '/custom-solutions.png',
      link: '/products/custom-solutions',
    },
  ];

  return (
    <div className="py-16 px-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fadeIn">
        Explore Our Product Portfolio
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12 animate-fadeIn delay-200">
        We offer a wide range of products designed to meet diverse industrial and commercial requirements. Click on any product below to learn more.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Link
            to={product.link}
            key={index}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-300 animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Section */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover transition duration-300"
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
