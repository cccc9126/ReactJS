import React, { Component } from 'react'
interface List{
    subject: string[];
}
export default class Homework1 extends Component<{}, List> {
    constructor(props: {}) {
        super(props);
        this.state = {
            subject:["Toán","Văn","Anh","Hóa","Sinh"]
        }
    }
  render() {
    return (
        <>
            <h1>Danh sách các môn học</h1>
            <ul>
                {this.state.subject.map(item => {
                    return <>
                        <p style={{width:"200px", height:"50px",border:"1px solid blue" , borderRadius:"10px",textAlign:"center" }}>{item}</p>
                    </>
                })}
            </ul>
        </>
    )
  }
}
