import { useState } from "react";
import { createTask } from "../services/taskService";

const TaskForm = ({ refresh }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    status: "Pending",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.dueDate) {
      setError("Title & Due Date are required");
      return;
    }
    await createTask(form);
    setForm({ title: "", description: "", priority: "Low", dueDate: "", status: "Pending" });
    setError("");
    refresh();
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Create Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-grow">
        <input name="title" placeholder="Task title" value={form.title} onChange={handleChange} className="border p-2 rounded" />
        <textarea name="description" placeholder="Description" rows="3" value={form.description} onChange={handleChange} className="border p-2 rounded resize-none" />
        <select name="priority" value={form.priority} onChange={handleChange} className="border p-2 rounded">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} className="border p-2 rounded" />
        <select name="status" value={form.status} onChange={handleChange} className="border p-2 rounded">
          <option>Pending</option>
          <option>Completed</option>
        </select>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
