import React, { Component } from "react";

interface State {
  gender: string;
}

export default class Homework6 extends Component<{}, State> {
  state: State = {
    gender: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender:e.target.value});
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Giới tính được chọn:", this.state.gender);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Giới tính</label> <br />

          <input
            type="radio"
            name="gender"
            value="nam"
            onChange={this.handleChange}
          />   
          Nam <br />

          <input
            type="radio"
            name="gender"
            value="nữ"
            onChange={this.handleChange}
          />
          Nữ <br />

          <input
            type="radio"
            name="gender"
            value="khác"
            onChange={this.handleChange}
          />
          Khác <br />

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
