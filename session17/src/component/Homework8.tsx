import React, { useState } from "react";

export default function Homework8() {
  const [hobbies, setHobbies] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (hobbies.includes(value)) {
      setHobbies(hobbies.filter((h) => h !== value));
    } else {
      setHobbies([...hobbies, value]);
    }
  };

  return (
    <div>
      <p>Sở thích: {JSON.stringify(hobbies)}</p>
      <label>
        <input type="checkbox" value="Đi chơi" onChange={handleChange} /> Đi
        chơi
      </label>
      <br />
      <label>
        <input type="checkbox" value="Code" onChange={handleChange} /> Code
      </label>
      <br />
      <label>
        <input type="checkbox" value="Bơi lội" onChange={handleChange} /> Bơi
        lội
      </label>
      <br />
      <label>
        <input type="checkbox" value="Nhảy dây" onChange={handleChange} /> Nhảy
        dây
      </label>
    </div>
  );
}
