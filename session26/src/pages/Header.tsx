import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <>
      <div style={{width:"100%" , height:"100px", backgroundColor:"blue", display:"flex",justifyContent:"center", alignItems:"center"}} className="div">
        <Link style={{width:"33%", fontSize:"20px", textDecoration:"none", color:"white", textAlign:"center"}} to={"/home"}>Home</Link>
        <Link style={{width:"33%", fontSize:"20px", textDecoration:"none", color:"white", textAlign:"center"}} to={"/about"}>About</Link>
        <Link style={{width:"33%", fontSize:"20px", textDecoration:"none", color:"white", textAlign:"center"}} to={"/contact"}>Contact</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Header