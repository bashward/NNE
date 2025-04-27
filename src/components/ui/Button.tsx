import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyle = 'font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center hover:scale-105';
  
  const variants = {
    primary: 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300',
    secondary: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300',
    outline: 'bg-transparent border border-primary-700 text-primary-700 hover:bg-primary-50 focus:ring-4 focus:ring-primary-100',
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;