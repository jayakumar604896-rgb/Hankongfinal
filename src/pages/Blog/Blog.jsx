import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag, Clock, Search, Loader } from "lucide-react"
import { blogAPI } from '../../services/app'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [blogPosts, setBlogPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  
  const postsPerPage = 6

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories()
  }, [])

  // Fetch blogs when filters or page changes
  useEffect(() => {
    fetchBlogs()
  }, [activeCategory, searchTerm, currentPage])

  const fetchCategories = async () => {
    try {
      const response = await blogAPI.getCategories()
      if (response.message === 'Success') {
        // Add "All Posts" category
        const allCategory = {
          id: 'all',
          name: 'All Posts',
          count: response.data.reduce((sum, cat) => sum + cat.count, 0)
        }
        setCategories([allCategory, ...response.data])
      }
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const params = {
        page: currentPage,
        per_page: postsPerPage
      }

      // Add search filter
      if (searchTerm) {
        params.title = searchTerm
      }

      // Add category filter
      if (activeCategory !== 'all') {
        params.category_id = activeCategory
      }

      const response = await blogAPI.getBlogs(params)
      
      if (response.message === 'Success') {
        setBlogPosts(response.data)
        setTotalPages(response.last_page)
        setTotalPosts(response.total)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filter is now handled by API, so we don't need client-side filtering
  const filteredPosts = blogPosts

  // Pagination calculations are handled by API
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = (currentPage - 1) * postsPerPage

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchTerm])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages))
  const goToPrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1))

  if (loading && blogPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-[#00786F] mx-auto mb-4" />
          <p className="text-gray-600">Loading articles...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Same as before */}
      <div className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Insights, tutorials, and industry news from our expert team
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-[#045859] mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id.toString())}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id.toString()
                        ? 'bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-sm ${activeCategory === category.id.toString() ? 'text-white' : 'text-gray-400'}`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Blog Posts */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#045859]">
                {activeCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id.toString() === activeCategory)?.name}
              </h2>
              <span className="text-gray-500">
                {totalPosts} {totalPosts === 1 ? 'article' : 'articles'} found
              </span>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <Loader className="w-8 h-8 animate-spin text-[#00786F]" />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.thumbnail || '/assets/images/blog/placeholder.jpg'}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          onError={(e) => {
                            e.target.src = '/assets/images/blog/placeholder.jpg'
                          }}
                        />
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        {/* Date */}
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500">{post.created_at}</span>
                        </div>
                        
                        {/* Title */}
                        <Link to={`/blog/${post.id}`} className="block mb-3">
                          <h3 className="text-xl font-bold text-[#045859] hover:text-teal-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>
                        
                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        {/* Author and Read Time */}
                        {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.read_time}</span>
                          </div>
                        </div> */}
                        
                        {/* Read More Button */}
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="w-full bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                        >
                          Read More
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                        }`}
                      >
                        Previous
                      </button>

                      <div className="flex space-x-1">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                          <button
                            key={pageNumber}
                            onClick={() => paginate(pageNumber)}
                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                              currentPage === pageNumber
                                ? 'bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                            }`}
                          >
                            {pageNumber}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                        }`}
                      >
                        Next
                      </button>
                    </div>

                    <div className="text-center mt-4 text-gray-600">
                      Showing {indexOfFirstPost + 1} to {Math.min(indexOfLastPost, totalPosts)} of {totalPosts} articles
                    </div>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Blog