import React, { useState, useEffect } from "react";
import { ScreenShare, Bell } from "lucide-react";

const AECSection = ({ courseId }) => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API configuration
  const BASE_URL = 'https://hongkongcms.datechpartnervault.com';
  const API_KEY = '8a92f1d0c7e24b68a13f9c5d2e7b41a0';
  const API_URL = `${BASE_URL}/api/course-card/${courseId}?key=${API_KEY}`;

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': API_KEY,
          }
        });
        console.log("response", response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.message === 'Success' && result.data) {
          setCourseData(result.data);
        } else {
          setError('');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching course data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      ''
    );
  }

  // Assuming your course data has these fields
  // You may need to adjust based on your actual data structure
  const notificationCard = {
    title: courseData.not_title || "Autodesk Price Adjustment",
    description: courseData.not_description || "On January 7, 2026, Autodesk will update the pricing of subscriptions.",
    link: courseData.not_link || "#"
  };

  const webinarCard = {
    title: courseData.title || "Free Webinar",
    description: courseData.description || "New AECO webinar coming up! Join us to learn useful tips and workflows.",
    link: courseData.link || "#"
  };
  const stripHtmlTags = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '');
  };
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Card 1 - Notification */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center shadow">
          <Bell className="w-6 h-6 text-gray-600" />
        </div>

        <h3 className="font-semibold text-lg mt-6">
          {notificationCard.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 mb-4">
          {stripHtmlTags(notificationCard.description)}
        </p>

        <a href={notificationCard.link} className="inline-block">
          <button className="bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 transition-colors">
            Read More
          </button>
        </a>
      </div>

      {/* Card 2 - Webinar */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center relative lg:mt-0 mt-5">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center shadow">
          <ScreenShare className="w-6 h-6 text-gray-600" />
        </div>

        <h3 className="font-semibold text-lg mt-6">
          {webinarCard.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 mb-4">
          {stripHtmlTags(notificationCard.description)}
        </p>

        <a href={webinarCard.link} className="inline-block">
          <button className="bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 transition-colors">
            Read More
          </button>
        </a>
      </div>
    </div>
  );
};

export default AECSection;