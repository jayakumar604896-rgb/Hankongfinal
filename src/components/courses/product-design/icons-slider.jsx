import React, { useState, useEffect } from 'react';

const IconSlider = ({ logos = [], speed = 3000, direction = 'left' }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);


  const logosData = [
    { src: '/assets/images/courses/product-design/logos/ipro.png', alt: 'Company 1' },
    { src: '/assets/images/courses/product-design/logos/acad.avif', alt: 'Company 2' },
    { src: '/assets/images/courses/product-design/logos/ffus.avif', alt: 'Company 3' },
    { src: '/assets/images/courses/product-design/logos/inas.avif', alt: 'Company 4' },
    { src: '/assets/images/courses/product-design/logos/itlr.avif', alt: 'Company 5' },
    { src: '/assets/images/courses/product-design/logos/3max.avif', alt: 'Company 7' },
    { src: '/assets/images/courses/product-design/logos/vplm.avif', alt: 'Company 8' },
    { src: '/assets/images/courses/product-design/logos/ipro.png', alt: 'Company 1' },
    { src: '/assets/images/courses/product-design/logos/acad.avif', alt: 'Company 2' },
    { src: '/assets/images/courses/product-design/logos/ffus.avif', alt: 'Company 3' },
    { src: '/assets/images/courses/product-design/logos/inas.avif', alt: 'Company 4' },
    { src: '/assets/images/courses/product-design/logos/itlr.avif', alt: 'Company 5' },
    { src: '/assets/images/courses/product-design/logos/3max.avif', alt: 'Company 7' },
    { src: '/assets/images/courses/product-design/logos/vplm.avif', alt: 'Company 8' },
  ];
    


  // Debug: Log props
  console.log('IconSlider props:', { logos, speed, direction });

  useEffect(() => {
    if (!isPaused && logosData && logosData.length > 0) {
      const interval = setInterval(() => {
        setCurrentPosition((prev) => {
          const slideWidth = 100 / logosData.length;
          const maxPosition = -(100 - slideWidth);
          
          if (direction === 'left') {
            return prev <= maxPosition ? 0 : prev - slideWidth;
          } else {
            return prev >= 0 ? maxPosition : prev + slideWidth;
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
          {logosData.map((logo, index) => (
            <div key={index} className="icon-slide">
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
        onClick={() => {
          const slideWidth = 100 / logosData.length;
          setCurrentPosition((prev) => Math.min(prev + slideWidth, 0));
        }}
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button 
        className="slider-control next"
        onClick={() => {
          const slideWidth = 100 / logosData.length;
          const maxPosition = -(100 - slideWidth);
          setCurrentPosition((prev) => Math.max(prev - slideWidth, maxPosition));
        }}
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </div>
  );
};

export default IconSlider;