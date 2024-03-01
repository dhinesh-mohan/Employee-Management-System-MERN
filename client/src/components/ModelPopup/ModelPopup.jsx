import React, { useState } from "react";
import "./ModelPopup.css";
import { useFormik } from "formik";
import axios from "axios";

const ModelPopup = ({ setShowModal }) => {
  const [loading, setLoading] = useState(false);

  const createEmployee = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/employee", values);
      console.log(res);
      setLoading(false);
      setShowModal(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      job: "",
      dateofjoining: "",
      image: "",
    },
    onSubmit: (values) => {
      createEmployee(values);
    },
  });

  return (
    <div className="modal-container">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="modal-box">
          <div className="modal-header">
            <h2>New Employee Details</h2>
          </div>
          <div className="modal-inner">
            <div className="input-container">
              <div className="names">
                <div className="input-box">
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstname"
                    values={formik.values.firstname}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="input-box">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastname"
                    values={formik.values.lastname}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="input-box">
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  values={formik.values.image}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="names">
                <div className="input-box">
                  <label>Email Address</label>
                  <input
                    type="text"
                    name="email"
                    values={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="input-box">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    values={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="input-box">
                <label>Job Position</label>
                <input
                  type="text"
                  name="job"
                  values={formik.values.job}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="input-box">
                <label>Date of joining</label>
                <input
                  type="date"
                  name="dateofjoining"
                  values={formik.values.dateofjoining}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="modal-footer">
                <button type="submit">
                  {loading ? "Saving" : "Save Details"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModelPopup;
