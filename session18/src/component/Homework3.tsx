import React, { useState, useCallback } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      setFormData(prev => ({
          ...prev,
          [name]:value
   }))
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Email:", formData.email);
      console.log(" Password:", formData.password);
    },
    [formData]
  );

  return (
    <div >
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
            
          />
        </div>
        <div >
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Nhập mật khẩu"
            
          />
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
}
