import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl font-bold text-gray-200">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-gray-800">404</div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className='bg-teal-600' size="lg">
              Go Back Home
            </Button>
          </Link>
          
          <Button 
            variant="outline"
            className='border border-teal-600 border-1 text-teal-600 hover:bg-teal-50 hover:text-teal-600'
            size="lg"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Were you looking for something?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <Link 
              to="/"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Home</div>
                <div className="text-sm text-gray-600">Return to the homepage</div>
              </div>
            </Link>

            <Link 
              to="/about"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">About</div>
                <div className="text-sm text-gray-600">Learn about our company</div>
              </div>
            </Link>

            <Link 
              to="/contact"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Contact</div>
                <div className="text-sm text-gray-600">Get in touch with us</div>
              </div>
            </Link>

            <Link 
              to="/resources"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
            >
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Resources</div>
                <div className="text-sm text-gray-600">Find helpful resources</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Fun Illustration */}
        <div className="mt-12 text-center">
          <div className="inline-block">
            <svg className="w-64 h-32 text-gray-300" viewBox="0 0 200 100" fill="currentColor">
              <path d="M20 50 Q 50 20, 80 50 T 140 50 T 180 50" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="20" cy="50" r="4"/>
              <circle cx="80" cy="50" r="4"/>
              <circle cx="140" cy="50" r="4"/>
              <circle cx="180" cy="50" r="4"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
