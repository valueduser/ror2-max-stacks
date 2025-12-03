import React, { useMemo, useCallback } from "react";
import { Button } from "semantic-ui-react";
import versionData from "../../data/versions.json";
import "./lastUpdated.css";

const GAME_NAMES = {
  1: "Risk of Rain",
  2: "Risk of Rain 2",
  3: "Risk of Rain Returns",
};

const LastUpdated = ({ game }) => {
  const gameInfo = useMemo(() => {
    const gameName = GAME_NAMES[game];
    return versionData.find((gameData) => gameData.GameName === gameName);
  }, [game]);

  const handleClick = useCallback(() => {
    if (gameInfo?.PatchNotesLink) {
      window.open(gameInfo.PatchNotesLink, "_blank");
    }
  }, [gameInfo]);

  if (!gameInfo) {
    return null;
  }

  return (
    <div className="last-updated-container">
      <Button className="last-updated-btn" onClick={handleClick}>
        Last updated for version: {gameInfo.Version}
      </Button>
    </div>
  );
};

export default LastUpdated;
