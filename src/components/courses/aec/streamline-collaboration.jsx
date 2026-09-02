import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Features from "./features";

const tabs = [
  {
    id: "overview",
    title: "Overview",
    heading: "What is Autodesk Docs?",
    text1:
      "Autodesk Docs is a cloud-based document and data management solution within Autodesk Construction Cloud.",
    text2:
      "Connect, manage, and coordinate design and construction data with all project stakeholders. Align teams, reduce errors and rework, and execute projects more efficiently with Autodesk's Common Data Environment for the AECO industry.",
    image: "/assets/images/courses/autodesk-docs.png",
    links: [
      { text: "See system requirements", url: "https://help.autodesk.com/view/DOCS/ENU/?guid=System_Requirements_ACC" },
      { text: "See All Features Autodesk Docs", url: "https://www.autodesk.com/products/autodesk-docs/features" },
      { text: "Try Docs with Revit, AutoCAD, and Civil 3D", url: "https://www.autodesk.com/collections/architecture-engineering-construction/included-software" },
      { text: "Download eBook", url: "https://www.datechsolution.com/aec" }
    ]
  },
  {
    id: "benefits",
    title: "Benefits",
    heading: "What are the benefits of Autodesk Docs?",
    text1: <>Access the latest project information to keep work moving efficiently.</>,
    text2: (
      <>
        Streamline and automate document reviews to minimize errors and rework.
        <br /><br />
        Enhance collaboration and team alignment for improved accuracy and productivity.
        <br />
        <img className="w-full mt-4 rounded-lg" src="/assets/images/courses/72b04a_98be5b6ff3294b5ca0311497071dd2df~mv2.avif" alt="Benefits" />
      </>
    ),
    features: <Features />,
  },
  {
    id: "catalog",
    title: "Content Catalogue",
    heading: "Unlock design efficiency with BIM content management",
    text1: (
      <>Content Catalog, included with your Autodesk Docs subscription, gives design teams a trusted, cloud-based digital asset management solution, streamlining the process for finding, organizing, and granting access to vetted data.</>
    ),
    text2:
      "By having a single source for Revit families, CAD blocks, and other design content, users can make rapid gains in collaboration, efficiency, productivity, and quality of BIM project deliverables.",
    video: "/assets/videos/bim-content-management.mp4",
    subtitle: "Why use Content Catalog?",
    catalogicons: [
      { icon: "/assets/images/courses/icons/catalog-icon1.avif", text: <><b>Centralize digital assets</b><br/>Gain better control and accessibility by connecting your assets in a common data environment.</> },
      { icon: "/assets/images/courses/icons/catalog-icon2.avif", text: <><b>Unlock reliable data</b><br/>Avoid unnecessary rework by ensuring team members have access to the latest approved version of each digital asset.</> },
      { icon: "/assets/images/courses/icons/catalog-icon3.avif", text: <><b>Find content faster</b><br/>Save time with a robust search system that uses a variety of filters and display options to locate BIM content quickly.</> }
    ]
  },
  {
    id: "access",
    title: "Access Options",
    heading: "Other ways to access Autodesk Docs",
    text1:
      "Autodesk Docs is available as a standalone option or as part of other software solutions. Choose the one that's right for you.",
    image: "/assets/images/courses/autodesk-doc.jpg",
    logos: [
      { src: '/assets/images/courses/logos/72b04a_a6710f0fa8c1491caa5ef362aeb366e7~mv2.avif', alt: 'Autodesk Docs' },
      { src: '/assets/images/courses/logos/BIM Collaborate Pro.avif', alt: 'BIM Collaborate Pro' },
      { src: '/assets/images/courses/logos/Workshop XR.avif', alt: 'Autodesk Build' },
      { src: '/assets/images/courses/logos/Autodesk Build.avif', alt: 'Takeoff' },
      { src: '/assets/images/courses/logos/Takeoff.avif', alt: 'Workshop XR' },
      { src: '/assets/images/courses/logos/Forma Site Design.avif', alt: 'Forma' }
    ]
  },
  {
    id: "workflow",
    title: "Workflows",
    heading: "Workflows for Autodesk Docs",
    text1:
      "Autodesk Docs supports connected workflows across the project lifecycle by providing a centralized cloud platform for managing, reviewing, and sharing project information. Teams can organize files by discipline, collaborate in real time, and maintain clear version control to ensure everyone works from the latest data.",
    videos: [
      {
        title: "Document management",
        description: "Store, review, and share project documentation in the cloud with useful management features.",
        thumbnail: "/assets/images/courses/video_1.jpg",
        url: "https://www.youtube.com/embed/WXeHig-kue0?si=aotvC1mzt-ghnyRI"
      },
      {
        title: "Docs + Revit + AutoCAD + Forma",
        description: "Connect building plan and design workflows in the cloud for teams using other tools in the AEC Collection.",
        thumbnail: "/assets/images/courses/video_1.jpg",
        url: "https://www.youtube.com/embed/WXeHig-kue0?si=aotvC1mzt-ghnyRI"
      },
      {
        title: "Docs for civil engineers",
        description: "Simplify paperless collaboration for civil engineers with digital markups and issues, audit trails, and more.",
        thumbnail: "/assets/images/courses/video_1.jpg",
        url: "https://www.youtube.com/embed/WXeHig-kue0?si=aotvC1mzt-ghnyRI"
      }
    ]
  }
];

