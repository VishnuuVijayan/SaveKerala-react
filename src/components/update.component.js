import React, { Component, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "./modal";

class Content extends React.Component {
  constructor(props) {
    super(props);
    // this.onSubmit = this.onSubmit.bind(this);
    this.onChangeDisasterName = this.onChangeDisasterName.bind(this);
    // this.setDisasterID = this.setDisasterID.bind(this);
    // this.findDisasterID = this.findDisasterID.bind(this);
    // this.x = this.x.bind(this);
    this.state = {
      disasters: [],
      disastername: "",
      disaster_id: ""
    };
  }

  onChangeDisasterName(e) {
    this.setState({
      disastername: e.target.value
    });
  }

  // setDisasterID(id) {
  //   this.setState({
  //     disaster_id: id
  //   });
  //   // console.log(this.state.disaster_id);
  // }

  // findDisasterID = state => {
  //   // const x = data.length;
  //   for (let i = 0; i < this.state.disasters.length; i++) {
  //     // console.log(this.state.disasters.length);
  //     // console.log(this.state.disasters[i].disaster_name);
  //     if (this.state.disasters[i].disaster_name === this.state.disastername) {
  //       const x = this.state.disasters[i]._id;
  //       // console.log(x);
  //       // this.setState({
  //       //   disaster_id: x
  //       // });
  //       console.log(x);
  //       this.setDisasterID(x);
  //     }
  //   }
  // };

  // onSubmit = (e, disasterOut) => {
  //   window.location = "/";
  //   console.log(disasterOut);
  // };

  componentDidMount() {
    axios.get("http://localhost:5000/disaster/").then(response => {
      if (response.data.length > 0) {
        const data = response.data;
        this.setState({
          disasters: data
        });
        this.setState({
          disastername: data[0].disaster_name
        });
        // this.setState({
        //   disaster_id: data[0]._id
        // });
      }
    });
  }

  onSubmit = (e, state) => {
    e.preventDefault();
    // window.location = "/admin/update-details";
    // console.log(this.state.disastername);
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          height: 700
        }}
      >
        <div className="container">
          <h3 className="m-2"> Update Disaster Details</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label> Disaster </label>
              <select
                ref="disasterInput"
                required
                className="form-control"
                value={this.state.disastername}
                onChange={this.onChangeDisasterName}
              >
                {this.state.disasters.map(function(disaster) {
                  // let id = disaster._id;
                  // this.props.setDisasterID(id);
                  return (
                    <option
                      key={disaster.disaster_name}
                      value={disaster.disaster_name}
                    >
                      {disaster.disaster_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group m-3">
              <Link
                to={{
                  pathname: "/admin/update-details/",
                  data: this.state.disastername
                }}
              >
                <input
                  onClick={this.findDisasterID}
                  type="submit"
                  className="btn btn-outline-success text-uppercase"
                  value="Update Disaster Details"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class Update extends Component {
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

export default connect(mapStateToProps, null)(Update);
