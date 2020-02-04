import React, { Component } from "react";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.state.location
    };
  }

  componentDidMount() {
    // console.log(this.state.data);
  }
  render() {
    return <div> hi </div>;
  }
}
