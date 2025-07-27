import { useJobContext } from "../../hooks/useJobContext";
import JobCard from "./JobCard";

const JobList = () => {
  const { filteredJobs } = useJobContext();
  return (
    <div className=" py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
      {filteredJobs.length > 0 &&
        filteredJobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.jobDescription}
              salary={job.salaryRange}
              date={job.appliedDate}
              notes={job.notes}
              status={job.status || "applied"}
              company={job.company}
              location={job.location}
            />
          );
        })}
    </div>
  );
};

export default JobList;
