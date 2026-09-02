import { useState } from "react";
import { FileText, Play, Folder, Download, ExternalLink, ChevronDown } from "lucide-react";

export default function ResourcesLibrary() {
  const [activeTab, setActiveTab] = useState("documents");
  const [visibleCount, setVisibleCount] = useState(6); // 2 rows x 3 columns = 6 items

  const documents = [
    {
      title: "Why engineers design with parametric 3D.",
      url: "https://drive.google.com/file/d/1D_ZfsRGqcXxhisLikuNUKZMW288aLfD9/view?usp=sharing"
    },
    {
      title: "Top reasons factory layout designers upgrade from AutoCAD to PDMC.",
      url: "https://drive.google.com/file/d/1VAP1SgIqtZbrjKFN3cmAEjSCtoBoFfU_/view?usp=sharing"
    },
    {
      title: "The buyer's guide to CAD for facilities layout.",
      url: "https://drive.google.com/file/d/1yhZbwcjTc_XLuUxZu5rXjSds1bNjv-Jw/view?usp=sharing"
    },
    {
      title: "The digital evolution of industrial equipment commissioning",
      url: "https://drive.google.com/file/d/1A2lv79wX6XwhQ5twSWPGmyoVc2PCqe3x/view?usp=sharing"
    },
    {
      title: "Drive growth by transforming product development.",
      url: "https://drive.google.com/file/d/12MYeixA-Bl2GLSfx_KGxe8yHTHOlr5ZP/view?usp=sharing"
    },
    {
      title: "Discover the real power of simulation.",
      url: "https://drive.google.com/file/d/1RskgMdL8gt2rl9vSm9m74FuxIxlcunPt/view?usp=sharing"
    },
    {
      title: "Digitally transforming the factory life cycle.",
      url: "https://drive.google.com/file/d/1-P2lMGGFS-Girqvff98_wM2pYIfygqSs/view?usp=sharing"
    },
    {
      title: "Top reasons machine design companies choose Autodesk.",
      url: "https://drive.google.com/file/d/1w39J5f2qUPqto3R8hnsn-wE4ziJn2DW1/view?usp=sharing"
    },
    {
      title: "Top 10 ways to power up your machine design workflows.",
      url: "https://drive.google.com/file/d/1jh1b9H4s82fSruo8HEsuxZY9wzjsl9tr/view?usp=sharing"
    },
    {
      title: "Top reasons product design engineers choose Autodesk.",
      url: "https://drive.google.com/file/d/1x-cJt-BrEqN7uLg8llIDb4R_3FeQHI5D/view?usp=sharing"
    },
    {
      title: "The difference between PDM and PLM (and why you need both)",
      url: "https://drive.google.com/file/d/1ieDqmwUPlS6RsC1J4u1KYQUPYj2sSQvg/view?usp=sharing"
    },
    {
      title: "Why digital factories are the future of manufacturing.",
      url: "https://drive.google.com/file/d/1ih58fg8HdWn0MgurlzJ2lhYv4zWFM1xq/view?usp=sharing"
    },
    {
      title: "The connected consumer product workflow.*",
      url: "https://drive.google.com/file/d/1cxJcHw4_OzSHmWFJkjiKmfwEhGlpABDw/view?usp=sharing"
    },
    {
      title: "Design tomorrow's smart production.*",
      url: "https://drive.google.com/file/d/1urWN0ZXaZME3gsY-4w2MpEz4-FkNU1lB/view?usp=sharing"
    },
    {
      title: "The big ideas redefining digital transformation.*",
      url: "https://drive.google.com/file/d/1_fMOgodTIhdc5glJ8nzqO_Nz-MsNE5M7/view?usp=sharing"
    },
  ];

  const videos = [
    {
      title: "Datech Design Solutions",
      url: "https://www.youtube.com/@datechdesignasean"
    },
  ];

  const assets = [];

  const getCurrentItems = () => {
    switch(activeTab) {
      case 'documents': return documents;
      case 'videos': return videos;
      case 'assets': return assets;
      default: return [];
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(6); // Reset to 2 rows when changing tabs
  };

  const currentItems = getCurrentItems();
  const displayedItems = currentItems.slice(0, visibleCount);
  const hasMore = visibleCount < currentItems.length;

  const ResourceCard = ({ item, type }) => (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200">
      <div className="p-3">
        {/* Icon */}
        <div className="flex items-center justify-between mb-2">
          <div className="p-1.5 bg-blue-100 rounded-lg">
            {type === 'documents' && <FileText size={14} className="text-blue-600" />}
            {type === 'videos' && <Play size={14} className="text-blue-600" />}
            {type === 'assets' && <Folder size={14} className="text-blue-600" />}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-medium text-gray-800 text-xs mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>

        {/* Action Button */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 mt-1"
        >
          {type === 'videos' ? 'Watch Now' : type === 'assets' ? 'Access Resource' : 'Download'}
          {type === 'documents' ? <Download size={10} /> : <ExternalLink size={10} />}
        </a>
      </div>
    </div>
  );

  const getTabIcon = (tab) => {
    switch(tab) {
      case 'documents': return <FileText size={16} />;
      case 'videos': return <Play size={16} />;
      case 'assets': return <Folder size={16} />;
      default: return null;
    }
  };

  const getTabCount = (tab) => {
    switch(tab) {
      case 'documents': return documents.length;
      case 'videos': return videos.length;
      case 'assets': return assets.length;
      default: return 0;
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">
          Resources Library
        </h2>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-300 mb-8">
          <button
            onClick={() => handleTabChange("documents")}
            className={`flex items-center gap-2 lg:px-6 px-3 py-3 text-sm ${
              activeTab === "documents"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <FileText size={18} />
            Documents
            <span className="ml-1 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
              {documents.length}
            </span>
          </button>

          <button
            onClick={() => handleTabChange("videos")}
            className={`flex items-center gap-2 lg:px-6 px-3 py-3 text-sm ${
              activeTab === "videos"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Play size={18} />
            Videos
            <span className="ml-1 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
              {videos.length}
            </span>
          </button>

          <button
            onClick={() => handleTabChange("assets")}
            className={`flex items-center gap-2 lg:px-6 px-3 py-3 text-sm ${
              activeTab === "assets"
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Folder size={18} />
            Other Assets
            <span className="ml-1 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
              {assets.length}
            </span>
          </button>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedItems.map((item, index) => (
            <ResourceCard key={index} item={item} type={activeTab} />
          ))}
        </div>

        {/* Load More Button - Only shows if there are more items */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-200 group"
            >
              <span>Load More</span>
              <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* Showing counter - Only shows if there are more than 6 items total */}
        {currentItems.length > 6 && (
          <div className="text-center mt-3">
            <p className="text-xs text-gray-500">
              Showing {displayedItems.length} of {currentItems.length} resources
            </p>
          </div>
        )}

        {/* Empty state for Other Assets */}
        {activeTab === "assets" && assets.length === 0 && (
          <div className="text-center py-12">
            <Folder size={48} className="mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500">No assets available yet</p>
          </div>
        )}
      </div>
    </section>
  );
}