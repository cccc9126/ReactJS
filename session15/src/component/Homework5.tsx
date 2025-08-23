import React, { useState } from "react";

interface Student {
  id: number;
  code: string;
  name: string;
  dob: string;
  email: string;
  status: "Đang hoạt động" | "Ngừng hoạt động";
}

const Homework5: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      code: "SV001",
      name: "Nguyễn Văn A",
      dob: "21/12/2003",
      email: "nva@gmail.com",
      status: "Đang hoạt động",
    },
    {
      id: 2,
      code: "SV002",
      name: "Nguyễn Thị B",
      dob: "2/11/2023",
      email: "ntb@gmail.com",
      status: "Ngừng hoạt động",
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quản lý sinh viên</h2>

      {/* Thanh action */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <button
          style={{
            padding: "6px 12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Thêm mới sinh viên
        </button>

        <div>
          <select style={{ marginRight: "10px", padding: "6px" }}>
            <option>Sắp xếp theo tuổi</option>
            <option>Tên A-Z</option>
            <option>Tên Z-A</option>
          </select>
          <input
            type="text"
            placeholder="Tìm kiếm tên hoặc email"
            style={{ padding: "6px" }}
          />
        </div>
      </div>

      {/* Bảng danh sách */}
      <table
        border={1}
        cellPadding={10}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead style={{ backgroundColor: "#f1f1f1" }}>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.code}</td>
              <td>{s.name}</td>
              <td>{s.dob}</td>
              <td>{s.email}</td>
              <td>
                <span
                  style={{
                    color: s.status === "Đang hoạt động" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {s.status}
                </span>
              </td>
              <td>
                <button style={{ marginRight: "5px" }}>Chi tiết</button>
                <button style={{ marginRight: "5px" }}>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button>{"<"}</button>
        <button style={{ fontWeight: "bold" }}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default Homework5;
