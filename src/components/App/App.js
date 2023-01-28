import React, { useState } from "react";
import ror1BossData from "../../data/ror1/boss.json";
import ror1CommonData from "../../data/ror1/common.json";
import ror1RareData from "../../data/ror1/rare.json";
import ror1SpecialData from "../../data/ror1/special.json";
import ror1UncommonData from "../../data/ror1/uncommon.json";
import ror2BossData from "../../data/ror2/boss.json";
import ror2CommonData from "../../data/ror2/common.json";
import ror2LegendaryData from "../../data/ror2/legendary.json";
import ror2LunarData from "../../data/ror2/lunar.json";
import ror2UncommonData from "../../data/ror2/uncommon.json";
import ror2VoidData from "../../data/ror2/void.json";
import LastUpdated from "../lastUpdated/lastUpdated.js";
import FilterableDropdown from "../itemFilterDropdown/itemFilterDropdown";
import ItemList from "../itemList.js";
import "../../fonts/BOMBARD_.ttf";
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Dropdown } from "semantic-ui-react"; // eslint-disable-line no-unused-vars

const App = () => {
  const games = [
    {
      key: "ror",
      text: "Risk of Rain",
      value: "Jenny Hess",
    },
    {
      key: "ror2",
      text: "Risk of Rain 2",
      value: "Elliot Fu",
    },
    {
      key: "rorr",
      text: "Risk of Rain Returns",
      value: "Stevie Feliciano",
    },
  ];

  const ror1Data = [].concat(
    ror1CommonData,
    ror1UncommonData,
    ror1RareData,
    ror1BossData,
    ror1SpecialData
  );

  const ror2Data = [].concat(
    ror2CommonData,
    ror2UncommonData,
    ror2LegendaryData,
    ror2BossData,
    ror2LunarData,
    ror2VoidData
  );

  const rorrData = [].concat();

  const [rarity, setRarity] = useState("All");
  const [stackType, setStackType] = useState("All");
  const [gameData, setGameData] = useState(ror2Data);
  const [game, setGame] = useState(2);

  const handleRarityChange = (newRarityValue) => {
    setRarity(newRarityValue);
  };

  const handleStackTypeChange = (newStackTypeValue) => {
    setStackType(newStackTypeValue);
  };

  // handleChange = (e, { value }) => this.setState({ value })
  const handleGameChange = (e, { value }) => {
    // eslint-disable-line no-unused-vars
    setGame(value);
    if (game === 1) {
      setGameData(ror1Data);
    } else if (game === 2) {
      setGameData(ror2Data);
    } else {
      setGameData(rorrData);
    }
    // if (game === 1) {
    //   setGame(2)
    //   setGameData(ror2Data)
    // } else if (game === 2) {
    //   setGame(1)
    //   setGameData(ror1Data)
    // } else {
    //   setGameData(rorrData) // TODO: this doesn't work
    // }
  };

  return (
    <>
      <Grid padded="horizontally" columns="equal">
        <Grid.Column textAlign="center">
          {/* <Button className='change-game-btn' onClick={handleGameChange}>Change Game</Button> */}
          <Dropdown
            placeholder="Select Game"
            fluid
            selection
            options={games}
            defaultValue={games[1].value}
            onChange={handleGameChange}
          />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <FilterableDropdown
            filterType="Rarity"
            onChange={handleRarityChange}
            itemData={gameData}
          />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <FilterableDropdown
            filterType="StackType"
            onChange={handleStackTypeChange}
            itemData={gameData}
          />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <LastUpdated game={game} />
        </Grid.Column>
      </Grid>
      <ItemList
        itemData={gameData}
        rarityFilter={rarity}
        stackTypeFilter={stackType}
        game={game}
      />
    </>
  );
};

export default App;
