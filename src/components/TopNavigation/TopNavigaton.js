import React, { Component, Fragment } from "react";
import { Nav, Navbar, NavDropdown, Collapse, Button } from "react-bootstrap";

class TopNavigaton extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">Farhan Haque</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">Home</Nav.Link>
              <Nav.Link href="#deets">Services</Nav.Link>
              <Nav.Link href="#deets">Courses</Nav.Link>
              <Nav.Link href="#deets">Portfolio</Nav.Link>
              <Nav.Link href="#deets">Contact</Nav.Link>
              <Nav.Link href="#deets">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigaton;
