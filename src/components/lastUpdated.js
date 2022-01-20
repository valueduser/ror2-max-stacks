import React from "react";
import versionData from "../data/versions.json";

const LastUpdated = (props) => {
  let gameInfo;
  
  if(props.game === 1) {
    gameInfo = versionData.find(gameData => 
      gameData.GameName === "Risk of Rain");
  } else {
    gameInfo = versionData.find(gameData => 
      gameData.GameName === "Risk of Rain 2");
  }

  return (
    <div className="last-updated-container">
      <div>
        Last updated for version: <a href={gameInfo.PatchNotesLink}>{gameInfo.Version}</a>
      </div>
    </div>
  );
};

export default LastUpdated;
