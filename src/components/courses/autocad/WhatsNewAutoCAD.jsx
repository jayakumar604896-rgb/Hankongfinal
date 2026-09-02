import React from "react";

const features = [
  {
    id: 1,
    title: "Autodesk Assistant",
    image: "/assets/images/courses/autocad/advantages/autodesk-assistant-video-thumb-788x444.avif",
    description:
      "The Autodesk Assistant delivers intelligent, in-context guidance powered by Autodesk AI. With the introduction of Model Context Protocol (MCP), it now interprets drawing context and user intent, enabling CAD standards checking and allowing you to leverage enhanced AI chat and prompt-driven workflows.",
    link: "https://help.autodesk.com/view/ACD/2026/ENU/?guid=GUID-1D513BCA-2F6D-43AC-A6DC-7F9245671626",
  },
  {
    id: 2,
    title: "Forma Data Management Essentials",
    image: "/assets/images/courses/autocad/advantages/forma-data-management-essentials-video-thumb-788x444-v2.avif",
    description:
      "Forma Data Management Essentials is now included with standalone subscriptions of AutoCAD, bringing cloud-based project data management directly into the tools you already use. Leverage advanced collaboration features like Checkout to support parallel work, improved coordination, and secure cloud-managed drawings.",
    link: "#",
  },
  {
    id: 3,
    title: "Checkout",
    image: "/assets/images/courses/autocad/advantages/checkout-video-thumb-788x444.avif",
    description:
      "Checkout introduces a new way of collaborating on shared DWG files by reserving only the geometry you need, allowing you to work in parallel within isolated editing environments and safely apply changes back to the source drawing via Forma Data Management, keeping you in control.",
    link: "#",
  },
  {
    id: 4,
    title: "Geometry Cleanup",
    image: "/assets/images/courses/autocad/advantages/geometry-cleanup-video-thumb-788x444.avif",
    description:
      "Geometry Cleanup identifies common geometry errors such as gaps, overshoots, undershoots, and misaligned angles and suggests targeted fixes. By streamlining error detection and correction in DWG files, it reduces manual cleanup, improves drawing quality and boosts drafting productivity.",
    link: "#",
  },
  {
    id: 5,
    title: "Connected References",
    image: "/assets/images/courses/autocad/advantages/connected-references-video-thumb-788x444.avif",
    description:
      "Preserve Xref integrity for drawings stored in Forma Data Management by detecting moved or renamed references and suggesting automatic repairs.",
    link: "#",
  },
  {
    id: 6,
    title: "Connected Support Files",
    image: "/assets/images/courses/autocad/advantages/connected-support-files-thumb-788x444.avif",
    description:
      "Get centralized control over cloud-based support files. Project-aware tool palettes and CUI ensure the correct resources load automatically.",
    link: "https://help.autodesk.com/view/ACD/2026/ENU/?guid=GUID-D56B66DB-A99F-44C4-9EA7-0A9582100BFA",
  },
  {
    id: 7,
    title: "3D visualization with GSF enhancements",
    image: "/assets/images/courses/autocad/advantages/3d-visualization-with-gsf-enhancements-thumb-788x444.avif",
    description:
      "Expanded Graphics System Framework (GSF) support improves performance and reliability across AutoCAD’s 3D workflows, delivering smoother navigation, broader 3D coverage, and support for Realistic visual styles, materials, and lighting.",
    link: "#",
  },
  {
    id: 8,
    title: "AutoCAD on the web: Forma Data Management Issues",
    image: "/assets/images/courses/autocad/advantages/forma-data-management-issues-thumb-788x444.avif",
    description:
      "Create, view, and resolve Forma Data Management Issues directly in AutoCAD on the web to improve communication and keep teams aligned.​",
    link: "#",
  },
  {
    id: 9,
    title: "AutoCAD on the web: Sheet Set Manager improvements",
    image: "/assets/images/courses/autocad/advantages/sheet-set-manager-thumb-788x444.avif",
    description:
      "Sheet Set Manager on the web now fully adopts Connected Support Files, with improvements to templates, workflows, and reliability.​​",
    link: "#",
  },
  {
    id: 10,
    title: "AutoCAD on the web: Plot Improvements",
    image: "/assets/images/courses/autocad/advantages/plot-improvements-thumb-788x444.avif",
    description:
      "Improved Forma Data Management integration, allowing you to save plots to the cloud, rename files, choose locations and preview PDFs.​​",
    link: "#",
  },
  {
    id: 11,
    title: "AutoCAD on the web: Integration with Forma Board",
    image: "/assets/images/courses/autocad/advantages/integration-with-forma-board-thumb-788x444.avif",
    description:
      "View and edit DWGs in Forma Board with AutoCAD on the web to connect detailed CAD drafting with collaborative early-design workflows.​",
    link: "#",
  },
];

export default function WhatsNewAutoCAD() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What's new in AutoCAD 2027
          </h2>

          <p className="mt-5 text-gray-600 text-md leading-6">
            With Autodesk AI-powered guidance, automated geometry cleanup,
            cloud-connected workflows through Forma Data Management, AutoCAD
            2027 helps coordinate changes more easily and keep projects moving
            forward.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl duration-300 transition-all hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[16/8] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-5 text-[14px] flex-grow">
                  {item.description}
                </p>

                {/* Only show Learn More button if link is not "#" */}
                {/* {item.link !== "#" && (
                  <a
                    href={item.link}
                    className="inline-flex items-baseline mt-6 font-semibold text-teal-600 hover:text-blue-800"
                  >
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}