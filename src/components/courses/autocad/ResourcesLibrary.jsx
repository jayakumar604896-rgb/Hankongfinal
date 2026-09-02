import { useState } from "react";
import { FileText, Play, Folder, Download, ExternalLink, Youtube, BookOpen, TrendingUp, ChevronDown } from "lucide-react";

export default function ResourcesLibrary() {
  const [activeTab, setActiveTab] = useState("documents");
  const [visibleCount, setVisibleCount] = useState(6); // 2 rows x 3 columns = 6 items

  const documents = [
    {
      title: "AEC Collection Buyer's Guide.",
      url: "https://damassets.autodesk.net/content/dam/autodesk/www/pdfs/fy24-aec-buyers-guide-for-architecture-teams-en.pdf",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Accelerate resilient and sustainable infrastructure through data-driven decision-making",
      url: "https://drive.google.com/file/d/12_Mg70wFER1MRtfj-xtS2smkuGJX2gRB/view?usp=sharing",
      type: "PDF",
      category: "Whitepaper"
    },
    {
      title: "The civil engineer's guide to digital project delivery.",
      url: "https://drive.google.com/file/d/1H_sCTjJS6n7V7KOy__NL2L5oXADk5CC8/view?usp=sharing",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Top 5 drainage design challenges.",
      url: "https://drive.google.com/file/d/1KivNP87inDf-M8EMf-XPr9c5uSm92cr1/view?usp=sharing",
      type: "PDF",
      category: "Checklist"
    },
    {
      title: "Digital transformation in building operations.",
      url: "https://drive.google.com/file/d/1yhNWmB33-MiK5d6xMxBHWVRsG7cOoOvd/view?usp=sharing",
      type: "PDF",
      category: "Whitepaper"
    },
    {
      title: "The Architect's Guide to Carbon Management.",
      url: "https://drive.google.com/file/d/1pjuwcuYnzyBc0mgmg2_rHuf2KCixvYDf/view?usp=sharing",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Transform Transportation Infrastructure with Digital Project Delivery.",
      url: "https://drive.google.com/file/d/1wyVzTiWJ-JGfbGgHj7AUmU3eZ0OHqjVU/view?usp=sharing",
      type: "PDF",
      category: "Whitepaper"
    },
    {
      title: "Unlock dynamo for Revit.*",
      url: "https://drive.google.com/file/d/1mN-KHA4FkkyQZV5MHZeI76xw4sXGREj3/view?usp=sharing",
      type: "PDF",
      category: "Tutorial"
    },
    {
      title: "New design to delivery project with Autodesk Forma.*",
      url: "https://drive.google.com/file/d/1c1X8u_3AusLhU2LZDnfItgyh932CDyUM/view?usp=sharing",
      type: "PDF",
      category: "Case Study"
    },
    {
      title: "Design a better future with Autodesk Forma.",
      url: "https://drive.google.com/file/d/1HLkfp6ubYVA5UjDeiNurbjLAcYdRfheB/view?usp=sharing",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Make solid foundations for your projects with Autodesk Forma.",
      url: "https://drive.google.com/file/d/10O9nRE3tLJryCRkjgZCFnXw17RSHOKnP/view?usp=sharing",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Making the right decision in planning phase with Autodesk Forma.",
      url: "https://drive.google.com/file/d/1KGdPFZDeJNveSSYLUypKWs4-quNP2P6g/view?usp=sharing",
      type: "PDF",
      category: "Whitepaper"
    },
    {
      title: "Project Manager's Guide to Centralizing Data and Documents.",
      url: "https://construction.autodesk.com/resources/guides/project-managers-guide-to-connecting-construction-data-and-documents",
      type: "Article",
      category: "Guide"
    },
    {
      title: "A Beginner's Guide to Connecting Construction Data and Documents.",
      url: "https://drive.google.com/file/d/1jxB5koVFxfi9izuRPZSAci94KeLlIH2F/view?usp=sharing",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Autodesk Docs centralize project data.",
      url: "https://drive.google.com/file/d/1z148Ebp7W7Oq9xmTzbMxbbUEXPUJmiIN/view?usp=sharing",
      type: "PDF",
      category: "Overview"
    },
    {
      title: "4 Ways to Empower the Field Team with BIM.",
      url: "https://drive.google.com/file/d/1ufMeTv2QcupyOBYQ1Hu1QIHPbXq-ZAMJ/view?usp=drive_link",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Why Subs Can't Afford to Leave Data Behind.",
      url: "https://drive.google.com/file/d/1hDUMmmbdXzAnyonclVS28Adya3PabL6i/view?usp=drive_link",
      type: "PDF",
      category: "Whitepaper"
    },
    {
      title: "Quality and Closeout Management in the Digital Age.",
      url: "https://drive.google.com/file/d/13v6FOTyGsh55fJjK1O1UCYH5mGtaMtfz/view?usp=sharing",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "A Beginner's Guide to Connecting Construction Data and Documents.",
      url: "https://drive.google.com/file/d/1PTyG0KrRmeAu_B1_FCw-Ke32okNBDLUO/view?usp=sharing",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Construction Handover Workflow Optimization.",
      url: "https://drive.google.com/file/d/1MCo_wvf7PcoURk6f2CfuaJUfFKBQDtEi/view?usp=sharing",
      type: "PDF",
      category: "Guide"
    },
    {
      title: "Transform your business with data you can trust.",
      url: "https://drive.google.com/file/d/1AEqcpAxVssx81yPAZpHFJoF79NvDONSX/view?usp=sharing",
      type: "PDF",
      category: "Whitepaper"
    },
  ];

  const videos = [
    {
      title: "Introduction AutoCAD LT 2026",
      url: "https://www.youtube.com/watch?v=34DgfFTzrcM",
      duration: "15:24",
      platform: "YouTube"
    },
    {
      title: "AEC Webinar Recording",
      url: "#",
      duration: "45:00",
      platform: "Webinar"
    },
    {
      title: "Datech Design Solutions",
      url: "https://www.youtube.com/@datechdesignasean",
      duration: "Channel",
      platform: "YouTube"
    }
  ];

  const assets = [
    {
      title: "Autodesk Docs centralize project data",
      url: "https://example.com/autodesk-docs",
      type: "Template"
    },
    {
      title: "4 Ways to Empower the Field Team with BIM",
      url: "https://example.com/bim-field-team",
      type: "Toolkit"
    },
    {
      title: "Quality and Closeout Management in the Digital Age",
      url: "https://example.com/closeout-management",
      type: "Checklist"
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

  const getCategoryColor = (category) => {
    const colors = {
      Guide: "bg-blue-100 text-blue-700",
      Whitepaper: "bg-purple-100 text-purple-700",
      Checklist: "bg-green-100 text-green-700",
      Tutorial: "bg-orange-100 text-orange-700",
      "Case Study": "bg-pink-100 text-pink-700",
      Overview: "bg-cyan-100 text-cyan-700",
      Article: "bg-indigo-100 text-indigo-700",
      Template: "bg-teal-100 text-teal-700",
      Toolkit: "bg-amber-100 text-amber-700"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const ResourceCard = ({ item, type }) => (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      <div className="p-4">
        {/* Icon and Type Badge */}
        <div className="flex items-start justify-between mb-3">
          <div className="p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
            {type === 'documents' && <FileText size={16} className="text-white" />}
            {type === 'videos' && <Youtube size={16} className="text-white" />}
            {type === 'assets' && <Folder size={16} className="text-white" />}
          </div>
          {type === 'documents' && item.category && (
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${getCategoryColor(item.category)}`}>
              {item.category}
            </span>
          )}
          {type === 'videos' && item.duration && (
            <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full font-medium">
              {item.duration}
            </span>
          )}
        </div>

        {/* Title - reduced font size */}
        <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>

        {/* Meta Info - smaller */}
        {type === 'documents' && item.type && (
          <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
            <BookOpen size={12} />
            {item.type}
          </p>
        )}
        {type === 'videos' && item.platform && (
          <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
            <Play size={12} />
            {item.platform}
          </p>
        )}
        {type === 'assets' && item.type && (
          <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
            <TrendingUp size={12} />
            {item.type}
          </p>
        )}

        {/* Action Button - smaller */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all"
        >
          {type === 'videos' ? 'Watch Now' : type === 'assets' ? 'Access' : 'Download'}
          {type === 'documents' ? <Download size={12} /> : <ExternalLink size={12} />}
        </a>
      </div>

      {/* Decorative hover bar */}
      <div className="h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header - compact */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <BookOpen size={14} />
            Learning Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Resources Library
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Access our comprehensive collection of guides, whitepapers, and video tutorials
          </p>
        </div>

        {/* Modern Tab Design - compact */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1 rounded-full">
            {['documents', 'videos', 'assets'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`
                  flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                  ${activeTab === tab 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                  }
                `}
              >
                {getTabIcon(tab)}
                <span className="capitalize">{tab}</span>
                <span className={`
                  text-xs px-1 py-0 rounded-full
                  ${activeTab === tab 
                    ? 'bg-gray-100 text-gray-600' 
                    : 'bg-gray-200 text-gray-500'
                  }
                `}>
                  {getTabCount(tab)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Resource Grid - 3 columns */}
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
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-200 group"
            >
              <span>Load More</span>
              <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* Showing counter */}
        {currentItems.length > 6 && (
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Showing {displayedItems.length} of {currentItems.length} resources
            </p>
          </div>
        )}

        {/* Footer CTA - compact */}
        <div className="text-center mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-xs">
            Can't find what you're looking for? <a href="#" className="text-blue-600 hover:underline">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  );
}