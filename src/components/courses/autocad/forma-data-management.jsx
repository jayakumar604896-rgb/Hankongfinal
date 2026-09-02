import React, { useState } from "react";
import { LucideArrowRight } from "lucide-react";

const FormaDataManagement = () => {
  const [activeTab, setActiveTab] = useState("first");

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
    <section className="bg-black py-8 sm:py-12 px-4 text-white" id="fdme">
      <div className="max-w-6xl mx-auto">
        {/* TABS - Fully responsive with horizontal scroll on mobile */}
        <div className="relative mb-8">
          {/* Mobile: horizontal scroll container, Desktop: flex wrap centered */}
          <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent -mx-1 px-1">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 sm:gap-3 min-w-max md:min-w-0">
              <button
                onClick={() => handleTabChange("first")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "first"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                About FDME
              </button>

              <button
                onClick={() => handleTabChange("features")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "features"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Top Features
              </button>

              <button
                onClick={() => handleTabChange("inclusions")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "inclusions"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Inclusions
              </button>

              <button
                onClick={() => handleTabChange("faq")}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === "faq"
                    ? "bg-[#cbdb2a] text-black shadow-md"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                FAQs
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
          {activeTab === "first" && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* LEFT SIDE */}
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <img src="/assets/images/courses/autocad/72b04a_bca8cde2ded44fb79d172a2df6fdb2df~mv2.avif" alt="AutoCAD" className="w-100" />
                </div>

                <p className="mb-4 text-sm sm:text-base leading-relaxed">
                  <b>Forma Data Management Essentials</b> provides cloud-based project data management directly connected to eligible Autodesk desktop design tools. Included with standalone subscriptions of <b>AutoCAD, Revit, and Civil 3D</b>, it gives teams a centralized, cloud-connected environment to organize, view, and share project information. Through built-in desktop integrations, teams can collaborate more easily and keep project data connected as work progresses.
                </p>


                {/* <div className="mt-6 space-y-3 text-sm sm:text-base">
                  <a href="https://help.autodesk.com/view/FDME/ENU/?guid=Getting_Started_Overview" className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> Getting Started
                  </a>
                  <a href="https://help.autodesk.com/view/FDME/ENU/?guid=System_Requirements_ACC" className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> See system requirements
                  </a>
                  <a href="https://help.autodesk.com/view/FDME/ENU/?guid=FDM_FDME_Comparison" className="flex items-center gap-2 cursor-pointer underline hover:text-gray-700 transition-colors">
                    <i className="fas fa-arrow-right text-sm"></i> Data Management vs Data Management Essentials Comparison
                  </a>
                </div> */}

              </div>

              {/* RIGHT SIDE */}
              <div>

                {/* <img src="/assets/images/courses/autocad/toolsets/mechanical-toolset.jpg" alt="Mechanical Toolset" className="w-full h-auto rounded-lg"/> */}

                <video
                  controls
                  width="400"
                  height="225"
                  className="mx-auto mb-3 rounded-lg"
                  poster="/assets/videos/fdme-autocad-thumb.jpg"
                >
                  <source
                    src="/assets/videos/fdme-autocad.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="flex gap-5 items-center mt-5 justify-center">
                  <img src="/assets/images/icons/72b04a_eb3eb244ff034bbeb27258f41f77a060~mv2.avif" alt="Mechanical Toolset" className="w-16 h-auto rounded-lg"/>
                  <img src="/assets/images/icons/72b04a_6e6b3d29fe6b436988fbbca6b3fcae3f~mv2.avif" alt="Mechanical Toolset" className="w-16 h-auto rounded-lg"/>
                  <img src="/assets/images/icons/autodesk-civil-3d-product-icon-128_2x.avif" alt="Mechanical Toolset" className="w-16 h-auto rounded-lg"/>
                </div>

              </div>
            </div>
          )}

          {/* ========== TAB 2: AutoCAD ========== */}
          {activeTab === "features" && (
            <div className="">

              {/* Left side */}
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">

                  <div className="flex gap-3 items-start">
                    <i className="fas fa fa-database text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Organised project data</p>
                      <p className="text-gray-600">
                        Organise, control, and track project documents in a shared AECO-focused data environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-address-card text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Markups</p>
                      <p className="text-gray-600">
                        Add comments and annotations directly to drawings and models to communicate feedback clearly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-external-link text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Issue tracking</p>
                      <p className="text-gray-600">
                        Note, track, and manage project issues in one place to improve visibility, accountability, and alignment across project teams.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-cloud-upload text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Desktop-to-cloud connection</p>
                      <p className="text-gray-600">
                        Sync project data between desktop and cloud, maintaining consistent access to project information across tools.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-snowflake text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Drawing & model viewing</p>
                      <p className="text-gray-600">
                        View 2D drawings and 3D models directly in the browser without downloading files.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-adjust text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Version control</p>
                      <p className="text-gray-600">
                        Automatic version tracking with the ability to restore earlier file versions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fas fa-file-text text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Search and share files</p>
                      <p className="text-gray-600">
                        Search project content and share files using permission-based links.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fa fa-window-restore text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Bridge</p>
                      <p className="text-gray-600">
                        Share project data across projects or hubs so teams can collaborate while maintaining their own project records.
                      </p>
                    </div>
                  </div>


                  <div className="flex gap-3 items-start">
                    <i className="fa fa-braille text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Access controls</p>
                      <p className="text-gray-600">
                        Control who can view, upload, edit, and manage project information across teams and folders.
                      </p>
                    </div>
                  </div>

              </div>

            </div>
          )}

          {/* ========== TAB 3: Specific Toolset+ ========== */}
          {activeTab === "inclusions" && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">

              <div>
                <a className="mb-4 underline" href="https://www.autodesk.com/products/autodesk-docs/features/content-catalog">Content Catalog</a>
                <h4 className="text-xl mt-2 font-bold text-teal-600">Centralise BIM content management in the cloud</h4>
                <p className="text-sm mt-2">Gain access to a cloud-based library that lets teams manage, version, and share design content across every project.</p>
                {/* <img className="h-62 object-cover w-full mt-5" src="/assets/images/courses/autocad/toolsets/mechanical-toolset.jpg"/> */}

                <div>
                  <video
                    controls
                    width="100%"
                    height="225"
                    className="mx-auto rounded-lg mt-5"
                    poster="/assets/videos/bim.jpg"
                  >
                    <source
                      src="/assets/videos/bim.mp4"
                      type="video/mp4"
                  />
                  </video>
                </div>

              </div>

              <div>
                <a className="mb-4 underline" href="https://www.autodesk.com/products/forma-site-design/overview?_gl=1*b2c6e8*_gcl_au*MjAyNjM0NTEyMC4xNzgwMTQ2OTQ3*FPAU*MjAyNjM0NTEyMC4xNzgwMTQ2OTQ3*_ga*MTAzMTU2MzU0My4xNzgwMTQ2OTkz*_ga_NZSJ72N6RX*czE3ODA0MDQ5NzkkbzkkZzEkdDE3ODA0MDUwMzEkajgkbDAkaDA.*_fplc*NiUyQktqZ3RjR3hzcG1rOHZLbTBqQXhTbHd0Nm1zcHZWa0t5N2ZBU0puYXVKbjlNOUFOTEgyVSUyRjRaSU9lek5sZlpNYiUyQm9weW5PbXNkS1BHbG8yUCUyQmJzYnhNTDdMb21tVW1rTmdVQkJyMWxoOGxEZE81eVd4R29MYVUlMkJsJTJCMzhBJTNEJTNE">Forma Board</a>
                <h4 className="text-xl mt-2 font-bold text-teal-600">Capture design intent. Align decisions.</h4>
                <p className="text-sm mt-2">Connect project data and analysis in a shared visual workspace to help capture design intent, compare options, and align decisions across project phases.</p>
                {/* <img className="h-62 object-cover w-full mt-5" src="/assets/images/courses/autocad/toolsets/architecture-toolset.jpg"/> */}
                <video
                    controls
                    width="100%"
                    height="225"
                    className="mx-auto rounded-lg mt-5"
                    poster="/assets/videos/forma-design.jpg"
                  >
                    <source
                      src="/assets/videos/forma-design.mp4"
                      type="video/mp4"
                  />
                  </video>
              </div>

            </div>
          )}

          {/* ========== TAB 4: AutoCAD Web ========== */}
          {activeTab === "faq" && (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">

              <div className="space-y-8">

                  <div className="flex gap-3 items-start">
                    <i className="fa fa-arrow-right text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">What is Forma Data Management Essentials?</p>
                      <p className="text-gray-600 text-sm">
                        ​Forma Data Management Essentials is a cloud-based project workspace that helps AECO teams manage, organise, and share project files. It provides core cloud collaboration capabilities such as document storage, drawing and model viewing, markups, and issue tracking while connecting AutoCAD, Revit, and Civil 3D to consistent, accessible project data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fa fa-arrow-right text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">Who uses Forma Data Management Essentials?</p>
                      <p className="text-gray-600 text-sm">
                        Forma Data Management Essentials is designed for drafters, designers, architects, engineers, contractors and others who work in supported versions of AutoCAD, Revit, or Civil 3D and need a simple, cloud-connected way to manage and collaborate on project data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <i className="fa fa-arrow-right text-xl text-gray-700 mt-0.5 w-6"></i>
                    <div>
                      <p className="font-medium">What is the difference between Forma Data Management Essentials and Forma Data Management?</p>
                      <p className="text-gray-600 text-sm">
                        Forma Data Management Essentials includes core cloud-based document management and collaboration capabilities such as centralised storage, browser-based drawing and model viewing, markups, issue tracking, and controlled sharing.
                      </p>
                    </div>
                  </div>                  

              </div>

              <div>
                <img className="w-full" src="/assets/images/courses/autocad/faq.jpg"/>
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

export default FormaDataManagement;