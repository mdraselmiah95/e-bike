import { faAngleDoubleRight, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Bike.css";
const Bike = (props) => {
  const { id, title, details, img, price } = props.bike;
  return (
    <div className="col-lg-4 col-md-6 bike">
      <div className="col">
        <div
          className="card p-2 text-center shadow"
          style={{ height: "570px" }}
        >
          <img src={img} className="rounded img-fluid" alt="photos" />
          <div className="card-body">
            <h4 className="card-title py-3">{title}</h4>
            <p className="">{details}</p>
            <h3>{price}</h3>
            <div className="d-flex justify-content-between">
              <Link to={`/bikeDetails/${id}`}>
                <button className="btn btn-outline-dark">
                  <FontAwesomeIcon
                    icon={faInfo}
                    className="me-2 
                "
                  />
                  BIKE DETAILS
                </button>
              </Link>
              <Link to="/moreBikes">
                <button className="btn btn-outline-dark">
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="me-2 
                "
                  />
                  EXPLORE MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bike;
