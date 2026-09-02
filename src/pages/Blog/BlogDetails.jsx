import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Tag, Share2, Heart, MessageCircle } from 'lucide-react'

const BlogDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(42)

  // Mock blog posts data (same as Blog.jsx)
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React 18: New Features and Best Practices",
      excerpt: "Explore the latest features in React 18 including concurrent rendering, automatic batching, and the new hooks. Learn how to migrate your existing applications and take advantage of these powerful new capabilities.",
      content: `<h2>Introduction to React 18</h2>
        <p>React 18 represents one of the most significant updates to React since its inception. This version introduces groundbreaking features that fundamentally change how we build web applications, focusing on performance improvements and developer experience.</p>
        
        <h3>Concurrent Rendering</h3>
        <p>At the heart of React 18 is concurrent rendering, a new mechanism that allows React to prepare multiple versions of your UI simultaneously. This means React can interrupt rendering to handle more urgent updates, making your application feel more responsive.</p>
        
        <blockquote>
          <p>"Concurrent rendering is not a feature you use directly, but rather a new mechanism behind the scenes that enables React to prepare multiple versions of your UI at the same time."</p>
        </blockquote>
        
        <h3>Automatic Batching</h3>
        <p>React 18 introduces automatic batching for all state updates, regardless of where they originate. This means that multiple state updates will be batched together automatically, reducing unnecessary re-renders and improving performance.</p>
        
        <pre><code>// Before React 18
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React re-renders twice here
}

// After React 18
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React only re-renders once
}</code></pre>
        
        <h3>New Hooks</h3>
        <p>React 18 introduces several new hooks that give developers more control over rendering behavior:</p>
        
        <h4>useTransition Hook</h4>
        <p>The useTransition hook allows you to mark certain state updates as transitions, telling React that they can be interrupted and are not urgent.</p>
        
        <pre><code>import { useTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      setList(searchResults(e.target.value));
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Searching...</p>}
      <List items={list} />
    </div>
  );
}</code></pre>
        
        <h4>useDeferredValue Hook</h4>
        <p>The useDeferredValue hook allows you to defer updating a part of the UI, making your application more responsive during heavy rendering operations.</p>
        
        <h3>Migration Guide</h3>
        <p>Migrating to React 18 is straightforward for most applications. Here are the key steps:</p>
        
        <ol>
          <li><strong>Update Dependencies:</strong> Upgrade React and React-DOM to version 18</li>
          <li><strong>Update Client Rendering API:</strong> Change ReactDOM.render to ReactDOM.createRoot</li>
          <li><strong>Test Your Application:</strong> Most applications will work without changes</li>
          <li><strong>Optimize with New Features:</strong> Gradually adopt new hooks and concurrent features</li>
        </ol>
        
        <pre><code>// Before
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// After
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);</code></pre>
        
        <h3>Best Practices</h3>
        <p>To get the most out of React 18, consider these best practices:</p>
        
        <ul>
          <li>Use startTransition for non-urgent state updates</li>
          <li>Implement proper loading states for deferred content</li>
          <li>Profile your application to identify performance bottlenecks</li>
          <li>Gradually adopt new features rather than refactoring everything at once</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>React 18 represents a significant step forward for the React ecosystem. The new concurrent features, automatic batching, and additional hooks provide developers with powerful tools to build more responsive and performant applications. By understanding and adopting these features, you can create better user experiences and more maintainable code.</p>`,
      author: "Sarah Johnson",
      date: "March 15, 2026",
      readTime: "8 min read",
      category: "technology",
      image: "/assets/images/blog/card01.jpg",
      tags: ["React", "JavaScript", "Web Development"],
      featured: true
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt: "Discover how artificial intelligence is transforming the web development landscape. From AI-powered code completion to automated testing, learn about the tools and techniques that are shaping the future.",
      content: `<h2>The AI Revolution in Web Development</h2>
        <p>Artificial intelligence is no longer a futuristic concept in web development—it's here now, and it's transforming how we build, test, and deploy web applications. From intelligent code completion to automated testing and deployment, AI tools are becoming essential parts of the modern developer toolkit.</p>
        
        <h3>AI-Powered Code Completion</h3>
        <p>Tools like GitHub Copilot and Tabnine have revolutionized how developers write code. These AI assistants can understand context, suggest entire functions, and even help with debugging. They learn from millions of code repositories to provide intelligent suggestions that match your coding style and project requirements.</p>
        
        <h3>Automated Testing and Quality Assurance</h3>
        <p>AI is making testing more intelligent and comprehensive. Modern AI testing tools can:</p>
        <ul>
          <li>Automatically generate test cases based on application behavior</li>
          <li>Identify edge cases that human testers might miss</li>
          <li>Predict potential bugs before they occur</li>
          <li>Optimize test suites for maximum coverage</li>
        </ul>
        
        <h3>The Future Landscape</h3>
        <p>As AI continues to evolve, we can expect even more transformative changes in web development. The future will likely see AI systems that can:</p>
        <ul>
          <li>Generate entire applications from natural language descriptions</li>
          <li>Automatically optimize performance and security</li>
          <li>Provide real-time code reviews and suggestions</li>
          <li>Handle deployment and infrastructure management</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The integration of AI in web development is not about replacing developers—it's about augmenting their capabilities and allowing them to focus on creative problem-solving while AI handles routine tasks. Embracing these tools will be essential for staying competitive in the evolving tech landscape.</p>`,
      author: "Michael Chen",
      date: "March 12, 2026",
      readTime: "6 min read",
      category: "technology",
      image: "/assets/images/blog/card01.jpg",
      tags: ["AI", "Machine Learning", "Future Tech"]
    },
    {
      id: 3,
      title: "Modern CSS Techniques for Responsive Design",
      excerpt: "Master the latest CSS features including Grid, Flexbox, and Container Queries. Build responsive layouts that work seamlessly across all devices with modern CSS techniques.",
      content: `<h2>The Evolution of CSS Layout</h2>
        <p>CSS has evolved significantly over the past few years, providing developers with powerful tools for creating responsive, flexible layouts. Modern CSS techniques make it easier than ever to build designs that work seamlessly across all devices.</p>
        
        <h3>CSS Grid: Two-Dimensional Layout</h3>
        <p>CSS Grid has revolutionized how we approach layout design. Unlike Flexbox, which is primarily one-dimensional, Grid allows you to work in two dimensions, creating complex layouts with minimal code.</p>
        
        <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.header {
  grid-column: 1 / -1;
}

.sidebar {
  grid-column: 1 / 3;
}

.main-content {
  grid-column: 3 / -1;
}</code></pre>
        
        <h3>Container Queries: Responsive Components</h3>
        <p>Container queries are one of the most exciting recent additions to CSS. They allow components to respond to their container size rather than the viewport size, making truly reusable responsive components possible.</p>
        
        <pre><code>.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}</code></pre>
        
        <h3>Modern CSS Features</h3>
        <p>Several new CSS features are making responsive design even more powerful:</p>
        <ul>
          <li><strong>CSS Subgrid:</strong> Allows nested grids to inherit tracks from parent grids</li>
          <li><strong>CSS Logical Properties:</strong> Makes internationalization easier with flow-relative properties</li>
          <li><strong>CSS Functions:</strong> min(), max(), and clamp() for fluid typography and spacing</li>
          <li><strong>CSS Layers:</strong> Better control over CSS specificity and cascade management</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Modern CSS provides powerful tools for creating responsive, maintainable layouts. By understanding and leveraging these features, you can build designs that are both beautiful and functional across all devices.</p>`,
      author: "Emily Rodriguez",
      date: "March 10, 2026",
      readTime: "10 min read",
      category: "design",
      image: "/assets/images/blog/card01.jpg",
      tags: ["CSS", "Responsive Design", "Frontend"]
    }
  ]

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(p => p.id === parseInt(id))
    if (currentPost) {
      setPost(currentPost)
      // Get related posts (same category, excluding current post)
      const related = blogPosts.filter(p => 
        p.category === currentPost.category && p.id !== currentPost.id
      ).slice(0, 3)
      setRelatedPosts(related)
    } else {
      // Post not found, redirect to blog page
      navigate('/blog')
    }
  }, [id, navigate])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-white hover:text-teal-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white text-opacity-90">
            {/* <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div> */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Actions */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
          {/* <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isLiked 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              <span>{likeCount}</span>
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Comments</span>
            </button>
          </div> */}
          
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-teal"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00786F] to-[#34CFC4] rounded-full flex items-center justify-center text-white text-xl font-bold">
              {post.author.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#045859] mb-2">{post.author}</h3>
              <p className="text-gray-600 mb-4">
                Senior Developer and Technical Writer with over 10 years of experience in web development. 
                Passionate about sharing knowledge and helping developers build better applications.
              </p>
              <div className="flex gap-4">
                <button className="text-teal-600 hover:text-teal-700 font-medium">
                  Follow Author
                </button>
                <button className="text-gray-600 hover:text-gray-700 font-medium">
                  View All Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-[#045859] mb-8 text-center">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-teal-600 uppercase tracking-wide">
                      {relatedPost.category}
                    </span>
                    <span className="text-sm text-gray-500">{relatedPost.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#045859] mb-3 group-hover:text-teal-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    {/* <span className="text-sm text-gray-500">{relatedPost.readTime}</span> */}
                    <span className="text-teal-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default BlogDetails
