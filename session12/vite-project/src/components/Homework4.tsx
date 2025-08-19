import React, { Component } from 'react'

export default class Homework4 extends Component {
  render() {
    return (
        <div style={{display:"flex", gap:"50px" ,color:"white"}}>
            <div style={{ width: "200px" ,height:"200px",background:"red",display: "flex",justifyContent:"center",textAlign:"center"}} className="div1">Box</div>
            <div style={{ width: "200px" ,height:"200px",background:"blue",display: "flex",justifyContent:"center",textAlign:"center"}} className="div2">Box</div>
            <div style={{ width: "200px" ,height:"200px",background:"green",display: "flex",justifyContent:"center",textAlign:"center"}} className="div3">Box</div>
        
        </div>
    )
  }
}
