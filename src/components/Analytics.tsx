import StatusPieChart from "./charts/StatusPieChart";
import DailyApplicantLineChart from "./charts/DailyApplicantLineChart";
import { useJobContext } from "../hooks/useJobContext";

const Analytics = () => {
  const { appliedJobs } = useJobContext();

  const statusCount = appliedJobs.reduce((acc: Record<string, number>, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(statusCount).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const recentApplication = appliedJobs.filter((job) => {
    const jobDate = new Date(job.appliedDate);

    return job.status === "applied" && jobDate >= sevenDaysAgo;
  });

  const appliedJobsPerDate = recentApplication
    .filter((job) => job.status === "applied")
    .reduce((acc: Record<string, number>, job) => {
      acc[job.appliedDate] = (acc[job.appliedDate] || 0) + 1;
      return acc;
    }, {});

  const appliedDateData = Object.entries(appliedJobsPerDate).map(
    ([date, count]) => {
      const dateFormat = date.split("-").slice(1).join("-");
      return {
        originalDate: date,
        date: dateFormat,
        count,
      };
    }
  );

  appliedDateData.sort(
    (a, b) =>
      new Date(a.originalDate).getTime() - new Date(b.originalDate).getTime()
  );

  return (
    <div className="py-10 mx-10 flex flex-col gap-5 md:flex-row flex-wrap items-center justify-center ">
      <StatusPieChart data={data} />
      <DailyApplicantLineChart appliedDateData={appliedDateData} />
    </div>
  );
};

export default Analytics;
