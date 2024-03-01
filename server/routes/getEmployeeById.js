import express from "express";
import Employee from "../schema/Employee.js";
const route = express.Router();

route.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.json(employee);
  } catch (error) {
    console.log("Error in getEmployeeById", error);
    res.status(500).send("Internal server error");
  }
});

export default route;
