import React from "react";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes";
import Beauty from "../Parallax/Beauty";
import Questions from "../Questions/Questions";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner />
      <Bikes />
      <Slider />
      <Questions />
      <Beauty />
    </div>
  );
};

export default Home;
