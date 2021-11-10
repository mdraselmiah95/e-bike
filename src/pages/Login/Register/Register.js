import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { registerUser, isLoading, user, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-success">Create New Account:</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/LpWBYbJ/secure.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 border p-4">
          {!isLoading && (
            <Form onSubmit={handleRegisterSubmit}>
              <Form.Control
                className="mb-3"
                placeholder="Your Name"
                name="name"
                type="text"
                onBlur={handleOnBlur}
              />
              <Form.Control
                className="mb-3"
                placeholder="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
              />
              <Form.Control
                className="mb-3"
                placeholder="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
              />
              <Form.Control
                className="mb-3"
                placeholder="Re-Type Your Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
              />
              <Button type="submit">Register</Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <button className="btn btn-outline-secondary text-uppercase">
                  Already Registered? Please Login
                </button>
              </NavLink>
            </Form>
          )}
        </div>
        {isLoading && (
          <div
            className="spinner-border text-warning mx-auto my-3"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {user?.email && (
          <div className="alert alert-success" role="alert">
            User Created successfully!
          </div>
        )}
        {authError && (
          <div className="alert alert-danger" role="alert">
            {authError}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
