import React, { Component, Fragment } from "react";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown, Collapse, Button } from "react-bootstrap";

class TopNavigaton extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     navBarTitle: "navTitle",
  //   };
  // }

  state = {
    navBarTitle: "navTitle",
    navbarBack: "navBackground",
    navBarItem: "navItem",
  };

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navbarBack: "navBackgroundScroll",
        navBarItem: "navItemScroll",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: "navBarTitle",
        navbarBack: "navBackground",
        navBarItem: "navItem",
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant="dark"
          className={this.state.navbarBack}
        >
          <Navbar.Brand className={this.state.navBarTitle} href="#home">
            Farhan Haque
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets" className={this.state.navBarItem}>
                Home
              </Nav.Link>
              <Nav.Link href="#deets" className={this.state.navBarItem}>
                Services
              </Nav.Link>
              <Nav.Link href="#deets" className={this.state.navBarItem}>
                Courses
              </Nav.Link>
              <Nav.Link href="#deets" className={this.state.navBarItem}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#deets" className={this.state.navBarItem}>
                Contact
              </Nav.Link>
              <Nav.Link href="#deets" className={this.state.navBarItem}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigaton;
