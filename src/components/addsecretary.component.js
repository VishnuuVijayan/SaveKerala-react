import React, { Component } from "react";
import Axios from "axios";

export default class AddSecretary extends Component {
  constructor(props) {
    super(props);

    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePanchayat = this.onChangePanchayat.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      district: "",
      panchayat: "",
      secratary_name: "",
      email: "",
      contact: ""
    };
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      secratary_name: e.target.value
    });
  }

  onChangePanchayat(e) {
    this.setState({
      panchayat: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const secretary = {
      district: this.state.district,
      panchayat: this.state.panchayat,
      secratary_name: this.state.secratary_name,
      email: this.state.email,
      contact: this.state.contact
    };

    Axios.post("http://localhost:5000/secretary/add", secretary).then(res =>
      alert("Data Added")
    );
  }
  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="form-group m-3">
              <label> District</label>
              <input
                type="text"
                className="form-control"
                value={this.state.district}
                onChange={this.onChangeDistrict}
              />
              <div className="form-group m-3">
                <label> Panchayat</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.panchayat}
                  onChange={this.onChangePanchayat}
                />
              </div>
              <div className="form-group m-3">
                <label> Secretary Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.secratary_name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group m-3">
                <label> Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group m-3">
                <label> Contact</label>
                <input
                  type="Number"
                  className="form-control"
                  value={this.state.contact}
                  onChange={this.onChangeContact}
                />
              </div>
              <div className="form-group m-3">
                <input
                  type="submit"
                  className="btn btn-primary text-uppercase"
                  value="Add"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
