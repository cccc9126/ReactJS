import React, { Component, createRef } from "react";

interface State {
  name: string;
  email: string;
  password: string;
  address: string;
  message: string;
  errors: {
    name?: string;
    email?: string;
    password?: string;
  };
}

export default class Homework7 extends Component<{}, State> {
  nameRef = createRef<HTMLInputElement>();

  state: State = {
    name: "",
    email: "",
    password: "",
    address: "",
    message: "",
    errors: {},
  };

handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  this.setState((prevState: State) => ({
    ...prevState,
    [name as keyof State]: value,
  }));
};

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password, address } = this.state;
    let errors: State["errors"] = {};


    if (!name.trim()) errors.name = "Tên sinh viên không được để trống";
    if (!email.trim()) errors.email = "Email không được để trống";
    if (!password.trim()) errors.password = "Mật khẩu không được để trống";


    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u: any) => u.email === email)) {
      errors.email = "Email đã tồn tại";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }


    const newUser = { name, email, password, address };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));


    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      message: "Đăng ký tài khoản thành công!",
      errors: {},
    });

  };

  render() {
    const { name, email, password, address, message, errors } = this.state;

    return (
      <div>
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tên sinh viên"
            value={name}
            onChange={this.handleChange}
            ref={this.nameRef}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <br />

          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <br />

          <input
            type="text"
            name="address"
            placeholder="Địa chỉ"
            value={address}
            onChange={this.handleChange}
          />
          <br />

          <button type="submit">Đăng ký</button>
        </form>

        {message && <h4 style={{ color: "green" }}>{message}</h4>}
      </div>
    );
  }
}
