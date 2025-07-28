import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* STAYMaster Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-400">STAY<span className="text-white">Master</span></h1>
          <p className="text-sm mt-2 text-gray-300">Your comfort, our priority. Experience luxury with ease at STAYMaster.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-400">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/login" className="hover:text-blue-400">Login</Link></li>
            <li><Link to="/signup" className="hover:text-blue-400">Sign Up</Link></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} STAYMaster. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
