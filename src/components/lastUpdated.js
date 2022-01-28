import React from "react";
import { Button } from "semantic-ui-react";
import versionData from "../data/versions.json";

const LastUpdated = (props) => {
  let gameInfo;

  if (props.game === 1) {
    gameInfo = versionData.find(
      (gameData) => gameData.GameName === "Risk of Rain"
    );
  } else {
    gameInfo = versionData.find(
      (gameData) => gameData.GameName === "Risk of Rain 2"
    );
  }

  return (
    <div className="last-updated-container">
      <Button onClick={()=> window.open(gameInfo.PatchNotesLink, "_blank")} >Last updated for version: {gameInfo.Version}</Button>
    </div>
  );
};

export default LastUpdated;
