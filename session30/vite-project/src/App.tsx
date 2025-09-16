
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

type Task = {
  id: number;
  taskName: string;
  done: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get("http://localhost:3000/toDoList").then((res) => {
      setTasks(res.data);
    });
  };

  // Add task
  const addTask = () => {
    if (!newTask.trim()) return;
    axios
      .post("http://localhost:3000/toDoList", {
        taskName: newTask,
        done: false,
      })
      .then(() => {
        fetchTasks();
        setNewTask("");
      });
  };

  // Toggle done
  const toggleTask = (task: Task) => {
    axios
      .put(`http://localhost:3000/toDoList/${task.id}`, {
        ...task,
        done: !task.done,
      })
      .then(() => fetchTasks());
  };

  
  const deleteTask = (id: number) => {
    axios
      .delete(`http://localhost:3000/toDoList/${id}`)
      .then(() => fetchTasks());
  };

  
  const saveEdit = () => {
    if (editingTask) {
      axios
        .put(`http://localhost:3000/toDoList/${editingTask.id}`, editingTask)
        .then(() => {
          fetchTasks();
          setEditingTask(null);
        });
    }
  };

  return (
    <div className="container">
      <h1>Quản lý công việc</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn add" onClick={addTask}>
          Thêm công việc
        </button>
      </div>

      <div className="filter-box">
        <button className="btn filter active">Tất cả</button>
        <button className="btn filter">Hoàn thành</button>
        <button className="btn filter">Đang thực hiện</button>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task)}
            />
            {editingTask?.id === task.id ? (
              <input
                type="text"
                value={editingTask.taskName}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, taskName: e.target.value })
                }
              />
            ) : (
              <span className={task.done ? "completed" : ""}>
                {task.taskName}
              </span>
            )}

            <div className="actions">
              {editingTask?.id === task.id ? (
                <button className="save" onClick={saveEdit}>
                  💾
                </button>
              ) : (
                <button className="edit" onClick={() => setEditingTask(task)}>
                  ✏️
                </button>
              )}
              <button className="delete" onClick={() => deleteTask(task.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="action-box">
        <button
          className="btn danger"
          onClick={() =>
            tasks
              .filter((t) => t.done)
              .forEach((t) =>
                axios.delete(`http://localhost:3000/toDoList/${t.id}`)
              )
          }
        >
          Xóa công việc hoàn thành
        </button>
        <button
          className="btn danger"
          onClick={() =>
            tasks.forEach((t) =>
              axios.delete(`http://localhost:3000/toDoList/${t.id}`)
            )
          }
        >
          Xóa tất cả công việc
        </button>
      </div>
    </div>
  );
}

export default App;
