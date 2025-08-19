import React, { Component } from 'react'
import Homework7_1 from './Homework7_1'
import Homework7_2 from './Homework7_2'
import Homework7_3 from './Homework7_3'

export default class Homework7 extends Component {
  render() {
    return (
        <>
            <div style={{display:"flex",flexDirection:"column"}} className="header">
                <Homework7_1></Homework7_1>
                <div style={{display:"flex", flexDirection:"row"}} className="body">
                    <Homework7_2></Homework7_2>
                    <Homework7_3></Homework7_3>
                    <Homework7_2></Homework7_2>

                    
                </div>
            </div>
        </>
    )
  }
}
