import React, { useState } from "react";

const FreeTrialSection = () => {
  const [selected, setSelected] = useState("AutoCAD");

  const options = [
    "AutoCAD",
    "AutoCAD for Mac",
    "AutoCAD Architecture",
    "AutoCAD Electrical",
    "AutoCAD Map 3D",
    "AutoCAD Mechanical",
    "AutoCAD MEP",
    "AutoCAD Plant 3D",
    "AutoCAD Raster Design",
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Try AutoCAD free for 15 days
          </h2>

          <p className="text-gray-600 mb-6">
            Discover why millions choose AutoCAD to accelerate their designs.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* AutoCAD */}
            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-red-500 text-white px-2 py-1 text-sm font-bold">
                  A
                </div>
                <h3 className="font-semibold">AutoCAD</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                2D and 3D CAD tools, with enhanced insights, AI automations,
                and collaboration features.
              </p>

              <button className="w-full border rounded px-3 py-2 text-sm font-medium hover:bg-gray-100">
                Download free trial →
              </button>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <input type="checkbox" />
                <span>Compare</span>
              </div>

              <p className="text-sm mt-3 text-gray-500">+ See more</p>
            </div>

            {/* AutoCAD LT */}
            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-red-500 text-white px-2 py-1 text-sm font-bold">
                  A
                </div>
                <h3 className="font-semibold">AutoCAD LT</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Best-in-class tool for 2D CAD drafting, drawing, and
                documentation.
              </p>

              <button className="w-full border rounded px-3 py-2 text-sm font-medium hover:bg-gray-100">
                Download free trial →
              </button>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <input type="checkbox" />
                <span>Compare</span>
              </div>

              <p className="text-sm mt-3 text-gray-500">+ See more</p>
            </div>

          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="border px-4 py-2 rounded shadow-sm hover:bg-gray-200">
              ⬇ Download your trial
            </button>

            <button className="border px-4 py-2 rounded shadow-sm hover:bg-gray-200">
              💡 Talk with our expert
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-lg border shadow-sm p-4 h-fit">
          <h3 className="font-semibold mb-4">
            Which item do you want to access first?
          </h3>

          <div className="space-y-3">
            {options.map((item, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="product"
                  value={item}
                  checked={selected === item}
                  onChange={() => setSelected(item)}
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FreeTrialSection;