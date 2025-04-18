import React from "react";

function Pricing() {
  return (
    <div className="bg-black text-white py-16 ">
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black z-0" />
        <p className="bg-gray-700 rounded-lg px-2">
          Bring your business to the best scale
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-snug z-10">
          Discover Services With <br />
          <span className="text-gray-400">the Best Pricing</span>
        </h1>
        <p className="md:w-120">
          Select from best plan, ensuring a perfect match. Need more or less?
          Customize your subscription for a seamless fit!
        </p>
      </div>

      <div className="border-t-1 border-gray-500 py-10 px-20">
        <h2 className="text-2xl font-semibold mb-10">Blogs & Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 "></div>
      </div>
    </div>
  );
}

export default Pricing;
