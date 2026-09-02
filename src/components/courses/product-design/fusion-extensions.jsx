import React from "react";

const fusionExtensions = [
  {
    title: "Fusion Manufacturing Extension",
    image: "/assets/images/courses/product-design/fusion-manufacturing.jpg",
    demo: "https://www.datechsolution.com/pdmc",
    learnMore: "https://www.autodesk.com/au/products/fusion-360/fusion-360-for-manufacturing",
    description:
      "Unlock additional capabilities for 3 to 5-axis CNC machining, sheet-based nesting and fabrication, and metals-based additive manufacturing.",
  },
  {
    title: "Fusion Simulation Extension",
    image: "/assets/images/courses/product-design/fusion-simulation.jpg",
    demo: "https://www.datechsolution.com/pdmc",
    learnMore: "https://www.autodesk.com/products/fusion-360/simulation-extension?term=1-YEAR&tab=subscription",
    description:
      "Optimise part design and performance with unlimited cloud solves for generative design, FEA, electronic cooling, injection moulding and more.",
  },
  {
    title: "Fusion Design Extension",
    image: "/assets/images/courses/product-design/fusion-design-extension.jpg",
    demo: "https://www.datechsolution.com/pdmc",
    learnMore: "https://www.autodesk.com/products/fusion-360/fusion-for-design",
    description:
      "Automate complex geometry to enhance the performance and aesthetics of your products.",
  },
  {
    title: "Fusion Manage",
    image: "/assets/images/courses/product-design/fusion-manage.jpg",
    demo: "https://www.datechsolution.com/pdmc",
    learnMore: "https://www.autodesk.com/products/fusion-360/fusion-manage?term=1-YEAR&tab=subscription",
    description:
      "Autodesk Fusion Manage enhances workflows and improves collaboration for everyone involved in product development with integrated cloud PLM.",
  },
];

const FusionExtensions = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg-pattern.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          Autodesk Fusion extensions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fusionExtensions.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full"
            >
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-4 lg:min-h-[52px] h-auto">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-sm lg:mb-6 mb-3">
                  {item.description}
                </p>

                {/* Buttons fixed at bottom */}
                {/* <div className="flex gap-2 text-sm mt-auto pt-6">
                  <a
                    href="#"
                    className="bg-gray-800 px-3 py-2 text-white rounded-md hover:bg-black transition"
                  >
                    Request Demo
                  </a>

                  <a
                    href="#"
                    className="bg-gray-800 px-3 py-2 text-white rounded-md hover:bg-black transition"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FusionExtensions;