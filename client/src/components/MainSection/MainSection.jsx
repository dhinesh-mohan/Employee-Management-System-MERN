import React, { useEffect, useState } from "react";
import "./MainSection.css";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import axios from "axios";
import EditDetailsModal from "../ModelPopup/EditDetailsModal";

const MainSection = ({ setEmployeeId }) => {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [reRender, setRerender] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [empById, setEmpById] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/employee");
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEmployeeById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/employee/${id}`);
      setEmpById(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReRender = () => {
    setRerender(true);
  };

  const handleEdit = async (id) => {
    getEmployeeById(id);
    setEditModal(true);
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.firstname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getAllEmployees();
  }, [showModal, editModal, reRender]);

  return (
    <>
      {showModal && <ModelPopup setShowModal={setShowModal} />}
      {editModal && (
        <EditDetailsModal setEditModal={setEditModal} empById={empById} />
      )}
      <main className="main-container">
        <div className="main-wrapper">
          <h1>
            People <span className="emp-count">{employees.length}</span>
          </h1>
          <div className="employee-header">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search here"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <BiSearch size={20} />
            </div>
            <button className="add-btn" onClick={() => setShowModal(true)}>
              <IoMdAdd />
              Add Employee
            </button>
          </div>
          <div className="employees">
            {filteredEmployees &&
              filteredEmployees.map((emp) => {
                return (
                  <div key={emp._id} onClick={() => setEmployeeId(emp._id)}>
                    <Card
                      empData={emp}
                      handleReRender={handleReRender}
                      handleEdit={handleEdit}
                    />
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
