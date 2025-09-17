import mongoose from "mongoose";

export async function dbconnect() {
try {
      await mongoose.connect(process.env.MONGODB_URL);
      const db = mongoose.connection;
      db.on("connected", () => {
        console.log("Connected to MongoDB");
      });
      db.on("error", (error) => {
        console.error("Error connecting to MongoDB:", error);
      });
} catch (error) {
      console.error("Error connecting to MongoDB:", error);
}
}
