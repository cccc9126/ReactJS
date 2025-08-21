import React, { Component } from "react";

interface State {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default class Homework5 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: 0,
      quantity: 0,
    };
  }


  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    });
  };


  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Dữ liệu sản phẩm:", this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Thêm mới sản phẩm</h2>

        <input
          type="text"
          name="id"
          placeholder="Mã sản phẩm"
          value={this.state.id}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Tên sản phẩm"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={this.state.price}
          onChange={this.handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Số lượng"
          value={this.state.quantity}
          onChange={this.handleChange}
        />

        <button type="submit">Đăng ký</button>
      </form>
    );
  }
}
