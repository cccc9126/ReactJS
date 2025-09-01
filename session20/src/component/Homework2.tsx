import React, { useState } from 'react'

function Homework2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[notice,setNotice]=useState("");
    const hanleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        setNotice(`Tên của bạn là ${name} và email của bạn là ${email}`);
        
    }
    return (
      
      <form action="" onSubmit={submitForm}>
          <input type="text" onChange={hanleChange} />
          <input type="email" name="" id="" onChange={handleChange}/>
            <button type='submit'>Send</button>
            <p>{ notice}</p>
    </form>
  )
}

export default Homework2