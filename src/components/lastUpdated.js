import React from "react";
import { Label } from "semantic-ui-react";
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
      <Label>
        Last updated for version:{" "}
        <a href={gameInfo.PatchNotesLink}>{gameInfo.Version}</a>
      </Label>
    </div>
  );
};

export default LastUpdated;
