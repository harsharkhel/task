import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { ChevronLeft, ChevronRight, Clock, TrendingUp, Target, Zap } from "lucide-react";
import type { Task } from "./Dashboard";

interface AnalyticsProps {
  tasks: Task[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Work: "#8B1FA8",
  Personal: "#EC4899",
  Health: "#10B981",
  Learning: "#3B82F6",
  Other: "#F59E0B",
};

function formatHM(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${h}h ${m}m`;
}

function formatHMShort(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h === 0) return `${m}m`;
  return `${h}h${m > 0 ? ` ${m}m` : ""}`;
}

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

// Generate demo time data seeded from real tasks
function buildDemoData(tasks: Task[], year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  // Build per-day seconds from real task timeLogged (distribute across days in month as demo)
  const realTotal = tasks.reduce((s, t) => s + t.timeLogged, 0);

  // Generate realistic daily data
  const days: { day: number; seconds: number }[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const isPast = date <= today;
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    if (!isPast) { days.push({ day: d, seconds: 0 }); continue; }
    // Use a deterministic pseudo-random based on date + real data
    const seed = (year * 12 + month + d * 31 + realTotal) % 100;
    const base = isWeekend ? 1200 : 3600;
    const variance = ((seed * 137 + d * 59) % 100) / 100;
    const skip = ((seed + d) % 7 === 0); // occasional day off
    const s = skip ? 0 : Math.round(base + variance * (isWeekend ? 2400 : 14400));
    days.push({ day: d, seconds: s });
  }

  // Blend in real tasks' time into today's slot
  if (year === today.getFullYear() && month === today.getMonth()) {
    const todayIdx = days.findIndex((d) => d.day === today.getDate());
    if (todayIdx !== -1) days[todayIdx].seconds += realTotal;
  }

  return days;
}

function buildCategoryData(tasks: Task[]) {
  const map: Record<string, number> = {};
  for (const t of tasks) {
    map[t.category] = (map[t.category] ?? 0) + t.timeLogged;
  }
  return Object.entries(map)
    .filter(([, v]) => v > 0)
    .map(([name, seconds]) => ({ name, seconds, hours: +(seconds / 3600).toFixed(1) }));
}

function intensityColor(seconds: number, maxSeconds: number): string {
  if (seconds === 0) return "#F3F4F6";
  const ratio = Math.min(seconds / maxSeconds, 1);
  if (ratio < 0.25) return "#F3E5F5";
  if (ratio < 0.5)  return "#CE93D8";
  if (ratio < 0.75) return "#AB47BC";
  return "#8B1FA8";
}

export function Analytics({ tasks }: AnalyticsProps) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());

  const dailyData = useMemo(
    () => buildDemoData(tasks, viewYear, viewMonth),
    [tasks, viewYear, viewMonth]
  );

  const maxSeconds = useMemo(() => Math.max(...dailyData.map((d) => d.seconds), 1), [dailyData]);

  const totalSeconds = dailyData.reduce((s, d) => s + d.seconds, 0);
  const workedDays = dailyData.filter((d) => d.seconds > 0).length;
  const avgSeconds = workedDays > 0 ? Math.round(totalSeconds / workedDays) : 0;
  const bestDay = dailyData.reduce((best, d) => (d.seconds > best.seconds ? d : best), { day: 0, seconds: 0 });

  const categoryData = useMemo(() => buildCategoryData(tasks), [tasks]);

  // Calendar grid
  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelectedDay(null);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelectedDay(null);
  };

  const selectedData = selectedDay ? dailyData.find((d) => d.day === selectedDay) : null;

  // Bar chart — last 14 days of current month
  const barData = dailyData.slice(-14).map((d) => ({
    day: `${d.day}`,
    hours: +(d.seconds / 3600).toFixed(1),
  }));

  const isCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  return (
    <div className="flex-1 overflow-y-auto" style={{ backgroundColor: "#FDF4FF" }}>
      <div className="px-8 py-6 space-y-5">
        {/* Header */}
        <div>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 700, color: "#8B1FA8" }}>
            Analytics
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#6B7280", marginTop: "2px" }}>
            Analyze your productivity and working time patterns
          </p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Total This Month", value: formatHM(totalSeconds), icon: <Clock size={18} />, color: "#8B1FA8" },
            { label: "Days Worked", value: `${workedDays} days`, icon: <Target size={18} />, color: "#16a34a" },
            { label: "Daily Average", value: formatHM(avgSeconds), icon: <TrendingUp size={18} />, color: "#3B82F6" },
            { label: "Best Day", value: bestDay.seconds > 0 ? `${MONTH_NAMES[viewMonth].slice(0,3)} ${bestDay.day}` : "—", icon: <Zap size={18} />, color: "#F59E0B" },
          ].map(({ label, value, icon, color }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {label}
                </p>
                <span style={{ color }}>{icon}</span>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "24px", fontWeight: 700, color: "#111827" }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[300px_1fr] gap-5">
          {/* Calendar */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            {/* Month nav */}
            <div className="flex items-center justify-between mb-4">
              <button onClick={prevMonth} className="p-1 rounded-md hover:bg-gray-100 text-gray-500 transition-colors">
                <ChevronLeft size={18} />
              </button>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 600, color: "#111827" }}>
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
              <button onClick={nextMonth} className="p-1 rounded-md hover:bg-gray-100 text-gray-500 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 mb-1">
              {DAY_LABELS.map((d) => (
                <div key={d} className="text-center" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#9CA3AF", paddingBottom: "4px" }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar cells */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty cells before first day */}
              {Array.from({ length: firstDow }).map((_, i) => (
                <div key={`e-${i}`} />
              ))}
              {/* Day cells */}
              {dailyData.map(({ day, seconds }) => {
                const isToday = isCurrentMonth && day === today.getDate();
                const isSelected = selectedDay === day;
                const isFuture = new Date(viewYear, viewMonth, day) > today;
                const bg = isSelected
                  ? "#8B1FA8"
                  : isFuture
                  ? "transparent"
                  : intensityColor(seconds, maxSeconds);
                const textColor = isSelected ? "white" : isToday ? "#8B1FA8" : isFuture ? "#D1D5DB" : "#374151";

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(isSelected ? null : day)}
                    disabled={isFuture}
                    className="relative flex flex-col items-center justify-center rounded-lg transition-all"
                    style={{
                      height: "36px",
                      backgroundColor: bg,
                      border: isToday && !isSelected ? "2px solid #8B1FA8" : "2px solid transparent",
                      cursor: isFuture ? "default" : "pointer",
                    }}
                    title={isFuture ? "" : `${MONTH_NAMES[viewMonth]} ${day}: ${formatHMShort(seconds)}`}
                  >
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: isToday || isSelected ? 700 : 400, color: textColor }}>
                      {day}
                    </span>
                    {seconds > 0 && !isSelected && (
                      <div
                        className="absolute bottom-1 rounded-full"
                        style={{ width: "4px", height: "4px", backgroundColor: "#8B1FA8", opacity: 0.5 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4">
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#9CA3AF" }}>Less</span>
              {["#F3E5F5", "#CE93D8", "#AB47BC", "#8B1FA8"].map((c) => (
                <div key={c} className="rounded" style={{ width: "18px", height: "12px", backgroundColor: c }} />
              ))}
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#9CA3AF" }}>More</span>
            </div>

            {/* Selected day detail */}
            {selectedDay && selectedData && (
              <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: "#F3E5F5" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "#8B1FA8" }}>
                  {MONTH_NAMES[viewMonth]} {selectedDay}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: 700, color: "#8B1FA8", marginTop: "2px" }}>
                  {formatHM(selectedData.seconds)}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#6B7280", marginTop: "2px" }}>
                  {selectedData.seconds === 0
                    ? "No time logged"
                    : selectedData.seconds > avgSeconds
                    ? "Above your average"
                    : "Below your average"}
                </p>
              </div>
            )}
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Daily bar chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600, color: "#111827", marginBottom: "16px" }}>
                Daily Hours — Last 14 Days
              </h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={barData} barSize={18}>
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontFamily: "Inter, sans-serif", fontSize: 11, fill: "#9CA3AF" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontFamily: "Inter, sans-serif", fontSize: 11, fill: "#9CA3AF" }}
                    tickFormatter={(v) => `${v}h`}
                  />
                  <Tooltip
                    formatter={(v: number) => [`${v}h`, "Hours"]}
                    labelFormatter={(l) => `Day ${l}`}
                    contentStyle={{ fontFamily: "Inter, sans-serif", fontSize: "12px", borderRadius: "8px", border: "1px solid #E5E7EB" }}
                  />
                  <Bar dataKey="hours" radius={[4, 4, 0, 0]} fill="#8B1FA8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Category breakdown */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600, color: "#111827", marginBottom: "16px" }}>
                Time by Category
              </h3>
              {categoryData.length === 0 ? (
                <div className="flex items-center justify-center h-28">
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#9CA3AF" }}>
                    No category data yet. Start tracking tasks!
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-6">
                  <ResponsiveContainer width={160} height={160}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        dataKey="hours"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={72}
                        paddingAngle={3}
                      >
                        {categoryData.map((entry) => (
                          <Cell key={entry.name} fill={CATEGORY_COLORS[entry.name] ?? "#9CA3AF"} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(v: number) => [`${v}h`, "Hours"]}
                        contentStyle={{ fontFamily: "Inter, sans-serif", fontSize: "12px", borderRadius: "8px" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex-1 space-y-2">
                    {categoryData.map((c) => {
                      const pct = totalSeconds > 0
                        ? Math.round((c.seconds / totalSeconds) * 100)
                        : 0;
                      return (
                        <div key={c.name}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[c.name] ?? "#9CA3AF" }} />
                              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#374151" }}>{c.name}</span>
                            </div>
                            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#6B7280" }}>
                              {c.hours}h · {pct}%
                            </span>
                          </div>
                          <div className="w-full rounded-full h-1.5" style={{ backgroundColor: "#F3F4F6" }}>
                            <div
                              className="h-1.5 rounded-full"
                              style={{ width: `${pct}%`, backgroundColor: CATEGORY_COLORS[c.name] ?? "#9CA3AF" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Monthly summary table */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 600, color: "#111827", marginBottom: "16px" }}>
            Weekly Summary — {MONTH_NAMES[viewMonth]}
          </h3>
          <div className="grid grid-cols-5 gap-px bg-gray-100 rounded-lg overflow-hidden">
            {["Week", "Mon–Fri", "Sat–Sun", "Total", "vs Average"].map((h) => (
              <div key={h} className="bg-gray-50 px-3 py-2">
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {h}
                </span>
              </div>
            ))}
            {buildWeeklyRows(dailyData, viewYear, viewMonth, avgSeconds).map((row) => (
              <React.Fragment key={row.week}>
                {[row.week, row.weekday, row.weekend, row.total, row.vsAvg].map((cell, ci) => (
                  <div key={ci} className="bg-white px-3 py-2.5 border-t border-gray-100">
                    <span style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      color: ci === 4 ? (row.vsAvgSign >= 0 ? "#16a34a" : "#DC2626") : "#374151",
                      fontWeight: ci === 3 ? 600 : 400,
                    }}>
                      {cell}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function buildWeeklyRows(
  dailyData: { day: number; seconds: number }[],
  year: number,
  month: number,
  avgDaySeconds: number
) {
  const rows = [];
  let weekNum = 1;
  let i = 0;
  while (i < dailyData.length) {
    const chunk = dailyData.slice(i, i + 7);
    const weekdaySec = chunk
      .filter((d) => {
        const dow = new Date(year, month, d.day).getDay();
        return dow !== 0 && dow !== 6;
      })
      .reduce((s, d) => s + d.seconds, 0);
    const weekendSec = chunk
      .filter((d) => {
        const dow = new Date(year, month, d.day).getDay();
        return dow === 0 || dow === 6;
      })
      .reduce((s, d) => s + d.seconds, 0);
    const total = weekdaySec + weekendSec;
    const workedDaysInWeek = chunk.filter((d) => d.seconds > 0).length;
    const expected = avgDaySeconds * workedDaysInWeek;
    const diff = total - expected;
    rows.push({
      week: `Week ${weekNum}`,
      weekday: formatHM(weekdaySec),
      weekend: formatHM(weekendSec),
      total: formatHM(total),
      vsAvg: diff === 0 || avgDaySeconds === 0 ? "—" : `${diff > 0 ? "+" : ""}${formatHM(Math.abs(diff))}`,
      vsAvgSign: diff,
    });
    weekNum++;
    i += 7;
  }
  return rows;
}
