import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class SmallScreenMenuContainer extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    const { children } = this.props;
    return (
        <header id="main-header">
        <Navbar bg="main" expand="lg" sticky="top" variant="dark">
          <Navbar.Brand href="#home">
            <img src="/favicon.png" alt="brand" height="50" />{" "}
            {" Akar Pinang Herbal"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" ref={this.wrapper}>
            <Nav className="mr-auto">{children}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default SmallScreenMenuContainer;
