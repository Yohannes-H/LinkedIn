import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function HeaderOption({ avatar, Icon, title }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.displayName[0]}
        </Avatar>
      )}
      {!title ? (
        <h3 className="headerOption__title">{user?.displayName}</h3>
      ) : (
        <h3 className="headerOption__title">{title}</h3>
      )}
    </div>
  );
}

export default HeaderOption;
