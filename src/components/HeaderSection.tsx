import { Plus } from "lucide-react";
import type React from "react";
import { useJobContext } from "../hooks/useJobContext";

const HeaderSection = () => {
  const { isOpen, setIsOpen, filters, setFilters } = useJobContext();

  function handleAddJob() {
    setIsOpen(!isOpen);
  }

  function handleChange<T extends HTMLInputElement | HTMLSelectElement>(
    e: React.ChangeEvent<T>,
    identifier: string
  ) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [identifier]: e.target.value,
    }));
  }

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, e.target.name)
          }
          value={filters.searchTerm}
        />
      </div>
      <div className="w-full flex flex-col   gap-5 md:flex-row md:w-auto">
        <select
          className="border  w-full md:w-auto font-poppin py-1.5 px-1  md:py-1 md:px-3 rounded-sm border-gray-400"
          name="status"
          id="all-status"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleChange(e, e.target.name)
          }
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
          />
          <input
            type="number"
            className="border w-28 border-gray-300 outline-none rounded-md px-1.5 md:px-3 py-1.5"
            placeholder="Min salary"
          />
          <input
            type="number"
            className="border w-28 border-gray-300 outline-none rounded-md px-1.5 md:px-3 py-1.5"
            placeholder="Max-salary"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
