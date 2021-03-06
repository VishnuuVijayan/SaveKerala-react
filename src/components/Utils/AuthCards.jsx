import React, { Component } from "react";
import Cards from "./Cards";
import Modal from "../modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Cards
              title="Update Collector"
              imgsrc="https://cdn1.iconfinder.com/data/icons/emergency-and-disaster-management-color/64/damage-disaster-attack-harm-ruin-512.png"
              btnRoute="/admin/update-collector"
            />
          </div>
          <div className="col-md-4">
            <Cards
              title="Update Tahsildar"
              imgsrc="https://cdn.iconscout.com/icon/premium/png-256-thumb/flood-1540997-1307389.png"
              btnRoute="/admin/update-tahsildar"
            />
          </div>
          <div className="col-md-4">
            <Cards
              title="Update Details"
              imgsrc="https://www.shareicon.net/data/2015/09/22/644537_arrow_512x512.png"
              btnRoute="/admin/update"
            />
          </div>
        </div>
      </div>
    );
  }
}

class AuthCards extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAdminAuthenticated } = this.props.auth;
    return <div>{isAdminAuthenticated ? <Content /> : <Modal />}</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AuthCards);
