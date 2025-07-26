export interface JobApplication {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryRange: string;
  status: string;
  appliedDate: string;
  jobDescription: string;
  notes: string;
}

export type JobApplicationList = JobApplication[];

export interface filters {
  status: string;
  searchTerm: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  dateApplied: string;
}

// Type for context value
export interface JobContextType {
  appliedJobs: JobApplicationList;
  setApplyJobs: React.Dispatch<React.SetStateAction<JobApplicationList>>;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  editingJob: JobApplication | null;
  setEditingJob: (value: JobApplication | null) => void;
  isDelete: boolean;
  setIsDelete: (value: boolean) => void;
  deleteJobId: string | null;
  setDeleteJobId: (value: string) => void;
  handleEdit: (value: string) => void;
  filteredJobs: JobApplicationList;
  handleUpdateJob: (value: JobApplication) => void;
  filters: filters;
  setFilters: React.Dispatch<React.SetStateAction<filters>>;
}
