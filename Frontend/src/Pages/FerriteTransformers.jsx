import React from 'react';

function FerriteTransformers() {
  return (
    <div className="py-16 px-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">Ferrite Transformers</h1>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
        Ferrite transformers are designed for high-frequency and high-power applications, offering unmatched efficiency and reliability.
      </p>

      <div className="max-w-5xl mx-auto">
        <img
          src="/transformer.png"
          alt="Ferrite Transformer"
          className="w-full h-auto mb-8 rounded-lg shadow-lg"
        />
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>High efficiency for demanding applications.</li>
          <li>Compact design for space-saving installations.</li>
          <li>Customizable to meet specific technical requirements.</li>
          <li>Manufactured using international-grade ferrite cores.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Applications</h2>
        <p className="text-gray-700">
          Ferrite transformers are widely used in industrial automation, renewable energy systems, and power electronics.
        </p>
      </div>
    </div>
  );
}

export default FerriteTransformers;
