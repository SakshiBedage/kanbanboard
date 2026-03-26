import type { Column as ColumnInterface } from "../types";
import { useTaskStore } from "../store/useTaskStore";
import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

interface ColumnProps {
  column: ColumnInterface;
}

const Column = ({ column }: ColumnProps) => {
  const allTasks = useTaskStore((state) => state.tasks);

  const columnTasks = allTasks.filter((t) => t.column === column.id);

  return (
    <div className={`column column-${column.id}`}>
      <h2>
        {column.title} ({columnTasks.length})
      </h2>

      {columnTasks.length === 0 ? (
        <EmptyState />
      ) : (
        columnTasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
};

export default Column;
