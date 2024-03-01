import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({ empData }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="card-component">
      <div className="card-inner">
        <div className="dropDownContainer">
          <BsThreeDotsVertical
            size={20}
            className="dropDown"
            onClick={() => setDropDown(!dropDown)}
          />
          {dropDown && (
            <ul className="dropdown">
              <li>Edit</li>
              <li id="dlt">Delete</li>
            </ul>
          )}
        </div>
        <div className="profileImg">
          <img src={empData.image} alt="Employee Image" />
        </div>
        <div className="emp-detail">
          <h3>
            {empData.firstname} {empData.lastname}
          </h3>
          <p>{empData.email}</p>
        </div>
      </div>
      <div className="job-role">
        <p>{empData.job}</p>
      </div>
    </div>
  );
};

export default Card;
