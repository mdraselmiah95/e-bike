import React from "react";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes";
import Questions from "../Questions/Questions";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner />
      <Bikes />
      <Questions />
    </div>
  );
};

export default Home;
