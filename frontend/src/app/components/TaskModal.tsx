import React, { useState } from "react";
import { X } from "lucide-react";
import type { Task } from "./Dashboard";

interface TaskModalProps {
  onClose: () => void;
  onAdd: (task: Omit<Task, "id" | "timeLogged">) => void;
}

const categories = ["Work", "Personal", "Health", "Learning", "Other"];

export function TaskModal({ onClose, onAdd }: TaskModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState<"today" | "upcoming">("today");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name: name.trim(), category, status: "pending", dueDate });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 600, color: "#111827" }}>
            Add New Task
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Task Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter task name..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2"
              style={{ fontFamily: "Inter, sans-serif", outlineColor: "#8B1FA8" }}
              autoFocus
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Due
            </label>
            <div className="flex gap-3">
              {(["today", "upcoming"] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDueDate(d)}
                  className="flex-1 py-2 rounded-lg border text-sm font-medium capitalize transition-colors"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    borderColor: dueDate === d ? "#8B1FA8" : "#D1D5DB",
                    backgroundColor: dueDate === d ? "#F3E5F5" : "white",
                    color: dueDate === d ? "#8B1FA8" : "#6B7280",
                  }}
                >
                  {d === "today" ? "Today" : "Upcoming"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8B1FA8", fontFamily: "Inter, sans-serif" }}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
