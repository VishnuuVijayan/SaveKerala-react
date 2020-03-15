import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./modal";
class DisasterAdd extends Component {
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

    this.onChangeDisasterID = this.onChangeDisasterID.bind(this);
    this.onChangeDisasterSlug = this.onChangeDisasterSlug.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangeDisasterName = this.onChangeDisasterName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDisasterType = this.onChangeDisasterType.bind(this);
    this.onChangeDisaster_edate = this.onChangeDisaster_edate.bind(this);
    this.onChangeDisaster_sdate = this.onChangeDisaster_sdate.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeSeverity = this.onChangeSeverity.bind(this);
    this.onChangeSpanArea = this.onChangeSpanArea.bind(this);
    this.onChangePeopleAffected = this.onChangePeopleAffected.bind(this);
    // this.onChangeLastEdited = this.onChangeLastEdited.bind(this);
    this.onChangeisactive = this.onChangeisactive.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      disasterid: "",
      disaster_name: "",
      slug: "",
      description: "",
      location: "",
      disaster_type: "",
      disaster_sdate: new Date(),
      disaster_edate: new Date(),
      duration: "",
      severity: "",
      people_affected: "",
      span_area: "",
      last_edited: new Date(),
      is_active: false,
      imgsrc: "",
      modalToggle: true
    };
  }

  onChangeimage(e) {
    this.setState({
      imgsrc: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDisasterSlug(e) {
    this.setState({
      slug: e.target.value
    });
  }

  onChangeDisasterID(e) {
    this.setState({
      disasterid: e.target.value
    });
  }

  onChangeDisasterName(e) {
    this.setState({
      disaster_name: e.target.value
    });
    console.log(e.target.value);
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeDisasterType(e) {
    this.setState({
      disaster_type: e.target.value
    });
  }

  onChangeDisaster_sdate(disaster_edate) {
    this.setState({
      disaster_sdate: disaster_edate
    });
  }

  onChangeDisaster_edate(disaster_sdate) {
    this.setState({
      disaster_edate: disaster_sdate
    });
  }

  onChangeSeverity(e) {
    this.setState({
      severity: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangePeopleAffected(e) {
    this.setState({
      people_affected: e.target.value
    });
  }

  onChangeSpanArea(e) {
    this.setState({
      span_area: e.target.value
    });
  }

  onChangeisactive(e) {
    this.setState({
      isactive: e.target.value
    });
  }

  onSubmit = e => {
    console.log("Hello");
    e.preventDefault();

    const disaster = {
      disasterid: this.state.disasterid,
      description: this.state.description,
      slug: this.state.slug,
      disaster_name: this.state.disaster_name,
      location: this.state.location,
      disaster_type: this.state.disaster_type,
      disaster_sdate: this.state.disaster_sdate,
      disaster_edate: this.state.disaster_edate,
      duration: this.state.duration,
      severity: this.state.severity,
      people_affected: this.state.people_affected,
      span_area: this.state.span_area,
      is_active: true,
      imgsrc: this.state.imgsrc
    };

    console.log(disaster);

    axios
      .post("http://localhost:5000/disaster/add", disaster)
      .then(res => console.log(res.data));

    window.location = "/admin-home";
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#fff" }}>
          <div className="container">
            <h3 className="m-2">Add New Disaster</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group m-3">
                <label> Disaster Record Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.disasterid}
                  onChange={this.onChangeDisasterID}
                />
              </div>
              <div className="form-group m-3">
                <label> Disaster Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.disaster_name}
                  onChange={this.onChangeDisasterName}
                />
              </div>
              <div className="form-group m-3">
                <label> Slug</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.slug}
                  onChange={this.onChangeDisasterSlug}
                />
              </div>
              <div className="form-group m-3">
                <label> description</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group m-3">
                <label> Disaster Location</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.location}
                  onChange={this.onChangeLocation}
                />
              </div>
              <div className="form-group m-3">
                <label> Disaster Type</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.disaster_type}
                  onChange={this.onChangeDisasterType}
                />
              </div>
              <div className="form-group m-3">
                <label> Disaster Start Date </label>
                <DatePicker
                  className="form-control m-2"
                  selected={this.state.disaster_sdate}
                  onChange={this.onChangeDisaster_sdate}
                />
              </div>
              <div className="form-group m-3">
                <label> Disaster End Date </label>
                <DatePicker
                  className="form-control m-2"
                  selected={this.state.disaster_edate}
                  onChange={this.onChangeDisaster_edate}
                />
              </div>
              <div className="form-group m-3">
                <label> Disaster duration</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                />
              </div>

              <div className="form-group m-3">
                <label>Severity Level</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.severity}
                  onChange={this.onChangeSeverity}
                />
              </div>
              <div className="form-group m-3">
                <label> Approximate number of people affected</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.people_affected}
                  onChange={this.onChangePeopleAffected}
                />
              </div>
              <div className="form-group m-3">
                <label> Span Area</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.span_area}
                  onChange={this.onChangeSpanArea}
                />
              </div>
              <div className="form-group m-3">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.imgsrc}
                  onChange={this.onChangeimage}
                />
              </div>
              <div className="form-group m-3">
                <input
                  type="submit"
                  className="btn btn-primary text-uppercase"
                  value="Add Disaster"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
  // error: state.error
});

export default connect(mapStateToProps, null)(DisasterAdd);
