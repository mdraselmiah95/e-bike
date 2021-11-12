import {
  faEnvira,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClipboard,
  faHome,
  faLink,
  faMapMarkedAlt,
  faPhoneVolume,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link as NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-center text-dark">
                <h3>E-Bike</h3>
                <div className="icons-container d-flex text-center align-items-center justify-content-center">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-2">
                  <small>
                    <q>Largest website about motorcycle in USA.</q>
                  </small>
                </p>

                <p className="mt-2">
                  <small>Rasel © All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container text-center">
                <ul>
                  <NavLink to="/home" className="footer-menu  ">
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    HOME
                  </NavLink>
                  <NavLink to="/review" className="footer-menu ">
                    <FontAwesomeIcon icon={faLink} className="me-2" />
                    Review
                  </NavLink>
                  <NavLink to="/moreBikes" className="footer-menu ">
                    <FontAwesomeIcon icon={faEnvira} className="me-2" />
                    Bikes
                  </NavLink>
                  <NavLink to="/login" className="footer-menu ">
                    <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                    LogIn
                  </NavLink>
                </ul>
              </div>
            </div>
            <div className="col-md-5 text-dark">
              <div className="right-footer-container text-center">
                <h3>
                  <FontAwesomeIcon icon={faClipboard} className="me-2" />
                  LATEST NEWS
                </h3>
                <input
                  className="footer-input mb-2"
                  type="text"
                  placeholder="Enter Email"
                />

                <div className="footer-phone-icon my-3 text-dark">
                  <h5>
                    <FontAwesomeIcon icon={faPhoneVolume} className="me-2" />
                    PHONE: (831) 438-3500
                  </h5>
                </div>

                <div className="footer-phone-icon text-dark">
                  <p>
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" />
                    Oester 1723 HW Noord-Scharwoude
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
