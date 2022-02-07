import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

    return (
        <nav className="navbar">
            <NavLink to="/timeslots">Timeslots</NavLink>
            <NavLink to="/timeslots/new">New Timeslot</NavLink>
        </nav>
    );
};

export default NavBar;