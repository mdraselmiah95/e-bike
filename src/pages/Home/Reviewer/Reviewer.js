import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Reviewer.css";
const Reviewer = ({ review }) => {
  const { name, details, start } = review;
  return (
    <div>
      <div className="col reviewer">
        <div className="card h-100 align-items-center text-center border-1 p-4">
          <div className="card-body">
            <p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="me-2 
                "
              />
              {details}
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="ms-2 
                "
              />
            </p>
            <Rating
              className="my-2"
              initialRating={start}
              readonly
              emptySymbol="far fa-star text-warning"
              fullSymbol="fas fa-star text-warning"
            />
            <h4>{name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewer;
