import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";


export default function Hw6() {
  const theme = useSelector((state: RootState) => state.hw6.theme);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => dispatch({ type: "TOGGLE_THEME" })}
        />
        {theme === "light" ? "Sáng" : "Tối"}
      </label>
    </div>
  );
}
