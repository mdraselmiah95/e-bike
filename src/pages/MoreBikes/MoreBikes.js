import React, { useEffect, useState } from "react";
import MoreBike from "../MoreBike/MoreBike";
import "./MoreBikes.css";
const MoreBikes = () => {
  const [loader, setLoader] = useState(true);
  const [moreBikes, setMoreBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/moreBike")
      .then((res) => res.json())
      .then((data) => {
        setMoreBikes(data);
        setLoader(false);
      });
  }, []);

  return (
    <div>
      <div className="row m-3 offers moreBikes">
        <h1 className="text-center mt-5">Explore More Bikes</h1>
        {loader && (
          <div
            className="spinner-border text-warning mx-auto my-3"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {moreBikes.map((bike) => (
            <MoreBike key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreBikes;
