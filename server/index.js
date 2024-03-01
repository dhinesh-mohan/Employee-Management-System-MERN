import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import createEmployee from "./routes/createEmployee.js";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/employee", createEmployee);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
