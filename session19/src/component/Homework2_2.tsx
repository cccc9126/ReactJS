import React from 'react'
interface props {
    theme:string
}
function Homework2_2({theme}:props) {
  return (
    <h1
      style={{
        color: theme === "light" ? "black" : "white"
      }}
    >
          {theme}
    </h1>
  );
}

export default Homework2_2