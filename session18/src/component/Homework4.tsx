import React, { useCallback } from 'react'

function Homework4() {
    const [color, setColor] = React.useState("#000000")
    const handleInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
      },[color]
    );
  return (
      <>
          <input type="color"onChange={handleInput}/>
          <div style={{ width: "100px", height: "50px", background:`${color}` }}></div>
      </>
  )
}

export default Homework4