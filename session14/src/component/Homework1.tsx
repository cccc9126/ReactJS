import React, { Component } from "react";

interface State {
  userName: string;
}

export default class Homework1 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
   
    this.state = {
      userName: "Huy" 
    };
  }

  render() {
    return (
      <div>
        <h1>Xin chào, mình là {this.state.userName} 👋</h1>
      </div>
    );
  }
}
