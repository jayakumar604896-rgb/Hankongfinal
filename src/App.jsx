import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NewsEvents from './pages/NewsEvents/NewsEvents'
import NewsEventDetail from './pages/NewsEvents/NewsEventDetail'
import Resources from './pages/Resources/Resources'
import Blog from './pages/Blog/Blog'
import BlogDetails from './pages/Blog/BlogDetails'
import Courses from './pages/Courses/Courses'
import AutoCAD from './pages/Courses/AutoCAD'
import AEC from './pages/Courses/AEC'
import ProductDesign from './pages/Courses/ProductDesign'
import MediaEntertainment from './pages/Courses/MediaEntertainment'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/profile'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

// Redirect handler for legacy /courses/:slug URLs
const CourseToSolutionRedirect = () => {
  const { slug } = useParams()
  return <Navigate to={slug ? `/solutions/${slug}` : '/solutions'} replace />
}

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news-events/news/:id" element={<NewsEventDetail />} />
          <Route path="/news-events/event/:id" element={<NewsEventDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions" element={<Courses />} />
          <Route path="/solutions/autocad" element={<AutoCAD />} />
          <Route path="/solutions/aec" element={<AEC />} />
          <Route path="/solutions/product-design" element={<ProductDesign />} />
          <Route path="/solutions/media-entertainment" element={<MediaEntertainment />} />

          {/* Legacy Redirects from /courses to /solutions */}
          <Route path="/courses" element={<Navigate to="/solutions" replace />} />
          <Route path="/courses/:slug" element={<CourseToSolutionRedirect />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App