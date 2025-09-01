import React, { useState, useEffect } from "react";

function Homework4() {
  const [name, setName] = useState("");

  // useEffect để đổi title khi name thay đổi
  useEffect(() => {
    if (name.trim() === "") {
      document.title = "Chào mừng bạn đến với trang của chúng tôi!";
    } else {
      document.title = `Chào, ${name}!`;
    }
  }, [name]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
       
      />
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên.</p>
    </div>
  );
}

export default Homework4;
