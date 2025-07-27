import React, { useEffect, useState } from "react";
import type {
  Filters,
  JobApplication,
  JobApplicationList,
} from "../types/type";
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

  const [filters, setFilters] = useState<Filters>({
    status: "",
    searchTerm: "",
    location: "",
    minSalary: 0,
    maxSalary: Infinity,
  });

  const filteredJobs = appliedJobs.filter((job) => {
    const [min, max] = job.salaryRange
      .replace(/\$/g, "")
      .split("-")
      .map((val) => Number(val.replace(/,/g, "")));

    return (
      (filters.status ? job.status === filters.status : true) &&
      (filters.searchTerm
        ? job.title.toLowerCase().includes(filters.searchTerm) ||
          job.company.toLowerCase().includes(filters.searchTerm)
        : true) &&
      (filters.location
        ? job.location.toLowerCase().includes(filters.location)
        : true) &&
      min >= filters.minSalary &&
      max <= filters.maxSalary
    );
  });

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

  const jobContextValue = {
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
    filters,
    setFilters,
  };

  return (
    <jobContext.Provider value={jobContextValue}>
      {children}
    </jobContext.Provider>
  );
};
