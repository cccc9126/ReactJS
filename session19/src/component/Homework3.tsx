import React, { useState, useRef, useEffect } from "react";

function Homework3() {
  const [value, setValue] = useState(""); 
  const renderCount = useRef(0); 


  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nhập cái gì đó..."
        
      />
      <p>Số lần render: {renderCount.current}</p>
    </div>
  );
}

export default Homework3;
