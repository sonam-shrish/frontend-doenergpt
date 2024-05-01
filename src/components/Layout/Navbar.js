// components/NavBar.js
import React from 'react';
// import Link from 'next/link';

const Navbar = ({ toggleChat }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        DönerGPT
        {/* <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
          <Link href="/">
            <a className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
          </Link>
        </div> */}
        <button onClick={toggleChat} className="font-bold py-2 px-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        </button>
      </div>
    </nav>
  );
};

export default Navbar;
