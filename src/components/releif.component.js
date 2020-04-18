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
          <h3 className="m-2">Supply Requirements</h3>
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group m-3">
              <label>Men</label>
              <input
                type="number" className="form-control"
              />
            </div>
            <div className="form-group m-3">
              <label> Women</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-group m-3">
              <label> Clothes Needed</label><br/>
              <input type="radio" id="Yes" name="True" value="Yes"/>
                <label for="Yes">Yes</label><br/>
                <input type="radio" id="No" name="False" value="No"/>
                <label for="No">No</label><br/>
            </div>
            <div className="form-group m-3">
              <label> Food Needed</label><br/>
              <input type="radio" id="Yes"name="True" value="Yes"/>
                <label for="Yes">Yes</label><br/>              
                <input type="radio" id="No" name="False" value="No"/>
              <label for="No">No</label><br/>       
           </div>

            <div className="form-group m-3">
              <label>Extra Needed Materials</label>
              <input
                type="Text" placeholder="Add new things seperated by comma" className="form-control"
              />
            <div className="form-group m-3">
              <input type="submit" className="btn btn-primary" value="SUBMIT" />
            </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

