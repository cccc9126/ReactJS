import { Outlet, Link } from "react-router-dom";

function Teams() {
  return (
    <div>
      <h2>Teams</h2>
      <ul>
        <li>
          <Link to="/teams/1">Team 1</Link>
        </li>
        <li>
          <Link to="/teams/2">Team 2</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Teams;
