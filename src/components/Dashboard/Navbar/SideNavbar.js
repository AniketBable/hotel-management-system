import "./SideNavbar.css";
import { MdDashboard, MdTableBar, MdBarChart, MdLogout } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const SideNavbar = (props) => {
  const sideNavbarContainerClasses = `bg-dark side-nav-expanded ${
    props.collapse ? "side-nav-collapsed" : ""
  }`;
  const labelClasses = `${props.collapse ? "hide-label" : "label"}`;
  const iconClasses = `${props.collapse ? "icon-collapse" : "icon"}`;

  return (
    <div className={sideNavbarContainerClasses}>
      <div className="side-nav-items">
        <ul>
          <NavLink to="/">
            <li>
              <i className={iconClasses}>
                <MdDashboard />
              </i>
              <span className={labelClasses}>Dashboard</span>
            </li>
          </NavLink>
          <NavLink to="/users">
            <li>
              <i className={iconClasses}>
                <FaUserAlt />
              </i>
              <span className={labelClasses}>User Management</span>
            </li>
          </NavLink>
          <NavLink to="/tables">
            <li>
              <i className={iconClasses}>
                <MdTableBar />
              </i>
              <span className={labelClasses}>Table Management</span>
            </li>
          </NavLink>
          <NavLink to="/sales">
            <li>
              <i className={iconClasses}>
                <MdBarChart />
              </i>
              <span className={labelClasses}>Sales</span>
            </li>
          </NavLink>
          <li>
            <i className={iconClasses}>
              <MdLogout />
            </i>
            <span className={labelClasses}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
