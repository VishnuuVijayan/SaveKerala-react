import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

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
        <div className="mx-5">
          <Carousel>
            {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}

            {this.state.disasters.map(function(disaster) {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={disaster.imgsrc}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3> {disaster.disaster_name}</h3>
                    <p>{disaster.slug}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}

            {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
          </Carousel>
        </div>
      </div>
    );
  }
}
