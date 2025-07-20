import { useState } from "react";
import JobAddModal from "./components/modals/JobAddModal";
import Navbar from "./components/navbar/Navbar";
import { Plus } from "lucide-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModalOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar />
      <div className="mt-5 flex justify-between items-center px-5 md:px-14">
        <button
          className="bg-emerald-500 cursor-pointer flex items-center justify-center px-2 md:px-4 py-1 gap-5 md:gap-10 text-white rounded-sm"
          onClick={handleModalOpen}
        >
          <span className="text-[14px] md:text-lg"> Add job</span>
          <Plus />
        </button>
        <div>
          <div className="flex gap-2 md:gap-5">
            <select
              className="border font-poppin py-0 px-1  md:py-1 md:px-3 rounded-sm border-gray-400"
              name="all-status"
              id="all-status"
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="withdrawn">Withdrawn</option>
            </select>
            <select
              className="border font-poppin py-0 px-1  md:py-1 md:px-3 rounded-sm border-gray-400"
              name="dateApplied"
              id="dateApplied"
            >
              <option value="dateApplied">Date Applied</option>
              <option value="jobTitle">Job Title</option>
              <option value="company">Company</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
      </div>
      {isOpen && <JobAddModal open={isOpen} onClose={setIsOpen} />}
    </div>
  );
}

export default App;
