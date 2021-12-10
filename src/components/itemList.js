import React from "react";
import Item from "./item.js";

const ItemList = (props) => (
  <div className="item-list">
    {props.itemData
      .filter((item) =>
        //stupid double filter nonsense
        props.rarityFilter !== "All" && props.stackTypeFilter !== "All"
          ? item.Rarity === props.rarityFilter &&
            item.StackDetails.find(
              (detail) => detail.StackType === props.stackTypeFilter
            )
          : props.rarityFilter === "All" && props.stackTypeFilter !== "All"
          ? item.StackDetails.find(
              (detail) => detail.StackType === props.stackTypeFilter
            )
          : props.rarityFilter !== "All" && props.stackTypeFilter === "All"
          ? item.Rarity === props.rarityFilter
          : item !== null
      )
      .map((item) => (
        <Item key={item.Id} item={item}/>
      ))}
  </div>
);

export default ItemList;