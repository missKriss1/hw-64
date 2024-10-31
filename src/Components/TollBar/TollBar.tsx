import { NavLink } from "react-router-dom";

const TollBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink className="navbar-brand text-black fw-bold" to="/">
          Static Pages
        </NavLink>
        <NavLink
          className="text-decoration-none text-black p-2 border border-dark border border-top-0 border border-bottom-0 border border-start-0"
          to="/pages/about"
        >
          About
        </NavLink>
        <NavLink
          className="text-decoration-none text-black p-2 border border-dark border border-top-0 border border-bottom-0 border border-start-0"
          to="/pages/contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          className="text-decoration-none text-black p-2 border border-dark border border-top-0 border border-bottom-0 border border-start-0"
          to="/pages/divisions"
        >
          Divisions
        </NavLink>
        <NavLink
          className="text-decoration-none text-black p-2 border border-dark border border-top-0 border border-bottom-0 border border-start-0"
          to="/pages/description"
        >
          Description
        </NavLink>
        <NavLink
          className="text-decoration-none text-black p-2 border border-dark border border-top-0 border border-bottom-0 border border-start-0"
          to="/pages/services"
        >
          Services
        </NavLink>
        <NavLink
          className="text-decoration-none text-black p-2 border border-dark border border-top-0 border border-bottom-0 border border-start-0"
          to="/pages/admin"
        >
          Admin
        </NavLink>
      </div>
    </nav>
  );
};

export default TollBar;
