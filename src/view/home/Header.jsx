import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-orange-50 shadow-md py-4 lg:py-8">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo placeholder */}
        <div className="font-bold text-2xl lg:text-5xl">
          <Link to="/" className="text-blue-600 hover:text-blue-900">
            Cafe 
          </Link>
        </div>
   
        {/* Navigation Menu */}
        <nav className="hidden sm:block">
          <ul className="flex  text-2xl space-x-4 md:space-x-8 lg:space-x-12">
            <li>
              <Link to="/home" className="text-amber-800 hover:text-amber-950">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-amber-800 hover:text-amber-950">
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/franchise"
                className="text-amber-800 hover:text-amber-950">
                Franchise
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-amber-800 hover:text-amber-950">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="space-x-2 sm:space-x-4">
          <Link
            to="/login"
            className="bg-amber-800 hover:bg-amber-900 text-white px-3 py-1 rounded-lg text-sm sm:px-4 sm:py-2 sm:text-base transition-colors duration-300 ease-in-out">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-amber-800 hover:bg-amber-900 text-white px-3 py-1 rounded-lg text-sm sm:px-4 sm:py-2 sm:text-base transition-colors duration-300 ease-in-out">
            Sign-up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
