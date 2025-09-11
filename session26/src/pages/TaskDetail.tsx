// pages/TaskDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";

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

function TaskDetail() {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <h3>❌ Không tìm thấy công việc</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <Link to="/">⬅ Quay lại danh sách</Link>
    </div>
  );
}

export default TaskDetail;
