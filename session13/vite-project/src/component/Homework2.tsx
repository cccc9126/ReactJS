import  { Component } from 'react'
interface State  { 
    id: number;
    name: string;
    born: string;
    address:string
}
export default class Homework2 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: "Nguyễn Quang Huy",
            born: "09/10/2006",
            address: "Hà Nội"
        };
    }
  render() {
    return (
        <>
            <h1>Thông tin cá nhân</h1>
            <p>Id:{this.state.id}</p>
            <p>Tên: {this.state.name}</p>
            <p>Ngày sinh:{this.state.born}</p>
            <p>Địa chỉ:{this.state.address}</p>
        </>
    )
  }
}
