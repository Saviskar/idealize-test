import express from "express";

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("API is working!");
});

export default router;
