import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-4 text-center text-sm text-gray-500 bg-gray-100 flex flex-col items-center">
      <p>© {new Date().getFullYear()} NNE. All rights reserved.</p>
      <a
        href="https://www.linkedin.com/company/n-n-magnetics-and-electronics-pvt-ltd" // 🔹 Replace with actual LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 mt-2 flex items-center space-x-2"
      >
        <FaLinkedin size={20} />
        <span>Follow us on LinkedIn</span>
      </a>
    </footer>
  );
}

export default Footer;
