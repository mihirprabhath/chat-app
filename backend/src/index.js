import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
 
app.use(express.json());
app.use(cookieParser()); // middleware to parse cookies from request headers
app.use(
  cors({
    origin:"http://localhost:5173",
    credentials: true, // allows cookies to be sent back and forth with requests
   })
)


app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
  connectDB();
});
