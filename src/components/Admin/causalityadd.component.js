import React, { Component, useState } from "react";
import axios from "axios";
import Modal from "../modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class CausalityAdd extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAdminAuthenticated } = this.props.auth;
    return <div>{isAdminAuthenticated ? <Content /> : <Modal />}</div>;
  }
}
class Content extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeServiceRequired = this.onChangeServiceRequired.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeUrgency = this.onChangeUrgency.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);

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

  onSubmitForm(e) {
    console.log("object");
    e.preventDefault();
    const causality = {
      location: this.state.location,
      urgency: this.state.urgency,
      type: this.state.type,
      service_required: this.state.service_required
    };

    console.log(causality);

    axios
      .post("/causality/add", causality)
      .then((res) => console.log(res.body));

    window.location = "/admin-home";
  }

  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <div className="container">
          <h3 className="m-2">Add Causality</h3>
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group m-3">
              <label> Location</label>
              <input
                type="text"
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
            </div>
            <div className="form-group m-3">
              <label> Type</label>
              <input
                type="text"
                className="form-control"
                value={this.state.type}
                onChange={this.onChangeType}
              />
            </div>
            <div className="form-group m-3">
              <label> Urgency</label>
              <input
                type="text"
                className="form-control"
                value={this.state.urgency}
                onChange={this.onChangeUrgency}
              />
            </div>
            <div className="form-group m-3">
              <label> Service Required</label>
              <input
                type="text"
                className="form-control"
                value={this.state.service_required}
                onChange={this.onChangeServiceRequired}
              />
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

const mapStateToProps = (state) => ({
  auth: state.auth
  // error: state.error
});

export default connect(mapStateToProps, null)(CausalityAdd);
