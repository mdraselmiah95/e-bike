import React, { useEffect, useState } from "react";
import "./admin.css";
const Admin = () => {
  // const [loader, setLoader] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/purchaseItems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        // setLoader(false);
      });
  }, []);
  return (
    <div className="admin">
      <h3 className="my-3">All Users Information</h3>
      <table className="table table-striped table-hover">
        <caption>Total Purchase order : {items.length}</caption>
        <thead>
          <tr>
            <th scope="col" className="table-secondary">
              Name
            </th>
            <th scope="col" className="table-primary">
              ProductName
            </th>
            <th scope="col" className="table-success">
              email
            </th>
            <th scope="col" className="table-warning">
              price
            </th>
            <th scope="col" className="table-light">
              date
            </th>
          </tr>
        </thead>
        {items.map((pd) => (
          <tbody key={pd._id}>
            <tr>
              <td className="table-secondary">{pd.name}</td>
              <td className="table-primary">{pd.ProductName}</td>
              <td className="table-success">{pd.email}</td>
              <td className="table-warning">{pd.price}</td>
              <td className="table-light">{pd.date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Admin;
