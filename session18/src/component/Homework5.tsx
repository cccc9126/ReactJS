import React, { useReducer } from "react";

interface State {
  text: string;
}

type Action = { type: "SET_TEXT"; payload: string } | { type: "CLEAR" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "CLEAR":
      return { ...state, text: "" };
    default:
      return state;
  }
}

export default function Homework5() {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  return (
    <div >
      <h2>Nhập chuỗi của bạn:</h2>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "SET_TEXT", payload: e.target.value })
        }
        style={{ padding: "5px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>

      <h3>Kết quả hiển thị:</h3>
      <p ></p>
    </div>
  );
}
