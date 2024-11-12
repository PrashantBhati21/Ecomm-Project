import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Ecomm</div>

        <div className=" md:flex space-x-4">
          <NavLink to="/" className="text-white hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-200">
            About
          </NavLink>
          <NavLink to="/services" className="text-white hover:text-gray-200">
            Services
          </NavLink>
          <NavLink
            to="/productListing"
            className="text-white hover:text-gray-200"
          >
            Products
          </NavLink>
          <NavLink to="/login" className="text-white hover:text-gray-200">
            Login
          </NavLink>
          <NavLink to="/register" className="text-white hover:text-gray-200">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
