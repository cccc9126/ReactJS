import React, { useMemo } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

function Homework2() {

  const users: User[] = [
    { id: 1, name: "Huy", age: 19 },
    { id: 2, name: "Hiền", age: 17 },
    { id: 3, name: "Nam", age: 22 },
    { id: 4, name: "Lan", age: 16 },
    { id: 5, name: "Cường", age: 25 },
  ];
   const filterUsers = useMemo(() => {
     return users.filter((user) => user.age >= 18);
   }, [users]);
  

  return (
      <>
          <ul>
              {filterUsers.map(u=>
                  <li>
                        {u.name} - {u.age} tuổi
                </li>
              )}
          </ul>
      </>
  );
}

export default Homework2;
