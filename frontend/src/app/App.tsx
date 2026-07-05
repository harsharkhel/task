import React, { useState } from "react";
import { Sidebar, type NavPage } from "./components/Sidebar";
import { Dashboard, type Task } from "./components/Dashboard";
import { TaskModal } from "./components/TaskModal";
import { Analytics } from "./components/Analytics";

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

export default function App() {
  const [activePage, setActivePage] = useState<NavPage>("Dashboard");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (taskData: Omit<Task, "id" | "timeLogged">) => {
    setTasks((prev) => [
      ...prev,
      { ...taskData, id: generateId(), timeLogged: 0 },
    ]);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="flex h-screen w-full overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <Sidebar
        activePage={activePage}
        onNavigate={(page) => {
          setActivePage(page);
          if (page === "Tasks") openModal();
        }}
      />

      <div className="flex flex-col flex-1 min-w-0">
        {activePage === "Dashboard" || activePage === "Tasks" ? (
          <Dashboard
            tasks={tasks}
            onTasksChange={setTasks}
            onNewTask={openModal}
          />
        ) : activePage === "Time Tracker" ? (
          <PlaceholderPage title="Time Tracker" description="View detailed time tracking reports and manage your timers." />
        ) : activePage === "Analytics" ? (
          <Analytics tasks={tasks} />
        ) : (
          <PlaceholderPage title="Settings" description="Configure your TaskFlow Pro preferences and account settings." />
        )}
      </div>

      {showModal && (
        <TaskModal onClose={closeModal} onAdd={handleAddTask} />
      )}
    </div>
  );
}

function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#FDF4FF" }}
    >
      <div className="text-center">
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "24px",
            fontWeight: 600,
            color: "#8B1FA8",
            marginBottom: "8px",
          }}
        >
          {title}
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B7280" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
