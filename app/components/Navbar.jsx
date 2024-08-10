"use client"
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Updated import for Heroicons v2

const links = [
  {
    name: "How It Works",
    path: "/works",
  },
  {
    name: "The App",
    path: "/app",
  },
  {
    name: "Reviews",
    path: "/reviews",
  }
];

const Navbar = ({ bgColor,textColor  }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className={`text-gray-200 body-font fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrollPosition > 50 ? bgColor : 'bg-transparent'}`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900">
            <img className='w-32 md:w-64' src="/Screenshot_2024-08-09_155040-removebg-preview (1).svg" alt="Logo" />
          </a>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8" /> // Updated icon
              ) : (
                <Bars3Icon className="h-8 w-8" /> // Updated icon
              )}
            </button>
          </div>

          {/* Links for desktop */}
          <nav className={` ${textColor} hidden md:flex md:ml-auto md:mr-auto flex gap-16 flex-wrap items-center text-xl justify-center`}>
      {links.map((link, index) => (
        <a key={index} href={link.path} className="mr-5 hover:text-yellow-400 cursor-pointer">
          {link.name}
        </a>
      ))}
    </nav>

          {/* Button for desktop */}
          <button type="button" className="hidden md:block py-2.5 px-5 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-yellow-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
            Sign Up
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-800 text-white absolute top-16 left-0 w-full px-4 py-4 z-50">
              <nav className="flex flex-col items-start">
              <nav className={` ${textColor} hidden md:flex md:ml-auto md:mr-auto flex gap-16 flex-wrap items-center text-xl justify-center`}>
      {links.map((link, index) => (
        <a key={index} href={link.path} className="mr-5 hover:text-yellow-400 cursor-pointer">
          {link.name}
        </a>
      ))}
    </nav>
                <button type="button" className="py-2.5 px-5 me-2 mb-2 mt-4 text-lg font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-yellow-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                  Sign Up
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
