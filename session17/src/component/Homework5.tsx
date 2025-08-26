import React, { useState } from "react";

export default function Homework5() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập nội dung"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
}
