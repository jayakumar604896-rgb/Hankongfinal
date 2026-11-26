import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const isHomePage = location.pathname === '/';

  // Dynamic navigation
  const getNavigation = () => {
    return [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      {
        name: 'Solutions',
        href: '/solutions',
        dropdown: [
          { name: 'AutoCAD', href: '/solutions/autocad' },
          { name: 'Architecture, Engineering & Construction', href: '/solutions/aec' },
          { name: 'Product Design & Manufacturing', href: '/solutions/product-design' },
          { name: 'Media & Entertainment', href: '/solutions/media-entertainment' },
        ],
      },
      { name: 'News & Events', href: '/news-events' },
      //{ name: 'Blog', href: '/blog' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/contact' },
    ];
  };

  const navigation = getNavigation();

  const isActive = (path) => location.pathname === path;

  // Scroll effect for non-home pages
  useEffect(() => {
    if (!isHomePage) {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  // Close dropdowns when clicking outside - FIXED to not close on logout click
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking on logout button
      if (event.target.closest('button') && event.target.closest('button').textContent === 'Logout') {
        return;
      }
      
      if (event.target.tagName === 'A' || event.target.closest('a')) return;
      
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
      
      // Don't close profile dropdown if clicking inside it
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setIsProfileOpen(false);
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleNavClick = (href) => {
    setOpenDropdown(null);
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  };

  // ✅ FIXED: Improved logout handler with better error handling and feedback
  const handleLogout = async (e) => {
    // Prevent event bubbling
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log('🔴 Logout button clicked');
    console.log('Current user:', user);
    
    // Close dropdown immediately for better UX
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    
    try {
      await logout();
      console.log('✅ Logout successful');
      
      // Navigate to home
      navigate('/');
      
      // Optional: Show success message
      // You can add a toast notification here
      
    } catch (err) {
      console.error('❌ Logout error:', err);
      // Even if API fails, we should clear local state
      // The logout function in AuthContext should handle this
      
      // Force redirect to home
      navigate('/');
    }
  };

  // ✅ Handle profile toggle - prevents closing issues
  const toggleProfile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav
        className={`
          top-0 left-0 right-0 z-50 transition-all duration-300
          ${isHomePage ? 'absolute' : 'sticky'}
          ${!isHomePage && isScrolled
            ? 'bg-white shadow-lg backdrop-blur-md'
            : !isHomePage
              ? 'bg-white shadow-md'
              : ''}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className={`
                  text-2xl font-bold flex items-center group transition-colors
                  ${isHomePage ? 'text-white' : 'text-teal-600'}
                `}
              >
                {isHomePage ? (
                  <img
                    src="/assets/images/tech-lg-white.png"
                    alt="Tech Logo"
                    className="lg:h-12 h-10 w-auto"
                  />
                ) : (
                  <img
                    src="/assets/images/tech-lg.png"
                    alt="Tech Logo"
                    className="lg:h-12 h-10 w-auto"
                  />
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={item.dropdown ? dropdownRef : null}
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.name)}
                        className={`
                          flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                          ${isHomePage
                            ? isActive(item.href)
                              ? 'bg-white bg-opacity-20 text-white shadow-md'
                              : 'text-white hover:bg-white hover:bg-opacity-20'
                            : isActive(item.href)
                              ? 'bg-teal-100 text-teal-700 shadow-md'
                              : 'text-gray-700 hover:bg-gray-100'}
                        `}
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => handleNavClick(dropdownItem.href)}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`
                        flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                        ${isHomePage
                          ? isActive(item.href)
                            ? 'bg-white bg-opacity-20 text-white shadow-md'
                            : 'text-white hover:bg-white hover:bg-opacity-20'
                          : isActive(item.href)
                            ? 'bg-teal-100 text-teal-700 shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'}
                      `}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Profile Menu (Logged In) / Sign Up (Logged Out) */}
              {user ? (
                <div className="relative" ref={profileRef}>
                  <button
                    type="button"
                    onClick={toggleProfile}
                    className={`
                      flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 transform hover:scale-105
                      ${isHomePage
                        ? 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                    `}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                      <div className="py-2">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">
                            {user.name || 'User'}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {user.email}
                          </p>
                        </div>

                        <Link
                          to="/profile"
                          onClick={() => {
                            setIsProfileOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          Profile
                        </Link>

                        {/* ✅ FIXED: Logout button with proper event handling */}
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/signup"
                  className={`
                    px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md
                    ${isHomePage
                      ? 'bg-white text-teal-600 hover:bg-teal-50'
                      : 'bg-teal-600 text-white hover:bg-teal-700'}
                  `}
                >
                  Customer Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button & Icons */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Search Icon */}
              <button
                type="button"
                className={`
                  p-2 rounded-lg transition-colors
                  ${isHomePage
                    ? 'text-white hover:text-teal-200 hover:bg-white hover:bg-opacity-20'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-100'}
                `}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Mobile Profile */}
              {user && (
                <div className="relative" ref={profileRef}>
                  <button
                    type="button"
                    onClick={toggleProfile}
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center transition-colors
                      ${isHomePage
                        ? 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                    `}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                      <div className="py-2">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">{user.name || 'User'}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                        <Link
                          to="/profile"
                          onClick={() => {
                            setIsProfileOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          Profile
                        </Link>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`
                  p-2 rounded-lg transition-colors
                  ${isHomePage
                    ? 'text-white hover:text-teal-200 hover:bg-white hover:bg-opacity-20'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-100'}
                `}
              >
                <div className="w-6 h-6 flex flex-col justify-center">
                  <span className={`block w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''} ${isHomePage ? 'bg-white' : 'bg-gray-700'}`}></span>
                  <span className={`block w-full h-0.5 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${isHomePage ? 'bg-white' : 'bg-gray-700'}`}></span>
                  <span className={`block w-full h-0.5 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} ${isHomePage ? 'bg-white' : 'bg-gray-700'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className={`px-4 pt-2 pb-4 space-y-2 ${isHomePage ? 'bg-teal-700 bg-opacity-95' : 'bg-white border-t border-gray-200'}`}>
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${isHomePage ? 'text-white hover:bg-teal-600' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <div className="flex items-center"><span className="font-medium">{item.name}</span></div>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-8 mt-2 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link key={dropdownItem.name} to={dropdownItem.href} onClick={() => handleNavClick(dropdownItem.href)} className={`block px-4 py-2 rounded transition-colors ${isHomePage ? 'text-teal-100 hover:text-white hover:bg-teal-600' : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'}`}>
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.href} onClick={() => handleNavClick(item.href)} className={`flex items-center px-4 py-3 rounded-lg font-medium transition-colors ${isHomePage ? (isActive(item.href) ? 'bg-white text-teal-700' : 'text-white hover:bg-teal-600') : (isActive(item.href) ? 'bg-teal-100 text-teal-700' : 'text-gray-700 hover:bg-gray-100')}`}>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {!user && (
              <Link to="/signup" className={`block w-full px-4 py-3 rounded-lg font-semibold transition-colors mt-4 text-center ${isHomePage ? 'bg-white text-teal-600 hover:bg-teal-50' : 'bg-teal-600 text-white hover:bg-teal-700'}`}>
                Sign Up
              </Link>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors mt-4 text-center ${isHomePage ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-red-500 text-white hover:bg-red-600'}`}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Fixed WhatsApp Button */}
      {/* <a
        href="https://wa.me/+85270860046"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed lg:bottom-10 bottom-24 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a> */}
    </div>
  );
};

export default Layout;