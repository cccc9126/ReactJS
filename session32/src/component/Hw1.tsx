// ListUser.tsx
import React from "react";
import { useSelector } from "react-redux";

const Hw1 = () => {
  
  const users = useSelector((state: any) => state);

  return (
    <div>
      <h2>Danh sách User</h2>
      <table
        border={1}
        cellPadding={8}
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateBirth}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hw1;
