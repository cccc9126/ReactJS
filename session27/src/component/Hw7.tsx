import React from "react";

type Callback = (value: number, index: number, arr: number[]) => void;

function Hw7() {
  const myForEach = (arr: number[], callback: Callback) => {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  };

  const numbers: number[] = [1, 2, 3, 4, 5, 6];

  myForEach(numbers, (value, index, arr) => {
    console.log(`Vị trí: ${index} | Phần tử: ${value} | Mảng: ${arr}`);
  });

  return (
    <div>
      <h2>HW7 - Xây dựng hàm myForEach</h2>
      <p>Mở console để xem kết quả</p>
    </div>
  );
}

export default Hw7;
