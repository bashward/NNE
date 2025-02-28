import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Content/logo.png'; // Importing logo correctly

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white shadow">
      {/* Logo Container */}
      <Link to="/" className="flex items-center">
        <img 
          src={logo} 
          alt="logo" 
          className="h-16 md:h-20 w-auto" // 👈 Adjusted size for different screen sizes
        />
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6 text-lg">
        <Link to="/about" className="hover:text-red-600">About</Link>
        <Link to="/about#quality" className="hover:text-red-600">Quality</Link>
        <Link to="/products" className="hover:text-red-600">Products</Link>
        <Link to="/contact" className="hover:text-red-600">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;




//<img className='pb-2' src={require("../Content/logo.png")} alt="logo" />
