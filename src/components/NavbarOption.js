import React from "react";
import "../assets/navbarOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function NavbarOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div>
      <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && (
          <Avatar className="headerOption_icon">
            {user?.email[0].toUpperCase()}
          </Avatar>
        )}
        <h3 className="headerOption_title">{title}</h3>
      </div>
    </div>
  );
}

export default NavbarOption;
