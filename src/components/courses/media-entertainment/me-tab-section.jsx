import React, { useState } from "react";

const METabsStatic = () => {
    const [activeTab, setActiveTab] = useState("lt");

    return (
        <section className="bg-black py-12 px-4 text-white" id="mecollection">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-10">
                    Meet the M&E Collection
                </h2>


                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    <button
                        onClick={() => setActiveTab("lt")}
                        className={`px-5 py-2 rounded-full ${activeTab === "lt" ? "bg-[#cbdb2a] text-black" : "bg-gray-200 text-black"}`}
                    >
                        Animation
                    </button>

                    <button
                        onClick={() => setActiveTab("cad")}
                        className={`px-5 py-2 rounded-full ${activeTab === "cad" ? "bg-[#cbdb2a] text-black" : "bg-gray-200 text-black"}`}
                    >
                        Visual Effects
                    </button>

                    <button
                        onClick={() => setActiveTab("toolset")}
                        className={`px-5 py-2 rounded-full ${activeTab === "toolset" ? "bg-[#cbdb2a] text-black" : "bg-gray-200 text-black"}`}
                    >
                        Game Development
                    </button>
                </div>

                {/* Content Box */}
                <div className="bg-gray-200 text-black rounded-3xl p-8">
                    {/* TAB 1 */}
                    {activeTab === "lt" && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* LEFT SIDE */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-xl font-bold">
                                        Bring the best out of your brightest
                                    </h2>
                                </div>

                                <p className="mb-4 text-sm">
                                    When equipped with the right tools, you can focus on creating brilliant animated content for the big screen - from the hair and fur on characters to intricate details on environments. Whether you're going after a hyper-realistic or highly stylized look, our feature-rich 3D animation tools can help you deliver high- quality work that keeps clients coming back.
                                </p>

                                <img src="/assets/images/courses/media/maya.jpg" className="w-full"/>

                                {/* <p className="text-sm text-gray-600 mt-2">Forest critter made with Maya. Image courtesy of Kevin Beckers</p> */}

                            </div>

                            {/* RIGHT SIDE */}
                            <div>
                                <h3 className="font-semibold mb-4">
                                    How animation studios use the Autodesk Media & Entertainment Collection
                                </h3>

                                <div className="space-y-8 text-sm mt-5">
                                    <div className="flex gap-3">
                                        <div className="text-xl">🌄</div>
                                        <div>
                                            <p className="font-medium">Model detailed 3D characters and environments</p>
                                            <p className="text-gray-600">
                                                Sculpt highly detailed 3D geometry and textures with Mudbox. Bring models from Mudbox into Maya or 3ds Max for further look development.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">🧍</div>
                                        <div>
                                            <p className="font-medium">Animate multiple characters precisely</p>
                                            <p className="text-gray-600">
                                                Need to fill Madison Square Garden with fans or create lines of excited kids at an amusement park? Generate multiple humans, animals, or extraordinary creatures and precisely control their movements in your scene with the Golaem plug-in.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">👁️</div>
                                        <div>
                                            <p className="font-medium">Captivate audiences with innovative animation styles</p>
                                            <p className="text-gray-600">
                                                From animating any object attributes to transforming joints and bones, breathe life into original 3D models with AI-powered rigging and animation capabilities in Maya.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">🎞️</div>
                                        <div>
                                            <p className="font-medium">Render complex animation projects</p>
                                            <p className="text-gray-600">
                                                See high-quality previews of your animated project right in Maya and 3ds Max, without breaking creative flow, and standardize materials with integrated open standards in Arnold.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            {/* <div className="mt-6 space-y-3 text-sm">
                                <a href="https://www.autodesk.com/solutions/media-entertainment/3d-animation" target="_blank" className="flex items-center gap-2 cursor-pointer">➜ Learn more about animation solutions</a>
                                <a href="https://www.autodesk.com/asean/collections/product-design-manufacturing/included-software#included-software-panel" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ See all included software
                                </a>
                                <a href="https://www.autodesk.com/learn/ondemand/tutorial/3ds-max-animation-basics" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ Quick Start Guide
                                </a>
                                <a href="https://www.datechsolution.com/me" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ Talk with our expert
                                </a>
                            </div> */}

                            </div>

                        </div>
                    )}

                    {/* TAB 2 */}
                    {activeTab === "cad" && (
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* LEFT SIDE */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-xl font-bold">Create mind-blowing visual effects</h2>
                                </div>

                                <p className="mb-4 text-sm">
                                    As an artist, you have a keen eye for the magic that unfolds on the screen. From jaw-dropping explosions to fantastical creatures, you appreciate the artistry and technical wizardry that goes into creating stunning visual effects.
                                </p>
                                <p className="mb-4 text-sm">
                                    Whether you're creating the next blockbuster or pushing the boundaries of visual storytelling, <a className="underline cursor-pointer" href="https://www.autodesk.com/solutions/design-and-make-platform">Autodesk's Design and Make Platform</a>, used by renowned VFX studios, is your gateway to unlocking new realms of creativity, expanding the breadth of your services, and streamlining processes through automation.
                                </p>

                                <img src="/assets/images/courses/media/visual-effects.jpg" alt="Visual effects" className="w-full h-auto rounded-lg"/>

                                {/* <p className="text-sm mt-2 text-gray-500">Doctor Strange in the Multiverse of Madness. © 2022 Marvel. Image courtesy of Framestore.</p> */}

                            </div>

                            {/* RIGHT SIDE */}
                            <div>
                                <h3 className="font-semibold mb-4">
                                    How visual effects studios use the Autodesk Media & Entertainment Collection
                                </h3>

                                <div className="space-y-4 text-sm">
                                    <div className="flex gap-3">
                                        <div className="text-xl">🎨</div>
                                        <div>
                                            <p className="font-medium">Deliver realistic CG assets</p>
                                            <p className="text-gray-600">
                                                Keep up with the growing demand for high-quality content by creating life-like CG characters for awestruck moments, like a secret spy who jumps out of a plane or a teddy bear that talks back.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">🧩</div>
                                        <div>
                                            <p className="font-medium">Create serious effects procedurally</p>
                                            <p className="text-gray-600">
                                                Create stunning procedural effects like combustion, snow, particles, or liquids, or create luxuriant forests with scattering tools and templates to quickly get 90% of the way to a final effect.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">👥</div>
                                        <div>
                                            <p className="font-medium">Populate worlds with multiple characters or creatures</p>
                                            <p className="text-gray-600">
                                                Generate diverse and believable characters for your scenes with an artist-friendly crowd creation and character layout toolset in the Golaem plug-in for Maya, available exclusively in the M&E Collection.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">✨</div>
                                        <div>
                                            <p className="font-medium">Render pixel-perfect VFX projects</p>
                                            <p className="text-gray-600">
                                                See high-quality previews of your next award-winning VFX project right in Maya and 3ds Max and standardize materials with integrated open standards in Arnold.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            {/* <div className="mt-6 space-y-3 text-sm">
                                <a href="https://www.autodesk.com/solutions/visual-effects" target="_blank" className="flex underline items-center gap-2 cursor-pointer">➜ Learn more about visual effects</a>
                                <a href="https://www.autodesk.com/collections/media-entertainment/included-software" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ See all included software
                                </a>
                                <a href="https://www.autodesk.com/learn/catalog/industry/17133538-5840-4c1f-998e-c99de6cd0485" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ Quick Start Guide
                                </a>
                                <a href="https://www.datechsolution.com/me" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ Talk with our expert
                                </a>
                            </div> */}

                            </div>


                        </div>
                    )}

                    {/* TAB 3 */}
                    {activeTab === "toolset" && (
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* LEFT SIDE */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-xl font-bold">From imagination to gameplay: All the tools you need to make the next big game</h2>
                                </div>

                                <p className="mb-4 text-sm">
                                    Equip your team with powerful and multifaceted tools for worldbuilding, asset creation, and animation, so you'll no longer have to compromise on "good enough." Our robust resource planning tools will also keep scope creep in check and help you maximize your team's productivity.
                                </p>

                                <img src="/assets/images/courses/media/power-up-your-game-pipeline-thumb-1148x646-v2.avif" alt="Toolset" className="w-full"/>

                                {/* <p className="text-sm mt-2 text-gray-500">Image courtesy of Pengzhen Zhang.</p> */}

                            </div>

                            {/* RIGHT SIDE */}
                            <div>
                                <h3 className="font-semibold mb-4">
                                    How game studios use the Autodesk Media & Entertainment Collection
                                </h3>

                                <div className="space-y-4 text-sm">
                                    <div className="flex gap-3">
                                        <div className="text-xl">⚡</div>
                                        <div>
                                            <p className="font-medium">Create hyper-realistic worlds at hyper-speed</p>
                                            <p className="text-gray-600">
                                                Give your team powerful and regularly enhanced modeling tools for worldbuilding and prop creation—so you never have to settle for “good enough” again.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">🔗</div>
                                        <div>
                                            <p className="font-medium">Accelerate development with procedural tools</p>
                                            <p className="text-gray-600">
                                                When thousands of 2D or 3D game assets are needed to create an environment, procedural workflow tools in 3ds Max or Bifrost for Maya can help quickly scale up asset creation to the highest level.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">🎮</div>
                                        <div>
                                            <p className="font-medium">Create immersive game characters</p>
                                            <p className="text-gray-600">
                                                From hyper-realistic to stylized, bring game characters to life with a robust motion capture and animation toolset.<br/>With plug-ins like Unreal Live Link for Maya, you can stream animation data in real time and instantly preview changes in Unreal.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="text-xl">🚀</div>
                                        <div>
                                            <p className="font-medium">Power up your game pipeline</p>
                                            <p className="text-gray-600">
                                                With new and enhanced OpenUSD integration, your team can move between assets and tools without workflow bottlenecks—keeping the focus on delivering top-tier work, on time and on budget.
                                            </p>
                                        </div>
                                    </div>


                                </div>

                            {/* <div className="mt-6 space-y-3 text-sm">
                                <a href="https://www.autodesk.com/industry/game-design-and-development" target="_blank" className="flex items-center gap-2 cursor-pointer">➜ Learn more about game development solutions</a>
                                <a href="https://www.autodesk.com/collections/media-entertainment/included-software" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ See all included software
                                </a>
                                <a href="https://www.autodesk.com/learn/catalog/industry/82d9fb9c-0925-4f46-8c06-45e353852e50" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ Quick Start Guide
                                </a>
                                <a href="https://www.datechsolution.com/me" target="_blank" className="flex items-center gap-2 cursor-pointer underline">
                                    ➜ Talk with our expert
                                </a>
                            </div> */}

                            </div>


                        </div>
                    )}
                    
                </div>
            </div>
        </section>
    );
};

export default METabsStatic;
