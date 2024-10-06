import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-300 text-white">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <a href='/' className="text-2xl font-bold">Scorp</a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="hidden md:flex">
          {/* <a href="#signup" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
            Sign Up
          </a> */}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
