import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            My Portfolio
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="text-white space-x-4">
          <Link href="/">
             Home
          </Link>
          <Link href="/About">
             About
          </Link>
          <Link href="/Contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
