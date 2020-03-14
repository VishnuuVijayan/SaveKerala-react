import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Logout from "../components/logout.component";

class NavbarD extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAuthenticated, user, isAdminAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Nav.Item>
          <span className="navbar-text mr-1">
            <strong>{user ? `Welcome ${user.first_name}` : ""}</strong>
          </span>
        </Nav.Item>
        <Nav.Link href="add-volunteer-details">
          Register as a Volunteer
        </Nav.Link>
        <Logout />
      </Fragment>
    );

    const adminLinks = (
      <Fragment>
        <Nav.Item>
          <span className="navbar-text mr-1">
            <strong>{user ? `Welcome ${user.first_name}` : ""}</strong>
          </span>
        </Nav.Item>
        <Nav.Link href="add-volunteer-details">
          Register as a Volunteer
        </Nav.Link>
        <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Nav.Link href="signup">
          Sign Up <i className="fas fa-sign-in-alt"></i>
        </Nav.Link>
        <Nav.Link eventKey={2} href="login">
          Log In <i className="fas fa-user"></i>
        </Nav.Link>
      </Fragment>
    );

    return (
      <div>
        <header
          className="text-center py-2 "
          style={{ backgroundColor: "#000" }}
        >
          <div className="container">
            <h1 className="font-weight-light text-white">
              Disaster Management Portal
            </h1>
          </div>
        </header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Disaster Management Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {isAuthenticated
                ? authLinks
                : isAdminAuthenticated
                ? adminLinks
                : guestLinks}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(NavbarD);
