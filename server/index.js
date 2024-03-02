import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import createEmployee from "./routes/createEmployee.js";
import getEmployees from "./routes/getEmployees.js";
import getEmployeeById from "./routes/getEmployeeById.js";
import deleteEmployee from "./routes/deleteEmployee.js";
import updateEmployee from "./routes/updateEmployee.js";
import searchEmployee from "./routes/searchEmployee.js";
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
app.use("/employee", getEmployees);
app.use("/employee", getEmployeeById);
app.use("/employee", deleteEmployee);
app.use("/employee", updateEmployee);
app.use("/searchemployee", searchEmployee);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
