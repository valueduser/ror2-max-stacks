import React, { useMemo } from 'react'
import Item from './item/item.js'
import { Grid } from 'semantic-ui-react'

const ItemList = ({ itemData, rarityFilter, stackTypeFilter, game }) => {
  const filteredItems = useMemo(() => {
    return itemData.filter((item) => {
      const matchesRarity =
        rarityFilter === 'All' || item.Rarity === rarityFilter
      const matchesStackType =
        stackTypeFilter === 'All' ||
        item.StackDetails.some((detail) => detail.StackType === stackTypeFilter)

      return matchesRarity && matchesStackType
    })
  }, [itemData, rarityFilter, stackTypeFilter])

  return (
    <Grid padded>
      {filteredItems.map((item) => (
        <Item key={item.Id} item={item} game={game} />
      ))}
    </Grid>
  )
}

export default ItemList
