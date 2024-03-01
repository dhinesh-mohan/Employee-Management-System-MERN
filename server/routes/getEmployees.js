import express from "express";
import Employee from "../schema/Employee.js";
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.log("Error in getEmployees", error);
    res.status(500).send("Internal server error");
  }
});

export default route;
