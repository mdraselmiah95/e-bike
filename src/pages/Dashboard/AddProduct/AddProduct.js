import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./addProduct.css";
const AddProduct = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://e-bike-server.vercel.app/moreBike", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };

  const url = "https://i.ibb.co/h2NwZc5/add.png";
  return (
    <div className="container addProduct">
      <h2 className="text-center fw-bold my-2">
        <FontAwesomeIcon icon={faPlusSquare} className="me-2" />
        Add Product
      </h2>
      <div className="row align-items-center">
        <div className="col-md-6 p-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column"
          >
            <input
              {...register("title", { required: true, maxLength: 20 })}
              placeholder="Title"
              className="mb-3 py-2"
            />
            <textarea
              className="mb-3 py-4"
              {...register("details")}
              placeholder="Description"
            />
            <input
              {...register("price", { required: true, maxLength: 10 })}
              placeholder="Price"
              className="mb-3 py-2"
            />
            <input
              className="mb-3 py-2"
              {...register("img")}
              placeholder="image url"
            />
            <input className="fw-bold py-2 fs-3 text-secondary" type="submit" />
          </form>
        </div>
        <div className="col-md-6 border p-4">
          <img src={url} alt="update" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
