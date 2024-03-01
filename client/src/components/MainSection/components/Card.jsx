import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
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
          <img
            src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="emp-detail">
          <h3>Firstname Lastname</h3>
          <p>Email</p>
        </div>
      </div>
      <div className="job-role">
        <p>Job Role</p>
      </div>
    </div>
  );
};

export default Card;
