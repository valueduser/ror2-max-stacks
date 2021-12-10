import React from "react";

const LastUpdated = () => {
  const version = "1.1.1.2";
  const link = "https://store.steampowered.com/news/app/632360/view/3100140557216075596";

  return (
    <div className="last-updated-container">
      <div>
        Last updated for version: <a href={link}>{version}</a>
      </div>
    </div>
  );
};

export default LastUpdated;
