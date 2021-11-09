import React from "react";
import { Parallax } from "react-parallax";
import Typewriter from "typewriter-effect";
import "./Beauty.css";
const Beauty = () => {
  const url =
    "https://i.ibb.co/MGx0Tc5/lino-lakes-C2-Sz-Uyg3-PPQ-unsplash-1.jpg";
  return (
    <div>
      <Parallax bgImage={url} strength={600}>
        <div className="py-5 text-center text-light">
          <p className="imgBeauty-p" style={{ margin: "12% 0" }}>
            <Typewriter
              options={{
                strings: ["A New Fighter in Town"],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            ></Typewriter>
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Beauty;
