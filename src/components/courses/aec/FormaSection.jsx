import React from "react";

export default function FormaSection() {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-300 py-16 px-6" id="forma">

      {/* Header */}
      <div className="text-center text-white mb-12">
        <h1 className="text-4xl font-bold tracking-wide">
          AUTODESK <span className="font-light">Forma</span>
        </h1>

        <h2 className="text-2xl font-semibold mt-4">
          Get more done in the planning phase
        </h2>

        <p className="text-yellow-300 mt-2 text-md italic">
          If you already have the AEC Collection you can access Forma Site Design at no extra cost
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/assets/images/courses/forma-3d.jpg"
            alt="3D Modeling"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 right-6 bg-black/70 p-4 rounded-lg text-white hover:cursor-pointer">
            <h3 className="text-lg font-bold">3D modeling</h3>
            <p className="text-sm mt-1">
              Create, explore, and iterate massing concepts with Forma Site Design’s intuitive tools.
            </p>
            {/* <button className="bg-gray-200 text-gray-600 px-6 py-3 w-fit rounded-md hover:bg-gray-800 hover:text-white mt-4" onClick={() => window.open('https://blogs.autodesk.com/forma/2024/08/26/4-reasons-why-architects-should-try-3d-sketching-in-autodesk-forma/', '_blank')}>
              Learn More
            </button> */}
          </div>
        </div>

        {/* Card 2 Content */}
        <div className="bg-white rounded-3xl p-8 flex flex-col justify-center shadow-lg">
          <p className="text-gray-700 mb-4">
            Use conceptual design and modeling capabilities, real-time analytics, and automations
            to make solid foundations for your projects.
          </p>

          <p className="text-gray-700 mb-4">
            Forma Site Design is your go-to AI-powered cloud software for data-driven planning.
          </p>

          <p className="text-gray-700 mb-6">
            Combine Forma Site Design with your favorite tools such as Revit, ACC, and more.
          </p>

          {/* <button className="bg-black text-white px-6 py-3 w-fit rounded-md hover:bg-gray-800" onClick={() => window.open('https://www.autodesk.com/products/forma/overview', '_blank')}>
            Learn More
          </button> */}
        </div>

        {/* Card 3 */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg hover:cursor-pointer">
          <img
            src="/assets/images/courses/environment.jpg"
            alt="Environmental Analysis"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 right-6 bg-black/70 p-4 rounded-lg text-white">
            <h3 className="text-lg font-bold">Environmental analysis</h3>
            <p className="text-sm mt-1">
              Make data-driven design decisions and improve building performance.
            </p>

            {/* <button className="bg-gray-200 text-gray-600 px-6 py-3 w-fit rounded-md hover:bg-gray-800 hover:text-white mt-4" onClick={() => window.open('https://www.autodesk.com/products/forma/environmental-impact-analysis', '_blank')}>
              Learn More
            </button> */}

          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/assets/images/courses/forma-boad.jpg"
            alt="Forma Board"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 right-6 bg-black/70 p-4 rounded-lg text-white">
            <h3 className="text-lg font-bold">Forma Board</h3>
            <p className="text-sm mt-1">
              Collect ideas, metrics, visuals, and feedback with Forma Board.
            </p>
            {/* <button className="bg-gray-200 text-gray-600 px-6 py-3 w-fit rounded-md hover:bg-gray-800 hover:text-white mt-4" onClick={() => window.open('https://www.autodesk.com/products/forma/overview', '_blank')}>
              Learn More
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
}