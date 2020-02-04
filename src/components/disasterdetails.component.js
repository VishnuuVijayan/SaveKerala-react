import React, { Component } from "react";

export default class Details extends Component {
  componentDidMount() {
    // console.log(this.props.location.state);
    const data = this.props.location;
    console.log(data.data);
  }
  render() {
    return <div> hi </div>;
  }
}
