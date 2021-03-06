import React, { Component, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Modal from "../modal";

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
    Axios.get("/collectorlist/").then((res) => {
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
                {this.state.collector_list.map(function (collector_list) {
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
    return <div>{isAdminAuthenticated ? <Content /> : <Modal />}</div>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(EditCollector);
