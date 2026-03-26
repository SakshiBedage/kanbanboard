import Column from "./Column";
import AddTask from "./AddTask";
import type { Column as ColumnInterface } from "../types";

const COLUMNS: ColumnInterface[] = [
  { id: "todo", title: "To Do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

const Board = () => {
  return (
    <div className="board">
      <h1>Flow Kanban Board</h1>
      <AddTask />

      <div className="columns">
        {COLUMNS.map((col) => (
          <Column key={col.id} column={col} />
        ))}
      </div>
    </div>
  );
};

export default Board;
