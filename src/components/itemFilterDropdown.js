import React from "react";
import { Dropdown, Label } from "semantic-ui-react";

const FilterableDropdown = (props) => {
  const rarityOptions = [...new Set(props.itemData.map((item) => item.Rarity))];
  const stackTypeOptions = [
    ...new Set(
      props.itemData.flatMap((i) => i.StackDetails).flatMap((d) => d.StackType)
    ),
  ];

  [rarityOptions, stackTypeOptions].forEach((element) => {
    element.splice(0, 0, "All");
  });

  const handleChange = (event, data) => {
    props.onChange(data.value);
  };

  const populateRarityOptions = () => {
    return rarityOptions.map((rarityName) => ({
      key: rarityName,
      text: rarityName,
      value: rarityName,
    }));
  };

  const populateStackTypeOptions = () => {
    return stackTypeOptions.map((stackTypeName) => ({
      key: stackTypeName,
      text: stackTypeName,
      value: stackTypeName,
    }));
  };

  if (props.filterType === "Rarity") {
    return (
      <div className="filter-select-container">
        <Label>
          Filter by Rarity
          <Dropdown
            button
            placeholder="All"
            onChange={handleChange}
            options={populateRarityOptions()}
          />
        </Label>
      </div>
    );
  } else if (props.filterType === "StackType") {
    return (
      <div className="stack-select-container">
        <Label>
          Filter by Stacking Type
          <Dropdown
            button
            placeholder="All"
            onChange={handleChange}
            options={populateStackTypeOptions()}
          />
        </Label>
      </div>
    );
  }
};

export default FilterableDropdown;
