import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Review.css";
const Review = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("https://e-bike-server.vercel.app/review", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Thank you",
          text: "You successfully add the review",
        });
        reset();
      }
    });
  };

  const url = "https://i.ibb.co/BtT39wn/review.png";
  return (
    <div className="container addProduct my-5">
      <h2 className="text-center fw-bold mb-3">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="me-2 
                "
        />
        Add Your Review
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="ms-2 
                "
        />
      </h2>
      <div className="row align-items-center">
        <div className="col-md-6 p-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column"
          >
            <input
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Enter Your Name"
              className="mb-3 py-2"
            />
            <textarea
              className="mb-3 py-4"
              {...register("details")}
              placeholder="Your Review"
            />
            <input
              placeholder="Your Review 1-5"
              className="mb-3 py-2"
              type="number"
              {...register("start", { min: 1, max: 5 })}
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

export default Review;
