import { FaPencilRuler } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const blogs = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  date: "12/08/2024",
  category: "TECHNOLOGY",
  title: "Architectural Design",
}));

const Blogs = () => {
  return (
    <div className="bg-black text-white py-16 ">
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black z-0" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-snug z-10">
          Discover Blogs With <br />
          <span className="text-gray-400">the Best Lorem</span>
        </h1>
        <div className="relative mt-10 w-full max-w-xl z-10">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full bg-transparent border border-gray-600 rounded-full px-6 py-3 pr-14 text-sm text-white placeholder:text-gray-400 focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition duration-200">
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="border-t-1 border-gray-500 py-10 px-20">
        <h2 className="text-2xl font-semibold mb-10">Blogs & Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`group p-5 bg-neutral-900 border border-gray-500 relative h-64 flex flex-col justify-between 
                transition-colors duration-700 ease-in-out 
                hover:bg-gradient-to-tr hover:from-red-500 hover:via-purple-500 hover:to-pink-500`}
            >
              <div className="flex justify-between items-center">
                <FaPencilRuler size={24} />
                <span className="text-sm">{blog.date}</span>
              </div>
              <div
                className="transition-all duration-500 ease-in-out 
                 group-hover:-translate-y-5"
              >
                <p className="text-yellow-400 text-xs">{blog.category}</p>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
              </div>

              <button
                className="absolute bottom-5 left-5 text-sm text-white opacity-0 
      translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
      transition-all duration-500 ease-in-out"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
