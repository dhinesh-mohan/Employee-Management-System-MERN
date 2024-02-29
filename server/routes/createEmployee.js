import express from "express";
import Employee from "../schema/Employee.js";

const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    console.log("Error in createEmployee", error);
    res.status(500).json("Internal server error");
  }
});

export default route;
