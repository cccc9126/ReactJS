import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";


export default function Hw2() {
  const users = useSelector((state: RootState) => state.hw2);

  return (
    <div>
      <h2>Danh sách User</h2>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u: any) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.userName}</td>
              <td>{u.gender}</td>
              <td>{u.dateBirth}</td>
              <td>{u.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
