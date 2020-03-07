import React, { Component } from "react";
import axios from "axios";
import { Carousel,Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from './Cards/Cards'

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
      <div style={{backgroundColor:'#eeeff1'}}>
      <div className = "row mt-3">
        <div className = "col-9">
        <Carousel>
          {this.state.disasters.map(function(disaster) {
            const id = disaster._id;
            return (
              <Carousel.Item>
                <div className="container">
                  <img
                    height={400}
                    className="d-block w-100"
                    src={disaster.imgsrc}
                    alt="First slide"
                  />
                </div>{" "}
                <Link
                  to={{
                    pathname: "/disasterdetails/",
                    data: id
                  }}
                >
                  <Carousel.Caption>
                    <h3> {disaster.disaster_name}</h3>
                    <p>{disaster.slug}</p>
                  </Carousel.Caption>{" "}
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div>
<div className="text-center" style={{backgroundColor:'#fff',height:400,width:350}}>News & Events

</div>


<div className='d-inline-flex mx-5 ml-2'>
    <div className="col-3 mx-2 card text-center">
      <div className="overflow">
        {/* <img
          className="card-img-top"
          style={{ width: 250, height: 250 }}
          alt="helo"
          src={props.imgsrc}
        /> */}
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> ctfvghbnj</h4>
        <p className="card-text text-secondary">afsgdhfhgfdsfghfd</p>
</div>
</div>
    <div className="col-3 mx-2 card text-center">
      <div className="overflow">
        {/* <img
          className="card-img-top"
          style={{ width: 250, height: 250 }}
          alt="hello"
          src={props.imgsrc}
        /> */}
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> ctfvghbnj</h4>
        <p className="card-text text-secondary">afsgdhfhgfdsfghfd</p>
</div>
</div>
    <div className="col-3 mx-2 card text-center">
      <div className="overflow">
        {/* <img
          className="card-img-top"
          style={{ width: 250, height: 250 }}
          alt="hello"
          src={props.imgsrc}
        /> */}
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> ctfvghbnj</h4>
        <p className="card-text text-secondary">afsgdhfhgfdsfghfd</p>
</div>
</div>
    <div className="col-3 mx-2 card text-center">
      <div className="overflow">
        {/* <img
          className="card-img-top"
          style={{ width: 250, height: 250 }}
          alt="hello"
          src={props.imgsrc}
        /> */}
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> ctfvghbnj</h4>
        <p className="card-text text-secondary">afsgdhfhgfdsfghfd</p>
</div>
</div>
  </div>
  </div>
      </div>
    );
  }
}
