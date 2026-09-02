import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 3;

  // ✅ Fetch API data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await res.json();

        // Add images
        const blogsWithImages = data.slice(0, 12).map((item) => ({
          ...item,
          image: `https://picsum.photos/400/250?random=${item.id}`,
        }));

        setBlogs(blogsWithImages);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // ✅ Pagination logic
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Design & Manufacturing Blog
      </h2>

      {/* ✅ Animated Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4 }}
        >
          {currentBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition h-full flex flex-col"
              whileHover={{ scale: 1.03 }}
              layout
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                  {blog.body}
                </p>

                <button className="mt-4 text-blue-500 hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ✅ Pagination */}
      <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogSection;