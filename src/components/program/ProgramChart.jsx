import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const ProgramChart = ({ impactData }) => {
  if (!impactData || impactData.length === 0) {
    return (
      <p className="text-gray-500 mt-4">
        No impact data available
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-green-700 mb-4">
        Program Impact (Animals Rescued Per Year)
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={impactData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="rescued" fill="#15803d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgramChart;
