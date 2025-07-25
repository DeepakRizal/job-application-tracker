import { Plus } from "lucide-react";
import type React from "react";
import { useJobContext } from "../hooks/useJobContext";

const HeaderSection = () => {
  const { isOpen, setIsOpen, setStatusFilter } = useJobContext();
  function handleAddJob() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mt-5 flex justify-between flex-wrap gap-5 md:gap-10 items-center px-5 md:px-14">
      <button
        className="bg-emerald-500 cursor-pointer flex items-center justify-center px-2 md:px-4 py-1 gap-5 md:gap-10 text-white rounded-sm"
        onClick={handleAddJob}
      >
        <span className="text-[14px] md:text-lg">Add job</span>
        <Plus />
      </button>
      <div className=" flex-2/3  flex items-center gap-3 md:gap-5 ">
        <input
          placeholder="Search by job title, company"
          className="border border-gray-300 outline-none flex-2/3 rounded-md px-1.5 md:px-3 py-1"
          type="text"
        />
        <button className="bg-gray-300 px-3 py-1 rounded-md cursor-pointer">
          Search
        </button>
      </div>
      <div>
        <div>
          <select
            className="border font-poppin py-0 px-1  md:py-1 md:px-3 rounded-sm border-gray-400"
            name="all-status"
            id="all-status"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
              setStatusFilter(event.target.value)
            }
          >
            <option value="">Select Filter</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="withdrawn">Withdrawn</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
