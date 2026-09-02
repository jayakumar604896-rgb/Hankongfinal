import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, HardHat, Cpu, BrickWall, Construction, ChevronLeft, ChevronRight } from "lucide-react";

const tabs = [
  {
    id: "architects",
    title: "Architects",
    subtitle: "How architects use the AEC Collection",
    icon: Building2,
    image: "/assets/images/courses/aec-collection.png",
    heading:
      "Integrated tools to design sustainable and resilient infrastructure.",
    buttons: [
      { text: "See all included software", url: "https://www.autodesk.com/collections/architecture-engineering-construction/included-software" },
      { text: "Quick Start Guide", url: "https://www.autodesk.com/learn/ondemand/collection/aec-collection-architect" },
      { text: "Talk with our expert", url: "https://www.datechsolution.com/aec" }
    ],
    content: [
      {
        title: "From conceptual to detailed design",
        desc: "Create high-quality, high-performing designs. Use Forma Site Design to model complex 3D design concepts in minutes. Fluidly move proposals to Revit for detailed design and benefit from generative design workflows."
      },
      {
        title: "Performance and environmental simulations",
        desc: "Make data-driven insights the foundation for your design approach with powerful, fast analytics. Use Forma Site Design's AI-powered analyses for key factors such as sun hours, daylight potential, operational energy, wind, and microclimate. Better insights mean better outcomes."
      },
      {
        title: "Develop detailed and beautiful visualizations",
        desc: "Use advanced visualization tools, such as 3ds Max or TwinMotion for Revit, to develop high-quality architectural designs. Visually communicate your clients’ proposed designs and tell their story with realistic elements and details."
      },
      {
        title: "Enhanced project coordination and design management",
        desc: "Simplify collaboration and data management with Autodesk Docs' cloud-based CDE, enabling ISO 19650 compliance. Identify and merge issues from AutoCAD, Revit, Navisworks Manage, and more, into one centralized database."
      }
    ]
  },
  {
    id: "structural",
    title: "Structural Engineers",
    subtitle: "How structural engineers use the AEC Collection",
    icon: HardHat,
    image: "/assets/images/courses/structural-engineers.webp",
    heading: "Engineer the best structural solutions",
    buttons: [
      { text: "See all included software", url: "https://www.autodesk.com/collections/architecture-engineering-construction/included-software" },
      { text: "Quick Start Guide", url: "https://www.autodesk.com/learn/catalog/architects/industry/2e7db524-694a-4020-ac69-e1874fb4eb20" },
      { text: "Talk with our expert", url: "https://www.datechsolution.com/aec" }
    ],
    content: [
      {
        title: "Integrated structural analysis",
        desc: "Apply BIM-centric workflows for structural analysis and get bidirectional interoperability between Revit and analysis software."
      },
      {
        title: "Structural design optimization",
        desc: "Verify and optimize structures with an extensive range of built-in design codes for various countries, all within BIM-based workflows."
      },
      {
        title: "Concrete design",
        desc: "Enable integrated design and detailing workflows from start to finish with BIM-based tools. Use advanced capabilities for modeling 3D concrete reinforcement, creating shop drawings, and bending schedules."
      },
      {
        title: "Steel design",
        desc: "Adopt BIM-based tools for engineers, detailers, and fabricators in the steel industry to integrate design and detailing workflows. Create detailed 3D steel structures with steel connections and 2D documentation with high fidelity and accuracy."
      }
    ]
  },
  {
    id: "mep",
    title: "MEP engineers",
    subtitle: "How MEP engineers use the AEC Collection",
    icon: Cpu,
    image: "/assets/images/courses/mep-engineers.jpg",
    heading: "Connect design to detailing for MEP systems",
    buttons: [
      { text: "See all included software", url: "https://www.autodesk.com/collections/architecture-engineering-construction/included-software" },
      { text: "Quick Start Guide", url: "https://www.autodesk.com/learn/catalog/architects/industry/2e7db524-694a-4020-ac69-e1874fb4eb20" },
      { text: "Talk with our expert", url: "https://www.datechsolution.com/aec" }
    ],
    content: [
      {
        title: "Space, zone, and load requirements",
        desc: "Use architectural Revit models, DWGs, or PDFs to define spaces and zones, occupancy, lighting, and equipment loads for equipment selection and sizing."
      },
      {
        title: "Equipment selection and sizing",
        desc: "Use space and zones, schedules, custom parameters and calculations, built-in simulation and analysis, and export to third-party tools to select and size equipment."
      },
      {
        title: "Systems and energy analysis",
        desc: "Get advanced building energy and systems simulation and analysis with EnergyPlus through an open and extensible connection to Revit."
      },
      {
        title: "Equipment layout",
        desc: "Define the layout of major mechanical and electrical equipment in 2D and 3D for use in distribution routing and sizing."
      }
    ]
  },
  {
    id: "civil",
    title: "Civil engineers",
    subtitle: "How the AEC Collection works for civil engineers",
    icon: BrickWall,
    image: "/assets/images/courses/civil-engineers.jpg",
    heading: "Integrated tools to design sustainable and resilient infrastructure.",
    buttons: [
      { text: "See all included software", url: "https://www.autodesk.com/collections/architecture-engineering-construction/included-software" },
      { text: "Quick Start Guide", url: "https://www.autodesk.com/learn/catalog/architects/industry/2e7db524-694a-4020-ac69-e1874fb4eb20" },
      { text: "Talk with our expert", url: "https://www.datechsolution.com/aec" }
    ],
    content: [
      {
        title: "Design bridge structures in the broader context of your project",
        desc: "Create high-quality flexible designs incorporating road, land, and other civil data. Quickly iterate as many times as necessary to arrive at the best solution."
      },
      {
        title: "Analyze multiple design alternatives for ultimate quality",
        desc: "Reduce errors and rework by using analysis tools to quickly understand the viability of the proposed design. Assess design viability with integrated analysis tools."
      },
      {
        title: "Share detailed design documents with project stakeholders",
        desc: "Use automated production techniques to produce and share documentation such as road details, grading, bridge details, or visualizations."
      },
      {
        title: "Exceed design requirements with modeling flexibility",
        desc: "Manage the complexity of unique bridges and develop custom components to satisfy stakeholder requirements."
      }
    ]
  },
  {
    id: "professionals",
    title: "Construction Professionals",
    subtitle: "How construction professionals use the AEC Collection",
    icon: Construction,
    image: "/assets/images/courses/construction-professionals.jpg",
    heading: "Use powerful BIM and CAD workflows to build with precision and predictability",
    buttons: [
      { text: "See all included software", url: "https://www.autodesk.com/collections/architecture-engineering-construction/included-software" },
      { text: "Quick Start Guide", url: "https://www.autodesk.com/learn/catalog/architects/product/Construction%20Cloud" },
      { text: "Talk with our expert", url: "https://www.datechsolution.com/aec" }
    ],
    content: [
      {
        title: "Connect design to fabrication",
        desc: "Use Revit and Advance Steel to create a more precise BIM workflow from design to fabrication. Collaborate with designers and engineers in one model for more accuracy and improved controls."
      },
      {
        title: "Tools for concrete structures",
        desc: "Work more productively and accurately with BIM workflows that help automate and connect concrete design and detailing to fabrication. Use Revit’s comprehensive set of tools for modeling 3D concrete reinforcements, creating shop drawings, and schedules – all in one environment."
      },
      {
        title: "Boost interoperability and data exchanges",
        desc: "Exchange BIM data easily between design and detailing workflows with the Advance Steel extension for Revit. Automate design to fabrication workflows with ready-made templates to create drawings for fabrication."
      },
      {
        title: "Control costs and quantify materials easily",
        desc: "Drive efficiency and accuracy with a model-based workflow for project requirements, cost estimation, and material quantification. Rapidly generate material costs to accurately maintain project budgets and evaluate costs of design alternatives."
      }
    ]
  }
];

