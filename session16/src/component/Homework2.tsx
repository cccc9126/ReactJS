import React, { Component } from 'react'
interface Status{
    isLog:boolean
}
export default class Homework2 extends Component<{}, Status> {
    constructor(props: {}) {
        super(props)
        this.state = {
            isLog:false
        }
    }
    change = () => {
        this.setState({isLog:!this.state.isLog})
    }
  render() {
    return (
        <>
            <h1>{this.state.isLog ? "Xin chào user" : "Vui lòng đăng nhập để tiếp tục"}</h1>   
            <button onClick={this.change} >{this.state.isLog ? "Đăng xuất" : "Đăng nhập"}</button>
        </>
    )
  }
}
