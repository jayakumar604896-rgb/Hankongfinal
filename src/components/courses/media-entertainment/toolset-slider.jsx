import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const tools = [
  {
    title: "Architecture Toolset",
    desc: "Boost architectural design and drafting productivity by up to up to 61% with time-saving features and task automation.",
    img: "/assets/images/courses/autocad/toolsets/architecture-toolset.jpg",
    url: "https://help.autodesk.com/view/ARCHDESK/2026/ENU/?guid=GUID-6499B499-1DBF-4735-9992-3253D42A5083"
  },
  {
    title: "Mechanical toolset",
    desc: "Increase productivity by up to 55% with industry-specific tools for mechanical engineering, including 700,000+ intelligent parts and features.",
    img: "/assets/images/courses/autocad/toolsets/mechanical-toolset.jpg",
    url: "https://help.autodesk.com/view/AMECH_PP/2026/ENU/?guid=GUID-2A0D2882-4D7C-473A-B5FA-4675DBD3E895"
  },
  {
    title: "Map 3D toolset",
    desc: "model-based geographic information system (GIS) mapping software provides access to CAD and GIS data to support planning, design, and management.",
    img: "/assets/images/courses/autocad/toolsets/map-3d-toolset.jpg",
    url: "https://help.autodesk.com/view/MAP/2026/ENU/?guid=GUID-13199627-583F-4D1F-9E4F-58C6C92DC69B"
  },
  {
    title: "MEP toolset",
    desc: "HVAC and building systems are made easy with an industry-specific toolset for MEP that increases productivity by up to 85%.",
    img: "/assets/images/courses/autocad/toolsets/mep-toolset.jpg",
    url: "https://help.autodesk.com/view/BLDSYS/2026/ENU/?guid=GUID-81D983B1-A719-4007-8A22-E26BE5A9C891"
  },
  {
    title: "Electrical toolset",
    desc: "Boost productivity by up to 95% with electrical design features that help you create, modify, and document electrical controls systems.",
    img: "/assets/images/courses/autocad/toolsets/electrical-toolset.jpg",
    url: "https://help.autodesk.com/view/ACAD_E/2026/ENU/?guid=GUID-E35D7660-5257-42BE-9372-29167818D157"
  },
  {
    title: "Plant 3D toolset",
    desc: "Create and edit piping and instrumentation diagrams (P&IDs) and 3D models, and extract piping orthographies and isometrics with an industry-specific toolset for plant design.",
    img: "/assets/images/courses/autocad/toolsets/plant-3d-toolset.jpg",
    url: "https://help.autodesk.com/view/PLNT3D/2026/ENU/?guid=GUID-A352F786-E4E9-4177-9BCA-9A187225947F&_gl=1*1xzxy1j*FPAU*MTc2MzkwODk5MC4xNzYyMTg0MDgz*_ga_NZSJ72N6RX*czE3NjY5MjYxMDAkbzEkZzEkdDE3NjY5MjY0ODQkajM3JGwwJGgw"
  },
  {
    title: "Raster Design toolset",
    desc: "HVAC and building systems are made easy with an industry-specific toolset for MEP that increases productivity by up to 85%.",
    img: "/assets/images/courses/autocad/toolsets/raster-design-toolset.jpg",
    url: "https://help.autodesk.com/view/BLDSYS/2026/ENU/?guid=GUID-81D983B1-A719-4007-8A22-E26BE5A9C891"
  }

];

const ToolsetSlider = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center relative">

        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          AutoCAD designed for your industry (Toolsets)
        </h2>

        <p className="mb-6 lg:w-[70%] m-auto">Power your designs, workflow, and productivity with purpose-built AutoCAD toolsets for the tasks you perform the most. All seven are included with every AutoCAD subscription.</p>

        {/* ✅ Custom Arrows */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border border-gray-200 shadow-lg p-2 w-10 h-10 rounded-full"
        >
          <ChevronLeft/>
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 border border-gray-200 shadow-lg p-2 w-10 h-10 rounded-full"
        >
          <ChevronRight/>
        </button>

        {/* Slider */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                
                <img
                  src={tool.img}
                  alt={tool.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 text-left">
                  <h3 className="font-semibold mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-600">{tool.desc}</p>
                  <a className="text-blue-600 text-sm mt-2 inline-block" href={tool.url}>
                    See more features
                  </a>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ToolsetSlider;