export default function AECTabsAnimated() {
  const [active, setActive] = useState("architects");
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const activeTab = tabs.find((tab) => tab.id === active);
  
  // Safety check - if no active tab found, use first tab
  if (!activeTab) {
    return null;
  }

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Update arrow visibility for horizontal scroll
  const updateScrollArrows = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft < maxScroll - 1);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && isMobile) {
      container.addEventListener("scroll", updateScrollArrows);
      updateScrollArrows();
      return () => container.removeEventListener("scroll", updateScrollArrows);
    }
  }, [isMobile, active]);

  const scrollTabs = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  // When active tab changes on mobile, optionally scroll into view
  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const activeButton = document.getElementById(`tab-btn-${active}`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [active, isMobile]);

  return (
    <section className="bg-gray-100 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Tabs section with horizontal scroll on mobile + optional arrows */}
        <div className="relative mb-8 md:mb-12">
          {/* Mobile navigation arrows */}
          {isMobile && showLeftArrow && (
            <button
              onClick={() => scrollTabs("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md border border-gray-200 md:hidden"
              aria-label="Previous tab"
            >
              <ChevronLeft size={18} className="text-teal-700" />
            </button>
          )}
          
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth gap-2 md:gap-4 justify-start md:justify-center pb-3 md:pb-0"
            style={{ scrollBehavior: "smooth" }}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  id={`tab-btn-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className="relative px-4 py-2.5 md:px-6 md:py-3 rounded-lg flex items-center gap-2 font-medium whitespace-nowrap transition-all flex-shrink-0"
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 bg-gradient-to-r from-[#00786F] to-[#34CFC4] rounded-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative flex items-center gap-2 text-sm md:text-base ${
                      isActive ? "text-white" : "text-gray-700"
                    }`}
                  >
                    <Icon size={18} />
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
          
          {isMobile && showRightArrow && (
            <button
              onClick={() => scrollTabs("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md border border-gray-200 md:hidden"
              aria-label="Next tab"
            >
              <ChevronRight size={18} className="text-teal-700" />
            </button>
          )}
        </div>

        {/* Layout: responsive stack on mobile, two columns on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column: Heading, Image, Buttons */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-gray-900">
                {activeTab.heading}
              </h2>

              <div className="rounded-[60px_0px_60px_0px] overflow-hidden mb-5 md:mb-6 shadow-md">
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-auto object-cover aspect-video md:aspect-auto block"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/800x500/e2e8f0/2d3748?text=Image+Preview";
                  }}
                />
              </div>

              {/* <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {activeTab.buttons.map((btn, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 border border-teal-600 text-teal-600 rounded-[20px_0px_20px_0px] hover:bg-teal-600 hover:text-white transition text-sm md:text-base font-medium shadow-sm hover:shadow-md"
                    onClick={() => window.open(btn.url, '_blank')}
                  >
                    {btn.text}
                  </button>
                ))}
              </div> */}
            </motion.div>
          </AnimatePresence>

          {/* Right Column: Subtitle + Content cards */}
          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800">
              {activeTab.subtitle}
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                {activeTab.content.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1.5 text-base md:text-lg">{item.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}