import React from "react";
import "../assets/navbarOption.css";
import { Avatar } from "@material-ui/core";

function NavbarOption({ avatar, Icon, title }) {
  return (
    <div>
      <div className="headerOption">
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && <Avatar className="headerOption_icon" src={avatar} />}
        <h3 className="headerOption_title">{title}</h3>
      </div>
    </div>
  );
}

export default NavbarOption;
