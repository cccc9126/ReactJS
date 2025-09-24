import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { toggleMenu, openMenu, closeMenu } from "./menuReducer";

export default function MenuToggle() {
  const collapsed = useSelector((s: RootState) => s.menu.collapsed);
  const dispatch = useDispatch<any>();

  return (
    <>
      <style>{`
        .layout {
          display: flex;
          min-height: 100vh;
        }
        .sidebar {
          width: 200px;
          background-color: #1e1e1e;
          color: #fff;
          transition: transform 0.3s ease;
          padding: 20px;
        }
        .sidebar.collapsed {
          transform: translateX(-100%);
        }
        .content {
          flex: 1;
          padding: 20px;
          background-color: #f5f5f5;
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
        <div>Menu: {collapsed ? "Thu gọn" : "Đầy đủ"}</div>
        <button onClick={() => dispatch(toggleMenu())}>Toggle Menu</button>
        <button onClick={() => dispatch(openMenu())}>Open</button>
        <button onClick={() => dispatch(closeMenu())}>Close</button>
      </div>

      <div className="layout">
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <h3>Menu</h3>
          <ul>
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className="content">
          <h2>Nội dung chính</h2>
          <p>Nhấn các nút để thu gọn hoặc mở menu.</p>
        </div>
      </div>
    </>
  );
}
