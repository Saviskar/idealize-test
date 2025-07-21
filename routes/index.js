import express from "express";

import userRoutes from "./userRoutes";

const router = express.Router();

// Main Routes
router.use("/user", userRoutes);

export default router;
