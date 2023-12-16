import "./MainContent.css";

import { Route, Routes } from "react-router-dom";
import UserManagement from "../pages/UserManagement";
import TableManagement from "../pages/TableManagement";
import Sales from "../pages/Sales";
import Homepage from "../pages/Homepage";

const MainContent = (props) => {
  return (
  
  <div className={`main-content ${props.className}`}>
        <Routes>
            <Route path="/" element = {<Homepage />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/tables" element={<TableManagement />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
  </div>
  );
};

export default MainContent;
