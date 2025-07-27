import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useJobContext } from "../hooks/useJobContext";
import { useDebounce } from "../hooks/useDebounce";

const HeaderSection = () => {
  const { isOpen, setIsOpen, setFilters } = useJobContext();

  const [localFilters, setLocalFilters] = useState({
    searchTerm: "",
    minSalary: "",
    maxSalary: "",
    location: "",
  });

  const debouncedSearch = useDebounce(localFilters.searchTerm, 500);
  const debouncedMinSalary = useDebounce(localFilters.minSalary, 500);
  const debouncedMaxSalary = useDebounce(localFilters.maxSalary, 500);
  const debounceLocation = useDebounce(localFilters.location, 500);

  console.log(debouncedSearch);

  function handleAddJob() {
    setIsOpen(!isOpen);
  }

  function handleChange<T extends HTMLInputElement | HTMLSelectElement>(
    e: React.ChangeEvent<T>,
    identifier: string
  ) {
    const value = e.target.value;

    if (
      identifier === "searchTerm" ||
      identifier === "minSalary" ||
      identifier === "maxSalary" ||
      identifier === "location"
    ) {
      setLocalFilters((prev) => ({ ...prev, [identifier]: value }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [identifier]: identifier === "status" ? value : value.toLowerCase(),
      }));
    }
  }

  // Apply debounced values to central filters
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      searchTerm: debouncedSearch.toLowerCase(),
      minSalary: Number(debouncedMinSalary) || 0,
      maxSalary: Number(debouncedMaxSalary) || Infinity,
      location: debounceLocation.toLowerCase(),
    }));
  }, [
    debouncedSearch,
    debouncedMinSalary,
    debouncedMaxSalary,
    setFilters,
    debounceLocation,
  ]);

  return (
    <div className="mt-24 flex font-jost flex-col md:flex-row justify-center md:justify-between flex-wrap gap-5 md:gap-10 items-center px-5 md:px-14">
      <button
        className=" w-full md:w-auto bg-emerald-500 cursor-pointer flex items-center justify-center px-2 md:px-4 py-1.5 gap-5 md:gap-10 text-white rounded-sm"
        onClick={handleAddJob}
      >
        <span className="text-[14px] md:text-lg">Add job</span>
        <Plus />
      </button>
      <div className=" w-full md:w-auto flex- flex items-center gap-3 md:gap-5 ">
        <input
          placeholder="Search by job title, company"
          className="border w-full md:w-[300px]  border-gray-300 outline-none rounded-md px-1.5 md:px-3 py-1.5"
          type="text"
          name="searchTerm"
          onChange={(e) => handleChange(e, e.target.name)}
          value={localFilters.searchTerm}
        />
      </div>
      <div className="w-full flex flex-col   gap-5 md:flex-row md:w-auto">
        <select
          className="border  border-gray-300 w-full md:w-auto font-poppin text-gray-700 py-1.5 px-1  md:py-1 md:px-3 rounded-sm "
          name="status"
          onChange={(e) => handleChange(e, e.target.name)}
        >
          <option value="">Select Filter</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="withdrawn">Withdrawn</option>
        </select>
        <div className="flex  gap-5 flex-wrap md:w-auto">
          <input
            type="text"
            className="border w-25 border-gray-300 outline-none rounded-md px-1.5 md:px-3 py-1.5"
            placeholder="Location"
            name="location"
            onChange={(e) => handleChange(e, e.target.name)}
          />
          <input
            type="number"
            className="border w-28 border-gray-300 outline-none rounded-md px-1.5 md:px-3 py-1.5"
            placeholder="Min salary"
            name="minSalary"
            onChange={(e) => handleChange(e, e.target.name)}
            value={localFilters.minSalary}
          />
          <input
            type="number"
            className="border w-28 border-gray-300 outline-none rounded-md px-1.5 md:px-3 py-1.5"
            placeholder="Max-salary"
            name="maxSalary"
            onChange={(e) => handleChange(e, e.target.name)}
            value={localFilters.maxSalary}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
