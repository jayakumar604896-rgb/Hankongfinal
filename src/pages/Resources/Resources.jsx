import React, { useState, useEffect } from "react";
import {
  Search,
  Download,
  Eye,
  Grid,
  List,
  Filter,
  X,
  CheckSquare,
  Square,
  DownloadCloud,
} from "lucide-react";
import { assetAPI } from "../../services/app";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AssetLibrary() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [view, setView] = useState("grid");
  const [openFilter, setOpenFilter] = useState(false);
  const [assets, setAssets] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({
    search: "",
    industry_id: "",
    //product_id: "",
    asset_type_id: "",
    //utilization_id: "",
    language_id: "",
    //country_id: "",
  });
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 12,
    total: 0,
  });
  const [loading, setLoading] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [pendingAssetId, setPendingAssetId] = useState(null);
  const [previewAsset, setPreviewAsset] = useState(null);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [bulkDownloading, setBulkDownloading] = useState(false);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const data = await assetAPI.getFilters();
        setFilters(data);
      } catch (error) {
        console.error("Failed to load filters:", error);
      }
    };
    loadFilters();
  }, []);

  useEffect(() => {
    fetchAssets();
    setSelectedAssets([]);
    setIsSelectMode(false);
  }, [selectedFilters, pagination.current_page]);

  useEffect(() => {
    const pendingId = localStorage.getItem('pendingDownload');
    if (user && pendingId) {
      localStorage.removeItem('pendingDownload');
      performDownload(parseInt(pendingId));
    }
  }, [user]);

  const fetchAssets = async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.current_page,
        ...selectedFilters,
      };
      Object.keys(params).forEach(key => {
        if (params[key] === "" || params[key] === null || params[key] === undefined) {
          delete params[key];
        }
      });
      const response = await assetAPI.getAssets(params);
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
    setPagination(prev => ({ ...prev, current_page: 1 }));
  };

  const performDownload = async (id) => {
    try {
      const success = await assetAPI.downloadAsset(id);
      if (success) {
        console.log('Download started successfully');
      }
    } catch (error) {
      console.error("Download failed:", error);
      if (error.message === 'UNAUTHORIZED' || error.message === 'NO_TOKEN') {
        setPendingAssetId(id);
        setShowLoginPrompt(true);
      } else {
        alert("Failed to download. Please try again.");
      }
    }
  };

  const handleDownload = async (id, e) => {
    if (e) e.stopPropagation();

    if (!user) {
      setPendingAssetId(id);
      setShowLoginPrompt(true);
      return;
    }

    if (isSelectMode) {
      toggleAssetSelection(id);
      return;
    }

    await performDownload(id);
  };

  const toggleAssetSelection = (assetId) => {
    setSelectedAssets(prev => {
      if (prev.includes(assetId)) {
        return prev.filter(id => id !== assetId);
      } else {
        return [...prev, assetId];
      }
    });
  };

  const selectAllOnPage = () => {
    const currentPageAssetIds = assets.map(asset => asset.id);
    setSelectedAssets(currentPageAssetIds);
  };

  const clearSelections = () => {
    setSelectedAssets([]);
    setIsSelectMode(false);
  };

  const handleBulkDownload = async () => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }

    if (selectedAssets.length === 0) {
      alert("Please select at least one asset to download");
      return;
    }

    setBulkDownloading(true);

    let successCount = 0;
    let failCount = 0;

    try {
      for (const id of selectedAssets) {
        try {
          await assetAPI.downloadAssetSequential(id);
          successCount++;
          await new Promise(resolve => setTimeout(resolve, 800));
        } catch (err) {
          console.error(`Failed to download asset ${id}:`, err);
          if (err.message === 'UNAUTHORIZED' || err.message === 'NO_TOKEN') {
            throw new Error('SESSION_EXPIRED');
          }
          failCount++;
        }
      }

      setSelectedAssets([]);
      setIsSelectMode(false);

      if (failCount === 0 && successCount > 0) {
        alert(`Successfully downloaded ${successCount} asset(s)!`);
      } else if (successCount > 0 && failCount > 0) {
        alert(`Downloaded ${successCount} asset(s). Failed: ${failCount}. Please try again for failed items.`);
      } else if (failCount > 0 && successCount === 0) {
        alert(`Failed to download ${failCount} asset(s). Please check your connection and try again.`);
      }
    } catch (error) {
      if (error.message === 'SESSION_EXPIRED') {
        alert('Your session has expired. Please login again.');
        setShowLoginPrompt(true);
      } else {
        console.error("Bulk download failed:", error);
        alert("Failed to download selected assets. Please try again.");
      }
    } finally {
      setBulkDownloading(false);
    }
  };

  const handlePreview = (asset) => {
    setPreviewAsset(asset);
  };

  const closePreview = () => {
    setPreviewAsset(null);
  };

  const handleLoginRedirect = () => {
    if (pendingAssetId) {
      localStorage.setItem('pendingDownload', pendingAssetId);
    }
    navigate('/signup', { state: { from: '/resources', assetId: pendingAssetId } });
    setShowLoginPrompt(false);
  };

  return (
    <>
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
        <aside className="w-72 bg-gray-50 p-5 border border-gray-200 hidden md:block rounded-lg">
          <FiltersSidebar
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </aside>

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

        <div className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">Exclusive Assets for Partners</h2>

              {user && assets.length > 0 && (
                <button
                  onClick={() => {
                    setIsSelectMode(!isSelectMode);
                    if (isSelectMode) setSelectedAssets([]);
                  }}
                  className={`text-sm px-3 py-1 rounded-[5px] transition-colors ${isSelectMode
                      ? 'bg-teal-600 text-white'
                      : 'border border-gray-300 hover:border-teal-600'
                    }`}
                >
                  {isSelectMode ? 'Exit Select Mode' : 'Select Multiple'}
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {isSelectMode && selectedAssets.length > 0 && (
                <button
                  onClick={handleBulkDownload}
                  disabled={bulkDownloading}
                  className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors disabled:opacity-50"
                >
                  {bulkDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <DownloadCloud size={18} />
                      <span>Download {selectedAssets.length} item(s)</span>
                    </>
                  )}
                </button>
              )}

              {isSelectMode && assets.length > 0 && (
                <>
                  <button
                    onClick={selectAllOnPage}
                    className="flex items-center gap-1 border px-3 py-2 rounded hover:bg-gray-50 text-sm"
                  >
                    <CheckSquare size={16} />
                    Select All
                  </button>
                  <button
                    onClick={clearSelections}
                    className="flex items-center gap-1 border px-3 py-2 rounded hover:bg-gray-50 text-sm"
                  >
                    <Square size={16} />
                    Clear
                  </button>
                </>
              )}

              <button
                onClick={() => setOpenFilter(true)}
                className="flex items-center gap-2 border px-3 py-2 rounded md:hidden"
              >
                <Filter size={16} /> Filters
              </button>

              <button
                className={`p-2 border rounded transition-colors ${view === "grid" ? "bg-teal-600 text-white border-teal-600" : "hover:bg-gray-100"
                  }`}
                onClick={() => setView("grid")}
              >
                <Grid size={18} />
              </button>
              <button
                className={`p-2 border rounded transition-colors ${view === "list" ? "bg-teal-600 text-white border-teal-600" : "hover:bg-gray-100"
                  }`}
                onClick={() => setView("list")}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {isSelectMode && selectedAssets.length > 0 && (
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 mb-4 flex justify-between items-center">
              <span className="text-teal-700 text-sm">
                {selectedAssets.length} asset(s) selected
              </span>
              <button
                onClick={clearSelections}
                className="text-teal-600 hover:text-teal-700 text-sm font-medium"
              >
                Clear selection
              </button>
            </div>
          )}

          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={selectedFilters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
              <p className="mt-2 text-gray-500">Loading resources...</p>
            </div>
          ) : assets.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No resources found.</p>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${view === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
                }`}
            >
              {assets.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-all ${isSelectMode && selectedAssets.includes(item.id)
                      ? 'ring-2 ring-teal-500 border-teal-500'
                      : ''
                    }`}
                  onClick={() => isSelectMode && toggleAssetSelection(item.id)}
                >
                  <img
                    src={item.thumbnail_url || "https://via.placeholder.com/300x200?text=No+Image"}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 line-clamp-2 mb-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between px-4 pb-4 pt-2 text-gray-500 border-t">
                    <div className="flex items-center gap-2">
                      {isSelectMode ? (
                        <input
                          type="checkbox"
                          checked={selectedAssets.includes(item.id)}
                          onChange={() => toggleAssetSelection(item.id)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                      ) : (
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 focus:ring-teal-500"
                          onChange={() => toggleAssetSelection(item.id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      )}
                      <span className="text-xs text-gray-400">Select</span>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreview(item);
                        }}
                        className="p-1 hover:text-teal-600 transition-colors"
                        title="Preview"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={(e) => handleDownload(item.id, e)}
                        className="p-1 hover:text-teal-600 transition-colors"
                        title={isSelectMode ? "Select for bulk download" : "Download"}
                      >
                        <Download size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {pagination.last_page > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <button
                  onClick={() => setPagination(prev => ({ ...prev, current_page: Math.max(1, prev.current_page - 1) }))}
                  disabled={pagination.current_page === 1}
                  className={`px-3 py-1 border rounded ${pagination.current_page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                >
                  Previous
                </button>
                {Array.from({ length: Math.min(5, pagination.last_page) }, (_, i) => {
                  let pageNum;
                  if (pagination.last_page <= 5) {
                    pageNum = i + 1;
                  } else if (pagination.current_page <= 3) {
                    pageNum = i + 1;
                  } else if (pagination.current_page >= pagination.last_page - 2) {
                    pageNum = pagination.last_page - 4 + i;
                  } else {
                    pageNum = pagination.current_page - 2 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPagination(prev => ({ ...prev, current_page: pageNum }))}
                      className={`px-3 py-1 border rounded ${pageNum === pagination.current_page ? "bg-teal-600 text-white" : "hover:bg-gray-50"
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setPagination(prev => ({ ...prev, current_page: Math.min(prev.last_page, prev.current_page + 1) }))}
                  disabled={pagination.current_page === pagination.last_page}
                  className={`px-3 py-1 border rounded ${pagination.current_page === pagination.last_page ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download size={28} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Login Required</h3>
              <p className="text-gray-600 mb-6">
                Please login to download resources. It only takes a minute!
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLoginPrompt(false)}
                  className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLoginRedirect}
                  className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Login Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {previewAsset && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-lg">{previewAsset.title}</h3>
              <button
                onClick={closePreview}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <img
                src={previewAsset.thumbnail_url || "https://via.placeholder.com/600x400?text=No+Image"}
                alt={previewAsset.title}
                className="w-full rounded-lg mb-4"
              />
              {previewAsset.description && (
                <p className="text-gray-600 mb-4">{previewAsset.description}</p>
              )}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    closePreview();
                    handleDownload(previewAsset.id);
                  }}
                  className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Download
                </button>
                <button
                  onClick={closePreview}
                  className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FiltersSidebar({ filters, selectedFilters, onFilterChange }) {
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showAllAssetTypes, setShowAllAssetTypes] = useState(false);
  const [showAllUtilizations, setShowAllUtilizations] = useState(false);

  const renderCheckboxGroup = (title, items, filterKey, showAll, setShowAll, limit = 5) => {
    if (!items || items.length === 0) return null;

    const displayItems = showAll ? items : items.slice(0, limit);
    const hasMore = items.length > limit;

    return (
      <div className="mb-6">
        <h4 className="font-semibold mb-2 text-gray-900">{title}</h4>
        <div className="space-y-2">
          {displayItems.map((item) => (
            <label key={item.id} className="flex items-center gap-2 text-sm cursor-pointer hover:text-teal-600">
              <input
                type="checkbox"
                checked={selectedFilters[filterKey] == item.id}
                onChange={() =>
                  onFilterChange(filterKey, selectedFilters[filterKey] == item.id ? "" : item.id)
                }
                className="rounded border-gray-300 focus:ring-teal-500"
              />
              <span className="text-gray-700">{item.name}</span>
            </label>
          ))}
          {hasMore && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-teal-600 hover:text-teal-700 mt-1"
            >
              {showAll ? "Show less" : `Show all (${items.length})`}
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderSelect = (title, items, filterKey) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-gray-900">{title}</h4>
        <select
          className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={selectedFilters[filterKey] || ""}
          onChange={(e) => onFilterChange(filterKey, e.target.value)}
        >
          <option value="">All {title}</option>
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
    <div>
      <h3 className="text-lg font-bold mb-4 text-gray-900">Filters</h3>

      {renderCheckboxGroup("Industry", filters.industries, "industry_id", showAllIndustries, setShowAllIndustries)}
      {/* {renderCheckboxGroup("Product", filters.products, "product_id", showAllProducts, setShowAllProducts)} */}
      {renderCheckboxGroup("Asset Type", filters.assetTypes, "asset_type_id", showAllAssetTypes, setShowAllAssetTypes)}
      {/* {renderCheckboxGroup("Utilization", filters.utilizations, "utilization_id", showAllUtilizations, setShowAllUtilizations)} */}
      {renderSelect("Language", filters.languages, "language_id")}
      {/* {renderSelect("Country", filters.countries, "country_id")} */}
      {filters.tags && filters.tags.length > 0 && renderSelect("Tags", filters.tags, "tag_id")}

      <button
        onClick={() => {
          onFilterChange("industry_id", "");
          //onFilterChange("product_id", "");
          onFilterChange("asset_type_id", "");
          // onFilterChange("utilization_id", "");
          onFilterChange("language_id", "");
          // onFilterChange("country_id", "");
          onFilterChange("tag_id", "");
        }}
        className="w-full mt-4 px-4 py-2 text-sm text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
      >
        Reset All Filters
      </button>
    </div>
  );
}