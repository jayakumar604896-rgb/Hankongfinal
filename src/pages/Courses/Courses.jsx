import { Link } from 'react-router-dom'

const Courses = () => {
  const courses = [
    {
      id: 'autocad',
      title: 'AutoCAD Course',
      description: 'Master the fundamentals of computer-aided design with AutoCAD',
      path: '/solutions/autocad',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      icon: '🏗️'
    },
    {
      id: 'aec',
      title: 'AEC',
      description: 'Architecture, Engineering, and Construction design solutions',
      path: '/solutions/aec',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
      icon: '🏢'
    },
    {
      id: 'product-design',
      title: 'Product Design & Manufacturing',
      description: 'Learn product design principles and manufacturing processes',
      path: '/solutions/product-design',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      icon: '⚙️'
    },
    {
      id: 'media-entertainment',
      title: 'Media & Entertainment',
      description: 'Explore creative tools for media and entertainment industries',
      path: '/solutions/media-entertainment',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=250&fit=crop',
      icon: '🎬'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600">Choose from our comprehensive range of professional courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              to={course.path}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden block"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="h-full flex flex-col">
                {/* Thumbnail Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-2xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {course.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 flex-grow mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors duration-300">
                      Learn More
                    </span>
                    <svg
                      className="w-5 h-5 text-teal-600 transform transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-xl  group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
