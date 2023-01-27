import React from "react";
import { Button } from "semantic-ui-react";
import versionData from "../../data/versions.json";
import "./lastUpdated.css";

const LastUpdated = ({ game }) => {
  let gameInfo;

  if (game === 1) {
    gameInfo = versionData.find(
      (gameData) => gameData.GameName === "Risk of Rain"
    );
  } else if (game === 2) {
    gameInfo = versionData.find(
      (gameData) => gameData.GameName === "Risk of Rain 2"
    );
  } else {
    gameInfo = versionData.find(
      (gameData) => gameData.GameName === "Risk of Rain Returns"
    );
  }

  return (
    <div className="last-updated-container">
      <Button
        className="last-updated-btn"
        onClick={() => window.open(gameInfo.PatchNotesLink, "_blank")}
      >
        Last updated for version: {gameInfo.Version}
      </Button>
    </div>
  );
};

export default LastUpdated;
