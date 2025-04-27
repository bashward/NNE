import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

interface TimelineEvent {
  year: string;
  description: string;
  isLeft: boolean;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: "1997",
      description: "Founded in Okhla by Virender Singh and Naresh Thakur, focusing on components for the TV industry.",
      isLeft: true
    },
    {
      year: "2001",
      description: "Began mass production of CFL inductor components.",
      isLeft: false
    },
    {
      year: "2006",
      description: "Shifted operations to a larger unit in Okhla.",
      isLeft: true
    },
    {
      year: "2012",
      description: "Reached the milestone of producing 1 million components.",
      isLeft: false
    },
    {
      year: "2019",
      description: "Launched a new production line for lamination transformers up to 5KVA.",
      isLeft: true
    },
    {
      year: "2020",
      description: "Expanded production for EV chargers and solar inverters.",
      isLeft: false
    },
    {
      year: "2021",
      description: "Surpassed 3 million components production milestone.",
      isLeft: true
    },
    {
      year: "2023",
      description: "Established a new production unit in Himachal Pradesh. Established new startup for manufacturing of wire harnesses, power cords and DC pin cords.",
      isLeft: false
    }
  ];

  return (
    <div className="relative mt-16">
      {/* Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200" />
      
      <div className="relative">
        {events.map((event, index) => (
          <AnimatedSection
            key={index}
            animation={event.isLeft ? 'fade-right' : 'fade-left'}
            delay={index * 100}
          >
            <div className={`flex items-center justify-center mb-8 ${
              event.isLeft ? 'md:justify-start' : 'md:justify-end'
            }`}>
              <div className={`relative flex items-center ${
                event.isLeft 
                  ? 'md:flex-row' 
                  : 'md:flex-row-reverse'
              } w-full md:w-1/2 ${
                event.isLeft ? 'md:pr-8' : 'md:pl-8'
              }`}>
                {/* Content Box */}
                <div className="w-full bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
                  <div className="font-bold text-2xl text-emerald-700 mb-2">{event.year}</div>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute top-1/2 transform -translate-y-1/2 
                  ${event.isLeft ? 'right-0 md:right-4' : 'left-0 md:left-4'}
                  w-4 h-4 bg-emerald-500 rounded-full border-4 border-emerald-100" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Timeline;