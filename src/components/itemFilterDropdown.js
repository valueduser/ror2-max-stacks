import React from "react";

const ror1RarityOptions = ["All", "Boss", "Common", "Uncommon", "Rare"];
const ror2RarityOptions = ["All", "Boss", "Common", "Uncommon", "Legendary", "Lunar", "Void"];
const ror1StackTypeOptions = ["All", "Multiplicative", "Unknown", "None"];
const ror2StackTypeOptions = ["All", "Linear", "Hyperbolic", "Exponential", "Special"];

const FilterableDropdown = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  const populateRarityOptions = () => {
    let options;
    if (props.game === 1) {
      options = ror1RarityOptions.map((rarityName) => (
        <option key={rarityName} value={rarityName}>{rarityName}</option>
      ));
    } else {
      options = ror2RarityOptions.map((rarityName) => (
        <option key={rarityName} value={rarityName}>{rarityName}</option>
      ));
    }
    return options;
  };

  const populateStackTypeOptions = () => {
    let options;
    if (props.game === 1) {
      options = ror1StackTypeOptions.map((stackType) => (
        <option key={stackType} value={stackType}>{stackType}</option>
      ));
    } else {
      options = ror2StackTypeOptions.map((stackType) => (
        <option key={stackType} value={stackType}>{stackType}</option>
      ));
    }
    return options;
  };

  if (props.filterType === "Rarity") {
    return (
      <div className="filter-select-container">
        <div className="filter-label">Filter by Rarity </div>
        <select onChange={handleChange}>
          { populateRarityOptions() }
        </select>
      </div>
    );
  } else if (props.filterType === "StackType") {
    return (
      <div className="stack-select-container">
        <div className="filter-label">Filter by Stacking Type </div>
        <select onChange={handleChange}>
         { populateStackTypeOptions() }
        </select>
      </div>
    );
  }
};

export default FilterableDropdown;
