import React, { useState } from "react";

function Homework4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Trường này là bắt buộc";
    }
    if (!email.trim()) {
      newErrors.email = "Trường này là bắt buộc";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Gửi thành công!");
      setName("");
      setEmail("");
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Đăng ký thông tin</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Họ tên</label>
          <input
            type="text"
            value={name}
            placeholder="Nhập họ tên..."
            onChange={(e) => setName(e.target.value)}
            
          />
          {errors.name && <p style={{ color: "red" }}>⚠ {errors.name}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            
          />
          {errors.email && <p style={{ color: "red" }}>⚠ {errors.email}</p>}
        </div>
        <button
          type="submit"
        
        >
          Gửi
        </button>
      </form>
    </div>
  );
}

export default Homework4;
