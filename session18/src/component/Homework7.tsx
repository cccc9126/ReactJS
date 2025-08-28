import React, { useReducer, useState } from "react";

interface State {
  tasks: string[];
}

type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}

export default function Homework7() {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TASK", payload: input });
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quản lý công việc</h2>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
        Thêm
      </button>

      <ul>
        {state.tasks.map((task, i) => (
          <li key={i}>
            {task}{" "}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch({ type: "DELETE_TASK", payload: i })}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
ư