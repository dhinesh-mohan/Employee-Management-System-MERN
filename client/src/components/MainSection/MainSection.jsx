import React, { useState } from "react";
import "./MainSection.css";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";

const MainSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <ModelPopup />}
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;
