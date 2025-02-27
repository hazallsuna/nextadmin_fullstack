import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = {};

const MONGO_URI = process.env.MONGO_URI;

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(MONGO_URI, {
<<<<<<< HEAD
      useNewUrlParser: true,
      useUnifiedTopology: true,
=======
>>>>>>> 496704913dd77a5b7d96319feb54d6469d55ae5c
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error(error);
  }
};
