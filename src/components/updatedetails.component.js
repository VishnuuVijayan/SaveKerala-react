import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { runInThisContext } from "vm";
// const querystring = require("querystring");

// const data = this.props.location;
// const id = data.data;
// console.log(id);
export default class UpdateDetails extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDisaster_edate = this.onChangeDisaster_edate.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePeopleAffected = this.onChangePeopleAffected.bind(this);
    this.onChangeSpanArea = this.onChangeSpanArea.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangeActive = this.onChangeActive.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeSeverity = this.onChangeSeverity.bind(this);

    this.state = {
      disaster: {},
      description: "",
      disaster_edate: new Date(),
      duration: "",
      severity: "",
      people_affected: "",
      span_area: "",
      imgsrc: "",
      isactive: false
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeimage(e) {
    this.setState({
      imgsrc: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeDisaster_edate(disaster_sdate) {
    this.setState({
      disaster_edate: disaster_sdate
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

  onChangeSeverity(e) {
    this.setState({
      severity: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const disasterupdated = {
      description: this.state.description,
      disaster_edate: this.state.disaster_edate,
      severity: this.state.severity,
      span_area: this.state.span_area,
      imgsrc: this.state.imgsrc,
      is_active: this.state.isactive,
      duration: this.state.duration,
      people_affected: this.state.people_affected
    };

    console.log("http://localhost:5000/update/" + this.state.disaster._id);
    console.log(disasterupdated);

    axios
      .post(
        "http://localhost:5000/disaster/update/" + this.state.disaster._id,
        disasterupdated
      )
      .then(res => console.log(res.data));

    // window.location = "/admin";
  }

  onChangeActive(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      isactive: value
    });
  }
  componentDidMount() {
    const data = this.props.location;
    const d_name = data.data;
    // console.log(data.data);
    // const query = { disaster_name: d_name };
    // console.log(query);
    axios.get("http://localhost:5000/disaster/" + d_name).then(res => {
      const disaster = res.data[0];
      this.setState({ disaster });
    });
  }
  render() {
    // console.log(this.state.disaster.disaster_sdate);
    // const date = new Date(this.state.disaster.disaster_sdate);
    // console.log(date);
    return (
      <div style={{ backgroundColor: "#fff" }}>
        {/* <div style={{ backgroundColor: "#fff" }}> */}
        <div className="container">
          <h3 className="m-2">
            Update Disaster : {this.state.disaster.disaster_name}
          </h3>
          <form onSubmit={this.onSubmit}>
            {/* <div className="form-group m-3">
              <label> Disaster Record Number</label>
              <input
                type="text"
                className="form-control"
                value={this.state.disaster.disasterid}
                // onChange={this.onChangeDisasterID}
              />
            </div> */}
            {/* <div className="form-group m-3">
              <label> Disaster Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.disaster.disaster_name}
                // onChange={this.onChangeDisasterName}
                readOnly
              />
            </div> */}
            {/* <div className="form-group m-3">
              <label> Slug</label>
              <input
                type="text"
                className="form-control"
                value={this.state.slug}
                onChange={this.onChangeDisasterSlug}
              />
            </div> */}
            <div className="form-group m-3">
              <label> Description</label>
              <input
                type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
            {/* <div className="form-group m-3">
              <label> Disaster Location</label>
              <input
                type="text"
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
            </div> */}
            {/* <div className="form-group m-3">
              <label> Disaster Type</label>
              <input
                type="text"
                className="form-control"
                value={this.state.disaster_type}
                onChange={this.onChangeDisasterType}
              />
            </div> */}
            {/* <div className="form-group m-3">
              <label> Disaster Start Date </label>
              <DatePicker
                className="form-control m-2"
                selected={date}
                // onChange={this.onChangeDisaster_sdate}
                readOnly
              />
            </div> */}
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
              <label>
                is Active ?
                <input
                  name="is active?"
                  type="checkbox"
                  className="form-control"
                  value={this.state.isactive}
                  onChange={this.onChangeActive}
                />
              </label>
            </div>
            {/* <div className="form-group m-3">
              <label> IS ACTIVE</label>
              <input
                type="number"
                className="form-control"
                value={this.state.isactive}
                onChange={this}
              />
            </div> */}
            <div className="form-group m-3">
              <input
                type="submit"
                className="btn btn-primary text-uppercase"
                value="update"
              />
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
