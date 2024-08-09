import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img className='w-64' src="/Screenshot_2024-08-09_155040-removebg-preview (1).svg" alt="" />
    
    </a>
    <nav className="md:ml-auto md:mr-auto text-white flex gap-16 flex-wrap items-center text-xl justify-center">
      <a className="mr-5 hover:text-gray-300 cursor-pointer">How It Works</a>
      <a className="mr-5 hover:text-gray-300 cursor-pointer">The App</a>
      <a className="mr-5 hover:text-gray-300 cursor-pointer">Reviews</a>
      {/* <a className="mr-5 hover:text-gray-900"></a> */}
    </nav>
    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 dark:hover:text-gray-900 dark:hover:bg-gray-100">Sign Up</button>

  </div>
</header>
    </div>
  )
}

export default Navbar
