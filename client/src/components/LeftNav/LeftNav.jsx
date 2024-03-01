import React, { useEffect, useState } from "react";
import "./LeftNav.css";
import axios from "axios";

const LeftNav = ({ employeeId }) => {
  const [empId, setEmpId] = useState([]);

  const getEmployeeById = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/employee/${employeeId}`
      );
      setEmpId(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployeeById();
  }, [employeeId]);

  return (
    <div className="left-container">
      <div className="employee-details">
        <h2>Full Details</h2>
        <img src={empId.image} alt="Employee Image" />
        <h1>
          {empId.firstname} {empId.lastname}
        </h1>
        <p>{empId.email}</p>
        <p>{empId.phone}</p>
        <p>{empId.job}</p>
        <p className="date">{empId.dataofjoining}</p>
      </div>
    </div>
  );
};

export default LeftNav;