export default function AutodeskDocsTabs() {
  const [active, setActive] = useState("overview");
  const [video, setVideo] = useState(null);

  const activeTab = tabs.find((tab) => tab.id === active);

  // Helper to scroll to content on mobile after tab change
  const handleTabChange = (tabId) => {
    setActive(tabId);
    const contentEl = document.getElementById("docs-tab-content");
    if (contentEl && window.innerWidth < 1024) {
      setTimeout(() => {
        contentEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/docs-bg.jpg')"
      }}
      id="docs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title Section - Responsive */}
        <div className="text-center mb-8 lg:flex lg:justify-between lg:items-center lg:gap-4">
          <div className="lg:mb-0 mb-6">
            <img 
              src="/assets/images/courses/autoclogo.avif" 
              alt="Autodesk Docs" 
              className="mx-auto max-h-12 sm:max-h-14 object-contain"
            />
          </div>

          <div>
            <h2 className="text-[#08BED5] text-lg sm:text-xl lg:text-2xl font-semibold">
              Streamline Collaboration with Autodesk FDME
            </h2>
            <p className="text-white text-sm sm:text-base">
              Cloud-based common data environment
            </p>
          </div>
          <div className="hidden lg:block w-[100px]"></div> {/* Spacer for balance */}
        </div>

        {/* Tabs - Horizontal scroll on mobile, wrap on desktop */}
        <div className="relative mb-8 lg:mb-12">
          <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent -mx-2 px-2">
            <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-2 sm:gap-3 min-w-max lg:min-w-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="relative px-4 sm:px-6 py-2 rounded-md text-white border border-[#00786F] text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-200 active:scale-95"
                >
                  {active === tab.id && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 bg-gradient-to-r from-[#00786F] to-[#34CFC4] rounded-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Gradient fade indicators for scroll hint on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none lg:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none lg:hidden"></div>
        </div>

        {/* Content Area */}
        <div 
          id="docs-tab-content"
          className="bg-white rounded-[40px_0_40px_0] sm:rounded-[50px_0_50px_0] lg:rounded-[60px_0_60px_0] p-5 sm:p-8 lg:p-10 shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 lg:space-y-0"
            >
              {/* For workflow tab: full width layout */}
              {activeTab.id === 'workflow' ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                      {activeTab.heading}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {activeTab.text1}
                    </p>
                  </div>
                  
                  {/* Video cards grid - responsive */}
                  {activeTab.videos && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                      {activeTab.videos.map((v, i) => (
                        <div
                          key={i}
                          className="cursor-pointer group"
                          onClick={() => setVideo(v.url)}
                        >
                          <div className="relative overflow-hidden rounded-lg bg-gray-100">
                            <img
                              src={v.thumbnail}
                              alt={v.title}
                              className="rounded-lg w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
                              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3 font-semibold text-base sm:text-lg">
                            {v.title}
                          </p>
                          <p className="mt-1 text-gray-600 text-xs sm:text-sm">
                            {v.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Two column layout for other tabs */
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  {/* LEFT COLUMN - Text Content */}
                  <div className="flex-1 mb-8 lg:mb-0">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                      {activeTab.heading}
                    </h3>

                    <div className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                      {activeTab.text1}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                      {activeTab.text2}
                    </div>

                    {/* Links (overview tab only) */}
                    {/* {activeTab.links && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        {activeTab.links.map((link, i) => (
                          <li key={`${i}-${link.url}`} className="break-words">
                            <a 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-cyan-600 hover:underline flex items-center gap-1"
                            >
                              <span>→</span> {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )} */}

                    {/* Subtitle for catalog */}
                    {activeTab.subtitle && (
                      <p className="font-semibold mt-6 mb-3 text-base sm:text-lg">
                        {activeTab.subtitle}
                      </p>
                    )}
                  </div>

                  {/* RIGHT COLUMN - Media Content */}
                  <div className="flex-1">
                    {/* Image for overview and access tabs */}
                    {activeTab.image && activeTab.id !== 'benefits' && activeTab.id !== 'catalog' && (
                      <div className="flex justify-center">
                        <motion.img
                          key={activeTab.image}
                          src={activeTab.image}
                          alt="docs"
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="rounded-lg shadow-lg max-w-full h-auto object-contain"
                        />
                      </div>
                    )}

                    {/* Features component for benefits and catalog */}
                    {(activeTab.id === 'catalog' || activeTab.id === 'benefits') && activeTab.features && (
                      <div className="flex justify-center">
                        {activeTab.features}
                      </div>
                    )}

                    {/* Video for benefits and catalog tabs */}
                    {(activeTab.id === 'benefits' || activeTab.id === 'catalog') && activeTab.video && (
                      <div className="flex justify-center">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                          <iframe 
                            src={activeTab.video} 
                            title="YouTube video player" 
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Catalog Icons Section - Only for catalog tab */}
              {activeTab.catalogicons && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-8 pt-4 border-t border-gray-200">
                  {activeTab.catalogicons.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <img 
                        src={item.icon} 
                        alt={typeof item.text === 'string' ? item.text : 'catalog icon'} 
                        className="w-10 sm:w-12 lg:w-[50px] flex-shrink-0" 
                      />
                      <p className="text-sm sm:text-base leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Logos Section - Only for access tab */}
              {activeTab.logos && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 pt-4 border-t border-gray-200">
                  {activeTab.logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center p-2">
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="w-full h-auto" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* VIDEO POPUP MODAL - Responsive */}
      {video && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setVideo(null)}
        >
          <div 
            className="w-full max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 z-10"
            >
              ×
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                width="100%"
                height="100%"
                src={video}
                title="Video"
                allowFullScreen
                className="absolute inset-0 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}