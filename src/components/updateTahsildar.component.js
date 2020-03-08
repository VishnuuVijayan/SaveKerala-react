import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class UpdateTahsildar extends Component {
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
    Axios.get("http://localhost:5000/tahsildarlist/").then(res => {
      let datas = res.data;

      // Add object value with keys 'district' to set
      // let districtsSet = new Set();
      // data.forEach(item => districtsSet.add(item.district));
      // console.log(districtsSet);

      // this.setState({
      //   districtsSet: districtsSet
      // });

      // this.state.districtsSet.map(char => {
      //   this.setState({
      //     districts: char.value
      //   });
      // });

      console.log(datas);

      let uniqueDistricts = [];
      datas.map(data => {
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

      // console.log(this.state.districts);

      // this.setState({
      //   district: districtsSet[0]
      // });

      // this.setState({
      //   tahsildar_list: data
      // });
      // this.setState({
      //   district: data[0].district
      // });
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
                {this.state.districts.map(function(district) {
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