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
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      tahsildar_list: [],
      district: "",
      districts: [],
      id: ""
      // taluk: ""
    };
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  componentDidMount() {
    Axios.get("/tahsildarlist/list/districts").then((res) => {
      let datas = res.data;
      console.log(datas);
      let uniqueDistricts = [];
      datas.map((data) => {
        if (uniqueDistricts.indexOf(data.district) === -1) {
          uniqueDistricts.push(data.district);
        }
        return 0;
      });

      this.setState({
        districts: uniqueDistricts
      });

      this.setState({
        district: uniqueDistricts[0]
      });
    });
    // Axios.get(
    //   "http://localhost:5000/tahsildarlist/" + this.state.district
    // ).then(res => {
    //   const data = res.data;
    //   this.setState({
    //     tahsildar_list: data
    //   });
    //   this.setState({
    //     taluk: data[0].taluk
    //   });
    // });
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state.district);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <div className="container">
          <h3 className="m-2"> Update tahsildar</h3>
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
                {this.state.districts.map(function (district) {
                  // let id = disaster._id;
                  // this.props.setDisasterID(id);
                  return (
                    <option
                      // onClick={() => this.onClickFn(dis.district)}
                      key={district}
                      value={district}
                    >
                      {district}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group m-3">
              <Link
                to={{
                  pathname: "/admin/update-tahsildar/update",
                  data: this.state.district
                }}
              >
                <input
                  type="submit"
                  className="btn btn-outline-success text-uppercase"
                  value="Update Tahsildar"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class UpdateTahsildar extends Component {
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

export default connect(mapStateToProps, null)(UpdateTahsildar);
