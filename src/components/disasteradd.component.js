import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DisasterAdd extends Component {
  constructor(props) {
    super(props);

    this.onChangeDisasterID = this.onChangeDisasterID.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDisaster_edate = this.onChangeDisaster_edate.bind(this);
    this.onChangeDisaster_sdate = this.onChangeDisaster_sdate.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeSeverity = this.onChangeSeverity.bind(this);
    this.onChangeSpanArea = this.onChangeSpanArea.bind(this);
    this.onChangePeopleAffected = this.onChangePeopleAffected.bind(this);
    this.onChangeLastEdited = this.onChangeLastEdited.bind(this);
    this.onChangeisactive = this.onChangeisactive.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      disasterid: undefined,
      location: undefined,
      disaster_sdate: new Date(),
      disaster_edate: new Date(),
      duration: undefined,
      severity: undefined,
      people_affected: undefined,
      span_area: undefined,
      last_edited: new Date(),
      isactive: false
    };
  }

  onChangeDisasterID(e) {
    this.setState({
      disasterid: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
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
      disasterid: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      disasterid: e.target.value
    });
  }

  onChangePeopleAffected(e) {
    this.setState({
      disasterid: e.target.value
    });
  }

  onChangeSpanArea(e) {
    this.setState({
      disasterid: e.target.value
    });
  }

  onChangeLastEdited(date) {
    this.setState({
      last_edited: date
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
      location: this.state.location,
      disaster_sdate: this.state.disaster_sdate,
      disaster_edate: this.state.disaster_edate,
      duration: this.state.duration,
      severity: this.state.severity,
      people_affected: this.state.people_affected,
      span_area: this.state.span_area,
      last_edited: this.state.last_edited
    };

    console.log(disaster);

    window.location = "/admin-home";
  };

  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h3 className="m-2">Create New Disaster</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group m-3">
              <label> Disaster ID</label>
              <input
                type="number"
                className="form-control"
                value={this.state.disasterid}
                onChange={this.onChangeDisasterID}
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
              <input
                type="submit"
                className="btn btn-primary"
                value="Add Disaster"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
