import React, { Component, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Content extends React.Component {
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
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h3 className="m-2">
            Update Disaster : {this.state.disaster.disaster_name}
          </h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group m-3">
              <label> Description</label>
              <input
                type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
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

function ModalOn(props) {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        onClick={() => {
          window.location = "/admin";
        }}
      >
        <Modal.Title>Authentication Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You should have admin privileges to view this page
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={}>
        Close
      </Button> */}
        <Button
          variant="primary"
          onClick={() => {
            window.location = "/admin";
          }}
        >
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

class UpdateDetails extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAdminAuthenticated } = this.props.auth;
    return <div>{isAdminAuthenticated ? <Content /> : <ModalOn />}</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(UpdateDetails);
