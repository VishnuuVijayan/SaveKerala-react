import React, { Component, useState } from "react";
import axios from "axios";
import Modal from "./modal";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// class Resources extends Component {
//   static propTypes = {
//     auth: PropTypes.object.isRequired
//   };
//   render() {
//     const { isAdminAuthenticated } = this.props.auth;
//     return <div>{isAdminAuthenticated ? <Content /> : <Modal />}</div>;
//   }
// }
export default class Resources extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeServiceRequired = this.onChangeServiceRequired.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeUrgency = this.onChangeUrgency.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);

    this.state = {
      location: "",
      urgency: "",
      type: "",
      service_required: ""
    };
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
    // console.log(e.target.value);
  }

  onChangeUrgency(e) {
    this.setState({
      urgency: e.target.value
    });
    // console.log(e.target.value);
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
    // console.log(e.target.value);
  }

  onChangeServiceRequired(e) {
    this.setState({
      service_required: e.target.value
    });
    // console.log(e.target.value);
  }

  onSubmitForm(e) {
    console.log("object");
    e.preventDefault();
    const Resources = {
      location: this.state.location
    };

    console.log(Resources);

    // axios
    //   .post("http://localhost:5000/resources/add", Resources)
    //   .then(res => console.log(res.body));

    // window.location = "/admin-home";
  }

  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <div className="container">
          <h3 className="m-2">Request for Resources</h3>
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group m-3">
              <label> District</label>
              <input type="text" className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
            </div>
            <div className="form-group m-3">
              <label> Location</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-3">
              <label> Requestee Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-3">
              <label> Requestee Phone Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group m-3">
             <label> <b> Required materials </b></label>
             {/* <select id = "myList">
               <option value = "1">Water</option>
               <option value = "2">Food</option>
               <option value = "3">Clothing</option>
               <option value = "4">Medicine</option>
               <option value = "5">Kitchen utensil</option>
               <option value = "6">Toiletries</option>
               <option value = "7">other</option>
             </select> */}
    
      <div>
        <input type="checkbox" value="Male" name="gender" /> Water <br></br>
        <input type="checkbox" value="Female" name="gender" /> Food <br></br>
        <input type="checkbox" value="Other" name="gender" /> Clothing <br></br>
        <input type="checkbox" value="Other" name="gender" /> Medicine <br></br>
        <input type="checkbox" value="Other" name="gender" /> Kitchen utensil <br></br>
        <input type="checkbox" value="Other" name="gender" /> other <br></br>

      </div>
      
      </div>
            <div className="form-group m-3">
              <input type="submit" className="btn btn-primary" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth
//   // error: state.error
// });

// export default connect(mapStateToProps, null)(Resources);
