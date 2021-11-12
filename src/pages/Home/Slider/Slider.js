import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const slider1 = "https://i.ibb.co/nqpKbvV/im1.jpg";
const slider2 = "https://i.ibb.co/cggsW9M/img2.jpg";
const slider3 = "https://i.ibb.co/5kDLxnc/img3.jpg";
const slider4 = "https://i.ibb.co/4Tk3RW7/img4.jpg";
const slider5 = "https://i.ibb.co/SxLrWNs/img5.jpg";
const slider6 = "https://i.ibb.co/ZWzTGnP/img6.jpg";

const Slider = () => {
  return (
    <div className="my-5 container slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">MOTO-GUZZI</h3>
            <p className="fs-5">
              Charismatic retro with largest and most powerful engine yet
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">BROUGH SUPERIOR</h3>
            <p className="fs-5">
              Ultra-exclusive exotica from revived historic brand.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">ENFIELD 350 BULLET</h3>
            <p className="fs-5">
              Longest-running motorcycle model in continuous production
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">INDIAN SCOUT</h3>
            <p className="fs-5">
              To meet performance targets, the all-new, V-twin had to be
              liquid-cooled
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider5} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="fw-bold">ENFIELD WOODSMAN</h3>
            <p className="fs-5">
              Equipment is good compared to Enfields of old – the fuel warning
              light, fuel injection, electric start
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider6} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="fw-bold">HESKETH V1000</h3>
            <p className="fs-5">
              Believe it or not, but you can still buy an 80s classic Hesketh
              V1000 motorcycle, brand new,
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
