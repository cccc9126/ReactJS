import React, { Component } from 'react'

let user={name:"Nguyễn Văn A",gender:"nam",born:"06/03/2024",email:"nva@gmail.com",address:"Thanh Xuân,Hà Nội"}
export default class Homework3 extends Component {
  render() {
    let user={name:"Nguyễn Văn A",gender:"nam",born:"06/03/2024",email:"nva@gmail.com",address:"Thanh Xuân,Hà Nội"}
    return (
        <>
            <h1>Thông tin cá nhân</h1>
            <ul>
                <li>Họ và tên: <b>{user.name}</b></li>
                <li>Giới tính: <b>{user.gender}</b></li>
                <li>Ngày sinh: <b>{user.born}</b></li>
                <li>Email: <b>{user.email}</b></li>
                <li>Địa chỉ: <b>{user.address}</b></li>
            </ul>
        </>
    )
  }
}
