"use client"
import React, { useState, useEffect } from 'react';

const Navbar = ({ bgColor }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`text-gray-600 body-font fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrollPosition > 50 ? bgColor : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className='w-64' src="/Screenshot_2024-08-09_155040-removebg-preview (1).svg" alt="Logo" />
          </a>
          <nav className="md:ml-auto md:mr-auto text-white flex gap-16 flex-wrap items-center text-xl justify-center">
            <a className="mr-5 hover:text-yellow-400 cursor-pointer">How It Works</a>
            <a className="mr-5 hover:text-yellow-400 cursor-pointer">The App</a>
            <a className="mr-5 hover:text-yellow-400 cursor-pointer">Reviews</a>
          </nav>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-yellow-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
