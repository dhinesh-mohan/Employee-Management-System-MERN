import React, { useState } from "react";
import "./ModelPopup.css";
import { useFormik } from "formik";
import axios from "axios";

const EditDetailsModal = ({ setEditModal, empById }) => {
  const { firstname, lastname, email, phone, job, dateofjoining, image } =
    empById;

  const [loading, setLoading] = useState(false);

  const handleEdit = async (values) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:5000/employee/${empById._id}`,
        values
      );
      setLoading(false);
      setEditModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname,
      lastname,
      email,
      phone,
      job,
      dateofjoining,
      image,
    },
    onSubmit: (values) => {
      handleEdit(values);
    },
  });

  return (
    <div className="modal-container">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="modal-box">
          <div className="modal-header">
            <h2>Update Employee Details</h2>
          </div>
          <div className="modal-inner">
            <div className="input-container">
              <div className="names">
                <div className="input-box">
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstname"
                    defaultValue={firstname}
                    values={formik.values.firstname}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="input-box">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastname"
                    defaultValue={lastname}
                    values={formik.values.lastname}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className="input-box">
                <label>Image</label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
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
                    defaultValue={email}
                    values={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="input-box">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue={phone}
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
                  defaultValue={job}
                  values={formik.values.job}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="input-box">
                <label>Date of joining</label>
                <input
                  type="date"
                  name="dateofjoining"
                  defaultValue={dateofjoining}
                  values={formik.values.dateofjoining}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="modal-footer">
                <button type="submit">
                  {loading ? "Editing" : "Edit and Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDetailsModal;
