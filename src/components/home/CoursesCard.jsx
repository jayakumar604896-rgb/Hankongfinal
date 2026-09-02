import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CoursesCard() {

  const courses = [
    {
      title: "Architecture, engineering, construction, and operations",
      desc: "We support architects, engineers, and construction teams with modern, connected design workflows that improve coordination, efficiency, and decision-making. Our solutions enable real-time collaboration, data-driven design, and seamless project delivery—from early concept through construction—helping teams visualize outcomes clearly and reduce project risks.",
      image: "/assets/images/courses/card01.png",
      url: "/aec",
    },
    {
      title: "Product design and manufacturing",
      desc: "We empower design and manufacturing teams with integrated digital tools that streamline product development and improve productivity across the entire lifecycle. From concept design and engineering to production readiness, our solutions help teams work smarter, reduce rework, and deliver high-quality products through connected, data-driven processes.",
      image: "/assets/images/courses/product-design.jpg",
      url: "/product-design",
    },
    {
      title: "Media and Entertainment",
      desc: "We enable creators and studios to deliver compelling visual content through real-time, interactive, and immersive 3D workflows. Our solutions support faster content creation, real-time visualization, and flexible production pipelines—helping teams bring stories, experiences, and ideas to life across games, film, animation, and emerging digital platforms.",
      image: "/assets/images/courses/media.jpg",
      url: "/media-entertainment",
    },
  ];

  return (
    <section className="py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-[50px_0_0_50px] shadow-lg flex flex-col overflow-hidden"
            >

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[200px] sm:h-[220px] lg:h-[240px] object-cover"
              />

              <div className="p-5 lg:p-6 flex flex-col flex-grow">

                <h3 className="text-lg lg:text-[22px] font-bold text-[#045859] leading-snug h-auto lg:h-[70px]">
                  {course.title}
                </h3>

                <p className="text-sm lg:text-[15px] mt-3 text-gray-600 flex-grow">
                  {course.desc}
                </p>

                <Link
                  to={`/solutions${course.url.startsWith('/') ? course.url : '/' + course.url}`}
                  className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white flex items-center justify-center gap-3 w-full sm:w-[200px] mx-auto mt-6 py-2 rounded-[20px_0_20px_0]"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CoursesCard;