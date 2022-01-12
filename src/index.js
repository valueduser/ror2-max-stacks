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

  const getGameJsonData = () => {
    if (game === 2) {
      return [].concat(
        ror2BossData,
        ror2CommonData,
        ror2LegendaryData,
        ror2LunarData,
        ror2UncommonData,
        ror2VoidData
      );
    } else {
      return [].concat(
        ror1BossData,
        ror1CommonData,
        ror1RareData,
        ror1UncommonData
      );
    }
  };

  return (
    <div>
      <LastUpdated />
      <FilterableDropdown filterType={"Rarity"} onChange={handleRarityChange} />
      <FilterableDropdown
        filterType={"StackType"}
        onChange={handleStackTypeChange}
      />
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
