import { Component } from 'react'

interface State {
  name: string;
}

export default class Homework1 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Quang Huy"
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    )
  }
}
