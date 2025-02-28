import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for hamburger menu
import logo from '../Content/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-16 md:w-8 h-auto" // Adjusted for mobile & desktop
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links (Hidden on Mobile, Visible on Desktop) */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/about" className="hover:text-red-600">About</Link>
          <Link to="/about#quality" className="hover:text-red-600">Quality</Link>
          <Link to="/products" className="hover:text-red-600">Products</Link>
          <Link to="/contact" className="hover:text-red-600">Contact</Link>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 shadow-lg">
          <Link to="/about" className="hover:text-red-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/about#quality" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Quality</Link>
          <Link to="/products" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/contact" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



//<img className='pb-2' src={require("../Content/logo.png")} alt="logo" />
