import React, { useState, useEffect } from 'react'
import { ArrowLeft, Calendar, MapPin, Share2, Clock, Loader } from "lucide-react"
import { useNavigate, useParams, Link } from 'react-router-dom'
import { newsEventAPI } from '../../services/app'

const NewsEventDetail = () => {
  const navigate = useNavigate()
  const { id, type } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedItems, setRelatedItems] = useState([])
  const [showShareMenu, setShowShareMenu] = useState(false)

  useEffect(() => {
    fetchDetail()
  }, [id])

  const fetchDetail = async () => {
    setLoading(true)
    try {
      const response = await newsEventAPI.getNewsEvent(id)
      
      if (response.status) {
        setItem(response.data)
        // Fetch related items (same type, different ID)
        await fetchRelatedItems(response.data.type)
      } else {
        navigate('/news-events')
      }
    } catch (error) {
      console.error('Error fetching detail:', error)
      navigate('/news-events')
    } finally {
      setLoading(false)
    }
  }

  const fetchRelatedItems = async (itemType) => {
    try {
      const response = await newsEventAPI.getNewsEvents(itemType)
      if (response.status) {
        const filtered = response.data.filter(r => r.id !== parseInt(id)).slice(0, 2)
        setRelatedItems(filtered)
      }
    } catch (error) {
      console.error('Error fetching related items:', error)
    }
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Company News': 'bg-teal-100 text-teal-800',
      'Product Update': 'bg-blue-100 text-blue-800',
      'Achievement': 'bg-green-100 text-green-800',
      'Partnership': 'bg-purple-100 text-purple-800',
      'Community': 'bg-orange-100 text-orange-800',
      'Business': 'bg-red-100 text-red-800',
      'Workshop': 'bg-indigo-100 text-indigo-800',
      'Conference': 'bg-pink-100 text-pink-800',
      'Product Launch': 'bg-green-100 text-green-800',
      'Webinar': 'bg-yellow-100 text-yellow-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const text = `Check out this ${item?.type === 2 ? 'event' : 'news article'}: ${item?.title}`
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
        break
    }
    setShowShareMenu(false)
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Date TBA'
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-[#00786F] mx-auto mb-4" />
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <button
            onClick={() => navigate('/news-events')}
            className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow"
          >
            Back to News & Events
          </button>
        </div>
      </div>
    )
  }

  const isEvent = item.type === 2
  const isNews = item.type === 1

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/news-events')}
            className="flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to {isEvent ? 'Events' : 'News'}
          </button>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                {item.category || item.type_name}
              </span>
              {isNews && (
                <span className="text-sm text-white/80">
                  {item.read_time || ''}
                </span>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {item.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              {isNews ? (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">
                        {item.author ? item.author.charAt(0) : 'S'}
                      </span>
                    </div>
                    <span>{item.author || 'StarTech Team'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{formatDate(item.date)}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{item.location || 'Online Event'}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-7xl w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {item.banner && (
          <div className="mb-12">
            <img
              src={item.banner}
              alt={item.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              onError={(e) => {
                e.target.src = '/assets/images/placeholder.jpg'
              }}
            />
          </div>
        )}

        {/* Tags Section - Extract tags from description or use default */}
        {/* <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {item.category && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                #{item.category.replace(/\s+/g, '')}
              </span>
            )}
            {item.type_name && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                #{item.type_name}
              </span>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Share2 size={18} />
              Share
            </button>
            
            {showShareMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  Twitter
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  Facebook
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  Copy Link
                </button>
              </div>
            )}
          </div>
        </div> */}

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />

        {/* Event-specific CTA */}
        {isEvent && (
          <div className="mt-12 p-8 bg-gradient-to-r from-[#00786F] to-[#34CFC4] rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="mb-6 text-white/90">
              Register now to secure your place for this exciting event!
            </p>
            <button className="bg-white text-[#00786F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Register Now
            </button>
          </div>
        )}

        {/* Related Content */}
        {relatedItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#045859] mb-8">
              Related {isEvent ? 'Events' : 'News'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedItems.map((relatedItem) => (
                <div
                  key={relatedItem.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    window.scrollTo(0, 0)
                    navigate(`/news-events/${relatedItem.id}`)
                  }}
                >
                  <img
                    src={relatedItem.thumbnail || relatedItem.banner || '/assets/images/placeholder.jpg'}
                    alt={relatedItem.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/placeholder.jpg'
                    }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(relatedItem.category)}`}>
                        {relatedItem.category || relatedItem.type_name}
                      </span>
                      <span className="text-xs text-gray-500">{formatDate(relatedItem.date)}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#045859] mb-2 line-clamp-2">
                      {relatedItem.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedItem.description?.replace(/<[^>]*>/g, '').substring(0, 100)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsEventDetail