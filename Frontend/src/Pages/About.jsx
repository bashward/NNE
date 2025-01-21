import React from 'react';

function About() {
  return (
    <div className="py-16 px-8 bg-gray-50">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Company Overview */}
      <section className="max-w-5xl mx-auto mb-16">
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          N.N. Electronics, established in 1997, is a leading supplier of high-quality ferrite components, toroidal inductors, and transformers. With decades of expertise, we are committed to providing innovative and reliable solutions to a wide range of industries, ensuring our products meet global quality standards.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Journey</h2>
        <div className="timeline-container max-w-4xl mx-auto">
          <div className="timeline-item mb-8">
            <div className="timeline-date text-red-600 font-bold">1997</div>
            <p className="timeline-description">
              Founded in Okhla by Virender Singh and Naresh Thakur, focusing on components for the TV industry.
            </p>
          </div>
          <div className="timeline-item mb-8">
            <div className="timeline-date text-red-600 font-bold">2001</div>
            <p className="timeline-description">
              Began mass production of CFL inductor components.
            </p>
          </div>
          <div className="timeline-item mb-8">
            <div className="timeline-date text-red-600 font-bold">2006</div>
            <p className="timeline-description">
              Shifted operations to a larger unit in Okhla.
            </p>
          </div>
          <div className="timeline-item mb-8">
            <div className="timeline-date text-red-600 font-bold">2012</div>
            <p className="timeline-description">
              Reached the milestone of producing 1 million components.
            </p>
          </div>
          <div className="timeline-item mb-8">
            <div className="timeline-date text-red-600 font-bold">2019</div>
            <p className="timeline-description">
              Launched a new production line for lamination transformers up to 5KVA.
            </p>
          </div>
          <div className="timeline-item mb-8">
            <div className="timeline-date text-red-600 font-bold">2020</div>
            <p className="timeline-description">
              Expanded production for EV chargers and solar inverters.
            </p>
          </div>
          <div className="timeline-item mb-8">
            <div className="timeline-date text-red-600 font-bold">2021</div>
            <p className="timeline-description">
              Surpassed 3 million components production milestone.
            </p>
          </div>
          <div className="timeline-item mb-8">
            <div className="timeline-date text-red-600 font-bold">2023</div>
            <p className="timeline-description">
              Established a new production unit in Himachal Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-16 bg-white py-12 px-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Vision</h2>
        <blockquote className="italic text-lg text-center text-gray-700 max-w-4xl mx-auto mb-4">
          "To provide PPM-quality components to diversified segments of industries,
          leveraging the best available technology."
        </blockquote>
        <p className="text-gray-700 text-center max-w-4xl mx-auto">
          At N.N. Electronics, we prioritize quality and reliability, ensuring customer satisfaction through stringent checks and innovative solutions. With a commitment to ISO-9001:2015 standards, we aim to support uninterrupted power supply with world-class magnetic components.
        </p>
      </section>

      {/* Closing Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose N.N. Electronics?</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
          With a 100% in-house production facility, an experienced team of engineers, and a customer-centric approach, N.N. Electronics is your trusted partner for reliable and durable magnetic components. We serve industries from renewable energy to automotive and ensure excellence in every product we deliver.
        </p>
      </section>
    </div>
  );
}

export default About;

