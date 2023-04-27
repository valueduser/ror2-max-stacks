import React from "react";
import Item from "./item/item.js";
import { Grid } from "semantic-ui-react";

const ItemList = ({ itemData, rarityFilter, stackTypeFilter, game }) => (
  <Grid padded>
    {itemData
      .filter((item) => {
        if (rarityFilter !== "All" && stackTypeFilter !== "All") {
          return (
            item.Rarity === rarityFilter &&
            item.StackDetails.find(
              (detail) => detail.StackType === stackTypeFilter
            )
          );
        } else if (rarityFilter === "All" && stackTypeFilter !== "All") {
          return item.StackDetails.find(
            (detail) => detail.StackType === stackTypeFilter
          );
        } else if (rarityFilter !== "All" && stackTypeFilter === "All") {
          return item.Rarity === rarityFilter;
        } else {
          //The 'All' option is defaulted for both drop downs
          return item !== null;
        }
      })
      .map((item) => (
        <Item key={item.Id} item={item} game={game} />
      ))}
  </Grid>
);

export default ItemList;
