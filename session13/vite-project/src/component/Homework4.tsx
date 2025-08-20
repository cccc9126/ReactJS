import React, { Component } from "react";
import Homework4_child from "./Homework4_child";



interface State {
  myName: string;
}

export default class Homework4 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      myName: "A"
    };
  }

  render() {
    return (
      <div>
        <h2>Đây là component Cha: {this.state.myName}</h2>
        <Homework4_child name="huy"></Homework4_child>
        
      </div>
    );
  }
}
