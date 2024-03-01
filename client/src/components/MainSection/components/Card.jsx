import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";

const Card = ({ empData, handleReRender }) => {
  const [dropDown, setDropDown] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/employee/${id}`);
      handleReRender();
    } catch (error) {
      console.log(error);
    }
  };

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
              <li onClick={() => handleEdit(empData._id)}>Edit</li>
              <li onClick={() => handleDelete(empData._id)} id="dlt">
                Delete
              </li>
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
