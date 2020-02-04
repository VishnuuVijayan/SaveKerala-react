import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { disasters: [], images: [] };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("http://localhost:5000/disaster/")
      .then(response => {
        const data = response.data;
        this.setState({ disasters: data });
        console.log("Data has been Recieved");
      })
      .catch(() => {
        alert("Error Recieving Data");
      });
  };

  render() {
    return (
      <div>
        <Carousel>
          {this.state.disasters.map(function(disaster) {
            const name = disaster.disaster_name;
            return (
              <Carousel.Item>
                <div className="container">
                  <img
                    height={400}
                    className="d-block w-100"
                    src={disaster.imgsrc}
                    alt="First slide"
                  />
                </div>
                //{" "}
                <Link
                  to={{
                    pathname: "/disasterdetails",
                    data: name
                  }}
                >
                  <Carousel.Caption>
                    <h3> {disaster.disaster_name}</h3>
                    <p>{disaster.slug}</p>
                  </Carousel.Caption>
                  //{" "}
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
