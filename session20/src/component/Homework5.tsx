import React, { useState, useEffect } from "react";

function Homework5() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    const timerId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div  style={{ textAlign: "center", marginTop: "50px" }}>
      <h2> Timer: {count} giây</h2>
      <p>Mỗi giây sẽ tăng thêm 1. Khi rời khỏi component, timer sẽ dừng.</p>
    </div>
  );
}

export default Homework5;
