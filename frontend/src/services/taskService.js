import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api/tasks",
// });

const API = axios.create({
  baseURL: "https://task-tracker-6blo.onrender.com",
});

export const getTasks = () => API.get("/");
export const createTask = (data) => API.post("/", data);
export const updateTask = (id, data) => API.put(`/${id}`, data);
export const deleteTask = (id) => API.delete(`/${id}`);
