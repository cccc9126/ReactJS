import React, { Component } from 'react'

export default class Homework6_2 extends Component {
  render() {
    return (
      
        <>
            <div style={{ width: "100%", height: "500px", background: "black" ,display:"flex",flexDirection:"row",gap:"20px",alignItems:"center"}} className="Mid">
                <div style={{width:"20%",height:"100%", background:"orange"}} className="div1"></div>
                <div style={{ width: "80%", height: "90%", background: "pink", marginRight: "20px",position:"relative" }} className="div2">
                    <div style={{ width: "100%", height: "20%", background:"yellow", position:"absolute",bottom:"0px"}} className="footer"></div>
                </div>
            
            </div>
        </>
    )
  }
}
