import React, { Component } from 'react'
import Homework8_1 from './Homework8_1'
import Homework8_2 from './Homework8_2'

export default class Homework8 extends Component {
  render() {
    return (
        <>
            <table style={{width:"80%",border:"1px solid black" }}>
                <Homework8_1></Homework8_1>
                <Homework8_2></Homework8_2>
            </table>
        </>
    )
  }
}
