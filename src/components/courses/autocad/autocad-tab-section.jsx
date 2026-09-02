import React, { useState } from "react";
import { LucideArrowRight } from "lucide-react";


const AutoCADTabsStatic = () => {
  const [activeTab, setActiveTab] = useState("cad");

  // Helper to handle tab changes with smooth UX
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Optional: scroll to content on mobile after tab change for better UX
    const contentEl = document.getElementById("tab-content-container");
    if (contentEl && window.innerWidth < 768) {
      setTimeout(() => {
        contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <section className="bg-black py-8 sm:py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">Autodesk AutoCAD: Faster, smarter 2D and 3D drafting</h2>
        {/* TABS - Fully responsive with horizontal scroll on mobile */}
        <div className="relative mb-8">
          {/* Mobile: horizontal scroll container, Desktop: flex wrap centered */}
          <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent -mx-1 px-1">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 sm:gap-3 min-w-max md:min-w-0">
              {/* <button
                onClick={() => handleTabChange("lt")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "lt"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                AutoCAD LT
              </button> */}

              <button
                onClick={() => handleTabChange("cad")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "cad"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                AutoCAD
              </button>

              <button
                onClick={() => handleTabChange("toolset")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "toolset"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Specific Toolset+
              </button>

              <button
                onClick={() => handleTabChange("web")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "web"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                AutoCAD Web
              </button>

              {/* <button
                onClick={() => handleTabChange("docs")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "docs"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Autodesk Docs
              </button> */}

            </div>
          </div>
          {/* subtle gradient fade on edges for mobile scroll (optional) */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-transparent pointer-events-none md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black to-transparent pointer-events-none md:hidden"></div>
        </div>

        {/* CONTENT BOX */}
        <div
          id="tab-content-container"
          className="bg-gray-200 text-black rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl"
        >
          {/* ========== TAB 1: AutoCAD LT ========== */}
          {activeTab === "lt" && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* LEFT SIDE */}
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="bg-red-600 text-white px-3 py-1 font-bold rounded-md text-sm">
                    A
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold">
                    AUTODESK AutoCAD LT
                  </h2>
                </div>

                <p className="mb-4 text-sm sm:text-base leading-relaxed">
                  Create your 2D designs with precision and best-in-class
                  documentation features. Architects, engineers, and construction
                  professionals use AutoCAD LT to:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                  <li>
                    Draft, design, and edit with precise{" "}
                    <span className="font-bold">
                      2D geometry and documentation features
                    </span>
                  </li>
                  <li>
                    Increase efficiency with the latest automation features, or
                    use your own with{" "}
                    <span className="font-bold">AutoLISP</span>
                  </li>
                  <li>
                    Collaborate with your peers securely with intuitive tools and
                    interface
                  </li>
                </ul>

                <div className="mt-6 space-y-3 text-sm sm:text-base">
                  <p className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> Download Brochures
                  </p>
                  <p className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> See system requirements
                  </p>
                  <p className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> View AutoCAD LT Features
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div>
                <h3 className="font-semibold mb-4 text-base sm:text-lg">
                  Discover how AutoCAD LT enhances productivity with its
                  comprehensive toolset.
                </h3>

                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <i className="fas fa-drafting-compass text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Precision drafting and design</p>
                      <p className="text-gray-600">
                        Test drive easy-to-use tools to automate tasks and increase
                        productivity.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-book-open text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Learning resources</p>
                      <p className="text-gray-600">
                        Access learning resources created by product experts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-users text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Trial Connect community</p>
                      <p className="text-gray-600">
                        Ask the experts and connect with your peers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-credit-card text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Seamless subscription</p>
                      <p className="text-gray-600">
                        Subscribe from the trial without interruption to your
                        workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========== TAB 2: AutoCAD ========== */}
          {activeTab === "cad" && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <img src="/assets/images/courses/autocad/AutoCAD-2023-lockup-Blk-OL-ADSK-No-Year-1-line.png"/>
                </div>

                <p className="mb-4 text-sm sm:text-base leading-relaxed">
                  Unlock your creativity with powerful 2D and 3D CAD tools. With
                  AI-powered insights and automation, AutoCAD helps professionals
                  transform concepts into precise, high-quality designs.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                  <li>
                    Unlock insights and automations powered by{" "}
                    <span className="font-bold">Autodesk AI</span>
                  </li>
                  <li>
                    Tailor for industries with{" "}
                    <span className="font-bold">specialized toolsets</span> and apps
                  </li>
                  <li>
                    Manage design data with{" "}
                    <span className="font-bold">Autodesk Docs integrations</span>
                  </li>
                </ul>

                <div className="mt-6 space-y-3 text-sm sm:text-base">
                  {/* <p className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> Download Brochures
                  </p> */}
                  {/* <a href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/System-requirements-for-AutoCAD-2026-including-Specialized-Toolsets.html" className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> See system requirements
                  </a>
                  <a href="https://www.autodesk.com/products/autocad/features" className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> View AutoCAD Features
                  </a> */}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-base sm:text-lg">
                  5 reasons AutoCAD stands apart from CAD alternatives
                </h3>
                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <i className="fas fa-microchip text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">AI insights and automations</p>
                      <p className="text-gray-600">
                        AI-powered automation in AutoCAD speeds up everyday drafting
                        tasks.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <i className="fas fa-headset text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Access to support and community</p>
                      <p className="text-gray-600">
                        Get support, learning resources, and help from the AutoCAD
                        Community.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <i className="fas fa-file-alt text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Best-in-class exchange with DWG</p>
                      <p className="text-gray-600">
                        Trusted DWG ensures DWG accuracy and compatibility.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <i className="fas fa-chart-line text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">
                        Productivity gains with included toolsets
                      </p>
                      <p className="text-gray-600">
                        Included toolsets deliver up to 63% productivity gains.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <i className="fas fa-cloud-upload-alt text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Connected design experience</p>
                      <p className="text-gray-600">
                        Connected design and collaboration across web and mobile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========== TAB 3: Specific Toolset+ ========== */}
          {activeTab === "toolset" && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <img src="/assets/images/courses/autocad/AutoCAD-2023-lockup-Blk-OL-ADSK-No-Year-stacked.avif"/>
                </div>

                <h3 className="font-semibold mb-3 text-base sm:text-lg">
                  Extend functionality with seven toolsets
                </h3>

                <p className="text-sm sm:text-base mb-4 leading-relaxed">
                  AutoCAD includes toolsets designed to save you time with enhanced
                  features and intelligent objects.{" "}
                  <span className="underline font-bold">
                    Increase productivity by 63%
                  </span>{" "}
                  on average for tasks completed using one of seven toolsets.
                </p>

                <p className="text-sm sm:text-base mb-4 leading-relaxed">
                  When you subscribe to AutoCAD, you gain access to seven
                  industry-specific toolsets. The toolsets include features and
                  intelligent objects for
                  <span className="font-bold">
                    {" "}
                    architecture, mechanical engineering, electrical design
                  </span>
                  , and more. Here, you will learn about the various ways in which
                  the toolsets can help optimize your design workflow.
                </p>

                {/* <div className="mt-6 space-y-3 text-sm sm:text-base">
                  <a href="https://www.datechsolution.com/autocad" className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> Learn More About Toolsets
                  </a>
                </div> */}
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-base sm:text-lg">
                  The following specialized toolsets are included with AutoCAD:
                </h3>
                <div className="space-y-4 text-sm sm:text-base">
                  {[
                    { label: "ARC", name: "Architecture Toolset", desc: "8,000+ intelligent AEC objects and styles.", img: "/assets/images/courses/autocad/logo-icons/72b04a_cce61c0819934415ae7f1dff329ef316~mv2.avif" },
                    { label: "MEC", name: "Mechanical Toolset", desc: "Over 700,000 pre-drawn standard parts.", img: "/assets/images/courses/autocad/logo-icons/72b04a_12ec9cec4f344f5ea3b88e5cd235162d~mv2.avif" },
                    { label: "ELC", name: "Electrical Toolset", desc: "More than 2,000 standards-based schematic symbols.", img: "/assets/images/courses/autocad/logo-icons/72b04a_1be8291fcc0a46f084560af5f602fae5~mv2.avif" },
                    { label: "MEP", name: "MEP Toolset", desc: "10,500+ of AEC objects.", img: "/assets/images/courses/autocad/logo-icons/72b04a_d30fc45ebc1e48b0844fd01068a64206~mv2.avif" },
                    { label: "M3D", name: "Map 3D Toolset", desc: "Organize objects in your drawing such as roads, parcels, etc.", img: "/assets/images/courses/autocad/logo-icons/72b04a_e6e8a9c01330427ea815e9d47a0c94a6~mv2.avif" },
                    { label: "P3D", name: "Plant 3D Toolset", desc: "Draft piping and instrument diagrams.", img: "/assets/images/courses/autocad/logo-icons/72b04a_f84abdae70174f7ba307104e44497d46~mv2.avif" },
                    { label: "RSD", name: "Raster Design Toolset", desc: "Edit scanned drawings and convert to DWG™ objects.", img: "/assets/images/courses/autocad/logo-icons/72b04a_4e8a102b65904ab5b77edf94d110c3bc~mv2.avif" },
                  ].map((tool, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="text-white px-2 py-1 text-xs rounded font-mono font-bold min-w-[45px] text-center">
                        {/* {tool.img} */}
                        <img className="w-10" src={tool.img}/>
                      </div>
                      <div>
                        <p className="font-medium">{tool.name}</p>
                        <p className="text-gray-600">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========== TAB 4: AutoCAD Web ========== */}
          {activeTab === "web" && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <img src="/assets/images/courses/autocad/AutoCAD-Web-2023-lockup-Blk-OL-ADSK-No-Year-1-line.avif"/>
                </div>

                <p className="text-sm sm:text-base mb-4 leading-relaxed">
                 Autodesk AutoCAD Web is a trusted solution for architects, engineers, and construction professionals with the core AutoCAD® commands that you need for light editing and basic designs—all at an attractive price. With AutoCAD Web, formerly known as the AutoCAD Web App and AutoCAD Mobile App, you can:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                  <li>Use familiar drafting tools online in a simplified interface</li>
                  <li>Access and update DWG™ files from anywhere</li>
                  <li>Quickly collaborate on a design directly from the job site</li>
                </ul>

                {/* <div className="mt-6 space-y-3 text-sm sm:text-base">
                  <p className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-external-link-alt text-sm"></i>{" "}
                    <a
                      href="https://web.autocad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Access AutoCAD Web.
                    </a>
                  </p>
                  <p className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i>{" "}
                    <a
                      href="https://help.autodesk.com/view/ACADWEB/ENU/?guid=AutoCAD_Web_Help_browsers_html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      System requirements
                    </a>
                  </p>
                </div> */}
              </div>

              <div>
                {/* Placeholder image with responsive fallback — using a data:image placeholder + icon */}
                {/* <div className="rounded-lg shadow mb-4 w-full bg-gray-300 flex items-center justify-center h-40 sm:h-48 overflow-hidden">
                  <i className="fas fa-globe text-6xl text-gray-500"></i>
                  <span className="sr-only">AutoCAD Web preview</span>
                </div> */}

                <div>
                  <video
                  controls
                  width="400"
                  height="225"
                  className="mx-auto mb-3 rounded-lg"
                  poster="/assets/videos/autocad-web-video-thumb.jpg"
                >
                  <source
                    src="/assets/videos/autocad-web-video.mp4"
                    type="video/mp4"
                  />
                </video>
                </div>

                <div className="text-sm sm:text-base space-y-4 text-gray-700">
                  <div>
                    <p className="font-bold">Included with AutoCAD subscriptions</p>
                    <p>
                      Access to the AutoCAD web and mobile apps is also included with an AutoCAD or AutoCAD LT subscription.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">Includes access to mobile apps</p>
                    <p>
                      With AutoCAD Web, you also get access to the mobile apps available on the Apple App Store and Google Play Store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========== TAB 5: Autodesk Docs ========== */}
          {activeTab === "docs" && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="bg-blue-600 text-white px-3 py-1 font-bold rounded-md text-sm">
                    D
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold">AUTODESK Docs</h2>
                </div>

                <p className="text-sm sm:text-base mb-4 leading-relaxed">
                  Autodesk Docs is a cloud-based document and data management
                  solution within Autodesk Construction Cloud. As your common data
                  environment (CDE), Docs empowers teams to:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                  <li>
                    Access the latest project information to keep work moving
                    efficiently
                  </li>
                  <li>
                    Streamline and automate document reviews to minimize errors and
                    rework
                  </li>
                  <li>
                    Enhance collaboration and team alignment for improved accuracy
                    and productivity
                  </li>
                </ul>

                <div className="mt-6 space-y-3 text-sm sm:text-base">
                  <p className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i>{" "}
                    <a
                      href="https://www.datechsolution.com/aec"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More Autodesk Docs
                    </a>
                  </p>
                  <p className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i>{" "}
                    <a
                      href="https://construction.autodesk.com/resources/guides/project-managers-guide-to-connecting-construction-data-and-documents"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download eBook
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-base sm:text-lg">
                  A single, cloud-based platform for streamlining construction
                  document management.
                </h3>

                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex gap-3 items-start">
                    <i className="fas fa-building text-xl text-gray-700 mt-0.5 w-7"></i>
                    <div>
                      <p className="font-medium">Manage 2D & 3D Designs</p>
                      <p className="text-gray-600">
                        Publish and aggregate all multi-discipline models in a
                        single folder to enable automated clash detection.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-paperclip text-xl text-gray-700 mt-0.5 w-7"></i>
                    <div>
                      <p className="font-medium">Link Files as References</p>
                      <p className="text-gray-600">
                        Attach documents as references to RFIs, Forms, and Assets to
                        improve collaboration and reduce miscommunication.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-tasks text-xl text-gray-700 mt-0.5 w-7"></i>
                    <div>
                      <p className="font-medium">Centralize Issue Management</p>
                      <p className="text-gray-600">
                        Effortlessly track and resolve quality issues across teams
                        from a single centralized issue list.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-folder-open text-xl text-gray-700 mt-0.5 w-7"></i>
                    <div>
                      <p className="font-medium">Organize Turnover Documentation</p>
                      <p className="text-gray-600">
                        Generate accurate, comprehensive turnover documentation in a
                        single click.
                      </p>
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

export default AutoCADTabsStatic;