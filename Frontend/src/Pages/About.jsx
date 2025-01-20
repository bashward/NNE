import React from 'react';

function AboutUs() {
  const timelineEvents = [
    {
      year: '1980',
      description: 'N.N. Transformers was founded with a vision to provide high-quality transformers for industrial applications.',
    },
    {
      year: '1985',
      description: 'Expanded product line to include custom-designed toroidal coils for specialized industries.',
    },
    {
      year: '1995',
      description: 'Achieved ISO certification, ensuring compliance with global quality standards.',
    },
    {
      year: '2005',
      description: 'Upgraded manufacturing facilities with advanced machinery for increased production efficiency.',
    },
    {
      year: '2015',
      description: 'Began exporting products internationally, establishing a presence in global markets.',
    },
    {
      year: '2020',
      description: 'Launched new product innovations tailored to meet evolving market demands.',
    },
  ];

  return (
    <div className="py-16 px-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-700">
        At N.N. Transformers, we have been delivering reliable and customized power solutions for over four decades.
        Here is a glimpse of our journey and milestones that have shaped our success.
      </p>

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
    </div>
  );
}

export default AboutUs;
