import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Delete.css";
const Delete = () => {
  const [loader, setLoader] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-anchorage-44004.herokuapp.com/moreBike")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoader(false);
      });
  }, []);

  const handleDelete = (id) => {
    const url = `https://mysterious-anchorage-44004.herokuapp.com/moreBike/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Confirm Deleted");
          const remaining = items.filter((data) => data._id !== id);
          setItems(remaining);
        }
      });
  };

  return (
    <div className="admin">
      <h3 className="my-3">All Products Information</h3>
      <table className="table table-hover">
        <caption>Total Product : {items.length}</caption>
        {loader && (
          <div className="spinner-border text-warning my-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <thead>
          <tr>
            <th scope="col">Product Image</th>
            <th scope="col">ProductName</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {items.map((pd) => (
          <tbody key={pd._id}>
            <tr>
              <td className="w-25">
                <img src={pd.img} alt="bike" className="img-fluid w-50" />
              </td>
              <td>{pd.title}</td>
              <td>{pd.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(pd._id)}
                  className="btn btn-outline-warning"
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="me-2 
                "
                  />
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Delete;
