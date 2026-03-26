import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task, ColumnType } from "../types";

interface TaskState {
  tasks: Task[];

  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, column: ColumnType) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      moveTask: (id, column) =>
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === id ? { ...t, column } : t)),
        })),
    }),
    {
      name: "kanban-storage",
    },
  ),
);
