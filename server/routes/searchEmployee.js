import express from "express";
const route = express.Router();
import Employee from "../schema/Employee.js";

route.get("/:search", async (req, res) => {
  try {
    const employee = await Employee.find({ firstname: req.params.search });

    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating employee: ${err.message}`);
  }
});

export default route;
