import React, { Component, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

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

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeDistrict = this.onChangeDistrict.bind(this);

    this.state = {
      collector_list: [],
      district: "",
      id: ""
    };
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/collectorlist/").then(res => {
      const data = res.data;
      this.setState({
        collector_list: data
      });
      this.setState({
        district: data[0].district
      });
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <div className="container">
          <h3 className="m-2"> Update District Collector</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label> District </label>
              <select
                ref="districtInput"
                required
                className="form-control"
                value={this.state.district}
                onChange={this.onChangeDistrict}
              >
                {this.state.collector_list.map(function(collector_list) {
                  // let id = disaster._id;
                  // this.props.setDisasterID(id);
                  return (
                    <option
                      key={collector_list.district}
                      value={collector_list.district}
                    >
                      {collector_list.district}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group m-3">
              <Link
                to={{
                  pathname: "/admin/update-collector/update",
                  data: this.state.district
                }}
              >
                <input
                  //   onClick={this.findDisasterID}
                  type="submit"
                  className="btn btn-outline-success text-uppercase"
                  value="Update District Collector"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class EditCollector extends Component {
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

export default connect(mapStateToProps, null)(EditCollector);
