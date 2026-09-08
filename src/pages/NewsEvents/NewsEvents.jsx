import React, { useState, useEffect } from 'react'
import { ArrowRight, Calendar, MapPin, Loader } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import { newsEventAPI } from '../../services/app'

const NewsEvents = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('news') // 'news' or 'events'
  const [newsItems, setNewsItems] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [visibleNewsCount, setVisibleNewsCount] = useState(6)
  const [visibleEventsCount, setVisibleEventsCount] = useState(3)

  // Fetch data on component mount
  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = async () => {
    setLoading(true)
    try {
      // Fetch news (type=1)
      const newsResponse = await newsEventAPI.getNewsEvents(1)
      if (newsResponse.status) {
        setNewsItems(newsResponse.data)
      }

      // Fetch events (type=2)
      const eventsResponse = await newsEventAPI.getNewsEvents(2)
      if (eventsResponse.status) {
        setEvents(eventsResponse.data)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Get category color based on category name
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
      'Webinar': 'bg-yellow-100 text-yellow-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-[#00786F] mx-auto mb-4" />
          <p className="text-gray-600">Loading news & events...</p>
        </div>
      </div>
    )
  }
  const stripHtmlTags = (html) => {
    if (!html) return '';
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      return doc.body.textContent || '';
    } catch {
      return html.replace(/<[^>]*>/g, '');
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and events from StarTech
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-3 lg:text-md text-sm rounded-md font-medium transition-all duration-200 ${activeTab === 'news'
                  ? 'bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Latest News ({newsItems.length})
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 lg:text-md text-sm rounded-md font-medium transition-all duration-200 ${activeTab === 'events'
                  ? 'bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Upcoming Events ({events.length})
            </button>
          </div>
        </div>

        {/* News Section */}
        {activeTab === 'news' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#045859] mb-4">Latest News</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay informed about our latest developments, achievements, and company updates
              </p>
            </div>

            {newsItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No news articles found</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
                  {newsItems.slice(0, visibleNewsCount).map((news) => (
                    <div
                      key={news.id}
                      className="bg-white rounded-[50px_0_0_50px] shadow-lg flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={news.thumbnail || news.banner || '/assets/images/placeholder.jpg'}
                        alt={news.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src = '/assets/images/placeholder.jpg'
                        }}
                      />

                      <div className="p-5 lg:p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(news.category)}`}>
                            {news.category || news.type_name}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {news.date}
                          </span>
                        </div>

                        <h3 className="text-lg lg:text-[22px] font-bold text-[#045859] leading-snug line-clamp-2 min-h-[70px]">
                          {news.title}
                        </h3>

                        <p className="text-sm lg:text-[15px] mt-3 text-gray-600 line-clamp-3 flex-grow">
                          {stripHtmlTags(news.description)}
                        </p>

                        <button
                          onClick={() => navigate(`/news-events/news/${news.id}`)}
                          className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white flex items-center justify-center gap-3 w-full sm:w-[200px] mx-auto mt-6 py-2 rounded-[20px_0_20px_0] hover:shadow-lg transition-shadow"
                        >
                          Read More
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <div className="flex justify-center gap-4">
                    {visibleNewsCount < newsItems.length && (
                      <button
                        onClick={() => setVisibleNewsCount(prev => prev + 6)}
                        className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white flex items-center justify-center gap-3 px-8 py-3 rounded-[20px_0_20px_0] hover:shadow-lg transition-shadow"
                      >
                        Load More News
                        <ArrowRight size={18} />
                      </button>
                    )}
                    {visibleNewsCount > 6 && visibleNewsCount >= newsItems.length && (
                      <button
                        onClick={() => setVisibleNewsCount(6)}
                        className="bg-gray-500 text-white flex items-center justify-center gap-3 px-8 py-3 rounded-[20px_0_20px_0] hover:shadow-lg transition-shadow"
                      >
                        Show Less
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </section>
        )}

        {/* Events Section */}
        {activeTab === 'events' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#045859] mb-4">Upcoming Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us for workshops, conferences, and product launch events
              </p>
            </div>

            {events.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No upcoming events found</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-5">
                  {events.slice(0, visibleEventsCount).map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-[50px_0_0_50px] shadow-lg flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <img
                        src={event.thumbnail || event.banner || '/assets/images/placeholder.jpg'}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src = '/assets/images/placeholder.jpg'
                        }}
                      />

                      <div className="p-5 lg:p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 text-[#00786F]" />
                          <span className="font-medium">{event.date}</span>
                        </div>

                        <h3 className="text-lg lg:text-[22px] font-bold text-[#045859] leading-snug line-clamp-2 min-h-[70px]">
                          {event.title}
                        </h3>

                        <p className="text-sm lg:text-[15px] mt-3 text-gray-600 line-clamp-3 flex-grow">
                          {event.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                          <MapPin className="w-4 h-4 text-[#00786F]" />
                          <span>{event.category || 'Virtual Event'}</span>
                        </div>

                        <button
                          onClick={() => navigate(`/news-events/event/${event.id}`)}
                          className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white flex items-center justify-center gap-3 w-full sm:w-[200px] mx-auto mt-6 py-2 rounded-[20px_0_20px_0] hover:shadow-lg transition-shadow"
                        >
                          Read More
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <div className="flex justify-center gap-4">
                    {visibleEventsCount < events.length && (
                      <button
                        onClick={() => setVisibleEventsCount(prev => prev + 3)}
                        className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white flex items-center justify-center gap-3 px-8 py-3 rounded-[20px_0_20px_0] hover:shadow-lg transition-shadow"
                      >
                        Load More Events
                        <ArrowRight size={18} />
                      </button>
                    )}
                    {visibleEventsCount > 3 && visibleEventsCount >= events.length && (
                      <button
                        onClick={() => setVisibleEventsCount(3)}
                        className="bg-gray-500 text-white flex items-center justify-center gap-3 px-8 py-3 rounded-[20px_0_20px_0] hover:shadow-lg transition-shadow"
                      >
                        Show Less
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </div>
  )
}

export default NewsEvents