import { Avatar } from "@material-ui/core";
import React from "react";
import "../assets/sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2030&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Ayman Al-Dherasi</h2>
        <h4>
          I'm a software developer who coisders codding part of his life and one
          of his favourite hobbies{" "}
        </h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2888</p>
        </div>
        <div className="sidebar_stat">
          <p>View on post</p>
          <p className="sidebar_statNumber">888</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Python")}
        {recentItem("software developer")}
      </div>
    </div>
  );
}

export default Sidebar;
