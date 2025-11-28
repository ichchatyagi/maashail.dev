import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logonew1.png";

const Navbar = () => {
  return (
    <nav className="bg-[#FFF4CC] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Maashail Logo" className="h-16  mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">
            <Link to="/">MaaShail</Link>
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text--[#0B2545] hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text--[#0B2545] hover:text-blue-600 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text--[#0B2545] hover:text-blue-600 transition-colors duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text--[#0B2545] hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text--[#0B2545] hover:text-blue-600 transition-colors duration-300"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
