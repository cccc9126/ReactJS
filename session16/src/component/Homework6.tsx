import React, { Component } from 'react'
interface Theme{
    theme:string
}
export default class Homework6 extends Component<{}, Theme> {
    constructor(props: {}) {
        super(props)
        this.state = {
            theme:"tối"
        }
    }
    toggleTheme = () => {
        this.setState({theme:(this.state.theme=="tối"?"sáng":"tối")})
    }
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: this.state.theme === "tối" ? "black" : "white",
            color: this.state.theme === "tối" ? "white" : "black",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          <h1>chế độ {this.state.theme} đang bật</h1>
          <button onClick={this.toggleTheme} >Change</button>
        </div>
      </>
    );
  }
}
