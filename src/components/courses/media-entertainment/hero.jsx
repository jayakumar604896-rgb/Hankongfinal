import { ScreenShare, Bell } from "lucide-react";
import CommonWebinar from "../common-webinar";

const AutoCADSection = () => {
  const courseId = 5; 
  const apiKey = '8a92f1d0c7e24b68a13f9c5d2e7b41a0';
  return (
    <section
      className="relative bg-cover bg-center lg:py-36 py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(7, 94, 84, 0.70), rgba(7, 94, 84, 0.70)), url('/assets/images/courses/media/mediabg.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-white">


          <span className="inline-block px-6 py-2 mb-4 text-md font-medium text-yellow-300 bg-teal-500/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg">
            Autodesk M&E Collection
          </span>

          <img src="/assets/images/courses/media/Media-Entertainment-Collection-2023-lockup-Wht-OL-ADSK-No-Year-Stacked.png" alt="Autodesk AI logo" className="w-54 mb-4" />

          <h1 className="text-4xl lg:text-4xl font-bold leading-tight mb-6">
           Design, Animate & Inspire with Autodesk <span className="bg-gradient-to-r from-[#08BED5] to-[#E8FF04] inline-block text-transparent bg-clip-text">Media & Entertainment</span>
          </h1>

          <div className="flex gap-2">
            <a href="#mecollection" className="bg-[#CBDB2A] text-black px-6 py-3 rounded-[20px_0px_20px_0px] font-semibold
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-xl hover:-translate-y-1 lg:text-md text-sm">
              Meet the Collection
            </a>

            <a href="#autodeskflow" className="bg-[#34CFC4] text-white px-6 py-3 rounded-[20px_0px_20px_0px] font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 lg:text-md text-sm">
              Autodesk Flow
            </a>


          </div>
        </div>

        {/* Right Cards */}
        <CommonWebinar courseId={courseId} />
      </div>
    </section>
  );
};

export default AutoCADSection;