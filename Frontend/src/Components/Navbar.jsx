import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white shadow">
      <Link to="/" className="text-xl font-bold text-red-600">
        <img style={{ width: '200px', height: 'auto' }} src={require("../Content/logo.png")} alt="logo" />
      </Link>
      <div className="space-x-6">
        <Link to="/about" className="hover:text-red-600">About</Link>
        <Link to="/products" className="hover:text-red-600">Products</Link>
        <Link to="/contact" className="hover:text-red-600">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;



//<img className='pb-2' src={require("../Content/logo.png")} alt="logo" />
