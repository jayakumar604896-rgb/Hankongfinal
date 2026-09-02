import React from "react";

const AutoCADAdvantage = () => {
  return (
    <section className="autocad-advantage py-12 lg:py-20" id="nextsection">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          Why AutoCAD Wins the Clear Advantage
        </h2>

        <p className="text-base lg:text-md text-gray-700 mb-4 lg:mb-4 leading-relaxed">
          <strong>AutoCAD</strong> is more than just CAD software—it's the
          industry standard. Unmatched capabilities, proven reliability, and
          the power to stay ahead.
        </p>

        <p className="text-base lg:text-md text-gray-700 mb-4 lg:mb-4 leading-relaxed">
          For over four decades, AutoCAD has set the benchmark for
          computer-aided design, earning the trust of millions of architects,
          engineers, designers, and manufacturers worldwide. Its unmatched
          combination of precision, reliability, interoperability, and
          continuous innovation makes it the CAD platform against which others
          are measured.
        </p>

        <p className="text-base lg:text-md text-gray-700 mb-4 lg:mb-4 leading-relaxed">
          From the industry-standard DWG file format and specialized toolsets
          to AI-powered productivity features and seamless desktop, web, and
          mobile workflows, AutoCAD delivers the flexibility and performance
          professionals need to tackle projects of any scale.
        </p>

        <p className="text-base lg:text-md text-gray-700 mb-6 lg:mb-8 leading-relaxed">
          <strong>Choose the CAD solution that defines the standard.</strong>
        </p>

        {/* <a
          href="https://autocad.datechsolutions.asia/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#CBDB2A] text-black px-6 py-3 rounded-[20px_0px_20px_0px] font-semibold
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-xl hover:-translate-y-1 text-sm lg:text-base"
        >
          Know More →
        </a> */}
        </div>

        <div>
          <img className="w-full shadow-2xl object-cover h-[550px] rounded-lg" src="/assets/images/courses/autocad/close-up-woman-looking-plans.webp" alt="AutoCAD Advantage" />
        </div>


      </div>
    </section>
  );
};

export default AutoCADAdvantage;