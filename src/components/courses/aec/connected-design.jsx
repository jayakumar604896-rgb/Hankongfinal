import React from "react";
import aecImage from "/assets/images/courses/connectedbg.svg"; // adjust path if needed

function ConnectedDesign() {
  return (
    <section className="py-16 lg:px-0 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        
        {/* Left Content */}
        <div className="text-center lg:text-left col-span-2">
          
          <h1 className="text-4xl lg:text-4xl font-bold leading-tight mb-6 text-[#045859]">
            Connected design solutions for the <span className="bg-gradient-to-r from-[#045859] to-[#09BDBF] inline-block text-transparent bg-clip-text">AEC Industry</span>
          </h1>

          <p className="text-md"><span className="font-bold block">The Autodesk Architecture, Engineering & Construction Collection</span> gives architecture teams, designers, engineers, and construction professionals the tools and integrated workflows they need to create with ease, explore what’s possible, and build with confidence.</p>

          <p className="text-md mt-4"><span className="font-bold block">Discover the toolkit that expands your skill set.</span> Top design products plus additional products for analysis and simulation, visualization, reality capture, detailing, and automation.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            {/* <button className="bg-gradient-to-r from-teal-400 to-green-400 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
              Download Guide PDF
            </button>

            <button className="bg-lime-400 text-black px-8 py-3 rounded-full font-medium hover:bg-lime-300 transition">
              Try Include Software
            </button> */}

          </div>
        </div>

        {/* Right Image */}
        <div className="w-80 flex justify-center col-span-1">
          <img
            src={aecImage}
            alt="AEC Industry Illustration"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default ConnectedDesign;