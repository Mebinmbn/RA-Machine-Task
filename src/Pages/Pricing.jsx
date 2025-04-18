import React from "react";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      description: "Best for personal use.",
      price: "$100",
      features: [
        "Employee directory",
        "Task management",
        "Calendar integration",
        "File storage",
        "Communication tools",
        "Reporting and analytics",
      ],
    },
    {
      name: "Enterprise",
      description: "For large teams & corporations.",
      price: "$100",
      features: [
        "Advanced employee directory",
        "Project management",
        "Resource scheduling",
        "Version control",
        "Team collaboration",
        "Advanced analytics",
      ],
    },
    {
      name: "Business",
      description: "Best for business owners.",
      price: "$100",
      features: [
        "Customizable employee directory",
        "Client project management",
        "Client meeting schedule",
        "Compliance tracking",
        "Client communication",
        "Create custom reports tailored",
      ],
    },
  ];
  return (
    <div className="inset-0 bg-gradient-to-br from-black from-10%  via-blue-900  via-black from-20% via-purple-900 from-10% to-black z-0 text-white py-16 ">
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <div className=" inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black z-0" />
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

      <div className=" py-10 px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl  bg-gradient-to-b from-gray-800 to-gray-900 px-6 py-16 shadow-lg hover:shadow-2xl transition-shadow "
            >
              <div className="mb-4">
                <div className="w-4 h-4 rounded-full border-3 border-white mb-4"></div>
                <h2 className="text-2xl font-semibold mb-1">{plan.name}</h2>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                <div className="flex mb-5">
                  <p className="text-4xl font-bold mb-2">{plan.price}</p>
                  <p className="text-sm text-gray-400 mt-4">/per month</p>
                </div>
                <div className="text-center mb-5">
                  <button className="w-[80%]  bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition">
                    Proceed
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-sm font-semibold mb-4">
                  What you will get
                </h3>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
