import React, { useEffect, useState } from "react";
import Bike from "../Bike/Bike";
import "./Bikes.css";
const Bikes = () => {
  const [loader, setLoader] = useState(true);
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
        setLoader(false);
      });
  }, []);
  return (
    <div id="bikes">
      <div className="row m-3 offers">
        <h1 className="text-center mt-5">Bikes</h1>
        {loader && (
          <div
            className="spinner-border text-warning mx-auto my-3"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {bikes.map((bike) => (
            <Bike key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bikes;
