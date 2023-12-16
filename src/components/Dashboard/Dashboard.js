import "./Dashboard.css";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import SideNavbar from "./Navbar/SideNavbar";
import TopNavbar from "./Navbar/TopNavbar";
import MainContent from "./MainContent/MainContent";

const Dashboard = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const isNavExpandHandler = () => {
    setIsNavExpanded((prevState) => !prevState);
  };
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <TopNavbar />
      </div>
      <div className="dashboard-body">
        <SideNavbar collapse={isNavExpanded} />
        <i className="collapseIcon">
          <FiMenu onClick={isNavExpandHandler} />
        </i>
        <MainContent className="content" />
      </div>
    </div>
  );
};

export default Dashboard;
