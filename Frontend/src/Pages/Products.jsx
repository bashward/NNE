import React from 'react';

function Products() {
  return (
    <div className="px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Capabilities</h1>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        We offer a wide range of custom-engineered solutions. Browse examples of what we can produce 
        or contact us for a custom specification.
      </p>
      {/* Product/Capability Cards - Could show categories, specs, or lead to a form */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">High-Frequency Ferrite Transformers</h3>
          <p className="text-gray-600">Designed for efficiency and longevity in demanding applications.</p>
        </div>
        <div className="bg-white p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Precision Toroidal Coils</h3>
          <p className="text-gray-600">Custom-wound inductors for minimal noise and interference.</p>
        </div>
        <div className="bg-white p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Specialized Custom Builds</h3>
          <p className="text-gray-600">Partner with our engineering team to develop a solution tailored to your exact needs.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
