import React, { Component, useState } from "react";
import Axios from "axios";
import Modal from "../modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTaluk = this.onChangeTaluk.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);

    this.state = {
      tahsildar: [],
      taluk: "",
      contact: null,
      t_fname: "",
      t_lname: "",
      district: "",
      tahsildar_id: ""
    };
  }

  componentDidMount() {
    const data = this.props.location;
    const district = data.data;
    console.log(data.data);
    this.setState({
      district: data.data
    });

    // console.log("http://localhost:5000/tahsildarlist/" + district);

    Axios.get("http://localhost:5000/tahsildarlist/" + district).then(res => {
      const tahsildar = res.data;
      this.setState({
        tahsildar
      });

      this.setState({
        taluk: tahsildar[0].taluk
      });

      this.setState({
        tahsildar_id: tahsildar[0]._id
      });
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const UpdatedTahsildar = {
      t_fname: this.state.t_fname,
      t_lname: this.state.t_lname,
      contact: this.state.contact,
      taluk: this.state.taluk,
      district: this.state.district
    };

    Axios.get(
      "http://localhost:5000/tahsildarlist/taluk/" + this.state.taluk
    ).then(res => {
      const data = res.data[0]._id;
      this.setState({
        tahsildar_id: data
      });

      console.log(data);
    });

    Axios.post(
      "http://localhost:5000/tahsildarlist/update/" + this.state.tahsildar_id,
      UpdatedTahsildar
    ).then(res => console.log(res.data));
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

  onChangeFname(e) {
    this.setState({
      t_fname: e.target.value
    });
  }

  onChangeLname(e) {
    this.setState({
      t_lname: e.target.value
    });
  }

  onChangeTaluk(e) {
    this.setState({
      taluk: e.target.value
    });
  }
  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <div className="container">
          <h1>Update Tahsildar</h1>

          <form onSubmit={this.onSubmit}>
            <div className="form-group m-3">
              <label> District</label>
              <input
                type="text"
                className="form-control"
                value={this.state.district}
                // onChange={this.onChangeDistrict}
                readOnly
              />
            </div>
            <div className="form-group m-3">
              <label> Taluk</label>
              <select
                ref="districtInput"
                required
                className="form-control"
                value={this.state.taluk}
                onChange={this.onChangeTaluk}
              >
                {this.state.tahsildar.map(function(tahsildar) {
                  // let id = disaster._id;
                  // this.props.setDisasterID(id);
                  return (
                    <option
                      // onClick={() => this.onClickFn(tahsildar.taluk)}
                      key={tahsildar.taluk}
                      value={tahsildar.taluk}
                    >
                      {tahsildar.taluk}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group m-3">
              <label> First Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.t_fname}
                onChange={this.onChangeFname}
              />
            </div>
            <div className="form-group m-3">
              <label> Last Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.t_lname}
                onChange={this.onChangeLname}
              />
            </div>
            <div className="form-group m-3">
              <label> Contact</label>
              <input
                type="number"
                className="form-control"
                value={this.state.contact}
                onChange={this.onChangeContact}
              />
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

class UpdateTahsildarTwo extends Component {
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

export default connect(mapStateToProps, null)(UpdateTahsildarTwo);
