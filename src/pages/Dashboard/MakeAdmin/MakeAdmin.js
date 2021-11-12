import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./makeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };

    fetch("https://mysterious-anchorage-44004.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
      });
    e.preventDefault();
  };
  return (
    <div className="container text-center">
      <h3 className="my-3 MakeAdmin">MakeAdmin</h3>
      <div>
        <Form onSubmit={handleAdminSubmit} className="text-center">
          <Form.Control
            type="email"
            onBlur={handleOnBlur}
            placeholder="Enter email"
            className="w-50 mx-auto border-top-0 border-start-0 border-end-0 text-center"
          />
          <button type="submit" className="btn btn-outline-success mt-3">
            Make Admin
          </button>
        </Form>
      </div>
      {success && (
        <div className="alert alert-success my-3" role="alert">
          Create Admin successfully!
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
