import React, { Component } from 'react'
interface State{
    name:string
}
export default class Homework3 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state={
            name:"Rikkei Academy"
        }
    }
    render() {
      const changeState = () => {
      this.setState({
        name: "RikkeiSoft"
      });
    };
    return (
        <>
            <h1>Company: {this.state.name}</h1>
            <button onClick={changeState}>Change State</button>
        </>
    )
  }
}
