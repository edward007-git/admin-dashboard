import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const profitData = [
  { name: "Revenue", value: 90000 },
  { name: "Expenses", value: 70000 },
  { name: "Profit", value: 37000 },
];
const COLORS = ["#6366F1", "#F59E0B", "#10B981"];

function ProfitPieChart() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-slate-700/60 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">
        Profit Distribution
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={profitData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={95}
           
              dataKey="value"
            >
              {profitData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProfitPieChart;
