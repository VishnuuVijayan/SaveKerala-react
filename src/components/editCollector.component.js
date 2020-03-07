import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class EditCollector extends Component {
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
    Axios.get("http://localhost:5000/collectorlist/").then(res => {
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
                {this.state.collector_list.map(function(collector_list) {
                  // let id = disaster._id;
                  // this.props.setDisasterID(id);
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
