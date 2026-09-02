import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img src="/assets/images/tech-lg-white.png" alt="Tech Logo" className="h-12 w-auto mb-5"/>
            <p className="text-gray-300 text-sm">
            @{currentYear} TD SYNNEX Corporation is a U.S. corporation that owns trademark registrations for and trades as Tech Data, Tec D, and related marks in numerous countries in the Asia-Pacific region. TD SYNNEX Corporation is not affiliated with Synnex Global Ltd. or Synnex Technology International Corporation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  to="/news-events" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  News & Events
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: <a href="mailto:info.datech@techdata.com">info.datech@techdata.com</a></p>
              <p>Phone: <a href="https://wa.me/85298625111">852-98625111</a></p>
              {/* <p>Address: 21/F, Tower One, Millennium City 1, 388 Kwun Tong Road, Kwun Tong, Kowloon</p> */}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} copyright Tech Data
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a 
                href="https://www.facebook.com/HKConnectedBIM" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@TechDataAPJ" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.997 2.997 0 00-2.112-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.386.566a2.997 2.997 0 00-2.112 2.12A31.26 31.26 0 000 12a31.26 31.26 0 00.502 5.814 2.997 2.997 0 002.112 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.386-.566a2.997 2.997 0 002.112-2.12A31.26 31.26 0 0024 12a31.26 31.26 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/hk-connected-bim" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
