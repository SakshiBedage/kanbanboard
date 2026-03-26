import type { Task } from "../types";
import { useTaskStore } from "../store/useTaskStore";

const TaskCard = ({ task }: { task: Task }) => {
  const deleteTask = useTaskStore((s) => s.deleteTask);
  const moveTask = useTaskStore((s) => s.moveTask);

  const move = (direction: "forward" | "back") => {
    const transitions = {
      todo: { forward: "inprogress" },
      inprogress: { forward: "done", back: "todo" },
      done: { back: "inprogress" },
    };

    const next = transitions[task.column]?.[direction];
    if (!next) return;

    moveTask(task.id, next);
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <div className="actions">
        {task.column !== "todo" && (
          <button onClick={() => move("back")}>←</button>
        )}
        {task.column !== "done" && (
          <button onClick={() => move("forward")}>→</button>
        )}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
