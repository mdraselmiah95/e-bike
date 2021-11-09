import React from "react";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes";
import Beauty from "../Parallax/Beauty";
import Questions from "../Questions/Questions";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner />
      <Bikes />
      <Questions />
      <Beauty />
    </div>
  );
};

export default Home;
