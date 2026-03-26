import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { v4 as uuid } from "uuid";

const AddTask = () => {
  const addTask = useTaskStore((s) => s.addTask);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return alert("Title required");

    addTask({
      id: uuid(),
      title,
      description: desc,
      column: "todo",
    });

    setTitle("");
    setDesc("");
  };

  return (
    <div className="add-task">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
