import React, { Component } from 'react'
import Homework5_child from './Homework5_child';
interface State{
    id: number;
    name: string;
    price: string;
    quantity:number
}
export default class Homework5 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: "Bưởi ba roi",
            price: "12.000đ",
            quantity: 6
        }
    }
  render() {
    return (
        <>
            <Homework5_child id={this.state.id} name={this.state.name} price={this.state.price} quantity={this.state.quantity}></Homework5_child>
        </>
    )
  }
}
