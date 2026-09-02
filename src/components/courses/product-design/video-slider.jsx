import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const videos = [
  {
    title: "Smart Blocks",
    duration: "01:37",
    thumbnail: "/images/video1.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Smart Blocks Placement",
    duration: "00:34",
    thumbnail: "/images/video2.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Hatching Improvements",
    duration: "01:33",
    thumbnail: "/images/video3.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Selection Cycling",
    duration: "01:11",
    thumbnail: "/images/video4.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "OSNAP & Overrides",
    duration: "01:57",
    thumbnail: "/images/video5.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "OSNAP & Overrides",
    duration: "01:57",
    thumbnail: "/images/video5.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "OSNAP & Overrides",
    duration: "01:57",
    thumbnail: "/images/video5.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const VideoSlider = () => {
  const swiperRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Discover AutoCAD new tools
        </h2>

        {/* Arrows */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full"
        >
          ‹
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-white shadow-md w-8 h-8 flex items-center justify-center rounded-full"
        >
          ›
        </button>

        {/* ✅ FIXED SWIPER */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5, // ✅ stable desktop
            },
          }}
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="cursor-pointer"
                onClick={() => setActiveVideo(item.url)}
              >
                <div className="relative">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-lg w-full h-32 object-cover"
                  />

                  {/* Play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 rounded-full p-2 text-sm">
                      ▶
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="absolute bottom-1 right-1 text-xs bg-black text-white px-1 rounded">
                    {item.duration}
                  </span>
                </div>

                <p className="text-xs mt-2 text-center">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="w-full max-w-3xl relative">
              
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-8 right-0 text-white text-xl"
              >
                ✕
              </button>

              <iframe
                src={activeVideo + "?autoplay=1"}
                className="w-full h-[400px]"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default VideoSlider;