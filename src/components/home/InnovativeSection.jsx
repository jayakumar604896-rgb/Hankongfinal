import heroImage from "/assets/images/innovativeimg.png";
import { Sparkles } from "lucide-react";

function InnovativeSection() {
  return (
    <section className="lg:py-20 py-10" id="about">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-[#08BED5] font-medium lg:text-md text-md mb-4 border border-[#08BED5] px-6 py-1.5 rounded-full inline-flex flex items-center gap-2">
            <Sparkles size={20}/> Innovative Digital Solutions <Sparkles size={20}/>
          </p>

          <h1 className="text-3xl lg:text-3xl font-bold leading-tight mb-4">
            We Provide Design Solutions for Diverse Industries
          </h1>

          <p className="text-gray-900 font-bold mb-5">
            We empower designers, engineers, and creators with innovative digital solutions—helping organizations adopt, connect, and scale modern design and engineering workflows.
          </p>

          <p className="text-gray-900 font-regular mb-8">
            Through connected workflows, real-time visualization, and cloud-enabled collaboration, we help teams turn concepts into outcomes—faster, clearer, and more connected.
          </p>

          {/* <button className="bg-gradient-to-r from-[#B5C32A] to-[#E8FF04] !text-gray-900 flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl !rounded-[20px_0px_20px_0px] px-8 py-2">
            Get Started
            <span className="text-xl">→</span>
          </button> */}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[600px]">
          <img
            src={heroImage}
            alt="Digital Solutions"
            className="rounded-[20px_0px_0px_0px] lg:block hidden"
          />
        </div>

      </div>
    </section>
  );
}

export default InnovativeSection;