import React, { Component } from 'react'

export default class Homework8_1 extends Component {
  render() {
    return (
        <>
            <th style={{height:"70px",background:"pink",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <td style={{ width: "200px" }}>STT</td>
                <td style={{ width: "200px" }}>Họ và tên</td>
                <td style={{ width: "200px" }}>Ngày sinh</td>
                <td style={{ width: "200px" }}>Giới tính</td>
                <td style={{ width: "200px" }}>Địa chỉ</td>
                <td style={{ width: "200px" }}>Hành động</td>
        </th>
        </>
    )
  }
}
