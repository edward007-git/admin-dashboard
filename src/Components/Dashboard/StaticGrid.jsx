import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { stats } from "../../data/Stats";

const StaticGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-full min-w-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border
         border-slate-200/50 dark:border-slate-700/50 rounded-xl p-5 hover:shadow-xl 
         hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 truncate">
                {stat.title}
              </p>

              <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {stat.value}
              </p>

              <div className="flex items-center flex-wrap gap-1">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}

                <span
                  className={`text-sm font-semibold ${
                    stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  vs last month
                </span>
              </div>
            </div>

            {/* Icon Box */}
            <div
              className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-all duration-200 flex-shrink-0`}
            >
              <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
            </div>
          </div>

          {/* Progress Bar INSIDE Card */}
          <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${stat.color}`}
              style={{ width: stat.trend === "up" ? "75%" : "45%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaticGrid;
