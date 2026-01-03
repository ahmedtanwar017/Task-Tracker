import TaskItem from "./TaskItem";

const TaskList = ({ tasks, refresh }) => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <div className="flex-1 overflow-y-auto pr-2 space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">No tasks added yet</p>
        ) : (
          tasks.map((task) => <TaskItem key={task._id} task={task} refresh={refresh} />)
        )}
      </div>
    </div>
  );
};

export default TaskList;
