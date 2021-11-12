import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar
        className="mainNav"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand to="/home" className="fs-1 fw-bolder brandLogo">
            E-Bike
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end text-center">
            <Nav.Link className="navItem" as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link className="navItem" as={HashLink} to="/home#reviews">
              Customer
            </Nav.Link>
            <Link className="navItem me-3" to="/moreBikes">
              Explore
            </Link>
            <Link className="navItem me-3" to="/review">
              Review
            </Link>
            {user.email ? (
              <NavLink className="me-2 fw-bold" to="/dashboard">
                Dashboard
              </NavLink>
            ) : (
              ""
            )}
            {user.email ? (
              <Button onClick={logout} variant="light" className="mx-2 fw-bold">
                Logout
              </Button>
            ) : (
              <Link className="navItem me-2" to="/login">
                LogIn
              </Link>
            )}
            <Navbar.Text className="text-black d-flex align-items-center justify-content-center">
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
