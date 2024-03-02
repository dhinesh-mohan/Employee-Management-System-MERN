import express from "express";
const route = express.Router();
import Employee from "../schema/Employee.js";

route.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.send("Employee updated successfully");
  } catch (error) {
    console.log("Error in updateEmployee", error);
    res.status(500).send("Internal server error");
  }
});

export default route;
