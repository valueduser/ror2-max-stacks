import React, { useState, useMemo } from 'react'
import ror1BossData from '../../data/ror1/boss.json'
import ror1CommonData from '../../data/ror1/common.json'
import ror1RareData from '../../data/ror1/rare.json'
import ror1SpecialData from '../../data/ror1/special.json'
import ror1UncommonData from '../../data/ror1/uncommon.json'
import ror2BossData from '../../data/ror2/boss.json'
import ror2CommonData from '../../data/ror2/common.json'
import ror2LegendaryData from '../../data/ror2/legendary.json'
import ror2LunarData from '../../data/ror2/lunar.json'
import ror2UncommonData from '../../data/ror2/uncommon.json'
import ror2VoidData from '../../data/ror2/void.json'
import ror2FoodData from '../../data/ror2/food.json'
import LastUpdated from '../lastUpdated/lastUpdated.js'
import FilterableDropdown from '../itemFilterDropdown/itemFilterDropdown'
import ItemList from '../itemList.js'
import '../itemFilterDropdown/itemFilterDropdown.css'
import '../../fonts/BOMBARD_.ttf'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Dropdown } from 'semantic-ui-react'

const games = [
  {
    key: 'ror',
    text: 'Risk of Rain',
    value: 1,
  },
  {
    key: 'ror2',
    text: 'Risk of Rain 2',
    value: 2,
  },
  {
    key: 'rorr',
    text: 'Risk of Rain Returns',
    value: 3,
  },
]

const App = () => {
  const ror1Data = useMemo(
    () =>
      [].concat(
        ror1CommonData,
        ror1UncommonData,
        ror1RareData,
        ror1BossData,
        ror1SpecialData
      ),
    []
  )

  const ror2Data = useMemo(
    () =>
      [].concat(
        ror2CommonData,
        ror2UncommonData,
        ror2LegendaryData,
        ror2BossData,
        ror2LunarData,
        ror2VoidData,
        ror2FoodData
      ),
    []
  )

  const rorrData = useMemo(() => [].concat(), [])

  const [rarity, setRarity] = useState('All')
  const [stackType, setStackType] = useState('All')
  const [game, setGame] = useState(2)

  const gameData = useMemo(() => {
    if (game === 1) {
      return ror1Data
    } else if (game === 2) {
      return ror2Data
    } else {
      return rorrData
    }
  }, [game, ror1Data, ror2Data, rorrData])

  const handleRarityChange = (newRarityValue) => {
    setRarity(newRarityValue)
  }

  const handleStackTypeChange = (newStackTypeValue) => {
    setStackType(newStackTypeValue)
  }

  const handleGameChange = (e, { value }) => {
    setGame(value)
  }

  const selectedGameText = useMemo(() => {
    const selectedGame = games.find((g) => g.value === game)
    return selectedGame ? selectedGame.text : 'Select Game'
  }, [game])

  return (
    <>
      <Grid padded="horizontally" columns="equal">
        <Grid.Column textAlign="center">
          <div className="filter-container">
            <Dropdown
              text={selectedGameText}
              labeled
              button
              fluid
              options={games}
              value={game}
              onChange={handleGameChange}
            />
          </div>
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
        key={`${game}-${rarity}-${stackType}`}
        itemData={gameData}
        rarityFilter={rarity}
        stackTypeFilter={stackType}
        game={game}
      />
    </>
  )
}

export default App
