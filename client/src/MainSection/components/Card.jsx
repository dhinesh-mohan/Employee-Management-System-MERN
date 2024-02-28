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
            src="https://media.istockphoto.com/id/1427580184/photo/winter-forest-snow-landscape-in-the-night-lapland-finland.webp?b=1&s=170667a&w=0&k=20&c=L9Mz6QPdzwxeKK_ht8h91y4V4faStt9pQWd3moB0CKM="
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
