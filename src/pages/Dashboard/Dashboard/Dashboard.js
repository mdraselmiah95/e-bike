import { faStripeS } from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingBag,
  faUserCog,
  faUserLock,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import Admin from "../Admin/Admin";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MakePayment from "../MakePayment/MakePayment";
import UserHistory from "../UserHistory/UserHistory";
import "./dashboard.css";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div className="container-fluid my-3 mx-1">
      <h2 className="text-center fw-bolder my-3 Dashboard">Dashboard</h2>
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
                  icon={faUserCog}
                  className="me-2 
                "
                />
                Dashboard
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
                      icon={faUserShield}
                      className="me-2 
                "
                    />
                    Admin
                  </button>
                </Link>
                <Link to={`${url}/addProduct`}>
                  <button className="btn btn-secondary">Add Product</button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-9 border py-5">
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
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
