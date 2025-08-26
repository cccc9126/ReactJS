import React, { useState } from "react";

export default function Homework7() {
  const [city, setCity] = useState("");

  return (
    <div>
      <label>Thành phố: </label>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>

      {city && <p>Thành phố: {city}</p>}
    </div>
  );
}
