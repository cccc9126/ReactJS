import React, { useReducer } from "react";

interface State {
  gender: string;
}

type Action = { type: "SET_GENDER"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
}

export default function Homework6() {
  const [state, dispatch] = useReducer(reducer, { gender: "" });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chọn giới tính:</h2>
      <label>
        <input
          type="radio"
          value="Nam"
          checked={state.gender === "Nam"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        Nam
      </label>
      <label style={{ marginLeft: "20px" }}>
        <input
          type="radio"
          value="Nữ"
          checked={state.gender === "Nữ"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        Nữ
      </label>

      <h3>Bạn chọn: {state.gender}</h3>
    </div>
  );
}
