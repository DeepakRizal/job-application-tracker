import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const jobList = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Developer",
    status: "Applied",
    appliedDate: "2025-07-01",
    salary: 120000,
  },
  {
    id: 2,
    company: "Amazon",
    position: "Backend Developer",
    status: "Interview",
    appliedDate: "2025-07-01",
    salary: 115000,
  },
  {
    id: 3,
    company: "Netflix",
    position: "Full Stack Developer",
    status: "Offer",
    appliedDate: "2025-07-02",
    salary: 130000,
  },
  {
    id: 4,
    company: "Meta",
    position: "Frontend Developer",
    status: "Rejected",
    appliedDate: "2025-07-02",
    salary: 110000,
  },
  {
    id: 5,
    company: "Apple",
    position: "DevOps Engineer",
    status: "Applied",
    appliedDate: "2025-07-02",
    salary: 125000,
  },
  {
    id: 6,
    company: "Tesla",
    position: "Data Engineer",
    status: "Interview",
    appliedDate: "2025-07-03",
    salary: 118000,
  },
  {
    id: 7,
    company: "Adobe",
    position: "Backend Developer",
    status: "Rejected",
    appliedDate: "2025-07-03",
    salary: 113000,
  },
  {
    id: 8,
    company: "Microsoft",
    position: "Software Engineer",
    status: "Offer",
    appliedDate: "2025-07-03",
    salary: 135000,
  },
  {
    id: 9,
    company: "Spotify",
    position: "Frontend Developer",
    status: "Applied",
    appliedDate: "2025-07-04",
    salary: 108000,
  },
  {
    id: 10,
    company: "Airbnb",
    position: "Full Stack Developer",
    status: "Rejected",
    appliedDate: "2025-07-04",
    salary: 112000,
  },
  {
    id: 11,
    company: "Dropbox",
    position: "SRE",
    status: "Applied",
    appliedDate: "2025-07-05",
    salary: 122000,
  },
  {
    id: 12,
    company: "Salesforce",
    position: "Cloud Engineer",
    status: "Interview",
    appliedDate: "2025-07-05",
    salary: 119000,
  },
  {
    id: 13,
    company: "Uber",
    position: "Frontend Developer",
    status: "Offer",
    appliedDate: "2025-07-05",
    salary: 123000,
  },
  {
    id: 14,
    company: "Stripe",
    position: "Backend Developer",
    status: "Rejected",
    appliedDate: "2025-07-06",
    salary: 117000,
  },
  {
    id: 15,
    company: "Twilio",
    position: "DevOps",
    status: "Applied",
    appliedDate: "2025-07-06",
    salary: 116000,
  },
  {
    id: 16,
    company: "Slack",
    position: "Platform Engineer",
    status: "Interview",
    appliedDate: "2025-07-06",
    salary: 121000,
  },
  {
    id: 17,
    company: "Zoom",
    position: "Frontend Developer",
    status: "Offer",
    appliedDate: "2025-07-07",
    salary: 111000,
  },
  {
    id: 18,
    company: "Reddit",
    position: "Software Engineer",
    status: "Rejected",
    appliedDate: "2025-07-07",
    salary: 109000,
  },
  {
    id: 19,
    company: "Twitter",
    position: "ML Engineer",
    status: "Applied",
    appliedDate: "2025-07-08",
    salary: 133000,
  },
  {
    id: 20,
    company: "Intel",
    position: "AI Engineer",
    status: "Interview",
    appliedDate: "2025-07-08",
    salary: 128000,
  },
  {
    id: 21,
    company: "Nvidia",
    position: "Graphics Engineer",
    status: "Offer",
    appliedDate: "2025-07-08",
    salary: 137000,
  },
  {
    id: 22,
    company: "Oracle",
    position: "Cloud Developer",
    status: "Rejected",
    appliedDate: "2025-07-09",
    salary: 106000,
  },
  {
    id: 23,
    company: "Samsung",
    position: "Software Engineer",
    status: "Applied",
    appliedDate: "2025-07-09",
    salary: 115000,
  },
  {
    id: 24,
    company: "LG",
    position: "Embedded Developer",
    status: "Interview",
    appliedDate: "2025-07-10",
    salary: 110000,
  },
  {
    id: 25,
    company: "Zomato",
    position: "Frontend Developer",
    status: "Rejected",
    appliedDate: "2025-07-10",
    salary: 102000,
  },
  {
    id: 26,
    company: "Swiggy",
    position: "Backend Developer",
    status: "Applied",
    appliedDate: "2025-07-11",
    salary: 105000,
  },
  {
    id: 27,
    company: "Flipkart",
    position: "Full Stack Developer",
    status: "Interview",
    appliedDate: "2025-07-11",
    salary: 117000,
  },
  {
    id: 28,
    company: "Ola",
    position: "DevOps Engineer",
    status: "Offer",
    appliedDate: "2025-07-11",
    salary: 120000,
  },
  {
    id: 29,
    company: "Paytm",
    position: "Data Engineer",
    status: "Applied",
    appliedDate: "2025-07-12",
    salary: 107000,
  },
  {
    id: 30,
    company: "Byju's",
    position: "QA Engineer",
    status: "Rejected",
    appliedDate: "2025-07-12",
    salary: 99000,
  },
  {
    id: 31,
    company: "Infosys",
    position: "Cloud Engineer",
    status: "Applied",
    appliedDate: "2025-07-01",
    salary: 102000,
  },
  {
    id: 32,
    company: "Wipro",
    position: "Data Analyst",
    status: "Applied",
    appliedDate: "2025-07-01",
    salary: 98000,
  },
  {
    id: 33,
    company: "TCS",
    position: "Backend Developer",
    status: "Applied",
    appliedDate: "2025-07-02",
    salary: 101000,
  },
  {
    id: 34,
    company: "Accenture",
    position: "Frontend Developer",
    status: "Applied",
    appliedDate: "2025-07-02",
    salary: 99000,
  },
  {
    id: 35,
    company: "Capgemini",
    position: "Software Engineer",
    status: "Applied",
    appliedDate: "2025-07-03",
    salary: 103000,
  },
  {
    id: 36,
    company: "Cognizant",
    position: "DevOps Engineer",
    status: "Applied",
    appliedDate: "2025-07-03",
    salary: 105000,
  },
  {
    id: 37,
    company: "Mindtree",
    position: "Full Stack Developer",
    status: "Applied",
    appliedDate: "2025-07-04",
    salary: 100000,
  },
  {
    id: 38,
    company: "Zoho",
    position: "Support Engineer",
    status: "Applied",
    appliedDate: "2025-07-04",
    salary: 97000,
  },
  {
    id: 39,
    company: "Freshworks",
    position: "QA Tester",
    status: "Applied",
    appliedDate: "2025-07-05",
    salary: 96000,
  },
  {
    id: 40,
    company: "Hexaware",
    position: "AI Engineer",
    status: "Applied",
    appliedDate: "2025-07-05",
    salary: 104000,
  },
  {
    id: 41,
    company: "LTI",
    position: "ML Engineer",
    status: "Applied",
    appliedDate: "2025-07-06",
    salary: 108000,
  },
  {
    id: 42,
    company: "Tech Mahindra",
    position: "Cybersecurity Analyst",
    status: "Applied",
    appliedDate: "2025-07-06",
    salary: 99000,
  },
  {
    id: 43,
    company: "HCL",
    position: "Frontend Developer",
    status: "Applied",
    appliedDate: "2025-07-07",
    salary: 101000,
  },
  {
    id: 44,
    company: "Dell",
    position: "Cloud Engineer",
    status: "Applied",
    appliedDate: "2025-07-07",
    salary: 106000,
  },
  {
    id: 45,
    company: "HP",
    position: "Backend Developer",
    status: "Applied",
    appliedDate: "2025-07-08",
    salary: 104000,
  },
  {
    id: 46,
    company: "SAP",
    position: "Full Stack Developer",
    status: "Applied",
    appliedDate: "2025-07-08",
    salary: 107000,
  },
  {
    id: 47,
    company: "EY",
    position: "Data Engineer",
    status: "Applied",
    appliedDate: "2025-07-09",
    salary: 103000,
  },
  {
    id: 48,
    company: "KPMG",
    position: "Cloud Developer",
    status: "Applied",
    appliedDate: "2025-07-09",
    salary: 101000,
  },
  {
    id: 49,
    company: "Deloitte",
    position: "DevOps",
    status: "Applied",
    appliedDate: "2025-07-10",
    salary: 105000,
  },
  {
    id: 50,
    company: "PwC",
    position: "Software Engineer",
    status: "Applied",
    appliedDate: "2025-07-10",
    salary: 100000,
  },
];

const statusCount = jobList.reduce((acc: Record<string, number>, job) => {
  acc[job.status] = (acc[job.status] || 0) + 1;
  return acc;
}, {});

const data = Object.entries(statusCount).map(([status, count]) => ({
  name: status,
  value: count,
}));

const appliedJobsPerDate = jobList
  .filter((job) => job.status === "Applied")
  .reduce((acc: Record<string, number>, job) => {
    acc[job.appliedDate] = (acc[job.appliedDate] || 0) + 1;
    return acc;
  }, {});

console.log(appliedJobsPerDate);

const appliedDateData = Object.entries(appliedJobsPerDate).map(
  ([date, count]) => ({
    date,
    count,
  })
);

console.log(appliedDateData);

const Analytics = () => {
  return (
    <div className="py-6 mx-10 flex flex-col gap-5 md:flex-row flex-wrap items-center justify-center ">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <LineChart
        width={730}
        height={250}
        data={appliedDateData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Analytics;
