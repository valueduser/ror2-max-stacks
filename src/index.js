import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import ror1BossData from './data/ror1/boss.json'
import ror1CommonData from './data/ror1/common.json'
import ror1RareData from './data/ror1/rare.json'
import ror1SpecialData from './data/ror1/special.json'
import ror1UncommonData from './data/ror1/uncommon.json'
import ror2BossData from './data/ror2/boss.json'
import ror2CommonData from './data/ror2/common.json'
import ror2LegendaryData from './data/ror2/legendary.json'
import ror2LunarData from './data/ror2/lunar.json'
import ror2UncommonData from './data/ror2/uncommon.json'
import ror2VoidData from './data/ror2/void.json'
import LastUpdated from './components/lastUpdated/lastUpdated.js'
import FilterableDropdown from './components/itemFilterDropdown/itemFilterDropdown'
import ItemList from './components/itemList.js'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import './fonts/BOMBARD_.ttf'
import { Grid, Button } from 'semantic-ui-react'// eslint-disable-line no-unused-vars

Sentry.init({
  dsn: 'https://c0cce460deba46a6b64ff89c9719ba82@o141824.ingest.sentry.io/5379078'
})

const App = () => {
  const ror1Data = [].concat(
    ror1CommonData,
    ror1UncommonData,
    ror1RareData,
    ror1BossData,
    ror1SpecialData
  )

  const ror2Data = [].concat(
    ror2CommonData,
    ror2UncommonData,
    ror2LegendaryData,
    ror2BossData,
    ror2LunarData,
    ror2VoidData
  )

  const [rarity, setRarity] = useState('All')
  const [stackType, setStackType] = useState('All')
  const [gameData, setGameData] = useState(ror2Data)
  const [game, setGame] = useState(2)

  const handleRarityChange = (newRarityValue) => {
    setRarity(newRarityValue)
  }

  const handleStackTypeChange = (newStackTypeValue) => {
    setStackType(newStackTypeValue)
  }

  const handleGameChange = () => { // eslint-disable-line no-unused-vars
    if (game === 1) {
      setGame(2)
      setGameData(ror2Data)
    } else if (game === 2) {
      setGame(1)
      setGameData(ror1Data)
    }
  }

  return (
    <div>
      <Grid padded='horizontally' columns='equal'>
        {/* <Grid.Column textAlign='center'>
          <Button className='change-game-btn' onClick={handleGameChange}>Change Game</Button>
        </Grid.Column> */}
        <Grid.Column textAlign='center'>
          <FilterableDropdown
            filterType='Rarity'
            onChange={handleRarityChange}
            itemData={gameData}
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <FilterableDropdown
            filterType='StackType'
            onChange={handleStackTypeChange}
            itemData={gameData}
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <LastUpdated game={game} />
        </Grid.Column>
      </Grid>
      <ItemList
        itemData={gameData}
        rarityFilter={rarity}
        stackTypeFilter={stackType}
        game={game}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
