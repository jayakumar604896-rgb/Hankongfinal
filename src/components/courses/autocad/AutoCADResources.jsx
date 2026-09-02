import React from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  Download,
  Newspaper,
  Headphones,
  Users,
  ArrowRight,
} from "lucide-react";

const cards = [
  { title: "Tutorials", desc: "Step-by-step AutoCAD tutorials", icon: BookOpen, url: "https://www.datechsolution.com/tutorials" },
  { title: "Success Stories", desc: "See how professionals improve", icon: Award, url: "https://www.datechsolution.com/autocad" },
  { title: "Resource Downloads", desc: "Templates & CAD blocks", icon: Download, url: "https://www.datechsolution.com/autocad" },
  { title: "News & Updates", desc: "Latest Autodesk releases", icon: Newspaper, url: "https://www.datechsolution.com/news" },
  { title: "Expert Help", desc: "Talk to Autodesk specialists", icon: Headphones, url: "https://www.datechsolution.com/autocad" },
];

const Card = ({ title, desc, icon: Icon, url }) => (
  <div className="group rounded-2xl bg-[#111] border border-white/10 hover:border-teal-500 hover:bg-gradient-to-br hover:from-teal-700 hover:via-teal-600 hover:to-cyan-500 transition-all duration-300 p-5 flex flex-col justify-between min-h-[200px]">
    <div>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-5 group-hover:text-white transition-colors">{desc}</p>
    </div>
    <a href={url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-teal-400 font-semibold text-sm group-hover:gap-3 transition-all group-hover:text-white">
      Learn More <ArrowRight size={15} />
    </a>
  </div>
);

export default function AutoCADBentoGrid() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Improve your AutoCAD Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* On-Demand Learning */}
          <div className="group rounded-2xl bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-500 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 p-5 flex flex-col justify-between min-h-[200px]">
            <div>
              <GraduationCap className="text-white mb-3 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">On-Demand Learning</h3>
              <p className="text-teal-100 text-sm leading-6">
                Master AutoCAD through guided learning paths, certification resources & project-based exercises.
              </p>
            </div>
            <button className="mt-3 inline-flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-3 transition-all" onClick={() => window.open('https://www.datechsolution.com/webinars', '_blank')}>
              Start Learning <ArrowRight size={15} />
            </button>
          </div>

          {/* All cards */}
          {cards.map(c => <Card key={c.title} {...c} />)}

          {/* Partner Vault */}
          <div className="group rounded-2xl bg-gradient-to-r from-slate-900 to-gray-900 border border-teal-500/20 hover:border-teal-500 hover:bg-teal-600/10 hover:bg-gradient-to-br hover:from-teal-700 hover:via-teal-600 hover:to-cyan-500 transition-all duration-300 p-5 flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-600 group-hover:bg-teal-500 transition-colors flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-teal-300 transition-colors">Partner Vault</h3>
              <p className="text-gray-400 text-sm leading-5 group-hover:text-gray-300 transition-colors">
                Access exclusive Autodesk partner resources, marketing materials & certifications.
              </p>
            </div>
            <a href="https://datechpartnervault.com/register" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-teal-400 font-semibold text-sm group-hover:gap-3 transition-all">
              Access Portal <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}