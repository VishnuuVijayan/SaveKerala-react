import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <div
        style={{
          margin: 125
        }}
      >
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <h3>Sign Up</h3>

              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div className="form-group">
                <label>Locality</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Locality"
                />
              </div>
              <div className="form-group">
                <label>District</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="District"
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="integer"
                  className="form-control"
                  placeholder="Mobile Number"
                />
              </div>

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
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label class="form-check-label" for="exampleCheck1">
                  Interested in Volunteering?
                </label>
              </div>
              <div style={{ marginTop: 20 }}>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
