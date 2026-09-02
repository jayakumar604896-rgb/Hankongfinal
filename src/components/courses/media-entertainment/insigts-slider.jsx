import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    title: "Dashboard",
    desc: "My Insights is information that's shown to you based on your usage of AutoCAD. ​The content is designed to be informative and actionable.​​​​",
    img: "/images/dashboard.jpg",
  },
  {
    title: "Macro Advisor",
    desc: "Macro insights are suggested command macros intended to help you be more productive. AutoCAD generates macro insights based on your unique command usage.​​​",
    img: "/images/macro.jpg",
  },
  {
    title: "Markup Import & Assist",
    desc: "Markup Import and Markup Assist use machine learning to identify markups in a PDF, JPG, or PNG.",
    img: "/images/markup.jpg",
  },
  {
    title: "Placement",
    desc: "The block placement engine learns how the existing block instances are placed in your drawing to infer the next placement of the same block.",
    img: "/images/placement.jpg",
  },
  {
    title: "Replace",
    desc: "Replace specified block references by selecting from a palette of suggested similar blocks.​​​",
    img: "/images/replace.jpg",
  },
  {
    title: "Search and convert",
    desc: "Find objects and convert them into reusable blocks.",
    img: "/images/search.jpg",
  },
  {
    title: "Object detection tech preview",
    desc: "Automatically detect and clean up objects in drawings.",
    img: "/images/object.jpg",
  },
  {
    title: "Autodesk Assistant",
    desc: "AI-powered assistant for AutoCAD help and support.",
    img: "/images/assistant.jpg",
  },
];

const AIInsightsSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center relative">

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          AutoCAD AI Insights and Automations
        </h2>

        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Autodesk AI augments creative exploration, automates repetitive work, and provides predictive insights.
        </p>

        {/* Custom Arrows */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-2/3 -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-lg p-2 w-10 h-10 rounded-full hidden md:flex"
        >
          <ChevronLeft/>
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-2/3 -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-lg p-2 w-10 h-10 rounded-full hidden md:flex"
        >
          <ChevronRight/>
        </button>

        {/* Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, // ✅ Desktop 4 cards
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />

                {/* Content */}
                <div className="p-4 text-left flex flex-col flex-grow">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default AIInsightsSlider;