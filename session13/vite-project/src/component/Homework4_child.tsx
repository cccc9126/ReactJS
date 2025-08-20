import React, { Component } from "react";


interface Props {
  name: string;
}

export default class Homework4_child extends Component<Props> {
  render() {
    return (
      <div>
        <h3>Đây là component Con</h3>
        <p>Xin chào, mình là: <b>{this.props.name}</b></p>
      </div>
    );
  }
}
