import React from "react";
import { NavLink } from "react-router-dom";
import UserHistory from "../UserHistory/UserHistory";

const Dashboard = () => {
  return (
    <div className="container-fluid my-3 mx-1">
      <h2 className="text-center fw-bold my-3">Dashboard</h2>
      <div className="row my-3">
        <div className="col-md-3 border py-5">
          <div>
            <NavLink to="/moreBikes">
              <button className="btn btn-outline-secondary">
                Purchase-Product
              </button>
            </NavLink>
          </div>
        </div>
        <div className="col-md-9 border py-5">
          <UserHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
