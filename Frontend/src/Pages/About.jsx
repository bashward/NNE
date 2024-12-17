import React, { useEffect, useRef } from 'react';

// Placeholder timeline data
const timelineData = [
  { year: "1990", title: "Company Founded", desc: "Started with a focus on quality engineering." },
  { year: "2000", title: "Expanded Capabilities", desc: "Introduced new ferrite transformer lines." },
  { year: "2010", title: "Global Reach", desc: "Served customers worldwide with custom solutions." },
  { year: "2020", title: "Innovation Continues", desc: "Invested in R&D for advanced toroidal designs." },
];

function About() {
  // Intersection Observer to animate elements on scroll (basic example)
  const refs = useRef([]);
  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    refs.current.forEach(ref => observer.observe(ref));
  }, []);

  return (
    <div className="px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Our Story</h1>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-16">
        From humble beginnings to a global provider of custom-engineered solutions,
        we’ve grown alongside the changing demands of the power electronics industry.
      </p>

      {/* Timeline */}
      <div className="relative max-w-lg mx-auto border-l border-gray-300">
        {timelineData.map((item, idx) => (
          <div key={idx} ref={addToRefs} className="opacity-0 transition-transform duration-700 mb-10 pl-8 relative">
            <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-2 top-1"></div>
            <h3 className="text-lg font-semibold">{item.year}</h3>
            <h4 className="text-md font-bold mt-1 text-gray-800">{item.title}</h4>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

  
