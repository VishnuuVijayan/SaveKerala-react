import React, { Component } from "react";
// import "./Cards/AdminCards";
import AdminCards from "./Cards/AdminCards";

export default class Adminhome extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <AdminCards />
        {/* <AdminCards /> */}
      </div>
    );
  }
}
