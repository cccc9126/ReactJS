import React from 'react'
interface props{
    toggleTheme: () => void;
}

function Homework2_1(props:props) {
  return (
      <div>
          <button style={{background:"black",width:"100px",height:"30px", color:"white", border:"none", borderRadius:"10px"}} onClick={props.toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Homework2_1