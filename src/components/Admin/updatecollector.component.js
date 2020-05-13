import React, { Component, useState } from "react";
import Axios from "axios";
import Modal from "../modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      collector: {},
      collector_id: "",
      //   name: "",
      email: "",
      contact: "",
      experience: "",
      collector_fname: "",
      collector_lname: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

  onChangeExperience(e) {
    this.setState({
      experience: e.target.value
    });
  }

  onChangeFname(e) {
    this.setState({
      collector_fname: e.target.value
    });
  }

  onChangeLname(e) {
    this.setState({
      collector_lname: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const UpdatedCollector = {
      collector_fname: this.state.collector_fname,
      collector_lname: this.state.collector_lname,
      contact: this.state.contact,
      email: this.state.email,
      district: this.state.collector.district
    };

    Axios.post(
      "/collectorlist/update/" + this.state.collector._id,
      UpdatedCollector
    ).then((res) => console.log(res.data));
  }

  componentDidMount() {
    const data = this.props.location;
    const district = data.data;
    console.log(data.data);

    Axios.get("/collectorlist/" + district).then((res) => {
      const collector = res.data[0];
      this.setState({ collector });
    });
  }
  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="form-group m-3">
              <label> District</label>
              <input
                type="text"
                className="form-control"
                value={this.state.collector.district}
                // onChange={this.onChangeDistrict}
                readOnly
              />
            </div>
            <div className="form-group m-3">
              <label> First Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.collector_fname}
                onChange={this.onChangeFname}
              />
            </div>
            <div className="form-group m-3">
              <label> Last Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.collector_lname}
                onChange={this.onChangeLname}
              />
            </div>
            <div className="form-group m-3">
              <label> Contact</label>
              <input
                type="number"
                className="form-control"
                value={this.state.contact}
                onChange={this.onChangeContact}
              />
            </div>
            <div className="form-group m-3">
              <label> Email</label>
              <input
                type="text"
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="form-group m-3">
              <input
                type="submit"
                className="btn btn-primary text-uppercase"
                value="update"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class UpdateCollector extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAdminAuthenticated } = this.props.auth;
    return <div>{isAdminAuthenticated ? <Content /> : <Modal />}</div>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(UpdateCollector);
