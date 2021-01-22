import React from "react";
import "../assets/navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

import NavbarOption from "./NavbarOption";

function Navbar() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="/images/linkedin.svg" alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <NavbarOption Icon={HomeIcon} title="Home" />
        <NavbarOption Icon={SupervisorAccountIcon} title="My Network" />
        <NavbarOption Icon={BusinessCenterIcon} title="Jobs" />
        <NavbarOption Icon={ChatIcon} title="Messages" />
        <NavbarOption Icon={NotificationsIcon} title="Notifications" />
        <NavbarOption avatar="../images/me.jpeg" title="Me" />
      </div>
    </div>
  );
}

export default Navbar;
