import React, { useState, useEffect } from "react";
import {
  Search,
  Download,
  Eye,
  Grid,
  List,
  Filter,
  X,
} from "lucide-react";
import { assetAPI } from "../../services/app";

export default function AssetLibrary() {
  const [view, setView] = useState("grid");
  const [openFilter, setOpenFilter] = useState(false);
  const [assets, setAssets] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    search: "",
    industry_id: "",
    product_id: "",
    asset_type_id: "",
    utilization_id: "",
    language_id: "",
    country_id: "",
  });
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 12,
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  // Fetch all filter options on mount
  useEffect(() => {
    const loadFilters = async () => {
      try {
        const data = await assetAPI.getFilters();
        setFilters(data); // expects: { industries, products, assetTypes, utilizations, languages, countries }
      } catch (error) {
        console.error("Failed to load filters:", error);
      }
    };
    loadFilters();
  }, []);

  // Fetch assets when filters or page change
  useEffect(() => {
    fetchAssets();
  }, [selectedFilters, pagination.current_page]);

  const fetchAssets = async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.current_page,
        ...selectedFilters,
      };
      // Remove empty values so they aren't sent as "undefined"
      Object.keys(params).forEach(key => {
        if (params[key] === "" || params[key] === null || params[key] === undefined) {
          delete params[key];
        }
      });
      const response = await assetAPI.getAssets(params);
      // Assuming response structure: { data: [...], current_page, last_page, total, per_page }
      setAssets(response.data);
      setPagination({
        current_page: response.current_page,
        last_page: response.last_page,
        per_page: response.per_page,
        total: response.total,
      });
    } catch (error) {
      console.error("Failed to load assets:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setSelectedFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, current_page: 1 })); // reset to first page
  };

  const handleDownload = async (id) => {
    const downloadUrl = await assetAPI.downloadAsset(id);
    window.open(downloadUrl, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="bg-gradient-to-r from-[#00786F] to-[#34CFC4] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Access our collection of design resources and tools
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen relative lg:max-w-7xl mx-auto lg:py-20">
        {/* Desktop Sidebar */}
        <aside className="w-72 bg-gray-50 p-5 border border-gray-200 hidden md:block">
          <FiltersSidebar
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </aside>

        {/* Mobile Drawer */}
        {openFilter && (
          <div className="fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpenFilter(false)}></div>
            <div className="relative w-72 bg-white h-full p-5 overflow-y-auto shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Filters</h3>
                <X className="cursor-pointer" onClick={() => setOpenFilter(false)} />
              </div>
              <FiltersSidebar
                filters={filters}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6">
          {/* Header */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-xl font-semibold">Exclusive Assets for Partners</h2>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setOpenFilter(true)}
                className="flex items-center gap-2 border px-3 py-2 rounded md:hidden"
              >
                <Filter size={16} /> Filters
              </button>
              <button
                className={`p-2 border rounded transition-colors ${
                  view === "grid" ? "bg-teal-600 text-white border-teal-600" : "hover:bg-gray-100"
                }`}
                onClick={() => setView("grid")}
              >
                <Grid size={18} />
              </button>
              <button
                className={`p-2 border rounded transition-colors ${
                  view === "list" ? "bg-teal-600 text-white border-teal-600" : "hover:bg-gray-100"
                }`}
                onClick={() => setView("list")}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={selectedFilters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
          </div>

          {/* Assets Grid/List */}
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : (
            <div
              className={`grid gap-4 ${
                view === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {assets.map((item) => (
                <div key={item.id} className="bg-white rounded shadow-sm border overflow-hidden">
                  <img
                    src={item.thumbnail_url || "https://via.placeholder.com/300"}
                    alt={item.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium line-clamp-2">{item.title}</h3>
                  </div>
                  <div className="flex items-center justify-between px-3 pb-3 text-gray-500">
                    <input type="checkbox" />
                    <div className="flex gap-3">
                      <Eye size={18} className="cursor-pointer hover:text-teal-600" />
                      <Download
                        size={18}
                        className="cursor-pointer hover:text-teal-600"
                        onClick={() => handleDownload(item.id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination.last_page > 1 && (
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setPagination(prev => ({ ...prev, current_page: num }))}
                    className={`px-3 py-1 border rounded ${
                      num === pagination.current_page ? "bg-teal-600 text-white" : "bg-white"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* Sidebar Component (receives props) */
function FiltersSidebar({ filters, selectedFilters, onFilterChange }) {
  // Helper to render checkbox sections
  const renderCheckboxGroup = (title, items, filterKey) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-6">
        <h4 className="font-semibold mb-2">{title}</h4>
        <div className="space-y-2">
          {items.map((item) => (
            <label key={item.id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selectedFilters[filterKey] == item.id}
                onChange={() =>
                  onFilterChange(filterKey, selectedFilters[filterKey] == item.id ? "" : item.id)
                }
              />
              {item.name}
            </label>
          ))}
        </div>
      </div>
    );
  };

  const renderSelect = (title, items, filterKey) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-4">
        <h4 className="font-semibold mb-2">{title}</h4>
        <select
          className="w-full border rounded p-2 text-sm"
          value={selectedFilters[filterKey] || ""}
          onChange={(e) => onFilterChange(filterKey, e.target.value)}
        >
          <option value="">Select {title}</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <>
      {renderCheckboxGroup("Industry", filters.industries, "industry_id")}
      {renderCheckboxGroup("Product", filters.products, "product_id")}
      {renderCheckboxGroup("Asset Type", filters.assetTypes, "asset_type_id")}
      {renderCheckboxGroup("Utilization", filters.utilizations, "utilization_id")}
      {renderSelect("Language", filters.languages, "language_id")}
      {renderSelect("Country", filters.countries, "country_id")}
      {renderSelect("Tags", filters.tags, "tag_id")} {/* optional */}
    </>
  );
}