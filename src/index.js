import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import commonData from "./data/common.json";
import uncommonData from "./data/uncommon.json";
import bossData from "./data/boss.json";
import legendaryData from "./data/legendary.json";
import lunarData from "./data/lunar.json";
import voidData from "./data/void.json";
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

  const handleRarityChange = (newRarityValue) => {
    setRarity(newRarityValue);
  };

  const handleStackTypeChange = (newStackTypeValue) => {
    setStackType(newStackTypeValue);
  };

  return (
    <div>
      <LastUpdated />
      <FilterableDropdown 
        filterType={"Rarity"}
        onChange={handleRarityChange} 
      />
      <FilterableDropdown
        filterType={"StackType"}
        onChange={handleStackTypeChange}
      />
      <ItemList
        itemData={[].concat(
          bossData,
          commonData,
          legendaryData,
          lunarData,
          uncommonData,
          voidData
        )}
        rarityFilter={rarity}
        stackTypeFilter={stackType}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
