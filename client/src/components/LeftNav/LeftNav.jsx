import React from "react";
import "./LeftNav.css";

const LeftNav = () => {
  return (
    <div className="left-container">
      <div className="employee-details">
        <h2>Full Details</h2>
        <img
          src="https://media.istockphoto.com/id/1427580184/photo/winter-forest-snow-landscape-in-the-night-lapland-finland.webp?b=1&s=170667a&w=0&k=20&c=L9Mz6QPdzwxeKK_ht8h91y4V4faStt9pQWd3moB0CKM="
          alt=""
        />
        <h1>Firstname Lastname</h1>
        <p>Email</p>
        <p>Phone</p>
        <p>Job</p>
        <p className="date">Date of Join</p>
      </div>
    </div>
  );
};

export default LeftNav;
