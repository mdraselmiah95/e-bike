import React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import Admin from "../Admin/Admin";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MakePayment from "../MakePayment/MakePayment";
import UserHistory from "../UserHistory/UserHistory";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div className="container-fluid my-3 mx-1">
      <h2 className="text-center fw-bold my-3">Dashboard</h2>
      <div className="row my-3">
        <div className="col-md-3 border py-2">
          <div>
            <NavLink to="/moreBikes">
              <button className="btn btn-outline-secondary">
                Purchase-Product
              </button>
            </NavLink>
            <Link to={`${url}`}>
              <button className="btn btn-secondary">Dashboard</button>
            </Link>
            <Link to={`${url}/payment`}>
              <button className="btn btn-secondary">Make Payment</button>
            </Link>
            {admin && (
              <div>
                <Link to={`${url}/makeAdmin`}>
                  <button className="btn btn-secondary">Make Admin</button>
                </Link>
                <Link to={`${url}/admin`}>
                  <button className="btn btn-secondary">Admin</button>
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
