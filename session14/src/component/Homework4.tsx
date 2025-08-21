import React, { Component } from "react";

interface State {
  slogan: string;
}

export default class Homework4 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      slogan: "Học code để đi làm"
    };
  }


  shouldComponentUpdate(nextProps: {}, nextState: State) {
    return false; 
  }

  changeState = () => {
    this.setState({
      slogan: "Học code sẽ thành công. Cố lên!!"
    });
  };

  render() {
    return (
      <div>
        <h2>Slogan: "{this.state.slogan}"</h2>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}
