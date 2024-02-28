import React from "react";
import "./MainSection.css";
import { BiSearch } from "react-icons/bi";

const MainSection = () => {
  return (
    <main className="main-container">
      <div className="main-wrapper">
        <h1>People</h1>
        <div className="employee-header">
          <div className="search-box">
            <input type="text" placeholder="Search here" />
            <BiSearch />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
