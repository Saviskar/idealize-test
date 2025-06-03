import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Successful");
  } catch (err) {
    console.error("DB Connection Error:", err.message);
    process.exit(1);
  }
};
