import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import ror1CommonData from "./data/ror1/common.json";
import ror1UncommonData from "./data/ror1/uncommon.json";
import ror1RareData from "./data/ror1/rare.json";
import ror1BossData from "./data/ror1/boss.json";
import ror2CommonData from "./data/ror2/common.json";
import ror2UncommonData from "./data/ror2/uncommon.json";
import ror2BossData from "./data/ror2/boss.json";
import ror2LegendaryData from "./data/ror2/legendary.json";
import ror2LunarData from "./data/ror2/lunar.json";
import ror2VoidData from "./data/ror2/void.json";
import LastUpdated from "./components/lastUpdated.js";
import FilterableDropdown from "./components/itemFilterDropdown";
import ItemList from "./components/itemList.js";
import "./index.css";
import "./fonts/BOMBARD_.ttf"

Sentry.init({
  dsn: "https://c0cce460deba46a6b64ff89c9719ba82@o141824.ingest.sentry.io/5379078",
});

const App = () => {
  const [rarity, setRarity] = useState("All");
  const [stackType, setStackType] = useState("All");
  const [game, setGame] = useState(2);

  const handleRarityChange = (newRarityValue) => {
    setRarity(newRarityValue);
  };

  const handleStackTypeChange = (newStackTypeValue) => {
    setStackType(newStackTypeValue);
  };

  const handleGameChange = () => {
    setGame(game === 1 ? 2 : 1);
  };

  const getGameJsonData = () => {
    if (game === 2) {
      return [].concat(
        ror2CommonData,
        ror2UncommonData,
        ror2LegendaryData,
        ror2BossData,
        ror2LunarData,
        // ror2VoidData
      );
    } else {
      return [].concat(
        ror1CommonData,
        ror1UncommonData,
        ror1RareData,
        ror1BossData,
      );
    }
  };

  return (
    <div>
      <LastUpdated />
      {/* <button onClick={handleGameChange}> Change Game</button> */}
      <FilterableDropdown filterType={"Rarity"} onChange={handleRarityChange} game={game} />
      <FilterableDropdown filterType={"StackType"} onChange={handleStackTypeChange} game={game} />
      <ItemList
        itemData={getGameJsonData()}
        rarityFilter={rarity}
        stackTypeFilter={stackType}
        game={game}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
