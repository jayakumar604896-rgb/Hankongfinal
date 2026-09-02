import React from "react";

const ratings = [
  {
    id: 1,
    img: "/assets/images/courses/autocad/capterra.png",
    alt: "Capterra Rating",
  },
  {
    id: 2,
    img: "/assets/images/courses/autocad/getapp-badge.png",
    alt: "GetApp Badge",
  },
  {
    id: 3,
    img: "/assets/images/courses/autocad/software-advice.png",
    alt: "Software Advice",
  },
  {
    id: 4,
    img: "/assets/images/courses/autocad/getapp-reviews.png",
    alt: "GetApp Reviews",
  },
];

const RatingsSection = () => {
  return (
    <section className="shadow-lg bg-[#08BED5] border-2 border-t border-b border-gray-200 pt-10">
      <div className="lg:max-w-7xl mx-auto text-center lg:px-0 px-5 pb-10">
        
        {/* Title */}
        <h2 className="text-white text-2xl md:text-4xl font-bold">
          AutoCAD user ratings and reviews
        </h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 grid-cols-2 justify-center lg:gap-6 gap-5 mt-5">
          {ratings.map((item) => (
            <div
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="lg:w-[90%] w-[95%] m-auto rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;