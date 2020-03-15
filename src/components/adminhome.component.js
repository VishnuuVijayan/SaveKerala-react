import React, { Component } from "react";
// import "./Cards/AdminCards";
import AdminCards from "./Cards/AdminCards";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "./modal";
class Adminhome extends Component {
  constructor(props) {
    super(props);
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
    let { isAdminAuthenticated } = this.props.auth;
    const adminPage = <AdminCards />;
    return (
      <div className="container-fluid d-flex justify-content-center">
        {isAdminAuthenticated ? adminPage : <Modal />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
  // error: state.error
});

export default connect(mapStateToProps, null)(Adminhome);
