import React from "react";

const FilterableDropdown = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  if (props.filterType === "Rarity") {
    return (
      <div className="filter-select-container">
        <div className="filter-label">Filter by Rarity </div>
        <select onChange={handleChange}>
          <option value="All">All</option>
          <option value="Void">Void</option>
          <option value="Lunar">Lunar</option>
          <option value="Boss">Boss</option>
          <option value="Legendary">Legendary</option>
          <option value="Uncommon">Uncommon</option>
          <option value="Common">Common</option>
        </select>
      </div>
    );
  } else if (props.filterType === "StackType") {
    return (
      <div className="stack-select-container">
        <div className="filter-label">Filter by Stacking Type </div>
        <select onChange={handleChange}>
          <option value="All">All</option>
          <option value="Linear">Linear</option>
          <option value="Hyperbolic">Hyperbolic</option>
          <option value="Exponential">Exponential</option>
          <option value="Special">Special</option>
        </select>
      </div>
    );
  }
};

export default FilterableDropdown;
