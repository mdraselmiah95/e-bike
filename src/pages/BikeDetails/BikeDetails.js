import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import "./BikeDetails.css";
const BikeDetails = () => {
  const { id } = useParams([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://e-bike-server.vercel.app/bikes")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const matchingItem = data.filter((td) => td.id === Number(id));

  return (
    <div className="container-fluid bikeDetails  mb-3">
      <h2 className="text-center my-4 fs-1">{matchingItem[0]?.title}</h2>
      <div className="row border px-2 py-4 mx-2 rounded justify-content-center">
        <div className="col-md-4">
          <img
            src={matchingItem[0]?.img}
            alt="offer"
            className="border p-2 img-fluid rounded"
          />
        </div>
        <div className="col-md-8 px-2 mt-2">
          <p>{matchingItem[0]?.details}</p>
          <p>{matchingItem[0]?.more}</p>
          <NavLink to="/home">
            <button className="btn btn-outline-info mb-4">
              <FontAwesomeIcon icon={faBackward} className="me-2" />
              GO Back Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
