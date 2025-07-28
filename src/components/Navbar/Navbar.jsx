import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { supabase } from './../../../supabaseClient';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    // Check current session
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600 transition font-medium">Blogs</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">About Us</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/login" className="px-4 py-1.5 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition text-sm font-medium">
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm font-medium">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-700 font-medium">Hi, {user.email}</span>
                <button onClick={handleLogout} className="px-4 py-1.5 border border-red-500 text-red-500 rounded-full hover:bg-red-50 transition text-sm font-medium">
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 transition font-medium">Home</Link>
          <Link to="/services" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 transition font-medium">Services</Link>
          <Link to="/blogs" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 transition font-medium">Blogs</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 transition font-medium">About Us</Link>

          {!user ? (
            <>
              <Link to="/login" onClick={toggleMenu} className="block px-4 py-2 border border-blue-600 text-blue-600 rounded-full text-center hover:bg-blue-50 transition text-sm font-medium">
                Login
              </Link>
              <Link to="/signup" onClick={toggleMenu} className="block px-4 py-2 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition text-sm font-medium">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="block text-sm text-gray-700 font-medium text-center">Hi, {user.email}</span>
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="block w-full px-4 py-2 border border-red-500 text-red-500 rounded-full text-center hover:bg-red-50 transition text-sm font-medium">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
