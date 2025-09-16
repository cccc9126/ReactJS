import axios from "axios";
import React, { useEffect } from "react";

function Hw5() {
    let id: number = 2;
  useEffect(() => {
    axios
      .get(`http://localhost:3002/student/${id}`)
      .then((res) => {
        console.log("Danh sách sản phẩm:", res.data);
      })
      .catch((err) => {
        console.error("Lỗi:", err);
      });
  }, []);
  return <div>Hw3</div>;
}

export default Hw5;
