import React, { useState } from 'react';
import headerImage from "../assets/banner.png";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the overlay
    setIsMenuOpen(false);
  };

  return (
    <header className="relative">
      {/* Top Banner */}
      {isVisible && (
        <img src={headerImage} alt="banner" className="w-full h-auto" />
      )}

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-gray-800">
            <span className="text-gray-900">PLUS </span>
            <span className="text-yellow-500">GOLD</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none mr-5 text-3xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>


          {/* Menu Items for Desktop */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-600">
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">Start Saving</li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">SharkTank</li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">Gold Rush Festival</li>
            <li className="hover:text-yellow-500 transition duration-300 cursor-pointer">Partner with us</li>
          </ul>

          {/* Download Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full shadow-md transition duration-300">
            Download App
          </button>
        </div>
      </nav>

      {/* Sidebar Menu for Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50" onClick={toggleMenu}>
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6" onClick={(event) => event.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-gray-800 text-2xl"
              onClick={closeMenu} // Use closeMenu function here
            >
              ✖
            </button>
            <ul className="flex flex-col space-y-6 mt-10">
              <li className="hover:text-yellow-500 transition duration-300 cursor-pointer text-gray-900 text-lg font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
                Start Saving
              </li>
              <li className="hover:text-yellow-500 transition duration-300 cursor-pointer text-gray-900 text-lg font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
                SharkTank
              </li>
              <li className="hover:text-yellow-500 transition duration-300 cursor-pointer text-gray-900 text-lg font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
                Gold Rush Festival
              </li>
              <li className="hover:text-yellow-500 transition duration-300 cursor-pointer text-gray-900 text-lg font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
                Partner with us
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
