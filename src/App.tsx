import { useState } from "react";
import JobAddModal from "./components/modals/JobAddModal";
import Navbar from "./components/navbar/Navbar";
import { Plus } from "lucide-react";
import type { JobApplication, JobApplicationList } from "./types/type";
import JobCard from "./components/jobs/JobCard";
import DeleteModal from "./components/modals/DeleteModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [appliedJobs, setApplyJobs] = useState<JobApplicationList>([]);
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteJobId, setDeleteJobId] = useState<string | null>(null);

  function handleEdit(id: string) {
    const jobToEdit = appliedJobs.find((job) => job.id === id);
    if (jobToEdit) {
      setEditingJob(jobToEdit);
    }
    setIsOpen(true);
  }

  function handleUpdateJob(updatedJob: JobApplication) {
    setApplyJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  }

  function handleDelete(id: string) {
    setDeleteJobId(id);
  }

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
          <span className="text-[14px] md:text-lg">Add job</span>
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
      {isOpen && (
        <JobAddModal
          onAddJob={setApplyJobs}
          open={isOpen}
          onClose={setIsOpen}
          jobToEdit={editingJob}
          onUpdateJob={handleUpdateJob}
        />
      )}
      {isDelete && (
        <DeleteModal
          id={deleteJobId}
          onCancel={setIsDelete}
          onDelete={setApplyJobs}
        />
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
        {appliedJobs.length > 0 &&
          appliedJobs.map((job) => {
            return (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                description={job.jobDescription}
                salary={job.salaryRange}
                date={job.appliedDate}
                notes={job.notes}
                status={job.status}
                company={job.company}
                location={job.location}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isDelete={setIsDelete}
              />
            );
          })}
      </div>
      <div className="flex items-center justify-center text-2xl h-[50vh]">
        {appliedJobs.length === 0 && <p>NO JOBS TO SHOW</p>}
      </div>
    </div>
  );
}

export default App;
