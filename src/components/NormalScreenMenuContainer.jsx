import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";

function NormalScreenMenuContainer({ children }) {
  return (
    <header id="main-header">
      <div className="jumbotron text-center">
        <img src="/assets/brand.png" alt="brand" height="100" />{" "}
      </div>
      <Navbar bg="main" expand="md" sticky="top" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">{children}</Nav>
          <Form inline>
            <Button size="sm" variant="light" type="submit" id="btnLogin">
              Sign In
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NormalScreenMenuContainer;
