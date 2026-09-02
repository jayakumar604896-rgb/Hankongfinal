import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    image: "/assets/images/courses/customer/story01.jpg",
    quote:
      "Standardized data capture allows our teams to collaborate on projects regardless of location to share expertise and balance their workload.",
    author:
      "— François Appéré, Global Autodesk Platform Director, Arcadis",
    url: "https://construction.autodesk.com/resources/customers/arcadis-standardizes-global-data-capture-to-improve-quality-and-drive-business-growth/"
  },
  {
    image: "/assets/images/courses/customer/story02.jpg",
    quote:
      "Forma Site Design gives us unprecedented access to data, which allows us to work smarter and go where our clients need us.",
    author: "— Tony Fiorillo, Chief Information Officer, CUBE 3",
    url: "https://blogs.autodesk.com/forma/2023/05/08/cube-3-forma-cloud-workflow/"
  },
  {
    image: "/assets/images/courses/customer/story03.jpg",
    quote:
      "We wanted to use digital tools to coordinate this project all the way from design to construction.",
    author: "— Emilio Hernandez, Computational Design Lead for the Digital Practice Studio, TVS Design",
    url: "https://www.autodesk.com/customer-stories/tvs-design"
  },
  {
    image: "/assets/images/courses/customer/story04.jpg",
    quote:
      "We're leveraging the best attributes of each piece of software and getting them to talk to each other throughout the entire project. Having the information synced and linked into the 3D environment is really awesome.",
    author: "— Michael Vogel, Principal, Graef",
    url: "https://www.autodesk.com/customer-stories/graef-story"
  },
  {
    image: "/assets/images/courses/customer/story05.jpg",
    quote:
      "We can now offer a more environmentally sustainable, cost-effective transport system as a complete track, vehicle, and operating technology package.",
    author: "— Andreas Rau, Product Manager, Max Bögl",
    url: "https://www.autodesk.com/customer-stories/max-boegl-maglev-technology"
  },
];

export default function CustomerStories() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section 
      className="text-white py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/courses/customer-stories-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 lg:mb-12 px-4">
          Customer Stories
        </h2>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 gap-2 md:gap-4">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="text-2xl md:text-3xl hover:text-gray-400 transition-colors p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full z-20"
            aria-label="Previous story"
          >
            ❮
          </button>

          {/* Animated Slider */}
          <div className="w-full max-w-6xl mx-2 md:mx-4 lg:mx-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center md:items-start"
              >
                {/* Image */}
                <div className="w-full md:w-72 lg:w-80 flex-shrink-0">
                  <img
                    src={stories[index].image}
                    className="w-full h-48 md:h-52 lg:h-56 object-cover rounded-lg shadow-lg"
                    alt={`Customer story ${index + 1}`}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left px-2 md:px-0">
                  <p className="text-yellow-400 text-base md:text-lg lg:text-xl leading-relaxed">
                    "{stories[index].quote}"
                  </p>

                  <p className="mt-4 md:mt-6 text-gray-300 text-sm md:text-base">
                    {stories[index].author}
                  </p>

                  {/* <a
                    href={stories[index].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 md:mt-6 underline text-sm md:text-base hover:text-gray-400 transition-colors"
                  >
                    Read Story →
                  </a> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="text-2xl md:text-3xl hover:text-gray-400 transition-colors p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full z-20"
            aria-label="Next story"
          >
            ❯
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 md:mt-10 lg:mt-12 gap-2 md:gap-3 px-4 flex-wrap">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                i === index 
                  ? "bg-teal-500 w-6 md:w-8" 
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to story ${i + 1}`}
            />
          ))}
        </div>

        {/* Optional: Touch Swipe Support for Mobile */}
        {isMobile && (
          <div className="text-center mt-6 text-gray-400 text-xs">
            Swipe arrows or tap dots to navigate
          </div>
        )}
      </div>
    </section>
  );
}