// import React from 'react'
// import { useParams } from 'react-router-dom'

// function Student() {
//     const { name }=useParams()
//   return (
//     <>
//       <div>Student</div>
//       <p>{name}</p>
//     </>
//   );
// }

// export default Student

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Student() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");

 console.log(searchParams);
 
  const studentName = searchParams.get("studentName");

  const handleSearch = () => {
    if (keyword.trim() !== "") {
     
      setSearchParams({ studentName: keyword });
    }
  };
    

  return (
    <div>
      <h1>Student Page</h1>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

          <p>{ studentName}</p>
    </div>
  );
}

export default Student;
