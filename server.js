import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api", userRoutes);

// Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
