import React from 'react'

function Homework1() {
    const [length, setlength] = React.useState(0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setlength(e.target.value.length);
        
        
    }

  return (
      <>
          <input type="text " onChange={handleChange} />
          <p>Chuỗi nhập vào có { length}</p>
      </>
  )
}

export default Homework1