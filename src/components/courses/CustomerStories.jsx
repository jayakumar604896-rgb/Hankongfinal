import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialAPI } from "../../services/app";
import { Loader } from "lucide-react";

export default function CustomerStories() {
  const [index, setIndex] = useState(0);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    fetchTestimonials();
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const response = await testimonialAPI.getTestimonials();
      console.log('Testimonials response:', response);
      
      if (response.message === 'Success' && response.data) {
        const formattedStories = response.data.map(item => ({
          id: item.id,
          image: item.profile_image 
            ? (item.profile_image.startsWith('http') ? item.profile_image : `https://hongkongcms.datechpartnervault.com/${item.profile_image}`)
            : '/assets/images/courses/customer/story-placeholder.jpg',
          quote: item.slogan || item.description || "No quote available",
          author: `— ${item.name}, ${item.designation}${item.company_name ? `, ${item.company_name}` : ''}`,
          url: item.read_story_link || "#",
          name: item.name,
          designation: item.designation,
          company_name: item.company_name
        }));
        
        setStories(formattedStories);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  if (loading) {
    return (
      <section className="text-white py-12 md:py-16 lg:py-20 relative overflow-hidden min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/courses/customer-stories-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <Loader className="w-12 h-12 animate-spin text-teal-500 mx-auto mb-4" />
          <p className="text-white">Loading customer stories...</p>
        </div>
      </section>
    );
  }

  if (!stories.length) {
    return (
      <section className="text-white py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/images/courses/customer-stories-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Customer Stories</h2>
          <p className="text-gray-300">No testimonials available yet.</p>
        </div>
      </section>
    );
  }

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
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 lg:mb-12 px-4">
          Customer Stories
        </h2>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 gap-2 md:gap-4">
          <button
            onClick={prev}
            disabled={stories.length <= 1}
            className={`text-2xl md:text-3xl transition-colors p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full z-20 ${
              stories.length <= 1 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:text-gray-400'
            }`}
            aria-label="Previous story"
          >
            ❮
          </button>

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
                    alt={`${stories[index].name}'s story`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/assets/images/courses/customer/story-placeholder.jpg';
                    }}
                  />
                </div>

                <div className="flex-1 text-center md:text-left px-2 md:px-0">
                  <p className="text-yellow-400 text-base md:text-lg lg:text-xl leading-relaxed">
                    "{stories[index].quote}"
                  </p>

                  <p className="mt-4 md:mt-6 text-gray-300 text-sm md:text-base">
                    {stories[index].author}
                  </p>

                  {stories[index].url && stories[index].url !== "#" && (
                    <a
                      href={stories[index].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 md:mt-6 underline text-sm md:text-base hover:text-gray-400 transition-colors"
                    >
                      Read Story →
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            disabled={stories.length <= 1}
            className={`text-2xl md:text-3xl transition-colors p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full z-20 ${
              stories.length <= 1 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:text-gray-400'
            }`}
            aria-label="Next story"
          >
            ❯
          </button>
        </div>

        {stories.length > 1 && (
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
        )}

        {isMobile && stories.length > 1 && (
          <div className="text-center mt-6 text-gray-400 text-xs">
            Swipe arrows or tap dots to navigate
          </div>
        )}
      </div>
    </section>
  );
}