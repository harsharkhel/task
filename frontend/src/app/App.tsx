import React, { useState, useEffect, useCallback } from "react";
import { Sidebar, type NavPage } from "./components/Sidebar";
import { Dashboard, type Task } from "./components/Dashboard";
import { TaskModal } from "./components/TaskModal";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";

export default function App() {
  const [activePage, setActivePage] = useState<NavPage>("Dashboard");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadTasks = useCallback(async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      console.error("Failed to load tasks:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleAddTask = async (taskData: Omit<Task, "id" | "timeLogged">) => {
    try {
      await createTask({
        name: taskData.name,
        category: taskData.category,
        status: taskData.status,
        dueDate: taskData.dueDate,
      });
      await loadTasks();
    } catch (err) {
      console.error("Failed to create task:", err);
    }
  };

  const handleUpdateTask = async (id: string, updates: Partial<Task>) => {
    try {
      await updateTask(id, updates);
      await loadTasks();
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask(id);
      await loadTasks();
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
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
            loading={loading}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
            onNewTask={openModal}
          />
        ) : activePage === "Time Tracker" ? (
          <PlaceholderPage title="Time Tracker" description="View detailed time tracking reports and manage your timers." />
        ) : activePage === "Analytics" ? (
          <PlaceholderPage title="Analytics" description="Analyze your productivity trends and task completion rates." />
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
