import React, { Component } from "react";
import UserLoginCards from "../Cards/UserLoginCards";

export default class UserLogin extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <UserLoginCards />
      </div>
    );
  }
}
