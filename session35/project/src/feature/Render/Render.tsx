import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { setMode, toggleMode } from "./renderReducer";

export default function DisplayMode() {
  const mode = useSelector((s: RootState) => s.render.value); // lấy value
  const dispatch = useDispatch<any>();

  const items = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);

  return (
    <>
      <style>{`
        .container {
          min-height: 100vh;
          padding: 20px;
          transition: background-color 0.3s ease;
        }
        .container.list {
          background-color: #f0f8ff;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .container.grid {
          background-color: #1e1e1e;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 12px;
        }
        .item {
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          font-weight: bold;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .list .item {
          background-color: #d1e7ff;
          color: #222;
        }
        .grid .item {
          background-color: #333;
          color: #f1f1f1;
        }
        button {
          margin-right: 8px;
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>

      <div>
        <div>Chế độ hiện tại: {mode}</div>
        <button onClick={() => dispatch(setMode("list"))}>List</button>
        <button onClick={() => dispatch(setMode("grid"))}>Grid</button>
        <button onClick={() => dispatch(toggleMode())}>Toggle</button>
      </div>

      <div className={`container ${mode}`}>
        {items.map((it) => (
          <div key={it} className="item">
            {it}
          </div>
        ))}
      </div>
    </>
  );
}
