import React from "react";

type Callback = (result: boolean) => void;

function Hw5() {
  const checkCondition = (condition: boolean, callback: Callback) => {
    setTimeout(() => {
      callback(condition);
    }, 1000);
  };

  const display = (result: boolean) => {
    console.log("Điều kiện trả về:", result);
  };

  
  checkCondition(true, display);
  checkCondition(false, display);

  return (
    <div>
      <h2>HW5 - Kiểm tra điều kiện sau 1 khoảng thời gian</h2>
      <p>Mở console để xem kết quả</p>
    </div>
  );
}

export default Hw5;
