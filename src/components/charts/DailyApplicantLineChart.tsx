import {
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
} from "recharts";

interface DailyJobApply {
  date: string;
  count: number;
}

interface DailyApplicantLineChartProps {
  appliedDateData: DailyJobApply[];
}

const DailyApplicantLineChart = ({
  appliedDateData,
}: DailyApplicantLineChartProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-2xl text-bold font-outfit mb-10">
        Jobs applied on last seven days
      </h2>
      <LineChart
        width={530}
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

export default DailyApplicantLineChart;
