const API_BASE = 'http://localhost:3000';

export interface TaskData {
  id: string;
  name: string;
  category: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: 'today' | 'upcoming';
  timeLogged: number;
}

export interface CreateTaskPayload {
  name: string;
  category: string;
  status?: 'pending' | 'in-progress' | 'completed';
  dueDate?: 'today' | 'upcoming';
}

export interface UpdateTaskPayload {
  name?: string;
  category?: string;
  status?: 'pending' | 'in-progress' | 'completed';
  dueDate?: 'today' | 'upcoming';
  timeLogged?: number;
}

export async function fetchTasks(): Promise<TaskData[]> {
  const res = await fetch(`${API_BASE}/tasks`);
  if (!res.ok) throw new Error(`Failed to fetch tasks: ${res.status}`);
  return res.json();
}

export async function createTask(payload: CreateTaskPayload): Promise<TaskData> {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to create task: ${res.status}`);
  return res.json();
}

export async function updateTask(id: string, payload: UpdateTaskPayload): Promise<TaskData> {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to update task: ${res.status}`);
  return res.json();
}

export async function deleteTask(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error(`Failed to delete task: ${res.status}`);
}
