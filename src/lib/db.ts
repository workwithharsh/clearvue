import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI as string;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is missing in environment variables!");
}

/**
 * Connects to the MongoDB database.
 * 
 * - Prevents unnecessary reconnections if already connected.
 * - Logs connection status for debugging.
 * - Exits the process if the connection fails.
 *
 * @returns {Promise<void>}
 */
export const connectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    const connection = await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB. Host: ${connection.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the app if connection fails
  }
};

/**
 * Disconnects from the MongoDB database.
 * 
 * - Checks if there is an active connection before disconnecting.
 * - Logs the disconnection status.
 *
 * @returns {Promise<void>}
 */
export const disconnectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 0) {
      console.log("ℹNo active MongoDB connection to close");
      return;
    }

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Error disconnecting from MongoDB:", err);
  }
};
