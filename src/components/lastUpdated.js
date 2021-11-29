import React from "react";

const LastUpdated = () => {
  const version = "1.1.1.2";

  return (
    <div className="last-updated-container">
      <div>Last updated for version: {version}</div>
    </div>
  );
};

export default LastUpdated;
