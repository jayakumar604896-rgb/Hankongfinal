import React, { useState } from "react";

const EngineeringSimulations = () => {
    const [activeTab, setActiveTab] = useState("dm");

    return (
        <section className="bg-teal-600 py-12 px-4 text-white">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Design and manufacturing solutions for everyone
                </h2>


                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    <button
                        onClick={() => setActiveTab("dm")}
                        className={`px-5 py-2 rounded-full ${activeTab === "dm" ? "bg-[#cbdb2a] text-black" : "bg-gray-200 text-black"}`}
                    >
                        Inventor Nastran
                    </button>

                    <button
                        onClick={() => setActiveTab("mach")}
                        className={`px-5 py-2 rounded-full ${activeTab === "mach" ? "bg-[#cbdb2a] text-black" : "bg-gray-200 text-black"}`}
                    >
                        Autodesk CFD
                    </button>

                    <button
                        onClick={() => setActiveTab("ee")}
                        className={`px-5 py-2 rounded-full ${activeTab === "ee" ? "bg-[#cbdb2a] text-black" : "bg-gray-200 text-black"}`}
                    >
                        Autodesk Moldflow
                    </button>

                </div>

                {/* Content Box */}
                <div className="bg-gray-200 text-black rounded-3xl p-8">
                    {/* TAB 1 */}
                    {activeTab === "dm" && (
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            {/* LEFT SIDE */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <img src="/assets/images/courses/product-design/autodesk-moldflow.png" alt="Inventor Nastran" />
                                </div>

                                <p className="mt-4 text-gray-700 text-md mb-2">Autodesk Inventor Nastran® delivers finite element analysis (FEA) tools for engineers and analysts.</p>

                                <ul className="list-disc list-outside ml-5 space-y-1 text-md mb-4 text-gray-700">
                                    <li>Powered by the widely accepted Autodesk Nastran solver technology</li>
                                    <li>Wide range of simulation study types for nonlinear, dynamics, heat transfer, fatigue, and more</li>
                                    <li>Highly tested through a comprehensive verification program and documentation set using NAFEMS</li>
                                </ul>

                                <img className="shadow-lg border border-gray-200 rounded-xl" src="/assets/images/courses/product-design/what-is-inventor-nastran-04-thumb-1172x660.avif" alt="Manufacturing Solutions Tabs Image 1" />


                                {/* <div className="mt-6 space-y-3 text-sm">
                                    <a href="https://help.autodesk.com/view/NINCAD/2025/ENU/?guid=GUID-D2868744-49CD-4D09-AB6C-DCB09ECAFBED" target="_blank" className="flex items-center gap-2 cursor-pointer underline">➜ See system requirements</a>
                                    <a href="https://www.autodesk.com/products/inventor-nastran/overview" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Learn more Nastran
                                    </a>
                                    <a href="https://www.autodesk.com/learn/ondemand/course/product-simulation-with-inventor-nastran" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Quick Start Guide
                                    </a>
                                    <a href="https://www.datechsolution.com/pdmc" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Talk with our expert
                                    </a>
                                </div> */}



                            </div>

                            {/* RIGHT SIDE */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Key features of Inventor Nastran</h3>
                            <div className="grid lg:grid-cols-2 gap-5">

                                <div className="space-y-4 text-sm">
                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Heat transfer</p>
                                            <p className="text-gray-600">
                                                Analyze the effects of convection, conduction, and radiation on your design to avoid failure due to excessive temperatures.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Advanced material models</p>
                                            <p className="text-gray-600">
                                                Gain highly accurate results by using advanced material models for plastic, rubber, soft tissue, and more in a nonlinear study type.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Bolt connectors</p>
                                            <p className="text-gray-600">
                                                Connect parts in your assemblies with bolt connections to reveal fastener concerns or ways to optimize and reduce the number of bolts needed.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Response spectrum analysis</p>
                                            <p className="text-gray-600">
                                                Run a quick analysis that includes number of modes, damping, and response spectrum data.
                                            </p>
                                        </div>
                                    </div>                                    

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Frame Generator idealization</p>
                                            <p className="text-gray-600">
                                                Solve for bending moment, bend diagrams, and axial stress when using beam elements for structural members.
                                            </p>
                                        </div>
                                    </div>


                                </div>

                                <div className="space-y-4 text-sm">

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Automated drop test</p>
                                            <p className="text-gray-600">
                                                Use intuitive tools to set up the initial velocity and acceleration for an impact analysis.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Linear static</p>
                                            <p className="text-gray-600">
                                                Quickly solve linear static studies to learn where you have high concentrations of stress, strain, or displacement in your design.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Autodesk CFD interoperability</p>
                                            <p className="text-gray-600">
                                                Import data from Autodesk CFD and include the temperature or pressure as a loading condition for highly accurate results in Inventor Nastran.
                                            </p>
                                        </div>
                                    </div>                                    

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Automatic midplane mesher</p>
                                            <p className="text-gray-600">
                                                Gain faster and more accurate bending results when using shell elements for thin components.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Linear buckling</p>
                                            <p className="text-gray-600">
                                                Analyze structures, such as columns and beams, for catastrophic failure under certain loading conditions.
                                            </p>
                                        </div>
                                    </div>                                    

                                </div>
                            </div>
                            </div>



                        </div>
                    )}

                    {/* TAB 2 */}
                    {activeTab === "mach" && (
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            {/* LEFT SIDE */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <img src="/assets/images/courses/product-design/Inventor-Nastran-2023-lockup-Blk-OL-ADSK-No-Year-Stacked.avif" alt="Inventor Nastran" />
                                </div>

                                <p className="mt-4 text-gray-700 text-md mb-4">Autodesk CFD (Computational Fluid Dynamics) software creates computational fluid dynamics simulations that engineers and analysts use to intelligently predict how liquids and gases will perform.</p>

                                <img className="shadow-lg border border-gray-200 rounded-xl" src="/assets/images/courses/product-design/autodesk-cfd.avif" alt="Autodesk CFD" />


                                {/* <div className="mt-6 space-y-3 text-sm">
                                    <a href="https://help.autodesk.com/view/SCDSE/2024/ENU/?guid=GUID-A15C448E-107C-447F-9F6D-0A585D5058C4" target="_blank" className="flex items-center gap-2 cursor-pointer underline">➜ See system requirements</a>
                                    <a href="https://www.autodesk.com/products/cfd/overview" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Learn more Autodesk CFD
                                    </a>
                                    <a href="https://www.autodesk.com/learn/ondemand/curated/fusion-quick-start-guide" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Quick Start Guide
                                    </a>
                                    <a href="https://www.datechsolution.com/pdmc" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Talk with our expert
                                    </a>
                                </div> */}



                            </div>

                            {/* RIGHT SIDE */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Key features of Autodesk CFD</h3>
                            <div className="grid lg:grid-cols-2 gap-5">

                                <div className="space-y-4 text-sm">
                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Flow control applications</p>
                                            <p className="text-gray-600">
                                                Optimize designs when you need to improve pressure drop or flow distribution
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Thermal prototyping</p>
                                            <p className="text-gray-600">
                                                Solve for all modes of heat transfer, from solid to solid or solid to fluid
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Architectural and MEP applications</p>
                                            <p className="text-gray-600">
                                                Improve building efficiency with optimized HVAC design
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Free surface modeling</p>
                                            <p className="text-gray-600">
                                                Simulate interfaces between liquids and gases. Model flow phenomena like waves, sloshing, and spilling
                                            </p>
                                        </div>
                                    </div>                                    

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Humidity and condensation</p>
                                            <p className="text-gray-600">
                                                Model condensation of a liquid from a moist gas
                                            </p>
                                        </div>
                                    </div>


                                </div>

                                <div className="space-y-4 text-sm">

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Motion simulation</p>
                                            <p className="text-gray-600">
                                                Analyze the interaction between solid objects in motion and surrounding fluid
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Humidity and condensation</p>
                                            <p className="text-gray-600">
                                                Model condensation of a liquid from a moist gas
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Free surface modeling</p>
                                            <p className="text-gray-600">
                                                Simulate interfaces between liquids and gases. Model flow phenomena like waves, sloshing, and spilling
                                            </p>
                                        </div>
                                    </div>                                    

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Motion simulation</p>
                                            <p className="text-gray-600">
                                                Analyze the interaction between solid objects in motion and surrounding fluid
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>



                        </div>
                    )}

                    {/* TAB 3 */}
                    {activeTab === "ee" && (
                        <div className="grid md:grid-cols-2 gap-8">
                            
                            {/* LEFT SIDE */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <img src="/assets/images/courses/product-design/Moldflow-2023-lockup-Blk-OL-ADSK-No-Year-Stacked.avif" alt="Inventor Nastran" />
                                </div>

                                <p className="mt-4 text-gray-700 text-md mb-4">Autodesk® Moldflow® simulation software provides plastic injection molding and compression molding insights to improve manufactured part quality. Advanced tools and a simplified user interface help you address manufacturing challenges such as part warpage, cooling channel efficiency, material selection, and cycle time reduction.</p>

                                <img className="shadow-lg border border-gray-200 rounded-xl" src="/assets/images/courses/product-design/optimize-parts-molds-processes-large-1920x1080 (1).avif" alt="Autodesk CFD" />


                                {/* <div className="mt-6 space-y-3 text-sm">
                                    <a href="https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Autodesk-Moldflow-System-Requirements.html" target="_blank" className="flex items-center gap-2 cursor-pointer underline">➜ See system requirements</a>
                                    <a href="https://www.autodesk.com/products/moldflow/trial-intake" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Learn more Autodesk Moldflow
                                    </a>
                                    <a href="https://www.autodesk.com/learn/ondemand/curated/moldflow-insight-quick-start-guide" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Quick Start Guide
                                    </a>
                                    <a href="https://www.datechsolution.com/pdmc" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                        ➜ Talk with our expert
                                    </a>
                                </div> */}



                            </div>

                            {/* RIGHT SIDE */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Key features of Autodesk Moldflow</h3>
                            <div className="grid lg:grid-cols-2 gap-5">

                                <div className="space-y-4 text-sm">
                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Predict mold cavity filling</p>
                                            <p className="text-gray-600">
                                                Predict how your injection mold cavity will fill, pack, cool, and deflect
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Collaborate using Shared Views</p>
                                            <p className="text-gray-600">
                                                Collaborate using cloud-connected devices to share results, comment, and design recommendations
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Plot results visually</p>
                                            <p className="text-gray-600">
                                                Customize display methods for various simulation result plots to suit your needs
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Import CAD files directly</p>
                                            <p className="text-gray-600">
                                                Import native CAD files without the need to convert for simulation
                                            </p>
                                        </div>
                                    </div>                                    

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Compare results</p>
                                            <p className="text-gray-600">
                                                Split the viewing window to see results side by side between studies, and lock views to sync rotations
                                            </p>
                                        </div>
                                    </div>


                                </div>

                                <div className="space-y-4 text-sm">

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Mesh to solve with one click</p>
                                            <p className="text-gray-600">
                                                Improve your productivity by meshing and analyzing your model in one step
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Spot part defects</p>
                                            <p className="text-gray-600">
                                                Find potential as-manufactured part defects to reduce excess warp, sink marks, weld lines, and more
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Analyze with the Report Wizard</p>
                                            <p className="text-gray-600">
                                                Generate professional reports summarizing your analysis model, settings, and results
                                            </p>
                                        </div>
                                    </div>                                    

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Access thousands of materials</p>
                                            <p className="text-gray-600">
                                                The Moldflow material database includes over 11,000 material grades
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">➜</div>
                                        <div>
                                            <p className="font-medium">Customize the user interface</p>
                                            <p className="text-gray-600">
                                                Create a custom ribbon menu or a quick access menu. Modify mouse clicks and color schemes
                                            </p>
                                        </div>
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

export default EngineeringSimulations;