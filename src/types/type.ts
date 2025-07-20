export interface JobApplication {
  company: string;
  location: string;
  salaryRange: string;
  status: string;
  appliedDate: string;
  jobDescription: string;
  notes: string;
}

export type JobApplicationList = JobApplication[];
