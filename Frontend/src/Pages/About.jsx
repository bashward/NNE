import React from 'react';

function About() {
  const timelineEvents = [
    {
      year: '1997',
      description: 'Founded in Okhla by Virender Singh and Naresh Thakur, focusing on components for the TV industry.',
    },
    {
      year: '2001',
      description: 'Began mass production of CFL inductor components.',
    },
    {
      year: '2006',
      description: 'Shifted operations to a larger unit in Okhla.',
    },
    {
      year: '2012',
      description: 'Reached the milestone of producing 1 million components.',
    },
    {
      year: '2019',
      description: 'Launched a new production line for lamination transformers up to 5KVA.',
    },
    {
      year: '2020',
      description: 'Expanded production for EV chargers and solar inverters.',
    },
    {year: '2021',
    description: 'Surpassed 3 million components production milestone.',
    },
    {year: '2023',
    description: 'Established a new production unit in Himachal Pradesh.',
    },
  ];
  
  return (
    <div className="py-16 px-8 bg-gray-50">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Company Overview */}
      <section className="max-w-5xl mx-auto mb-16">
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          N.N. Magnetics & Electronics Pvt. Ltd. (formerly known as N.N Electronics), established in 1997, is a leading supplier of high-quality ferrite components, toroidal inductors, and transformers. With decades of expertise, we are committed to providing innovative and reliable solutions to a wide range of industries, ensuring our products meet global quality standards.
        </p>
      </section>

      {/* Timeline Section */}
   <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-600 h-full"></div>

        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <h3 className="text-xl font-semibold text-gray-900">{event.year}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
            <div className="relative w-4 h-4 bg-red-600 rounded-full z-10 border-4 border-white"></div>
          </div>
        ))}
      </div>

      {/* Vision Section */}
      <section className="mb-16 bg-white py-12 px-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Vision</h2>
        <blockquote className="italic text-lg text-center text-gray-700 max-w-4xl mx-auto mb-4">
          "To provide PPM-quality components to diversified segments of industries,
          leveraging the best available technology."
        </blockquote>
        <p className="text-gray-700 text-center max-w-4xl mx-auto">
          At N.N. Magnetics & Electronics, we prioritize quality and reliability, ensuring customer satisfaction through stringent checks and innovative solutions. With a commitment to ISO-9001:2015 standards, we aim to support uninterrupted power supply with world-class magnetic components.
        </p>
      </section>

      {/* Closing Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose N.N. Magnetics & Electronics?</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
          With a 100% in-house production facility, an experienced team of engineers, and a customer-centric approach, N.N. Magnetics & Electronics is your trusted partner for reliable and durable magnetic components. We serve industries from renewable energy to automotive and ensure excellence in every product we deliver.
        </p>
      </section>
    </div>
  );
}

export default About;
