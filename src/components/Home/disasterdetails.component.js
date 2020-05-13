import React, { Component } from "react";
import axios from "axios";
import "../styles.css";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = { disaster: {} };
  }
  componentDidMount() {
    const data = this.props.location;
    const id = data.data;
    axios
      .get("/disaster/" + id)
      .then((response) => {
        const disaster = response.data;
        console.log("Data has been Recieved");
        // this.setState({
        //   disaster: disaster
        // });
        this.setData(disaster);
      })
      .catch(() => {
        alert("Error Recieving Data");
      });
    // console.log(this.state.disaster);
  }

  setData(data) {
    this.setState({
      disaster: data
    });
    console.log(this.state.disaster);
  }

  render() {
    const dis = this.state.disaster;
    const date = Date.parse(dis.disaster_sdate);
    return (
      <div className="d-inline-flex p-2 col-example">
        <div className="col">
          <h1> {dis.disaster_name} </h1>
          {/* </div> */}
          <img src={dis.imgsrc} alt="No image" />
          <p>{dis.description}</p>
          {/* <p>Details :</p>
          Location :{dis.location}
          <br /> */}
        </div>
      </div>
    );
  }
}
