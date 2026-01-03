import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks } from "../services/taskService";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[95%] max-w-6xl h-[90vh] bg-white rounded-xl shadow-lg p-6 flex gap-6">

        {/* LEFT: Task Form */}
        <div className="w-1/3 border-r pr-6">
          <TaskForm refresh={fetchTasks} />
        </div>

        {/* RIGHT: Task List */}
        <div className="w-2/3 h-full overflow-hidden">
          <TaskList tasks={tasks} refresh={fetchTasks} />
        </div>
      </div>
    </div>
  );
};

export default Home;
