import React, { Component } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
import "./styles.css";

export default class AdminLogin extends Component {
  render() {
    return (
      <div
        style={{ justifyContent: "center", alignItems: "center", margin: 125 }}
        className="auth-wrapper"
      >
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <a href="/admin-home" className="btn btn-primary btn-block">
              {" "}
              Sign In
            </a>
          </form>
        </div>
      </div>
    );
  }
}
