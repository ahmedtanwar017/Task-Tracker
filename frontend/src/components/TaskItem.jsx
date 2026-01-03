import { deleteTask, updateTask } from "../services/taskService";

const TaskItem = ({ task, refresh }) => {
  const toggleStatus = async () => {
    await updateTask(task._id, { status: task.status === "Pending" ? "Completed" : "Pending" });
    refresh();
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    refresh();
  };

  return (
    <div className="border rounded p-3 flex justify-between items-start bg-gray-50">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <div className="text-xs mt-1 space-x-2">
          <span className="px-2 py-1 bg-blue-100 rounded">{task.priority}</span>
          <span className="px-2 py-1 bg-gray-200 rounded">{task.status}</span>
          <span className="px-2 py-1 bg-green-100 rounded">{task.dueDate}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button onClick={toggleStatus} className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">Toggle</button>
        <button onClick={handleDelete} className="text-xs bg-red-500 text-white px-2 py-1 rounded">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
