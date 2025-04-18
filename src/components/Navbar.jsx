import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { MdEditNote, MdOutlineStickyNote2 } from "react-icons/md";
import { IoBagRemoveSharp } from "react-icons/io5";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="Nav_Container flex justify-between py-5 px-5 md:px-20 text-white relative z-50 ">
      {/* Logo */}
      <div className="Logo font-bold flex gap-2 items-center">
        <img src="/logo.png" alt="" className="h-10 w-10" />
        <h1 className="text-lg">Red Augment</h1>
      </div>

      <div className="md:hidden">
        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Main Navigation */}
      <div
        className={`Tabs absolute md:static top-16 right-0 md:flex md:items-center gap-10 bg-[#1a1a1a] md:bg-transparent w-full md:w-auto px-5 md:px-0 py-4 md:py-0 space-y-4 md:space-y-0 transition-all duration-300 ease-in-out ${
          showMobileMenu ? "block" : "hidden md:flex"
        }`}
      >
        <Link
          to="/"
          className="font-semibold hover:text-purple-400 transition block"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="font-semibold hover:text-purple-400 transition block"
        >
          Services
        </Link>
        <Link
          to="/work"
          className="font-semibold hover:text-purple-400 transition block"
        >
          Work
        </Link>
        <Link
          to="/products"
          className="font-semibold hover:text-purple-400 transition block"
        >
          Products
        </Link>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="font-semibold flex items-center gap-1 hover:text-purple-400 transition"
          >
            Company <FaChevronDown size={12} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-[#2c2c35] rounded-md shadow-lg p-3 space-y-2 z-50">
              <Link
                to="/about"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
              >
                <MdOutlineStickyNote2 /> About
              </Link>
              <Link
                to="/blogs"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
              >
                <MdEditNote /> Blogs
              </Link>
              <Link
                to="/careers"
                className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
              >
                <IoBagRemoveSharp /> Careers
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/pricing"
          className="font-semibold hover:text-purple-400 transition block"
        >
          Pricing
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
