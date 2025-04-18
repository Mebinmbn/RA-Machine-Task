import React from "react";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  "Artificial Intelligence & Advanced Data Solutions",
  "Custom Software Development, Cloud & DevOps Engineering",
  "Product Innovation, Design & Digital Experiences",
  "Branding, Marketing & Content Strategy",
  "Strategic Consulting & Digital Transformation",
];

const services = [
  {
    title: "AI Strategy & Advisory",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    bgClass:
      "bg-radial-[at_200%_100%] from-purple-900 via-black to-purple-500 ",
  },
  {
    title: "Generative AI & Large Language Models (LLMs)",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    bgImage: "/images/image1.jpg",
  },
  {
    title: "Computer Vision & Image Analysis",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    bgImage: "/images/image2.jpg",
  },
  {
    title: "Machine Learning & Deep Learning",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    bgClass: "bg-gradient-to-br from-[#1e1d24] to-[#121215] opacity-50 ",
  },
  {
    title: "Web Scraping & Big Data Extraction",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    bgClass: "bg-gradient-to-br from-purple-800 to-gray-900",
  },
  {
    title: "AI for Industry-specific Applications",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    bgImage: "/images/image3.jpg",
  },
  {
    title: "Third-Party AI & API Integrations",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    bgImage: "/images/image4.jpg",
  },
];

const Services = () => {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="fixed inset-0 -z-10 animated-gradient "></div>

      {/* Content Section */}
      <section className="relative px-6 py-16 z-10 mt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl  mb-10">Explore our services</h2>

          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search ....."
                className="w-full  rounded-full px-6 py-3 pr-12 text-sm placeholder-gray-400 text-white border-1 border-purple-500"
              />
              <button className="absolute right-3 top-2.5 bg-[#2f2e35] hover:bg-[#3d3b45] p-2 rounded-full">
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="border border-gray-500 rounded-full px-4 py-1 text-sm whitespace-nowrap hover:bg-white hover:text-black transition"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid gap-6">
            {Array.from({ length: Math.ceil(services.length / 2) }).map(
              (_, rowIdx) => {
                const leftIndex = rowIdx * 2;
                const rightIndex = leftIndex + 1;
                const isEvenRow = rowIdx % 2 === 0;

                const leftService = services[leftIndex];
                const rightService = services[rightIndex];

                const isLastCard = rightIndex >= services.length;

                return (
                  <div
                    key={rowIdx}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left p-5"
                  >
                    {/* Left Card */}
                    {leftService && (
                      <div
                        className={`rounded-2xl h-96 flex flex-col justify-end p-6 ${
                          leftService.bgImage ? "" : leftService.bgClass
                        } ${
                          isLastCard
                            ? "md:col-span-3"
                            : isEvenRow
                            ? "md:col-span-2"
                            : "md:col-span-1"
                        }`}
                        style={{
                          backgroundImage: leftService.bgImage
                            ? `url(${leftService.bgImage})`
                            : undefined,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="opacity-100">
                          <h3 className="text-3xl font-semibold mb-1">
                            {leftService.title}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {leftService.subtitle}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Right Card */}
                    {!isLastCard && rightService && (
                      <div
                        className={`rounded-2xl h-96 flex flex-col justify-end p-6 ${
                          rightService.bgImage ? "" : rightService.bgClass
                        } ${isEvenRow ? "md:col-span-1" : "md:col-span-2"}`}
                        style={{
                          backgroundImage: rightService.bgImage
                            ? `url(${rightService.bgImage})`
                            : undefined,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="opacity-100">
                          <h3 className="text-3xl font-semibold mb-1">
                            {rightService.title}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {rightService.subtitle}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
