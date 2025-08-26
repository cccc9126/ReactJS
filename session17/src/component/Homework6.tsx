import React, { useState } from "react";

export default function Homework6() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        placeholder="Nhập nội dung..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}
