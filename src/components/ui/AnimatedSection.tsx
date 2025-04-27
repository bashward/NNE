import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-left': 'translate-x-10 opacity-0',
    'fade-right': '-translate-x-10 opacity-0',
    'zoom-in': 'scale-95 opacity-0',
  };

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-500 ease-out ${
        isVisible
          ? 'translate-y-0 translate-x-0 scale-100 opacity-100'
          : animations[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;