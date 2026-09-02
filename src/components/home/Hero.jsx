import InteractiveStars from '../common/InteractiveStars'
import { ArrowRight } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Hero = () => {
  return (
    <div>
      <section className="relative flex items-center">
        {/* Interactive Stars Background */}
        <div className="absolute inset-0 bg-teal-700">
          <InteractiveStars
            speed={0.99}
            starCount={300}
            connectionDistance={100}
            mouseConnectionDistance={120}
            className="absolute inset-0"
          />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="col-span-1 lg:col-span-7 xl:col-span-7 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] font-bold mb-3 sm:mb-4 animate-fade-down">
                <span className="text-[#CBDB2A]">DATECH</span>
                <span className="text-white block sm:inline"> SOLUTIONS</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-white mb-4 sm:mb-6 lg:mb-8 animate-fade-down-delay-2 lg:leading-tight xl:leading-[45px] max-w-full lg:max-w-[85%] xl:max-w-[80%] mx-auto lg:mx-0">
                A Global Technology Distributor and Solution Aggregator
              </p>

              <p className="mb-6 sm:mb-8 lg:mb-10 animate-fade-down-delay-3">
                <img
                  src="/assets/images/td-tech.svg"
                  alt="Technology"
                  className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px] mx-auto lg:mx-0"
                />
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-down-delay-4 justify-center lg:justify-start">
                <a
                  href="#about"
                  className="bg-gradient-to-r from-[#B5C32A] to-[#E8FF04]
                  !text-gray-900 flex items-center justify-center gap-2
                  py-2.5 sm:py-3 px-6 sm:px-8
                  w-full sm:w-[180px] md:w-[200px]
                  text-sm sm:text-base
                  transform transition-all duration-300
                  hover:scale-105 hover:shadow-xl
                  hover:from-[#C5D33A] hover:to-[#F9FF14]
                  !rounded-[20px_0px_20px_0px]"
                >
                  Get Started
                  <ArrowRight className="transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Image/Lottie Animation */}
            <div className="col-span-1 lg:col-span-5 xl:col-span-5 mt-8 lg:mt-0">
              <div className="relative max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full mx-auto">
                <img 
                  src="/assets/images/computer-display-monitor-isolated-white-background.webp" 
                  alt="Hero" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero