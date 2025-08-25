import React, { Component } from "react";
interface Input {
  name: string;
  email: string;
  age: string;
  notice: string;
  isLog: boolean;
}
export default class Homework5 extends Component<{}, Input> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      notice: "",
      isLog: false,
    };
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      this.setState({ isLog: false });
      
    this.setState({
      [name]: value,
    } as unknown as Pick<Input, keyof Input>);
  };
  submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(this.state.age) < 0) {
      this.setState({ notice: "Tuổi không hợp lệ" });
    } else {
      this.setState({ isLog: true });
    }
    console.log(this.state);
  };

  resetInput = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      age: "",
      isLog: false,
    });
  };

  render() {
    return (
      <>
        <h1>Nhập thông tin người dùng</h1>
        <form onSubmit={this.submitForm}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <br />
          <label htmlFor="age">Age</label>
          <br />
          <input
            type="text"
            id="age"
            name="age"
            value={this.state.age}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">Gửi</button>
          <button onClick={this.resetInput}>Xóa tất cả</button>
          <p>{Number(this.state.age) < 0 && this.state.notice}</p>
          <p>{this.state.isLog && this.state.name}</p>
          <p>{this.state.isLog && this.state.email}</p>
          <p>{this.state.isLog && this.state.age}</p>
          <div className="div"></div>
        </form>
      </>
    );
  }
}
