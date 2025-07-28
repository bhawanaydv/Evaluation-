import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
              STAY<span className="text-gray-800">Master</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600 transition font-medium">Blogs</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">About Us</Link>
          </div>

          {/* Login / Sign Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-4 py-1.5 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
