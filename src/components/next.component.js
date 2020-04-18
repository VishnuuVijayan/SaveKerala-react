import React, { Component, useState } from "react";
import Modal from "./modal";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default class Next extends React.Component {
  constructor(props) {
    super(props);

   
    this.state = {
      location: "",
      urgency: "",
      type: "",
      service_required: ""
    };
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
    // console.log(e.target.value);
  }

  onChangeUrgency(e) {
    this.setState({
      urgency: e.target.value
    });
    // console.log(e.target.value);
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
    // console.log(e.target.value);
  }

  onChangeServiceRequired(e) {
    this.setState({
      service_required: e.target.value
    });
    // console.log(e.target.value);
  }
  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <div className="container">
          <h3 className="m-2">Donation Form</h3>
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group m-3">
              <label> Choose Payment Method</label>
              <input
                type="text"
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
            </div>
            <div className="form-group m-3">
              <label> Full Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-3">
              <label> Email ID</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-3">
              <label> Mobile Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-3">
              <label> Amount In INR</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-3">
              <input type="submit" className="btn btn-primary" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

