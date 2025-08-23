import React, { Component } from "react";

interface State {
  time: Date;
}

export default class Homework7 extends Component<{}, State> {
  private timerID?: number;

  constructor(props: {}) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { time } = this.state;
    return (
      <h2>
        Thời gian hiện tại:{" "}
        {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
      </h2>
    );
  }
}
