import InteractiveStars from '../common/InteractiveStars'
import {
  ArrowRight,
  Settings,
  Lightbulb,
  BarChart3,
  Box,
  Sparkles,
  Cpu,
  Network,
} from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[620px] lg:min-h-[680px] overflow-hidden bg-[#117b74]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <InteractiveStars
          speed={0.99}
          starCount={300}
          connectionDistance={100}
          mouseConnectionDistance={120}
          className="absolute inset-0"
        />

        {/* Soft background glow */}
        <div className="absolute top-1/2 right-[15%] h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[100px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid min-h-[620px] grid-cols-1 items-center lg:min-h-[680px] lg:grid-cols-12 lg:gap-4">

          {/* ================= LEFT CONTENT ================= */}
          <div className="z-20 pt-16 text-center lg:col-span-6 lg:pt-0 lg:text-left xl:col-span-6">

            {/* Heading */}
            <h1
              className="
                mb-4 lg:mt-0 mt-8
                text-4xl font-extrabold tracking-tight
                sm:text-5xl
                md:text-6xl
                lg:text-[48px]
                xl:text-[60px]
                2xl:text-[66px]
                animate-[fadeDown_.8s_ease-out]
              "
            >
              <span className="text-[#CBDB2A]">
                DATECH
              </span>

              <span className="text-white">
                {' '}SOLUTIONS
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto mb-7 max-w-[680px]
                text-lg leading-relaxed text-white
                sm:text-xl
                md:text-2xl
                lg:mx-0
                lg:text-[25px]
                xl:text-[28px]
                xl:leading-[1.55]
                animate-[fadeDown_1s_ease-out]
              "
            >
              A Global Technology Distributor and
              <span className="block">
                Solution Aggregator
              </span>
            </p>

            {/* Logo */}
            <div
              className="
                mb-7
                flex justify-center
                lg:justify-start
                animate-[fadeDown_1.2s_ease-out]
              "
            >
              <img
                src="/assets/images/td-tech.svg"
                alt="Tech Data Datech"
                className="
                  w-[190px]
                  sm:w-[230px]
                  md:w-[260px]
                  lg:w-[280px]
                  xl:w-[310px]
                "
              />
            </div>

            {/* CTA */}
            <div
              className="
                flex justify-center lg:justify-start
                animate-[fadeDown_1.4s_ease-out]
              "
            >
              <a
                href="#about"
                className="
                  group
                  flex w-[190px]
                  items-center justify-center gap-3
                  rounded-[20px_0_20px_0]
                  bg-gradient-to-r
                  from-[#B5C32A] to-[#E8FF04]
                  px-7 py-3.5
                  text-base font-medium
                  text-gray-900
                  shadow-lg
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_10px_40px_rgba(232,255,4,0.35)]
                "
              >
                Get Started

                <ArrowRight
                  className="
                    h-5 w-5
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              relative
              mt-10
              flex min-h-[420px]
              items-center justify-center
              lg:col-span-6
              lg:mt-0
              xl:col-span-6
            "
          >

            {/* Large glowing circle */}
            <div
              className="
                absolute
                right-[5%]
                top-1/2
                h-[350px]
                w-[350px]
                -translate-y-1/2
                rounded-full
                border border-cyan-300/20
                bg-cyan-300/5
                blur-[1px]
                sm:h-[430px]
                sm:w-[430px]
                lg:h-[500px]
                lg:w-[500px]
                animate-pulse
              "
            />

            {/* Rotating ring */}
            <div
              className="
                absolute
                right-[5%]
                top-1/2
                h-[350px]
                w-[350px]
                -translate-y-1/2
                rounded-full
                border border-dashed
                border-cyan-200/30
                sm:h-[430px]
                sm:w-[430px]
                lg:h-[520px]
                lg:w-[520px]
                animate-[spin_25s_linear_infinite]
              "
            />

            {/* ================= FLOATING ICON 1 ================= */}
            <div
              className="
                absolute left-[2%] top-[15%]
                z-20
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                border border-white/20
                bg-white/10
                text-[#CBDB2A]
                shadow-[0_0_30px_rgba(203,219,42,0.25)]
                backdrop-blur-md
                sm:h-16 sm:w-16
                lg:left-[4%]
                animate-bounce
              "
            >
              <Settings
                className="h-7 w-7 animate-[spin_8s_linear_infinite]"
              />
            </div>

            {/* ================= FLOATING ICON 2 ================= */}
            <div
              className="
                absolute right-[5%] top-[7%]
                z-20
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                border border-white/20
                bg-white/10
                text-yellow-300
                shadow-[0_0_30px_rgba(250,204,21,0.3)]
                backdrop-blur-md
                sm:h-16 sm:w-16
                animate-[float_4s_ease-in-out_infinite]
              "
            >
              <Lightbulb className="h-8 w-8" />
            </div>

            {/* ================= FLOATING ICON 3 ================= */}
            <div
              className="
                absolute bottom-[15%] left-[3%]
                z-20
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                border border-white/20
                bg-white/10
                text-cyan-300
                shadow-[0_0_30px_rgba(34,211,238,0.3)]
                backdrop-blur-md
                sm:h-16 sm:w-16
                animate-[float_5s_ease-in-out_infinite_reverse]
              "
            >
              <Box className="h-8 w-8" />
            </div>

            {/* ================= FLOATING ICON 4 ================= */}
            <div
              className="
                absolute
                bottom-[10%]
                right-[2%]
                z-20
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                border border-white/20
                bg-white/10
                text-[#CBDB2A]
                shadow-[0_0_30px_rgba(203,219,42,0.3)]
                backdrop-blur-md
                sm:h-16 sm:w-16
                animate-pulse
              "
            >
              <BarChart3 className="h-8 w-8" />
            </div>

            {/* ================= SMALL ICONS ================= */}

            <div
              className="
                absolute left-[22%] top-[6%]
                text-cyan-200/70
                animate-[float_6s_ease-in-out_infinite]
              "
            >
              <Sparkles className="h-7 w-7" />
            </div>

            <div
              className="
                absolute right-[23%] top-[27%]
                text-white/60
                animate-[float_5s_ease-in-out_infinite_reverse]
              "
            >
              <Cpu className="h-6 w-6" />
            </div>

            <div
              className="
                absolute bottom-[25%] right-[20%]
                text-cyan-200/70
                animate-pulse
              "
            >
              <Network className="h-7 w-7" />
            </div>


            {/* ================= MAIN IMAGE ================= */}
            <div
              className="
                relative z-10
                w-full
                max-w-[680px]
                translate-y-2
                transition-transform duration-700
                hover:scale-[1.02]
              "
            >
              <img
                src="/assets/images/grlsimg.webp"
                alt="Digital technology solutions"
                className="
                  h-auto w-full
                  object-cover
                  drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)]
                "
              />
            </div>


            {/* ================= GLOW ORBIT ================= */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[12%]
                left-[15%]
                right-[10%]
                h-[80px]
                rounded-full
                bg-cyan-300/20
                blur-[35px]
                animate-pulse
              "
            />

          </div>
        </div>
      </div>


      {/* Bottom fade */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          h-20
          bg-gradient-to-t
          from-[#117b74]
          to-transparent
        "
      />

      {/* Custom animation */}
      <style jsx>{`
        @keyframes fadeDown {
          0% {
            opacity: 0;
            transform: translateY(-25px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(4deg);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero