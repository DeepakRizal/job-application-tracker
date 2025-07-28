import { PieChart, Cell, Legend, Pie, Tooltip } from "recharts";

interface statusData {
  name: string;
  value: number;
}

interface statusPieChartProps {
  data: statusData[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const StatusPieChart = ({ data }: statusPieChartProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-2xl text-bold font-outfit">
        Status chart of your job
      </h2>
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
    </div>
  );
};

export default StatusPieChart;
