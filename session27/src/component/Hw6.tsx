import React from "react";

function Hw6() {
  const task1 = (callback: () => void) => {
    setTimeout(() => {
      console.log("Task 1 được thực thi");
      callback();
    }, 1000);
  };

  const task2 = (callback: () => void) => {
    setTimeout(() => {
      console.log("Task 2 được thực thi");
      callback();
    }, 1500);
  };

  const task3 = (callback: () => void) => {
    setTimeout(() => {
      console.log("Task 3 được thực thi! Hoàn thành");
      callback();
    }, 2000);
  };

  const runTasks = () => {
    task1(() => {
      task2(() => {
        task3(() => {
          console.log("Tất cả task đã hoàn thành");
        });
      });
    });
  };

  runTasks();

  return (
    <div>
      <h2>HW6 - Xử lý tác vụ tuần tự</h2>
      <p>Mở console để xem kết quả</p>
    </div>
  );
}

export default Hw6;
