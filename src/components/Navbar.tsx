import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/">
        Tickets
      </NavLink>

      <NavLink to="/create">
        New Ticket
      </NavLink>
    </nav>
  );
}

export default Navbar;