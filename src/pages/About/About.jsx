import React, { useState, useEffect, useRef } from "react";
import aboutBg from "/assets/images/about-bg.jpg"; // change path based on your project

const stats = [
  { number: "#64", label: "On FORTUNE 100 List" },
  { number: "100+", label: "Countries Served" },
  { number: "200K+", label: "Products & Solutions" },
  { number: "23K", label: "Skilled Co-Worker" },
];

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return { count, ref };
}

function CountingNumber({ value, duration = 2000 }) {
  // Extract numeric value and suffixes
  const match = value.match(/([#+]*)([\d.]+)([KkMmBb+]*)(.*)/);
  if (!match) return value;

  const [, prefix, numStr, suffix, extra] = match;
  let target = parseFloat(numStr);

  // Handle K, M, B suffixes
  if (suffix.toLowerCase() === 'k') target *= 1000;
  if (suffix.toLowerCase() === 'm') target *= 1000000;
  if (suffix.toLowerCase() === 'b') target *= 1000000000;

  const { count, ref } = useCountUp(target, duration);

  // Format the count back
  let displayCount = count;
  let displaySuffix = suffix;

  if (suffix.toLowerCase() === 'k' && count >= 1000) {
    displayCount = (count / 1000).toFixed(0);
    displaySuffix = 'K';
  } else if (suffix.toLowerCase() === 'm' && count >= 1000000) {
    displayCount = (count / 1000000).toFixed(0);
    displaySuffix = 'M';
  } else if (suffix.toLowerCase() === 'b' && count >= 1000000000) {
    displayCount = (count / 1000000000).toFixed(0);
    displaySuffix = 'B';
  }

  return (
    <span ref={ref}>
      {prefix}{displayCount}{displaySuffix}{extra}
    </span>
  );
}

function AboutSection() {
  return (

    <>

    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white lg:py-20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Learn more about our company and mission
            </p>
          </div>
        </div>
      </div>
      </div>


    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="text-white">
          <h2 className="lg:text-4xl text-3xl font-bold bg-gradient-to-r from-[#049799] to-[#09BDBF] inline-block text-transparent bg-clip-text mb-5">
            About US
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
           Datech is a specialized solution business providing the highest levels of Value-added services and support to the Global Autodesk partners (NAMER, Europe, & APAC regions), and Unity partners (APAC region), while bringing additional vendors – many of which will provide complementary design software solutions – into its portfolio.
          </p>

          <p className="text-gray-300 leading-relaxed">
            The Datech team will continue to support partners on their digital transformation journey, providing focused and strategic business development, pre-sales support, and technical enablement, underpinned by the world-class digital distribution systems and automated processes of TD SYNNEX.
          </p>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 lg:gap-10 gap-5 lg:mt-0 mt-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 
              rounded-[40px] rounded-tr-none rounded-bl-none 
              p-8 text-center text-white"
            >
              <h3 className="lg:text-4xl text-3xl font-bold text-[#CBDB2A]">
                <CountingNumber value={item.number} />
              </h3>
              <p className="mt-2 text-gray-300 font-light lg:text-md text-sm">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}

export default AboutSection;