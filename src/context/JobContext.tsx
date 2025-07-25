import React, { useEffect, useState } from "react";
import type { JobApplication, JobApplicationList } from "../types/type";
import { jobContext } from "./jobContext";

interface JobProviderProps {
  children: React.ReactNode;
}

export const JobProvider = ({ children }: JobProviderProps) => {
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

  function handleUpdateJob(updatedJob: JobApplication) {
    setApplyJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  }

  function handleEdit(id: string) {
    const jobToEdit = appliedJobs.find((job) => job.id === id);
    if (jobToEdit) {
      setEditingJob(jobToEdit);
    }
    setIsOpen(true);
  }

  useEffect(() => {
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  return (
    <jobContext.Provider
      value={{
        appliedJobs,
        setApplyJobs,
        isOpen,
        setIsOpen,
        editingJob,
        setEditingJob,
        isDelete,
        setIsDelete,
        deleteJobId,
        setDeleteJobId,
        handleEdit,
        filteredJobs,
        handleUpdateJob,
        setStatusFilter,
      }}
    >
      {children}
    </jobContext.Provider>
  );
};
