import React from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Timer,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  Plus,
} from "lucide-react";

export type NavPage = "Dashboard" | "Tasks" | "Time Tracker" | "Analytics" | "Settings";

interface SidebarProps {
  activePage: NavPage;
  onNavigate: (page: NavPage) => void;
}

const navItems: { label: NavPage; icon: React.ReactNode }[] = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Tasks", icon: <CheckSquare size={18} /> },
  { label: "Time Tracker", icon: <Timer size={18} /> },
  { label: "Analytics", icon: <BarChart2 size={18} /> },
  { label: "Settings", icon: <Settings size={18} /> },
];

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <div className="flex flex-col h-full w-[210px] bg-white border-r border-gray-200 shrink-0">
      {/* Logo */}
      <div className="px-5 pt-6 pb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#8B1FA8] rounded-md flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ color: "#8B1FA8", fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 700 }}>
            TaskFlow Pro
          </span>
        </div>
        <p style={{ color: "#9CA3AF", fontFamily: "Inter, sans-serif", fontSize: "12px", marginTop: "2px", paddingLeft: "2px" }}>
          Productive Session
        </p>
      </div>

      {/* New Task Button */}
      <div className="px-4 mb-4">
        <button
          className="w-full flex items-center justify-center gap-2 py-2 rounded-md text-white text-sm font-medium"
          style={{ backgroundColor: "#8B1FA8" }}
          onClick={() => onNavigate("Tasks")}
        >
          <Plus size={16} />
          New Task
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ label, icon }) => {
          const active = activePage === label;
          return (
            <button
              key={label}
              onClick={() => onNavigate(label)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors"
              style={{
                backgroundColor: active ? "#F3E5F5" : "transparent",
                color: active ? "#8B1FA8" : "#6B7280",
                fontFamily: "Inter, sans-serif",
                fontWeight: active ? 600 : 400,
              }}
            >
              {icon}
              {label}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-6">
        <div className="border-t border-gray-200 pt-4 space-y-1">
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-500 hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <HelpCircle size={18} />
            Help
          </button>
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-500 hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
