import React, { useEffect, useState } from "react";
import "./MainSection.css";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import axios from "axios";

const MainSection = ({ setEmployeeId }) => {
  const [showModal, setShowModal] = useState(false);
  const [reRender, setRerender] = useState(false);
  const [employees, setEmployees] = useState([]);

  const getAllEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/employee");
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReRender = () => {
    setRerender(true);
  };

  useEffect(() => {
    getAllEmployees();
  }, [reRender]);

  return (
    <>
      {showModal && <ModelPopup setShowModal={setShowModal} />}
      <main className="main-container">
        <div className="main-wrapper">
          <h1>People</h1>
          <div className="employee-header">
            <div className="search-box">
              <input type="text" placeholder="Search here" />
              <BiSearch size={20} />
            </div>
            <button className="add-btn" onClick={() => setShowModal(true)}>
              <IoMdAdd />
              Add Employee
            </button>
          </div>
          <div className="employees">
            {employees &&
              employees.map((emp) => {
                return (
                  <div key={emp._id} onClick={() => setEmployeeId(emp._id)}>
                    <Card empData={emp} handleReRender={handleReRender} />
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;
