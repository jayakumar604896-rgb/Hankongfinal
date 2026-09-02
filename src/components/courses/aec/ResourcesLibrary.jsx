import { useState } from "react";
import { FileText, Play, Folder, Download, ExternalLink, ChevronDown } from "lucide-react";

export default function ResourcesLibrary() {
  const [activeTab, setActiveTab] = useState("documents");
  const [visibleCount, setVisibleCount] = useState(6); // 2 rows x 3 columns = 6 items

  const documents = [
    {
      title: "AEC Collection Buyer’s Guide.",
      url: "https://damassets.autodesk.net/content/dam/autodesk/www/pdfs/fy24-aec-buyers-guide-for-architecture-teams-en.pdf"
    },
    {
      title: "Accelerate resilient and sustainable infrastructure through data-driven decision-making",
      url: "https://drive.google.com/file/d/12_Mg70wFER1MRtfj-xtS2smkuGJX2gRB/view?usp=sharing"
    },
    {
      title: "The civil engineer’s guide to digital project delivery.",
      url: "https://drive.google.com/file/d/1H_sCTjJS6n7V7KOy__NL2L5oXADk5CC8/view?usp=sharing"
    },
    {
      title: "Top 5 drainage design challenges.",
      url: "https://drive.google.com/file/d/1KivNP87inDf-M8EMf-XPr9c5uSm92cr1/view?usp=sharing"
    },
    {
      title: "Digital transformation in building operations.",
      url: "https://drive.google.com/file/d/1yhNWmB33-MiK5d6xMxBHWVRsG7cOoOvd/view?usp=sharing"
    },
    {
      title: "The Architect’s Guide to Carbon Management.",
      url: "https://drive.google.com/file/d/1pjuwcuYnzyBc0mgmg2_rHuf2KCixvYDf/view?usp=sharing"
    },
    {
      title: "Transform Transportation Infrastructure with Digital Project Delivery.",
      url: "https://drive.google.com/file/d/1wyVzTiWJ-JGfbGgHj7AUmU3eZ0OHqjVU/view?usp=sharing"
    },
    {
      title: "Unlock dynamo for Revit.*",
      url: "https://drive.google.com/file/d/1mN-KHA4FkkyQZV5MHZeI76xw4sXGREj3/view?usp=sharing"
    },
    {
      title: "New design to delivery project with Autodesk Forma.*",
      url: "https://drive.google.com/file/d/1c1X8u_3AusLhU2LZDnfItgyh932CDyUM/view?usp=sharing"
    },
    {
      title: "Design a better future with Autodesk Forma.",
      url: "https://drive.google.com/file/d/1HLkfp6ubYVA5UjDeiNurbjLAcYdRfheB/view?usp=sharing"
    },
    {
      title: "Make solid foundations for your projects with Autodesk Forma.",
      url: "https://drive.google.com/file/d/10O9nRE3tLJryCRkjgZCFnXw17RSHOKnP/view?usp=sharing"
    },
    {
      title: "Making the right decision in planning phase with Autodesk Forma.",
      url: "https://drive.google.com/file/d/1KGdPFZDeJNveSSYLUypKWs4-quNP2P6g/view?usp=sharing"
    },
    {
      title: "Project Manager's Guide to Centralizing Data and Documents.",
      url: "https://construction.autodesk.com/resources/guides/project-managers-guide-to-connecting-construction-data-and-documents"
    },
    {
      title: "A Beginner’s Guide to Connecting Construction Data and Documents.",
      url: "https://drive.google.com/file/d/1jxB5koVFxfi9izuRPZSAci94KeLlIH2F/view?usp=sharing"
    },
    {
      title: "Autodesk Docs centralize project data.",
      url: "https://drive.google.com/file/d/1z148Ebp7W7Oq9xmTzbMxbbUEXPUJmiIN/view?usp=sharing"
    },
    {
      title: "4 Ways to Empower the Field Team with BIM.",
      url: "https://drive.google.com/file/d/1ufMeTv2QcupyOBYQ1Hu1QIHPbXq-ZAMJ/view?usp=drive_link"
    },
    {
      title: "Why Subs Can’t Afford to Leave Data Behind.",
      url: "https://drive.google.com/file/d/1hDUMmmbdXzAnyonclVS28Adya3PabL6i/view?usp=drive_link"
    },
    {
      title: "Quality and Closeout Management in the Digital Age.",
      url: "https://drive.google.com/file/d/13v6FOTyGsh55fJjK1O1UCYH5mGtaMtfz/view?usp=sharing"
    },
    {
      title: "A Beginner’s Guide to Connecting Construction Data and Documents.",
      url: "https://drive.google.com/file/d/1PTyG0KrRmeAu_B1_FCw-Ke32okNBDLUO/view?usp=sharing"
    },
    {
      title: "Construction Handover Workflow Optimization.",
      url: "https://drive.google.com/file/d/1MCo_wvf7PcoURk6f2CfuaJUfFKBQDtEi/view?usp=sharing"
    },
    {
      title: "Transform your business with data you can trust.",
      url: "https://drive.google.com/file/d/1AEqcpAxVssx81yPAZpHFJoF79NvDONSX/view?usp=sharing"
    },
  ];

  const videos = [
    {
      title: "Introduction AutoCAD LT 2026",
      url: "https://www.youtube.com/watch?v=34DgfFTzrcM"
    },
    {
      title: "AEC Webinar Recording*",
      url: "#"
    },
    {
      title: "Datech Design Solutions",
      url: "https://www.youtube.com/@datechdesignasean"
    }
  ];

  const assets = [
    {
      title: "Autodesk Docs centralize project data",
      url: "https://example.com/autodesk-docs"
    },
    {
      title: "4 Ways to Empower the Field Team with BIM",
      url: "https://example.com/bim-field-team"
    },
    {
      title: "Quality and Closeout Management in the Digital Age",
      url: "https://example.com/closeout-management"
    }
  ];

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

        {/* Load More Button */}
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

        {/* Showing counter */}
        {currentItems.length > 6 && (
          <div className="text-center mt-3">
            <p className="text-xs text-gray-500">
              Showing {displayedItems.length} of {currentItems.length} resources
            </p>
          </div>
        )}
      </div>
    </section>
  );
}