import React, { useState, useEffect, useRef } from "react";
import {
  Bell,
  History,
  ClipboardList,
  CheckCircle2,
  Clock,
  Stopwatch,
  Play,
  Square,
  Trash2,
  Check,
} from "lucide-react";

export type TaskStatus = "pending" | "in-progress" | "completed";
export type DueDate = "today" | "upcoming";

export interface Task {
  id: string;
  name: string;
  category: string;
  status: TaskStatus;
  dueDate: DueDate;
  timeLogged: number; // seconds
}

interface DashboardProps {
  tasks: Task[];
  onTasksChange: (tasks: Task[]) => void;
  onNewTask: () => void;
}

type Tab = "Today" | "Upcoming" | "Completed";

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${h}h ${m}m`;
}

function formatTimeShort(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

const categoryColors: Record<string, string> = {
  Work: "#EDE9FE",
  Personal: "#FCE7F3",
  Health: "#D1FAE5",
  Learning: "#DBEAFE",
  Other: "#FEF3C7",
};

const categoryTextColors: Record<string, string> = {
  Work: "#6D28D9",
  Personal: "#BE185D",
  Health: "#065F46",
  Learning: "#1E40AF",
  Other: "#92400E",
};

const statusLabels: Record<TaskStatus, string> = {
  "pending": "Pending",
  "in-progress": "In Progress",
  "completed": "Completed",
};

const statusColors: Record<TaskStatus, { bg: string; text: string }> = {
  "pending": { bg: "#FEF3C7", text: "#92400E" },
  "in-progress": { bg: "#DBEAFE", text: "#1E40AF" },
  "completed": { bg: "#D1FAE5", text: "#065F46" },
};

export function Dashboard({ tasks, onTasksChange, onNewTask }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Today");
  const [timerTaskId, setTimerTaskId] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timerTaskId) {
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [timerTaskId]);

  const startTimer = (taskId: string) => {
    if (timerTaskId === taskId) {
      // stop
      onTasksChange(
        tasks.map((t) =>
          t.id === taskId ? { ...t, timeLogged: t.timeLogged + elapsed } : t
        )
      );
      setElapsed(0);
      setTimerTaskId(null);
    } else {
      if (timerTaskId) {
        onTasksChange(
          tasks.map((t) =>
            t.id === timerTaskId ? { ...t, timeLogged: t.timeLogged + elapsed } : t
          )
        );
        setElapsed(0);
      }
      setTimerTaskId(taskId);
    }
  };

  const stopGlobalTimer = () => {
    if (timerTaskId) {
      onTasksChange(
        tasks.map((t) =>
          t.id === timerTaskId ? { ...t, timeLogged: t.timeLogged + elapsed } : t
        )
      );
      setElapsed(0);
      setTimerTaskId(null);
    }
  };

  const markComplete = (taskId: string) => {
    if (timerTaskId === taskId) {
      onTasksChange(
        tasks.map((t) =>
          t.id === taskId ? { ...t, status: "completed", timeLogged: t.timeLogged + elapsed } : t
        )
      );
      setElapsed(0);
      setTimerTaskId(null);
    } else {
      onTasksChange(
        tasks.map((t) =>
          t.id === taskId ? { ...t, status: t.status === "completed" ? "pending" : "completed" } : t
        )
      );
    }
  };

  const deleteTask = (taskId: string) => {
    if (timerTaskId === taskId) {
      setTimerTaskId(null);
      setElapsed(0);
    }
    onTasksChange(tasks.filter((t) => t.id !== taskId));
  };

  const todayTasks = tasks.filter((t) => t.dueDate === "today");
  const upcomingTasks = tasks.filter((t) => t.dueDate === "upcoming");
  const completedTasks = tasks.filter((t) => t.status === "completed");

  const tasksToday = todayTasks.length;
  const completedCount = completedTasks.length;
  const totalTimeLogged = tasks.reduce((sum, t) => sum + t.timeLogged, 0) + (timerTaskId ? elapsed : 0);
  const activeTimerTask = tasks.find((t) => t.id === timerTaskId);

  const tabTasks: Record<Tab, Task[]> = {
    Today: todayTasks.filter((t) => t.status !== "completed"),
    Upcoming: upcomingTasks.filter((t) => t.status !== "completed"),
    Completed: completedTasks,
  };
  const displayTasks = tabTasks[activeTab];

  return (
    <div className="flex flex-col flex-1 min-h-0" style={{ backgroundColor: "#FDF4FF" }}>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-3 bg-white border-b border-gray-200">
        <div className="flex items-end gap-0">
          {(["Today", "Upcoming", "Completed"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-4 py-2 text-sm transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                color: activeTab === tab ? "#8B1FA8" : "#6B7280",
                fontWeight: activeTab === tab ? 600 : 400,
              }}
            >
              {tab}
              {activeTab === tab && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: "#8B1FA8" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={timerTaskId ? stopGlobalTimer : onNewTask}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              backgroundColor: timerTaskId ? "#DC2626" : "#16a34a",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {timerTaskId ? (
              <>
                <Square size={14} />
                Stop Timer
              </>
            ) : (
              <>
                <Clock size={14} />
                Start Timer
              </>
            )}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
            <History size={20} />
          </button>
          <div
            className="w-9 h-9 rounded-full overflow-hidden border-2 flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: "#8B1FA8", borderColor: "#D8B4FE" }}
          >
            U
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {/* Tasks Today */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col justify-between">
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Tasks Today
            </p>
            <div className="flex items-end justify-between mt-3">
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "32px", fontWeight: 600, color: "#111827" }}>
                {tasksToday}
              </span>
              <ClipboardList size={22} color="#D1D5DB" />
            </div>
          </div>

          {/* Completed */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col justify-between">
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Completed
            </p>
            <div className="flex items-end justify-between mt-3">
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "32px", fontWeight: 600, color: "#111827" }}>
                {completedCount}
              </span>
              <CheckCircle2 size={22} color="#D1D5DB" />
            </div>
          </div>

          {/* Time Logged */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col justify-between">
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Time Logged
            </p>
            <div className="flex items-end justify-between mt-3">
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "28px", fontWeight: 600, color: "#8B1FA8" }}>
                {formatTime(totalTimeLogged)}
              </span>
              <Clock size={22} color="#D1D5DB" />
            </div>
          </div>

          {/* Active Timer */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col justify-between">
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Active Timer
            </p>
            <div className="flex items-end justify-between mt-3">
              {timerTaskId ? (
                <div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 600, color: "#16a34a" }}>
                    {formatTimeShort(elapsed)}
                  </span>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#6B7280", marginTop: "2px" }}>
                    {activeTimerTask?.name.slice(0, 18)}{(activeTimerTask?.name.length ?? 0) > 18 ? "…" : ""}
                  </p>
                </div>
              ) : (
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "28px", fontWeight: 600, color: "#14532D" }}>
                  None
                </span>
              )}
              <Clock size={22} color="#D1D5DB" />
            </div>
          </div>
        </div>

        {/* Current Tasks Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 600, color: "#8B1FA8" }}>
              {activeTab === "Today" ? "Current Tasks" : activeTab === "Upcoming" ? "Upcoming Tasks" : "Completed Tasks"}
            </h2>
            <button
              onClick={() => setActiveTab(activeTab === "Today" ? "Completed" : "Today")}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#16a34a", fontWeight: 500 }}
              className="hover:opacity-80 transition-opacity"
            >
              View All
            </button>
          </div>

          {/* Table Header */}
          <div
            className="grid px-6 py-2"
            style={{
              gridTemplateColumns: "100px 1fr 120px 120px 100px",
              borderBottom: "1px solid #F3F4F6",
            }}
          >
            {["STATUS", "TASK NAME", "CATEGORY", "TIME LOGGED", "ACTIONS"].map((col) => (
              <span
                key={col}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#9CA3AF",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {col}
              </span>
            ))}
          </div>

          {/* Rows */}
          {displayTasks.length === 0 ? (
            <div className="py-12 text-center">
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B7280" }}>
                {activeTab === "Today"
                  ? "No active tasks. Enjoy your break!"
                  : activeTab === "Upcoming"
                  ? "No upcoming tasks scheduled."
                  : "No completed tasks yet."}
              </p>
            </div>
          ) : (
            <div>
              {displayTasks.map((task) => {
                const isRunning = timerTaskId === task.id;
                const taskTime = task.timeLogged + (isRunning ? elapsed : 0);
                return (
                  <div
                    key={task.id}
                    className="grid px-6 py-3 items-center hover:bg-gray-50 transition-colors"
                    style={{
                      gridTemplateColumns: "100px 1fr 120px 120px 100px",
                      borderBottom: "1px solid #F9FAFB",
                    }}
                  >
                    {/* Status */}
                    <div>
                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: statusColors[task.status].bg,
                          color: statusColors[task.status].text,
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {statusLabels[task.status]}
                      </span>
                    </div>

                    {/* Task Name */}
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        color: "#111827",
                        textDecoration: task.status === "completed" ? "line-through" : "none",
                        opacity: task.status === "completed" ? 0.6 : 1,
                      }}
                    >
                      {task.name}
                    </span>

                    {/* Category */}
                    <div>
                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: categoryColors[task.category] ?? "#F3F4F6",
                          color: categoryTextColors[task.category] ?? "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {task.category}
                      </span>
                    </div>

                    {/* Time Logged */}
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        color: taskTime > 0 ? "#8B1FA8" : "#9CA3AF",
                        fontWeight: taskTime > 0 ? 500 : 400,
                      }}
                    >
                      {formatTime(taskTime)}
                    </span>

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                      {task.status !== "completed" && (
                        <button
                          onClick={() => startTimer(task.id)}
                          title={isRunning ? "Stop timer" : "Start timer"}
                          className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
                          style={{ color: isRunning ? "#DC2626" : "#16a34a" }}
                        >
                          {isRunning ? <Square size={15} /> : <Play size={15} />}
                        </button>
                      )}
                      <button
                        onClick={() => markComplete(task.id)}
                        title={task.status === "completed" ? "Mark pending" : "Mark complete"}
                        className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
                        style={{ color: task.status === "completed" ? "#16a34a" : "#6B7280" }}
                      >
                        <Check size={15} />
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        title="Delete task"
                        className="p-1.5 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
