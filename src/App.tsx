import React, { useEffect, useState } from "react";
import JobAddModal from "./components/modals/JobAddModal";
import Navbar from "./components/navbar/Navbar";
import type { JobApplication, JobApplicationList } from "./types/type";
import DeleteModal from "./components/modals/DeleteModal";
import JobList from "./components/jobs/JobList";
import HeaderSection from "./components/HeaderSection";
import EmptyJobState from "./components/EmptyJobState";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [appliedJobs, setApplyJobs] = useState<JobApplicationList>(() => {
    const jobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    return jobs;
  });
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteJobId, setDeleteJobId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredJobs = statusFilter
    ? appliedJobs.filter((job) => job.status === statusFilter)
    : appliedJobs;

  useEffect(() => {
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);

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

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatusFilter(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <HeaderSection
        onModalOpen={setIsOpen}
        isOpen={isOpen}
        onStatusChange={handleStatusChange}
      />
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

      <JobList
        jobs={filteredJobs}
        onDelete={handleDelete}
        onEdit={handleEdit}
        isDelete={setIsDelete}
      />

      {appliedJobs.length === 0 && <EmptyJobState />}
    </div>
  );
}

export default App;
