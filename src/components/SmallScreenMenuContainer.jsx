import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function SmallScreenMenuContainer({ children }) {
  return (
    <Navbar bg="main" expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src="/favicon.png" alt="brand"  height="50" />{" "}
        {" Akar Pinang Herbal"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{children}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SmallScreenMenuContainer;
