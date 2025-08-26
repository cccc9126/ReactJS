import React, { useState } from "react";

export default function Homework3() {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };

  return (
    <div>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  );
}
