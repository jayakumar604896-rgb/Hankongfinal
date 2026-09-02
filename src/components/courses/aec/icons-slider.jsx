import React, { useState, useEffect } from 'react';
import '../../../../src/icons-slider.css';

const IconSlider = ({ logos = [], speed = 3000, direction = 'left' }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);


  const logosData = [
    { src: '/assets/images/icons/72b04a_3cb57ebde78b4725846e3aaad3ff539c~mv2.avif', alt: 'Company 1' },
    { src: '/assets/images/icons/72b04a_6e6b3d29fe6b436988fbbca6b3fcae3f~mv2.avif', alt: 'Company 2' },
    { src: '/assets/images/icons/72b04a_28b431db9d8c4410b1fae27dab1b0fba~mv2.avif', alt: 'Company 3' },
    { src: '/assets/images/icons/72b04a_30ddc86ddc734714b96912b032d251fe~mv2.avif', alt: 'Company 4' },
    { src: '/assets/images/icons/72b04a_c7fc10e9901c4f2e91b26b124d95f28c~mv2.avif', alt: 'Company 5' },
    { src: '/assets/images/icons/72b04a_d3641859b604413793d0e9ce58f6ff58~mv2.avif', alt: 'Company 7' },
    { src: '/assets/images/icons/72b04a_eb3eb244ff034bbeb27258f41f77a060~mv2.avif', alt: 'Company 8' },
    { src: '/assets/images/icons/72b04a_f85790cc08984c4389def71a37d97702~mv2.avif', alt: 'Company 9' },
  ];
    


  // Debug: Log props
  console.log('IconSlider props:', { logos, speed, direction });

  useEffect(() => {
    if (!isPaused && logosData && logosData.length > 0) {
      const interval = setInterval(() => {
        setCurrentPosition((prev) => {
          if (direction === 'left') {
            return prev === -100 ? 0 : prev - 100 / logosData.length;
          } else {
            return prev === 0 ? -100 : prev + 100 / logosData.length;
          }
        });
      }, speed);

      return () => clearInterval(interval);
    }
  }, [isPaused, logosData, speed, direction]);

  if (!logosData || logosData.length === 0) {
    return (
      <div className="icon-slider-container">
        <div className="icon-slider-empty">
          <p>No logos to display</p>
          <small>Please provide logos array to the IconSlider component</small>
        </div>
      </div>
    );
  }

  const sliderStyle = {
    transform: `translateX(${currentPosition}%)`,
    transition: 'transform 1s ease-in-out',
  };

  return (
    <div className="icon-slider-container lg:max-w-7xl mx-auto">
      <div className="icon-slider-wrapper">
        <div 
          className="icon-slider-track"
          style={sliderStyle}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Original logos */}
          {logosData.map((logo, index) => (
            <div key={`original-${index}`} className="icon-slide">
              <img 
                src={logo.src} 
                alt={logo.alt || `Logo ${index + 1}`}
                className="logo-image"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Duplicate logos for infinite scroll effect */}
          {logosData.map((logo, index) => (
            <div key={`duplicate-${index}`} className="icon-slide">
              <img 
                src={logo.src} 
                alt={logo.alt || `Logo ${index + 1}`}
                className="logo-image"
                loading="lazy"
              />
            </div>
          ))}
          
        </div>
      </div>
      
      {/* Navigation controls */}
      <button 
        className="slider-control prev"
        onClick={() => setCurrentPosition((prev) => Math.min(prev + 100 / logosData.length, 0))}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button 
        className="slider-control next"
        onClick={() => setCurrentPosition((prev) => Math.max(prev - 100 / logosData.length, -100))}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
};

export default IconSlider;