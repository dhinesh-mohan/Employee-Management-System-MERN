import express from "express";
const route = express.Router();
import Employee from "../schema/Employee.js";

route.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.send("Employee deleted");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

export default route;
