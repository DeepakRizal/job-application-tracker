import { useState, useRef, useEffect } from "react";
import { useJobContext } from "../../hooks/useJobContext";
import type { Status } from "../../types/type";

const MobileFilter = () => {
  const { filters, setFilters, setShowMobileFilters, showMobileFilters } =
    useJobContext();

  const panelRef = useRef<HTMLDivElement>(null);

  const [localFilters, setLocalFilters] = useState({
    searchTerm: "",
    minSalary: "",
    maxSalary: "",
    location: "",
    status: "",
  });

  // Sync context filters to localFilters when panel opens
  useEffect(() => {
    if (showMobileFilters) {
      setLocalFilters({
        searchTerm: filters.searchTerm || "",
        minSalary: filters.minSalary?.toString() || "",
        maxSalary: filters.maxSalary?.toString() || "",
        location: filters.location || "",
        status: filters.status || "",
      });
    }
  }, [showMobileFilters, filters]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowMobileFilters(false);
      }
    }

    if (showMobileFilters) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileFilters, setShowMobileFilters]);

  const handleApplyFilters = () => {
    setFilters({
      searchTerm: localFilters.searchTerm.toLowerCase(),
      location: localFilters.location.toLowerCase(),
      status: localFilters.status as Status | "",
      minSalary: Number(localFilters.minSalary) || 0,
      maxSalary: Number(localFilters.maxSalary) || Infinity,
    });
    setShowMobileFilters(false);
  };

  return (
    <div>
      {showMobileFilters && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 bg-opacity-30 z-30" />

          {/* Sliding Panel */}
          <div
            ref={panelRef}
            className="fixed z-40 top-0 right-0 h-full w-3/4 bg-white shadow-lg p-4 flex flex-col gap-4 transition-transform duration-300"
          >
            <h2 className="text-lg font-semibold">Filter Jobs</h2>

            <input
              type="text"
              placeholder="Search by job or company"
              className="border px-2 py-1 rounded"
              value={localFilters.searchTerm}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, searchTerm: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Location"
              className="border px-2 py-1 rounded"
              value={localFilters.location}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, location: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Min Salary"
              className="border px-2 py-1 rounded"
              value={localFilters.minSalary}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, minSalary: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Max Salary"
              className="border px-2 py-1 rounded"
              value={localFilters.maxSalary}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, maxSalary: e.target.value })
              }
            />
            <select
              className="border px-2 py-1 rounded text-gray-700"
              value={localFilters.status}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  status: e.target.value,
                })
              }
            >
              <option value="">Select Status</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="withdrawn">Withdrawn</option>
            </select>

            <button
              onClick={handleApplyFilters}
              className="bg-emerald-600 text-white px-3 py-1 rounded mt-2"
            >
              Apply Filters
            </button>

            <button
              onClick={() => setShowMobileFilters(false)}
              className="text-sm text-red-500 mt-1"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileFilter;
