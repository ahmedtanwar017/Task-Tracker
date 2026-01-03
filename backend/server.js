import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors({ origin: "https://tasktrackerss.netlify.app" }));
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Task Tracker API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
