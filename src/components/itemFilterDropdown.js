import React from "react";

const FilterableDropdown = (props) => {
  const rarityOptions = [...new Set(props.itemData.map((item) => item.Rarity))];
  const stackTypeOptions = [...new Set(props.itemData.flatMap(i => i.StackDetails).flatMap(d => d.StackType))];

  [rarityOptions ,stackTypeOptions].forEach((element) => {
    element.splice(0, 0, "All");
  });

  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  const populateRarityOptions = () => {
    return rarityOptions.map((rarityName) => (
      <option key={rarityName} value={rarityName}>
        {rarityName}
      </option>
    ));
  };

  const populateStackTypeOptions = () => {
    return stackTypeOptions.map((stackTypeName) => (
      <option key={stackTypeName} value={stackTypeName}>
        {stackTypeName}
      </option>
    ));
  };

  if (props.filterType === "Rarity") {
    return (
      <div className="filter-select-container">
        <div className="filter-label">Filter by Rarity </div>
        <select onChange={handleChange}>{populateRarityOptions()}</select>
      </div>
    );
  } else if (props.filterType === "StackType") {
    return (
      <div className="stack-select-container">
        <div className="filter-label">Filter by Stacking Type </div>
        <select onChange={handleChange}>{populateStackTypeOptions()}</select>
      </div>
    );
  }
};

export default FilterableDropdown;
