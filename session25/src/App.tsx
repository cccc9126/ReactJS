import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Đây là trang chủ</h1>

      <Link to="/contact">Đi tới Contact</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
    </div>
  );
}

export default App;
