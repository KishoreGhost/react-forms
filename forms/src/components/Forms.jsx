// Forms.js

import React, { useState } from "react";

const Forms = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(data);
    setError(errors);

    if (Object.keys(errors).length === 0) {
      setFormSubmit(true);
    } else {
      setFormSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};
    if (data.firstName.trim() === "") {
      error.firstName = "Please enter the First name";
    }
    if (data.lastName.trim() === "") {
      error.lastName = "Please enter the last name";
    }
    if (data.email.trim() === "") {
      error.email = "Please enter the Email";
    }
    if (data.password.trim() === "") {
      error.password = "Please enter the Password";
    }
    return error;
  };

  return (
    <>
      <div className="parent">
        <form onSubmit={handleSubmit} className="form">
          <div className="message">
            {formSubmit && <p className="successMessage">Registration completed Successfully :)</p>}
          </div>
          <div className="inputContainer">
            <label htmlFor="firstName" className="label">
              Enter your first name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleInput}
              className="input"
            />
            {error.firstName ? <p className="error">{error.firstName}</p> : ""}
          </div>

          <div className="inputContainer">
            <label htmlFor="lastName" className="label">
              Enter your last name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInput}
              className="input"
            />
            {error.lastName ? <p className="error">{error.lastName}</p> : ""}
          </div>

          <div className="inputContainer">
            <label htmlFor="email" className="label">
              Enter your email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInput}
              className="input"
            />
            {error.email ? <p className="error">{error.email}</p> : ""}
          </div>

          <div className="inputContainer">
            <label htmlFor="password" className="label">
              Enter Your password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your password"
              onChange={handleInput}
              className="input"
            />
            {error.password ? <p className="error">{error.password}</p> : ""}
          </div>
          <input type="submit" value={"Register"} className="submitButton" />
        </form>
      </div>
    </>
  );
};

export default Forms;
