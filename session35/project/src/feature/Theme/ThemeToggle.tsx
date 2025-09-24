import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { setTheme, toggle } from "./ThemeReducer";

export default function ThemeToggle() {
  const theme = useSelector((s: RootState) => s.theme.value);
  const dispatch = useDispatch<any>();

  return (
    <>
      <style>{`
        .app-container {
          min-height: 100vh;
          padding: 20px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .app-container.light {
          background-color: #ffffff;
          color: #222;
        }
        .app-container.dark {
          background-color: #1e1e1e;
          color: #f1f1f1;
        }
        button {
          margin-right: 8px;
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .light button {
          background-color: #ddd;
          color: #222;
        }
        .dark button {
          background-color: #333;
          color: #f1f1f1;
        }
      `}</style>

      <div className={`app-container ${theme}`}>
        <div>Theme hiện tại: {theme}</div>
        <button onClick={() => dispatch(toggle())}>Toggle</button>
        <button onClick={() => dispatch(setTheme("light"))}>Light</button>
        <button onClick={() => dispatch(setTheme("dark"))}>Dark</button>
      </div>
    </>
  );
}
