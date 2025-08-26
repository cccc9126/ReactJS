import React, { useState } from "react";

export default function Homework4() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Ẩn" : "Hiện"}</button>
      {show && <h3>Tiêu đề văn bản</h3>}
    </div>
  );
}
