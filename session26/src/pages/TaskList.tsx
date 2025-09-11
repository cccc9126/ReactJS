// pages/TaskList.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ITask {
  id: number;
  title: string;
  description: string;
}

const tasks: ITask[] = [
  {
    id: 1,
    title: "Học React Router",
    description: "Làm quen với Dynamic Routes và useNavigate",
  },
  {
    id: 2,
    title: "Ôn lại Tailwind",
    description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
  },
  {
    id: 3,
    title: "Hoàn thành BTVN",
    description: "Đẩy code lên Github và nộp link",
  },
];

function TaskList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách công việc</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0" }}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
