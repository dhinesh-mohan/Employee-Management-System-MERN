import React from "react";
import "./ModelPopup.css";

const ModelPopup = () => {
  return (
    <div className="modal-container">
      <form action="">
        <div className="modal-box">
          <div className="modal-header">
            <h2>New Employee Details</h2>
          </div>
          <div className="modal-inner">
            <div className="input-container">
              <div className="names">
                <div className="input-box">
                  <label>First name</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label>Last name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="input-box">
                <label>Image</label>
                <input type="text" />
              </div>
              <div className="names">
                <div className="input-box">
                  <label>Email Address</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label>Phone</label>
                  <input type="text" />
                </div>
              </div>
              <div className="input-box">
                <label>Job Position</label>
                <input type="text" />
              </div>
              <div className="input-box">
                <label>Date of joining</label>
                <input type="date" />
              </div>
              <div className="modal-footer">
                <button>Save Details</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModelPopup;
