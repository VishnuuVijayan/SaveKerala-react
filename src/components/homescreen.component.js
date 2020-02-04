import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { disasters: [], images: [] };
  }
  componentDidMount() {
    // axios.get("http://localhost:5000/disaster/").then(response => {
    //   if (response.data.length > 0) {
    //     this.setState({
    //       disasters: response.data.map(disaster => disaster.disaster_name),
    //       // images: response.data.map(image => image.imgsrc),
    //       disaster_name: response.data[0].disaster_name,
    //       imgsrc: response.data[0].imgsrc
    //     });
    //   }
    // });
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

  // displayData = (disasters) => {
  //     if(!disasters.length) return null;

  //     return disasters.map((disaster,index)=> {
  //       <Carousel.Item key = {index}>
  //       <img
  //         className="d-block w-100"
  //         src={disaster.imgsrc}
  //         alt="First slide"
  //       />
  //       <Carousel.Caption>
  //         <h3> {disaster.disaster_name}</h3>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     })
  //   };

  // };
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
