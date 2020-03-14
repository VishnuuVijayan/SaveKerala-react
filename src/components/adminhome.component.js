import React, { Component } from "react";
// import "./Cards/AdminCards";
import AdminCards from "./Cards/AdminCards";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors } from "../actions/errorActions";
class Adminhome extends Component {
  constructor(props) {
    super(props);
    // this.setStatus = this.setStatus.bind(this);
    this.state = {
      isAdminAuthenticated: false,
      user: {}
    };
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
    // error: PropTypes.object.isRequired,
    // clearErrors: PropTypes.func.isRequired
  };

  // componentDidMount() {
  //   // this.props.clearErrors();
  //   this.setStatus();
  // }

  // setStatus() {
  //   const isAdminAuthenticated = this.props.auth;
  //   console.log(this.props.auth.isAdminAuthenticated);
  //   this.setState({ isAdminAuthenticated });
  // }

  render() {
    const { isAdminAuthenticated, user } = this.props.auth;
    const adminPage = <AdminCards />;
    const nonAdmin = (
      <h1 className="align-items-center">Not logged in, Log in as Admin</h1>
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
