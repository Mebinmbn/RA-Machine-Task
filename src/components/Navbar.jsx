import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { IoBagRemoveSharp } from "react-icons/io5";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
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
    <div className="Nav_Container flex justify-between py-5 px-20 text-white relative z-50">
      <div className="Logo font-bold flex gap-2 w-fit">
        <img src="/logo.png" alt="" className="h-10 w-10" />
        <h1 className="mt-2">Red Augment</h1>
      </div>

      <div className="Tabs flex justify-between gap-10 items-center">
        <Link to="/" className="font-semibold hover:text-purple-400 transition">
          Home
        </Link>
        <Link
          to="/services"
          className="font-semibold hover:text-purple-400 transition"
        >
          Services
        </Link>
        <Link
          to="/work"
          className="font-semibold hover:text-purple-400 transition"
        >
          Work
        </Link>
        <Link
          to="/products"
          className="font-semibold hover:text-purple-400 transition"
        >
          Products
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="font-semibold flex items-center gap-1 hover:text-purple-400 transition"
          >
            Company <FaChevronDown size={12} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-[#2c2c35] rounded-md shadow-lg p-3 space-y-2">
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
          className="font-semibold hover:text-purple-400 transition"
        >
          Pricing
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
