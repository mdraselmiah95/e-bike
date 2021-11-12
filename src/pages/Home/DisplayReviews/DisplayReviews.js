import React, { useEffect, useState } from "react";
import Reviewer from "../Reviewer/Reviewer";
import "./DisplayReviews.css";
const DisplayReviews = () => {
  const [loader, setLoader] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoader(false);
      });
  }, []);
  return (
    <div className="container-fluid my-5" id="reviews">
      <div className="text-center">
        <h2 className="happy">Happy Clients says</h2>
        {loader && (
          <div
            className="spinner-border text-warning mx-auto my-3"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div className="my-1 row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5">
        {reviews.map((review) => (
          <Reviewer key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default DisplayReviews;
