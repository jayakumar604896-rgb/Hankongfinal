import React from "react";
import {
  Award,
  Target,
  TrendingUp,
  Users,
  Shuffle,
  BarChart3,
  Cog,
  BookOpen,
  FileText,
  Boxes,
  Monitor,
  Globe,
  RefreshCcw,
  Settings,
  Database,
} from "lucide-react";

const features = [
  {
    icon: <Award size={40} />,
    title: "Industry Standards",
    desc: "Work with industry standard files for smooth collaboration and exchange.",
  },
  {
    icon: <Target size={40} />,
    title: "Enhanced precision",
    desc: "Create accurate, detailed drawings with precise dimensions and consistency.",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Increased Efficiency",
    desc: "Speed up drafting with templates, blocks, and easy design updates.",
  },
  {
    icon: <Users size={40} />,
    title: "Seamless Collaboration",
    desc: "Work together in real time, improving teamwork and reducing errors.",
  },
  {
    icon: <Shuffle size={40} />,
    title: "Versatility",
    desc: "Create 2D and 3D designs across industries with one powerful tool.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Improved Visualization",
    desc: "Visualize designs in 3D to communicate ideas clearly and early.",
  },
  {
    icon: <Cog size={40} />,
    title: "Productivity and Automation",
    desc: "Automate repetitive tasks to work faster and focus on complex design.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Extensive Resource Library",
    desc: "Access ready made blocks and templates to speed up drafting work.",
  },
  {
    icon: <FileText size={40} />,
    title: "Documentation & Annotation",
    desc: "Create clear dimensions and notes for accurate design communication.",
  },
  {
    icon: <Boxes size={40} />,
    title: "Software Integration",
    desc: "Connect AutoCAD with other tools for smooth and connected workflows.",
  },
  {
    icon: <Monitor size={40} />,
    title: "Analysis and Simulation",
    desc: "Analyze and test designs early to improve performance and results.",
  },
  {
    icon: <Globe size={40} />,
    title: "Anywhere, Anytime",
    desc: "Access and edit designs anywhere with cloud based workflows.",
  },
  {
    icon: <RefreshCcw size={40} />,
    title: "Updates and Support",
    desc: "Stay up to date with new features and community driven support.",
  },
  {
    icon: <Settings size={40} />,
    title: "Customisation Options",
    desc: "Customize tools and shortcuts to match your workflow and work faster.",
  },
  {
    icon: <Database size={40} />,
    title: "Data Extraction and Report",
    desc: "Extract design data easily for reports and project analysis.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Why choose Autodesk AutoCAD
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4 text-black">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;