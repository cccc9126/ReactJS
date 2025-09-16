import React from 'react'

function Hw2() {
    fetch("http://localhost:3001/product")
        .then(res => res.json())
        .then(res=>console.log(res)
        );
    return (
      
    <div>Hw2</div>
  )
}

export default Hw2