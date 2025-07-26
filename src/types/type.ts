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
  setStatusFilter: (value: string | null) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}
