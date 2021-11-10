import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const Purchase = () => {
  // const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const [moreBikes, setMoreBikes] = useState([]);

  useEffect(() => {
    fetch("/more.json")
      .then((res) => res.json())
      .then((data) => {
        setMoreBikes(data);
        //   setLoader(false);
      });
  }, [id]);
  const matchingItem = moreBikes.find((td) => td.id === Number(id));
  const title = matchingItem?.title;
  const price = matchingItem?.price;

  const initialInfo = {
    Service: title,
    price: price,
    phone: "",
  };
  const [purchase, setPurchase] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...purchase };
    newInfo[field] = value;
    console.log(newInfo);
    setPurchase(newInfo);
  };

  const handleBookingSubmit = (e) => {
    alert("submitting");
    const productPurchase = {
      ...purchase,
      name: title,
      price: price,
    };
    console.log(productPurchase);
    e.preventDefault();
  };
  const url = "https://i.ibb.co/2PLcyzK/purchase.png";
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold itemsDelete my-3 text-success">
        PURCHASE
      </h2>
      <div className="row align-items-center">
        <div className="col-md-6 p-4">
          <Form onSubmit={handleBookingSubmit}>
            <Form.Control disabled defaultValue={title} className="mb-3" />
            <Form.Control disabled defaultValue={price} className="mb-3" />
            <Form.Control
              className="mb-3"
              type="date"
              placeholder="date"
              name="date"
              onBlur={handleOnBlur}
            />
            <Form.Control
              className="mb-3"
              type="number"
              placeholder="Your Number"
              name="phone"
              onBlur={handleOnBlur}
            />
            <Button type="submit">Submit</Button>
          </Form>
          <NavLink to="/home" className="d-inline">
            <button className="btn btn-outline-info mt-3">
              <FontAwesomeIcon icon={faBackward} className="me-2" />
              GO Back Home
            </button>
          </NavLink>
        </div>
        <div className="col-md-6 border p-4">
          <img src={url} alt="update" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
