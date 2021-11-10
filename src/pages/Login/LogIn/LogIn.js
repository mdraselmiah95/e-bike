import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogInSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  const img = "https://i.ibb.co/7VbG2Ww/unlock.png";
  return (
    <div className="container my-5">
      <h2 className="fw-bold">
        <FontAwesomeIcon icon={faUsers} className="me-2" />
        Please Login:
      </h2>
      <div className="row align-items-center">
        <div className="col-md-6 border p-4">
          <Form onSubmit={handleLogInSubmit}>
            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={handleOnChange}
            />
            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Your Password"
              name="password"
              onChange={handleOnChange}
            />
            <Button type="submit">LogIn</Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <button className="btn btn-outline-secondary  text-uppercase">
                New User? Please Register
              </button>
            </NavLink>
          </Form>
        </div>
        <div className="col-md-6">
          <img src={img} alt="login" className="img-fluid" />
        </div>
        <button
          className="btn btn-outline-info fw-bold py-2 fs-4 my-2"
          onClick={handleGoogleSignIn}
        >
          <FontAwesomeIcon icon={faGoogle} className="me-2" />
          Google Sign In
        </button>
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
            Login successfully!
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

export default LogIn;
