import React, { Component } from "react";
// import "./Cards/AdminCards";
import AdminCards from "./Cards/AdminCards";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
class Adminhome extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      // isAdminAuthenticated: true,
      user: {},
      modalToggle: true
    };
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
    // error: PropTypes.object.isRequired,
    // clearErrors: PropTypes.func.isRequired
  };

  handleClose = () => {
    this.setState({
      modalToggle: false
    });
  };

  handleShow = () => {
    this.setState({
      modalToggle: true
    });
  };

  // componentDid() {
  //   this.setState({
  //     modalToggle: true
  //   });
  // }

  // componentDidMount() {
  //   const { isAdminAuthenticated } = this.props.auth;
  //   this.setState({
  //     modalToggle: isAdminAuthenticated
  //   });
  // }

  render() {
    const { isAdminAuthenticated, user } = this.props.auth;
    const adminPage = <AdminCards />;
    const nonAdmin = (
      <Modal show={this.state.modalToggle} onHide={this.handleClose}>
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
    return (
      <div className="container-fluid d-flex justify-content-center">
        {isAdminAuthenticated ? adminPage : nonAdmin}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
  // error: state.error
});

export default connect(mapStateToProps, null)(Adminhome);
