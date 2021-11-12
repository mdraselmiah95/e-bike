import { faStripeS } from "@fortawesome/free-brands-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faChalkboard,
  faEraser,
  faShoppingBag,
  faSort,
  faTasks,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import Admin from "../Admin/Admin";
import Delete from "../Delete/Delete";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MakePayment from "../MakePayment/MakePayment";
import UserHistory from "../UserHistory/UserHistory";
import "./dashboard.css";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div className="container-fluid my-3 mx-1">
      <h2 className="text-center my-3 Dashboard">
        <FontAwesomeIcon
          icon={faChalkboard}
          className="me-2 
                "
        />
        Dashboard
      </h2>
      <div className="row my-3">
        <div className="col-md-3 border py-2">
          <div>
            <NavLink to="/moreBikes">
              <button className="btn btn-outline-secondary">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="me-2 
                "
                />
                Purchase-Product
              </button>
            </NavLink>
            <Link to={`${url}`}>
              <button className="btn btn-secondary">
                <FontAwesomeIcon
                  icon={faSort}
                  className="me-2 
                "
                />
                My Orders
              </button>
            </Link>
            <Link to={`${url}/payment`}>
              <button className="btn btn-secondary">
                <FontAwesomeIcon
                  icon={faStripeS}
                  className="me-2 
                "
                />
                Make Payment
              </button>
            </Link>
            {admin && (
              <div>
                <Link to={`${url}/makeAdmin`}>
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon
                      icon={faUserLock}
                      className="me-2 
                "
                    />
                    Make Admin
                  </button>
                </Link>
                <Link to={`${url}/admin`}>
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon
                      icon={faTasks}
                      className="me-2 
                "
                    />
                    Manage All Orders
                  </button>
                </Link>
                <Link to={`${url}/addProduct`}>
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faPlusSquare} className="me-2" />
                    Add Product
                  </button>
                </Link>
                <Link to={`${url}/delete`}>
                  <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faEraser} className="me-2" />
                    Delete
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-9 border py-3">
          <Switch>
            <Route exact path={path}>
              <UserHistory />
            </Route>
            <Route path={`${path}/payment`}>
              <MakePayment />
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/admin`}>
              <Admin />
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/delete`}>
              <Delete />
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
