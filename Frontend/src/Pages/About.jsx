import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function About() {
   const qualityRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#quality" && qualityRef.current) {
      setTimeout(() => {
        qualityRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); 
    }
  }, [location]);
  
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
    description: 'Established a new production unit in Himachal Pradesh.\nEstablished new startup for manufacturing of wire harnesses, power cords and DC pin cords.',
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
    {/* Left / Right Side - Text Content */}
    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
      <h3 className="text-xl font-semibold text-gray-900">{event.year}</h3>
      {/* Splitting the description into separate lines */}
      {event.description.split('\n').map((line, i) => (
        <p key={i} className="text-gray-600 leading-tight">{line}</p>
      ))}
    </div>

    {/* Timeline Dot */}
    <div className="relative w-4 h-4 bg-red-600 rounded-full z-10 border-4 border-white"></div>
  </div>
))}

      </div>

      {/* Vision Section */}
      <section ref={qualityRef} className="mb-16 bg-white py-12 px-8 shadow-lg rounded-lg">
        <h1 className="text-5xl font-semibold text-center pb-4 mb-8">Our Quality</h1> 
          <p className="text-gray-700 text-center pb-8 max-w-4xl mx-auto">
          Our Quality management system is specially designed by ourselves to minimize the quality failures and with quick action plans which not only relieve our customers of hectic troubles but also from the quality dilemmas. Quality and timely delivery of components to the customers has been our foremost motto, which we confidently stress as being our strength in the industry. Furthermore, the stiff competitiveness have not dithered us to out-source. At NNE, we have 100% in-house production capacity which ensures that the components delivered to the customers goes through stringent quality checks at every step of its journey. Being an ISO-9001:2015, at NNE, we ensure our internal systems are at par with the Industrial Standards.
          </p>

         <div className="bg-gray-50">
            <div className="pt-4">
        <h2 className="text-3xl font-semibold text-center mt-5 mb-8">Our Vision</h2>
        <blockquote className="italic text-lg text-center text-gray-700 max-w-4xl mx-auto mb-4">
          "To provide PPM-quality components to diversified segments of industries,
          leveraging the best available technology."
        </blockquote>
        <p className="text-gray-700 text-center pb-8 max-w-4xl mx-auto">
          At N.N. Magnetics & Electronics Pvt. Ltd., we prioritize quality and reliability, ensuring customer satisfaction through stringent checks and innovative solutions. With a commitment to <span className="font-bold">ISO-9001:2015, ISO-14001:2018, ISO 14001:2015 and ISO/TS-16949:2009</span> standards, we aim to support uninterrupted power supply with world-class magnetic components.
        </p>
         </div>
            </div>

        
          <h2 className="text-3xl font-semibold text-center mt-5 mb-8">Quality Policy</h2>
          <p className="text-gray-700 text-center pb-8 max-w-4xl mx-auto">
          “M/S N.N ELECTRONICS Strongly believes in the policy of quality assurance with Customer Centric adoption. It has been our continuous Endeavour, not to compromise with the quality of our products in any circumstances and meeting the customer requirements/parameters.”

          Our Quality Control and Assurance (QC &A) division is monitored by well-qualified and experienced professionals, who conduct stringent quality checks at various stages of the production process to ensure the international quality standard of our products.
          </p>
        
          <div className="bg-gray-50 flex justify-center">
             <div className="pt-4 w-1/2">
         <h2 className="text-xl font-semibold text-left ml-5 mt-5 mb-8">Total Quality Management by means of:</h2>
         
         <ul className="text-gray-700 pb-8 text-left max-w-4xl mx-auto list-disc pl-5 space-y-1">
            <li>Well-laid process and system to ensure compliance & regular audit. Stringent quality control norms and standards are maintained by our trained personnel.</li>
            <li>Continuous emphasis on quality control at each level of the production stage. Defined quality Parameters/AQL charts.</li>
            <li>A vigilant QA team, dedicated to the continuous improvement of our products & services.</li>
            <li>Meticulous attention towards the quality of raw material procurement.</li>
            <li>In-house modern testing equipment.</li>
         </ul>
        </div>
             </div>
        
         
         <h2 className="text-3xl font-semibold text-center mt-5 mb-8">Quality Objectives</h2>
         
         <ol className="text-gray-700 text-left max-w-4xl mx-auto list-decimal pl-5 space-y-1">
          <li>Total customer satisfaction by consistent delivery of the products conforming to Quality & Cost.</li>
         <li>Ensure a safe working environment for all its employees.</li>
         <li>Upgradation of skill and motivation of the workforce to make them valuable Associates in achieving the company's overall Quality objectives.</li>
         </ol>
         
         
      </section>

      {/* Closing Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose N.N. Magnetics & Electronics Pvt. Ltd.?</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
          With a 100% in-house production facility, an experienced team of engineers, and a customer-centric approach, N.N. Magnetics & Electronics is your trusted partner for reliable and durable magnetic components. We serve industries from renewable energy to automotive and ensure excellence in every product we deliver.
        </p>
      </section>
    </div>
  );
}

export default About;
