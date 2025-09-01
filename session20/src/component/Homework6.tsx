import React, { useState, useRef, useEffect } from "react";

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>Đăng nhập</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Nhập tên người dùng"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "12px",
          }}
        />
        <br />
        <button
          onClick={onClose}
          style={{
            padding: "8px 16px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

export default function Homework6() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Ứng dụng React với Modal và Focus Input</h2>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Mở Modal
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

