import React, { Component } from "react";

export default class Homework extends Component {
  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h2>Notification Component</h2>
      </div>
    );
  }
}
