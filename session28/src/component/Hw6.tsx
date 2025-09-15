import React, { useEffect } from "react";
import axios from "axios";

function Hw6() {
  useEffect(() => {
    const newStudent = {
      student_name: "Ngô Văn Tèo",
      email: "teo.ngo@example.com",
      address: "Nghệ An",
      phone: "0911222333",
      status: true,
      created_at: new Date().toISOString(),
    };

    axios
      .post("http://localhost:3002/student", newStudent)
      .then((res) => {
        console.log("Đã thêm sinh viên mới:", res.data);
      })
      .catch((err) => {
        console.error("Lỗi khi thêm sinh viên:", err);
      });
  }, []);

  return <div>Hw6 - Thêm sinh viên trực tiếp</div>;
}

export default Hw6;
