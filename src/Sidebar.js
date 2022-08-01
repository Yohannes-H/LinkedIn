import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* {sidebar top} */}
      <div className="sidebar__top">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Gradient-Rainbow-Background-Graphics-3304110-1.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Johnny Dev</h2>
        <h4> myemail56@gmail.com</h4>
      </div>

      {/* {sidebar stats} */}
      <div className="sidebar__stats">
        <div className="sidebarstat">
          <p>who viewed you...</p>

          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebarstat">
          <p>views on post...</p>

          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
