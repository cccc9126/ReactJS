import React, { Component } from 'react'
interface Click{
    count :number
}
export default class Homework4 extends Component<{}, Click> {
    constructor(props: {}) {
        super(props)
        this.state = {
            count:0
        }
    }
    countButton = () => {
        this.setState((prevState) => ({
    count: prevState.count + 1
}));
    }
  render() {
    return (
        <>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.countButton}>Click</button>
        </>
    )
  }
}
