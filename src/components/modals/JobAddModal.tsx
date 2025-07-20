import { X } from "lucide-react";

interface JobAddModalProps {
  open: boolean;
  onClose: (value: boolean) => void;
}
const JobAddModal = ({ open, onClose }: JobAddModalProps) => {
  function handleClose() {
    onClose(false);
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gray-100 max-h-screen overflow-y-auto mx-5 md:mx-0 relative px-8 py-2 md:py-5 rounded-md w-[95%] md:w-[450px] ">
            <button
              onClick={handleClose}
              className="absolute cursor-pointer top-4 right-4"
            >
              <X />
            </button>
            <h1 className="text-gray-800 font-bold text-center text-2xl">
              Add Your Job
            </h1>

            <form className="space-y-1 md:space-y-3 mt-4">
              <div className="flex flex-col space-y-1">
                <label htmlFor="company">Company:</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Enter the company name"
                  className=" border px-1 border-gray-400 rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your location"
                  className=" border px-1 border-gray-400 rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="salary">Salary Range:</label>
                <input
                  type="text"
                  id="salary"
                  className=" border px-1 border-gray-400 rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  className=" border px-1 border-gray-400 rounded-sm outline-none"
                >
                  <option value="applied">Applied</option>
                  <option value="interview">Interview</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                  <option value="withrawn">Withdrawn</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="appliedDate">Applied Date:</label>
                <input
                  type="date"
                  id="appliedDate"
                  className=" border px-1 border-gray-400 rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="jobDescription">Job Description:</label>
                <textarea
                  id="jobDescription"
                  className=" border px-1 border-gray-400 rounded-sm outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="notes">Notes:</label>
                <input
                  type="text"
                  id="notes"
                  placeholder="Enter where you have applied from"
                  className=" border px-1 border-gray-400 rounded-sm outline-none"
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="px-4 py-1  bg-green-700 text-white text-sm rounded-sm">
                  Sumit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JobAddModal;
