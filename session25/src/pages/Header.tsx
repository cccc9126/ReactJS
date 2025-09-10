import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "red" : "transparent",
          padding: "6px 12px",
          borderRadius: "5px",
          textDecoration: "none",
        })}
        // quan trọng để Home chỉ active đúng "/"
      >
        Home
      </NavLink>

      <NavLink
        to="/product"
        style={({ isActive }) => ({
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "red" : "transparent",
          padding: "6px 12px",
          borderRadius: "5px",
          textDecoration: "none",
        })}
      >
        Product
      </NavLink>

      <NavLink
        to="/detail"
        style={({ isActive }) => ({
          color: isActive ? "white" : "black",
          backgroundColor: isActive ? "red" : "transparent",
          padding: "6px 12px",
          borderRadius: "5px",
          textDecoration: "none",
        })}
      >
        Detail
      </NavLink>
    </nav>
  );
}

export default Header;
