import React from 'react'
import { useState, useEffect } from 'react';


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
  
const MobNav = ({ bgColor,textColor  }) => {
  return (
   <>
       <nav className="flex flex-col items-start">
                {links.map((link, index) => (
                  <a key={index} href={link.path} className="mb-4 hover:text-yellow-400 cursor-pointer">
                    {link.name}
                  </a>
                ))}
                <button type="button" className="py-2.5 px-5 me-2 mb-2 mt-4 text-lg font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-yellow-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                  Sign Up
                </button>
              </nav>
   </>
  )
}

export default MobNav
