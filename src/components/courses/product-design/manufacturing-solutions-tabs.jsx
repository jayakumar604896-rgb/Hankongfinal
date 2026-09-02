import React, { useState } from "react";

const ManufacturingSolutions = () => {
  const [activeTab, setActiveTab] = useState("dm");

  // Helper to scroll to content on mobile after tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const contentEl = document.getElementById("manufacturing-tab-content");
    if (contentEl && window.innerWidth < 1024) {
      setTimeout(() => {
        contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section className="bg-black py-12 sm:py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          Design and manufacturing solutions for everyone
        </h2>

        {/* Tabs - Horizontal scroll on mobile, wrap on desktop */}
        <div className="relative mb-8 md:mb-10">
          <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent -mx-2 px-2">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 sm:gap-3 min-w-max md:min-w-0">
              <button
                onClick={() => handleTabChange("dm")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeTab === "dm"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Design & Manufacturing Team
              </button>

              <button
                onClick={() => handleTabChange("mach")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeTab === "mach"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Machinists
              </button>

              <button
                onClick={() => handleTabChange("ee")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeTab === "ee"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Electronics Engineers
              </button>

              <button
                onClick={() => handleTabChange("id")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeTab === "id"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Industrial Designers
              </button>

              <button
                onClick={() => handleTabChange("me")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeTab === "me"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Mechanical Engineers
              </button>
            </div>
          </div>
          {/* Gradient fade indicators for scroll hint on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-black to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-l from-black to-transparent pointer-events-none md:hidden"></div>
        </div>

        {/* Content Box */}
        <div
          id="manufacturing-tab-content"
          className="bg-gray-200 text-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl"
        >
          {/* ========== TAB 1: Design & Manufacturing Team ========== */}
          {activeTab === "dm" && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* LEFT SIDE - Image */}
              <div className="lg:w-1/3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  Design and manufacturing team capabilities and workflows
                </h2>
                <img
                  src="/assets/images/courses/product-design/design-and-manufacturing.jpg"
                  alt="Design and manufacturing team"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              {/* MIDDLE SIDE - Features */}
              <div className="lg:w-1/2">
                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Unified functions</p>
                      <p className="text-gray-600 mt-1">
                        Working in disconnected product development tools can cause
                        errors and delays. Enable seamless teamwork in the same
                        workspace, without the need for multiple tools.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Data management</p>
                      <p className="text-gray-600 mt-1">
                        Storing files locally in different formats can cause version
                        control, collaboration, and security issues. Bring your teams
                        onto one secure, cloud workspace for accessible, current,
                        and secure data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Access and control</p>
                      <p className="text-gray-600 mt-1">
                        Managers often struggle to get project updates in a timely
                        manner. Fusion provides up-to-date progress info, controlled
                        access to audit trails of changes, comments, and history.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Automated drawings</p>
                      <p className="text-gray-600 mt-1">
                        Streamline design documentation to enable quick and precise
                        2D drawings from 3D models, enhancing efficiency and
                        accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Links */}
              {/* <div className="lg:w-1/3">
                <div className="mt-6 lg:mt-0 space-y-3 text-sm sm:text-base">
                  <a
                    href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Fusion-360.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
                  >
                    → See system requirements
                  </a>
                  <a
                    href="https://www.autodesk.com/asean/products/fusion-360/trial-intake-flow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Try Autodesk Fusion
                  </a>
                  <a
                    href="https://www.autodesk.com/learn/ondemand/curated/fusion-quick-start-guide"
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
                </div>
              </div> */}
            </div>
          )}

          {/* ========== TAB 2: Machinists ========== */}
          {activeTab === "mach" && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <div className="lg:w-1/3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  Machining capabilities and workflows
                </h2>
                <img
                  src="/assets/images/courses/product-design/machining-capabilities.jpg"
                  alt="Machining capabilities"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              <div className="lg:w-1/2">
                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Automated machining</p>
                      <p className="text-gray-600 mt-1">
                        Program complex, feature-rich components with ease using
                        intelligent whole-part strategies like steep & shallow,
                        deburr, hole recognition, and rotary.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Toolpath modifications</p>
                      <p className="text-gray-600 mt-1">
                        Speed up CAM programming with powerful modification tools
                        that can turn a good toolpath into a great one - all without
                        wasteful recalculation time.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">
                        Multi-axis simultaneous machining
                      </p>
                      <p className="text-gray-600 mt-1">
                        Achieve superior surface finish with specialized 4- and
                        5-axis toolpaths. Additional axis controls and collision
                        avoidance ensure safe, smooth machine motion.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Setup probing and inspection</p>
                      <p className="text-gray-600 mt-1">
                        Save time and money with spindle-mounted touch probes for CNC
                        machining. Measure stock material, update work offsets,
                        monitor quality, automate part setup, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="lg:w-1/3">
                <div className="mt-6 lg:mt-0 space-y-3 text-sm sm:text-base">
                  <a
                    href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Fusion-360.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
                  >
                    → See system requirements
                  </a>
                  <a
                    href="https://www.autodesk.com/asean/products/fusion-360/trial-intake-flow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Try Autodesk Fusion
                  </a>
                  <a
                    href="https://www.autodesk.com/learn/ondemand/curated/fusion-quick-start-guide"
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
                </div>
              </div> */}
            </div>
          )}

          {/* ========== TAB 3: Electronics Engineers ========== */}
          {activeTab === "ee" && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <div className="lg:w-1/3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  Electronics engineering capabilities and workflows
                </h2>
                <img
                  src="/assets/images/courses/product-design/electronics-engineering.jpg"
                  alt="Electronics engineering"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              <div className="lg:w-1/2">
                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Unified functions</p>
                      <p className="text-gray-600 mt-1">
                        Reduce engineering workload, design new components with ease,
                        and decrease the need for manual content creation with
                        comprehensive component libraries.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Synchronization</p>
                      <p className="text-gray-600 mt-1">
                        Reduce errors, enhance efficiency, and improve accuracy.
                        Synchronization between PCB and schematic in an ECAD
                        application maintains design integrity and consistency.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">
                        Live DRC and insights for design constraints
                      </p>
                      <p className="text-gray-600 mt-1">
                        Design your printed circuit boards rapidly and efficiently,
                        leveraging real-time constraint violation detection for
                        immediate alerts on component placement and trace routing
                        issues.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Unified design environment</p>
                      <p className="text-gray-600 mt-1">
                        Empower collaboration between electronic and mechanical
                        engineers in a unified design platform. Enhance accuracy and
                        efficiency by eliminating error-prone conversion steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="lg:w-1/3">
                <div className="mt-6 lg:mt-0 space-y-3 text-sm sm:text-base">
                  <a
                    href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Fusion-360.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
                  >
                    → See system requirements
                  </a>
                  <a
                    href="https://www.autodesk.com/asean/products/fusion-360/trial-intake-flow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Try Autodesk Fusion
                  </a>
                  <a
                    href="https://www.autodesk.com/learn/ondemand/curated/fusion-quick-start-guide"
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
                </div>
              </div> */}
            </div>
          )}

          {/* ========== TAB 4: Industrial Designers ========== */}
          {activeTab === "id" && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <div className="lg:w-1/3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  Industrial design capabilities and workflows
                </h2>
                <img
                  src="/assets/images/courses/product-design/industrial-design.jpg"
                  alt="Industrial design"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              <div className="lg:w-1/2">
                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Configurations</p>
                      <p className="text-gray-600 mt-1">
                        Configurations provide an intelligent way to maximize the
                        utility of parametric designs. Gain the ability to create
                        and manage multiple design variations from a single, unified
                        model.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Collaboration</p>
                      <p className="text-gray-600 mt-1">
                        Remove the silos from your traditional design process and use
                        a modern collaboration environment. Connect your teams and
                        clients, communicate in real-time, and centralize project
                        activity.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Generative design</p>
                      <p className="text-gray-600 mt-1">
                        Explore multiple manufacturing-ready outcomes that meet your
                        design specifications while reducing weight, improving
                        performance, and consolidating parts through generative
                        design.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Parametric modeling</p>
                      <p className="text-gray-600 mt-1">
                        Maximize the utility of parametric designs with
                        configurations. Create and manage multiple design variations
                        from a single, unified model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="lg:w-1/3">
                <div className="mt-6 lg:mt-0 space-y-3 text-sm sm:text-base">
                  <a
                    href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Fusion-360.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
                  >
                    → See system requirements
                  </a>
                  <a
                    href="https://www.autodesk.com/asean/products/fusion-360/trial-intake-flow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Try Autodesk Fusion
                  </a>
                  <a
                    href="https://www.autodesk.com/learn/ondemand/curated/fusion-quick-start-guide"
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
                </div>
              </div> */}
            </div>
          )}

          {/* ========== TAB 5: Mechanical Engineers ========== */}
          {activeTab === "me" && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              <div className="lg:w-1/3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  Mechanical engineering capabilities and workflows
                </h2>
                <img
                  src="/assets/images/courses/product-design/mechanical-engineering.jpg"
                  alt="Mechanical engineering"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              <div className="lg:w-1/2">
                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Versatile 3D design</p>
                      <p className="text-gray-600 mt-1">
                        Engineer products with a comprehensive set of modeling
                        tools, including 3D parametric modeling, mesh, surfacing,
                        and automated design capabilities. Ensure your products'
                        form, fit, and function with diverse analysis methods.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Cloud collaboration</p>
                      <p className="text-gray-600 mt-1">
                        Break free from traditional design silos. Embrace a modern
                        collaboration environment to connect teams and clients,
                        communicate in real-time, and centralize project activity.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Rapid simulation</p>
                      <p className="text-gray-600 mt-1">
                        Discover manufacturing-ready outcomes that meet design
                        specifications, reduce weight, improve performance, and
                        consolidate parts through generative design.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="text-green-600 font-bold text-lg flex-shrink-0">
                      ➜
                    </div>
                    <div>
                      <p className="font-medium">Integrated CAD+CAM</p>
                      <p className="text-gray-600 mt-1">
                        Effortlessly adjust dimensions and geometries with a few
                        clicks, saving time, and reducing errors. Every changes
                        reflects across the entire model for design consistency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="lg:w-1/3">
                <div className="mt-6 lg:mt-0 space-y-3 text-sm sm:text-base">
                  <a
                    href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/System-requirements-for-Autodesk-Fusion-360.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-700 transition-colors"
                  >
                    → See system requirements
                  </a>
                  <a
                    href="https://www.autodesk.com/asean/products/fusion-360/trial-intake-flow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline hover:text-gray-700 transition-colors"
                  >
                    → Try Autodesk Fusion
                  </a>
                  <a
                    href="https://www.autodesk.com/learn/ondemand/curated/fusion-quick-start-guide"
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
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSolutions;