import React, { Component } from 'react'

export default class Homework8_2 extends Component {
  render() {
    return (
        <>
        <tr style={{height:"70px",background:"pink",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <td style={{ width: "200px",textAlign:"center" }}>1</td>
            <td style={{ width: "200px",textAlign:"center" }}>A</td>
            <td style={{ width: "200px",textAlign:"center" }}>01/01/2006</td>
            <td style={{ width: "200px",textAlign:"center" }}>nam</td>
                <td style={{ width: "200px",textAlign:"center" }}>HN</td>
                <td style={{ width: "200px",textAlign:"center" }}><button>Sửa</button><button>Xóa</button></td>
        </tr>
        <tr  style={{height:"70px",background:"pink",display:"flex",alignItems:"center",justifyContent:"center",}}>
            <td style={{ width: "200px" ,textAlign:"center"}}>2</td>
            <td style={{ width: "200px" ,textAlign:"center" }}>B</td>
            <td style={{ width: "200px",textAlign:"center" }}>02/02/2006</td>
            <td style={{ width: "200px",textAlign:"center" }}>nữ</td>
                <td style={{ width: "200px",textAlign:"center" }}>Mỹ</td>
                <td style={{ width: "200px",textAlign:"center" }}><button>Sửa</button><button>Xóa</button></td>
        </tr>
        </>
    )
  }
}
