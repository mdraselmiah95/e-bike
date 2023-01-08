import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./useHistory.css";
const UserHistory = () => {
  const { user } = useAuth();
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    const url = `https://e-bike-server.vercel.app/purchase?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserHistory(data));
  }, []);
  return (
    <div className="useHistory">
      <h3>Single User Information</h3>
      <table className="table table-striped table-hover">
        <caption>Total Purchase order : {userHistory.length}</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">ProductName</th>
            <th scope="col">email</th>
            <th scope="col">price</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        {userHistory.map((pd) => (
          <tbody key={pd._id}>
            <tr>
              <td>{pd.name}</td>
              <td>{pd.ProductName}</td>
              <td>{pd.email}</td>
              <td>{pd.price}</td>
              <td>{pd.date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UserHistory;

/* 

 <table key={pd._id} className="table table-striped table-hover">
          <caption>List of users information</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ProductName</th>
              <th scope="col">email</th>
              <th scope="col">price</th>
              <th scope="col">date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>


*/
