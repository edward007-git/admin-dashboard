import React from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 52000, expenses: 34000 },
  { month: "Mar", revenue: 58000, expenses: 35000 },
  { month: "Apr", revenue: 61000, expenses: 38000 },
  { month: "May", revenue: 64000, expenses: 39000 },
  { month: "Jun", revenue: 67000, expenses: 42000 },
  { month: "Jul", revenue: 69000, expenses: 43000 },
  { month: "Aug", revenue: 72000, expenses: 45000 },
  { month: "Sep", revenue: 74500, expenses: 46000 },
  { month: "Oct", revenue: 76000, expenses: 48000 },
  { month: "Nov", revenue: 81000, expenses: 50000 },
  { month: "Dec", revenue: 89000, expenses: 52000 },
];

function RevenueChart() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-slate-700/60 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Revenue vs Expenses
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Monthly performance for the current year
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 px-3 py-1 text-xs">
          <TrendingUp className="w-4 h-4" />
          <span>+18.4% vs last year</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 16, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                borderRadius: "0.75rem",
                border: "1px solid #1e293b",
                padding: "8px 10px",
              }}
              labelStyle={{ color: "#e2e8f0", fontSize: 12 }}
            />
            <Legend verticalAlign="top" height={24} />

            <Line
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#4f46e5"
              strokeWidth={2.2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              name="Expenses"
              stroke="#f97316"
              strokeWidth={2.2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}





export default RevenueChart