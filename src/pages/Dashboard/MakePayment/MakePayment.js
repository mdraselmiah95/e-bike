import React from "react";
import img from "../../../git/giphy.gif";
const MakePayment = () => {
  return (
    <div className="container">
      <h2 className="text-center fw-bolder text-warning mb-4">Coming Soon</h2>
      <div className="mx-auto d-flex justify-content-center">
        <img src={img} alt="update" className="img-fluid" />
      </div>
    </div>
  );
};

export default MakePayment;
