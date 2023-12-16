import { Link } from "react-router-dom";
import "./TopNavbar";

const TopNavbar = () => {
  return ( 
    <nav className="navbar navbar-dark bg-dark stickyNavbar">
        <Link to="/">
          <h1 className="navbar-brand">Hotel Management</h1>
        </Link>
    </nav>
  );
};

export default TopNavbar;
