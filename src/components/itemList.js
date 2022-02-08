import React from 'react'
import Item from './item.js'
import { Grid } from 'semantic-ui-react'

const ItemList = (props) => (
  <Grid padded>
    {props.itemData
      .filter((item) => {
        if (props.rarityFilter !== 'All' && props.stackTypeFilter !== 'All') {
          return (
            item.Rarity === props.rarityFilter &&
            item.StackDetails.find(
              (detail) => detail.StackType === props.stackTypeFilter
            )
          )
        } else if (
          props.rarityFilter === 'All' &&
          props.stackTypeFilter !== 'All'
        ) {
          return item.StackDetails.find(
            (detail) => detail.StackType === props.stackTypeFilter
          )
        } else if (
          props.rarityFilter !== 'All' &&
          props.stackTypeFilter === 'All'
        ) {
          return item.Rarity === props.rarityFilter
        } else {
          return item !== null
        }
      })
      .map((item) => (
        <Item key={item.Id} item={item} game={props.game} />
      ))}
  </Grid>
)

export default ItemList
