import React, { use, useState } from 'react'

export default function demo() {
    const [state, setState] = useState("");
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setState(e.target.value);
    }
  return (
      <div>
          <form action="">
              <input type="text" onChange={handleInput} />
              <p>{ state}</p>
          </form>
    </div>
  )
}

