import React from "react";
// import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-radial-[at_50%_75%] from-gray-700 via-gray-900 to-black text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Red Augment" className="w-6 h-6" />
            <span className="text-white font-semibold text-lg">
              Red Augment
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Eu eget sagittis mi odio.
            Eget non ultrices interdum nisl. A euismod nunc proin sed.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li className="hover:underline cursor-pointer text-gray-400">
              Pricing
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-white font-semibold mb-2">About</h4>
          <ul className="space-y-1 text-sm">
            <li className="hover:underline cursor-pointer text-gray-400">
              Blogs
            </li>
            <li className="hover:underline cursor-pointer text-gray-400">
              Contact
            </li>
            <li className="hover:underline cursor-pointer text-gray-400">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm mb-2">contact@redaugment.com</p>
          <p className="text-sm text-gray-400 leading-relaxed">
            A - 2 Kadipur, Delhi <br />
            New Delhi, 110036, India
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-sm text-gray-500 text-right mr-65 pt-6">
        © 2025 - redugment
      </div>
    </footer>
  );
};

export default Footer;
