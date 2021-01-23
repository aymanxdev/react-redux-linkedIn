import React from "react";
import "../assets/widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const newsArticles = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widget_article_left">
          <FiberManualRecordIcon />
        </div>
        <div className="widget_article_right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticles(
        "Google search on mobile is getting a redesign",
        "By Jay Peters"
      )}
      {newsArticles(
        "Apple’s 2021 MacBook Pros will reportedly bring back the SD card slot",
        "By Chaim Gartenberg"
      )}
      {newsArticles(
        "YouTube finally enables HDR support on Xbox consoles",
        "By Tom Warren"
      )}
      {newsArticles("Why React Redux over others?", "By Ayman A.")}
      {newsArticles(
        "PS5 new tools and games coming up soon",
        "Gaming website 88"
      )}
      {newsArticles("How the QR code is the future", "Trending")}
      {newsArticles("Top Tech jobs", "LinkedIn")}
      {newsArticles("Google Redesigning their search page", "Tech Crunch")}
    </div>
  );
}

export default Widget;
