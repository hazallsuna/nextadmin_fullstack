import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = {};

const MONGO_URI = process.env.MONGO_URI;

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(MONGO_URI, {
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error(error);
  }
};
