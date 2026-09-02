import React from "react";

const SoftwareSolutions = () => {
  return (
    <section className="bg-[#e9e9e9] py-16 lg:px-0 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Unlock professional software solutions and capabilities
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-md leading-7 text-gray-800 mb-8">
              From drafting board to computer-aided design, engineers have always sought ways to make things better. Today, they have more tools—and opportunities—to do so than ever. Product design possibilities aren’t only about what can be done, but how it’s done.
            </p>

            <p className="text-md leading-7 text-gray-800 mb-10">
              Explore the toolkit that helps you solve more interesting problems. The collection includes top design software plus additional tools for planning, building, and operating complex production lines.
            </p>

            {/* Buttons */}
            {/* <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition" onClick={() => window.open('https://drive.google.com/file/d/1yhZbwcjTc_XLuUxZu5rXjSds1bNjv-Jw/view?usp=sharing', '_blank')}>
                Download Guide (PDF) ⬇
              </button>

              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition" onClick={() => window.open('https://www.autodesk.com/collections/product-design-manufacturing/included-software#included-software-panel', '_blank')}>
                Try included software
              </button>
            </div> */}
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/assets/images/courses/product-design/software-solutions.jpg"
              alt="Software Solutions"
              className="w-full rounded-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutions;