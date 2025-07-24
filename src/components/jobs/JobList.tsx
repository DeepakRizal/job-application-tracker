import type { JobApplicationList } from "../../types/type";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: JobApplicationList;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isDelete: (value: boolean) => void;
}

const JobList = ({ jobs, onEdit, onDelete, isDelete }: JobListProps) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
      {jobs.length > 0 &&
        jobs.map((job) => {
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
              onEdit={onEdit}
              onDelete={onDelete}
              isDelete={isDelete}
            />
          );
        })}
    </div>
  );
};

export default JobList;
