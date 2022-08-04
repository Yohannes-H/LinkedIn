import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      {/* {sidebar top} */}
      <div className="sidebar__top">
        <img
          src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Gradient-Rainbow-Background-Graphics-3304110-1.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user?.photoUrl}>
          {
            //   user?.displayName[0]
          }
          {
            //shows the first letter of the user's name if photoUrl is not present
          }
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4> {user?.email}</h4>
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
        {recentItem("React JS")}
        {recentItem("Next JS")}
        {recentItem("Tailwind CSS")}
        {recentItem("MUI")}
        {recentItem("Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
