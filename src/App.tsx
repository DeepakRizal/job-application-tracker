import React, { useState } from "react";
import JobAddModal from "./components/modals/JobAddModal";
import Navbar from "./components/navbar/Navbar";
import type { JobApplication } from "./types/type";
import DeleteModal from "./components/modals/DeleteModal";
import JobList from "./components/jobs/JobList";
import HeaderSection from "./components/HeaderSection";
import EmptyJobState from "./components/EmptyJobState";
import { useJobContext } from "./hooks/useJobContext";

function App() {
  const { appliedJobs, setApplyJobs, isOpen, isDelete } = useJobContext();

  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredJobs = statusFilter
    ? appliedJobs.filter((job) => job.status === statusFilter)
    : appliedJobs;

  function handleUpdateJob(updatedJob: JobApplication) {
    setApplyJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setStatusFilter(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <HeaderSection onStatusChange={handleStatusChange} />
      {isOpen && <JobAddModal onUpdateJob={handleUpdateJob} />}
      {isDelete && <DeleteModal />}

      <JobList jobs={filteredJobs} />

      {appliedJobs.length === 0 && <EmptyJobState />}
    </div>
  );
}

export default App;
