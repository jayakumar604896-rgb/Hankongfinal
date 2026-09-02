import React, { useState } from "react";

const PDMTabsStatic = () => {
  const [activeTab, setActiveTab] = useState("lt");

  // Helper to scroll to content on mobile after tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const contentEl = document.getElementById("pdmc-tab-content");
    if (contentEl && window.innerWidth < 768) {
      setTimeout(() => {
        contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section className="bg-black py-12 sm:py-16 px-4 text-white" id="meetcollection">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          Meet the PDM Collection
        </h2>

        {/* Tabs - Horizontal scroll on mobile, wrap on desktop */}
        <div className="relative mb-8 md:mb-10">
          <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent -mx-2 px-2">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 sm:gap-3 min-w-max md:min-w-0">
              <button
                onClick={() => handleTabChange("lt")}
                className={`px-4 sm:px-5 py-2 rounded-full lg:text-md text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeTab === "lt"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                For Design and Engineering
              </button>

              <button
                onClick={() => handleTabChange("cad")}
                className={`px-4 sm:px-5 py-2 rounded-full lg:text-md text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeTab === "cad"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                For Digital Factory
              </button>

              <button
                onClick={() => handleTabChange("toolset")}
                className={`px-4 sm:px-5 py-2 rounded-full lg:text-md text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeTab === "toolset"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                For Manufacturing
              </button>
            </div>
          </div>
          {/* Gradient fade indicators for scroll hint on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-black to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-l from-black to-transparent pointer-events-none md:hidden"></div>
        </div>

        {/* Content Box */}
        <div
          id="pdmc-tab-content"
          className="bg-gray-200 text-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl"
        >
          {/* ========== TAB 1: For Design and Engineering ========== */}
          {activeTab === "lt" && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* LEFT SIDE */}
              <div className="flex-1">
                <div className="mb-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                    Find elegant solutions to your most interesting problems
                  </h2>
                </div>

                <p className="mb-4 text-sm sm:text-base leading-relaxed">
                  The race to bring successful products to market is ripe with
                  challenges—and opportunities. Because where others see roadblocks,
                  you see complex, delightful, impossible problems. Little mysteries
                  to solve. Puzzles to unlock. New paths to efficiency.
                </p>

                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                  <video
                    controls
                    width="100%"
                    height="225"
                    className="mx-auto rounded-lg mt-5"
                    poster="/assets/videos/pdme-design-engineering.jpg"
                  >
                    <source
                      src="/assets/videos/pdme-design-engineeering.mp4"
                      type="video/mp4"
                  />
                  </video>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex-1">
                <h3 className="font-semibold mb-4 text-base sm:text-lg">
                  How designers and engineers use the Product Design & Manufacturing
                  Collection
                </h3>

                <div className="space-y-10 mt-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">🛠️</div>
                    <div>
                      <p className="font-medium">Create complete models of your product designs</p>
                      <p className="text-gray-600 mt-1">
                        Model your products more intuitively with powerful parametric
                        3D design capabilities and 2D drafting toolsets.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">📘</div>
                    <div>
                      <p className="font-medium">
                        Engineer and optimize your designs earlier
                      </p>
                      <p className="text-gray-600 mt-1">
                        Gain a complete understanding of your product performance and
                        optimize your designs before they go to manufacturing.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">👥</div>
                    <div>
                      <p className="font-medium">
                        Communicate your designs more effectively
                      </p>
                      <p className="text-gray-600 mt-1">
                        Prepare documentation for manufacturing and create
                        high-fidelity visuals for design reviews and marketing
                        collateral.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>

                {/* <div className="mt-6 space-y-3 text-sm sm:text-base">
                  <a
                    href="https://www.autodesk.com/sg/industry/manufacturing/design-and-engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
                  >
                    → Learn more Design & Engineering solutions
                  </a>
                  <a
                    href="https://www.autodesk.com/asean/collections/product-design-manufacturing/included-software#included-software-panel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → See all included software
                  </a>
                  <a
                    href="https://www.autodesk.com/learn/catalog/product/Inventor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Quick Start Guide
                  </a>
                  <a
                    href="https://www.datechsolution.com/pdmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Talk with our expert
                  </a>
                </div> */}
              </div>
            </div>
          )}

          {/* ========== TAB 2: For Digital Factory ========== */}
          {activeTab === "cad" && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* LEFT SIDE */}
              <div className="flex-1">
                <div className="mb-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                    Maximize efficiency throughout your factory's lifecycle
                  </h2>
                </div>

                <p className="mb-4 text-sm sm:text-base leading-relaxed">
                  From AI to automation to data-driven insights, today's
                  manufacturing tools and processes are more powerful than ever.
                  Shaped by digital transformation, organizations are embracing the
                  digital factory to connect teams throughout every phase of the
                  factory lifecycle. Instead of siloed workflows, you get efficient
                  collaboration. Instead of data loss between departments, you
                  unlock better, more powerful insights.
                </p>

                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                  <video
                    controls
                    width="100%"
                    height="225"
                    className="mx-auto rounded-lg mt-5"
                    poster="/assets/videos/pdme-digital-factory.jpg"
                  >
                    <source
                      src="/assets/videos/pdme-digital-factory.mp4"
                      type="video/mp4"
                  />
                  </video>
                </div>

                {/* <div className="mt-6 space-y-3 text-sm sm:text-base">
                  <a
                    href="https://www.autodesk.com/asean/solutions/digital-factory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
                  >
                    → Learn more about Digital Factory solutions
                  </a>
                  <a
                    href="https://www.autodesk.com/asean/collections/product-design-manufacturing/included-software#included-software-panel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → See all included software
                  </a>
                  <a
                    href="https://www.autodesk.com/learn/catalog/product/Factory%20Design%20Utilities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Quick Start Guide
                  </a>
                  <a
                    href="https://www.datechsolution.com/pdmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Talk with our expert
                  </a>
                </div> */}
              </div>

              {/* RIGHT SIDE */}
              <div className="flex-1">
                <h3 className="font-semibold mb-4 text-base sm:text-lg">
                  How production engineers use the Product Design & Manufacturing
                  Collection
                </h3>

                <div className="space-y-10 text-sm sm:text-base mt-5">
                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">🛠️</div>
                    <div>
                      <p className="font-medium">Prepare designs for production</p>
                      <p className="text-gray-600 mt-1">
                        Conceptualize production line layouts using familiar 2D
                        workflows that can be automatically converted into detailed
                        3D models, helping inform critical design decisions.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">📘</div>
                    <div>
                      <p className="font-medium">
                        Coordinate all phases of the factory lifecycle
                      </p>
                      <p className="text-gray-600 mt-1">
                        Plan, install, and manage your entire production process with
                        integrated factory layout and installation sequencing tools.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">👥</div>
                    <div>
                      <p className="font-medium">
                        Simulate processes for optimal throughput
                      </p>
                      <p className="text-gray-600 mt-1">
                        Optimize your factory throughput as you gain results for
                        machine utilization, transportation cost, and power
                        consumption.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========== TAB 3: For Manufacturing ========== */}
          {activeTab === "toolset" && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* LEFT SIDE */}
              <div className="flex-1">
                <div className="mb-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                    See endless opportunities for continuous improvement
                  </h2>
                </div>

                <p className="mb-4 text-sm sm:text-base leading-relaxed">
                  The world of manufacturing is changing rapidly. From a world of
                  silos to one of collaboration across disciplines. From a physical
                  world to one built on data, virtual reality (VR), and digital
                  twins. From a world of lumbering assembly lines to one of agile,
                  smart factories. It's a world that will require new ways of
                  planning. New ways of production. New ways of operating.
                </p>

                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                  <video
                    controls
                    width="100%"
                    height="225"
                    className="mx-auto rounded-lg mt-5"
                    poster="/assets/videos/pdme-manufacture.jpg"
                  >
                    <source
                      src="/assets/videos/pdme-manufacture.mp4"
                      type="video/mp4"
                  />
                  </video>
                </div>

                {/* <div className="mt-6 space-y-3 text-sm sm:text-base">
                  <a
                    href="https://www.autodesk.com/industry/manufacturing/manufacturing-production"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
                  >
                    → Learn more about Manufacturing solutions
                  </a>
                  <a
                    href="https://www.autodesk.com/asean/collections/product-design-manufacturing/included-software#included-software-panel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → See all included software
                  </a>
                  <a
                    href="https://www.autodesk.com/learn/catalog/inventor/industry%7Cmicrolearning/820b3e88-61af-4496-bd34-1a98242e4d57%7Ctutorials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Quick Start Guide
                  </a>
                  <a
                    href="https://www.datechsolution.com/pdmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Talk with our expert
                  </a>
                </div> */}
              </div>

              {/* RIGHT SIDE */}
              <div className="flex-1">
                <h3 className="font-semibold mb-4 text-base sm:text-lg">
                  How manufacturing engineers use the Product Design & Manufacturing
                  Collection
                </h3>

                <div className="space-y-10 mt-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">🛠️</div>
                    <div>
                      <p className="font-medium">Accelerate your toolpath strategy</p>
                      <p className="text-gray-600 mt-1">
                        Streamline the transition from design to manufacturing with
                        tools for generating multi-axis toolpath strategies.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">📘</div>
                    <div>
                      <p className="font-medium">Simplify your machining workflow</p>
                      <p className="text-gray-600 mt-1">
                        Combined milling and turning processes generate NC code for
                        multi-tasking hardware.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-xl sm:text-2xl flex-shrink-0">👥</div>
                    <div>
                      <p className="font-medium">
                        Optimize material yield with automated nesting tools
                      </p>
                      <p className="text-gray-600 mt-1">
                        Generate multiple sheet nests with multiple material and
                        packaging options to optimize yield from flat raw material.
                      </p>
                      {/* <p className="mt-2">
                        <a
                          href="https://www.datechsolution.com/pdmc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Watch Video →
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PDMTabsStatic;