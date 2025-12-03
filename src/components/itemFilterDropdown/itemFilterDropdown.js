import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './itemFilterDropdown.css'

const FilterableDropdown = ({ itemData, onChange, filterType }) => {
  const rarityOptions = [...new Set(itemData.map((item) => item.Rarity))]
  const stackTypeOptions = [
    ...new Set(
      itemData.flatMap((i) => i.StackDetails).flatMap((d) => d.StackType)
    ),
  ]

  //Once all the dropdown options are populated, append the 'All' option to the bottom/end
  ;[rarityOptions, stackTypeOptions].forEach((element) => {
    element.splice(0, 0, 'All')
  })

  const handleChange = (event, data) => {
    onChange(data.value)
  }

  const populateRarityOptions = () => {
    return rarityOptions.map((rarityName) => ({
      key: rarityName,
      text: rarityName,
      value: rarityName,
    }))
  }

  const populateStackTypeOptions = () => {
    return stackTypeOptions.map((stackTypeName) => ({
      key: stackTypeName,
      text: stackTypeName,
      value: stackTypeName,
    }))
  }

  if (filterType === 'Rarity') {
    return (
      <>
        {
          <div className="filter-container">
            <Dropdown
              text="Filter by Rarity"
              labeled
              button
              onChange={handleChange}
              options={populateRarityOptions()}
            />
          </div>
        }
      </>
    )
  } else if (filterType === 'StackType') {
    return (
      <>
        {
          <div className="filter-container">
            <Dropdown
              text="Filter by Stacking Type"
              labeled
              button
              onChange={handleChange}
              options={populateStackTypeOptions()}
            />
          </div>
        }
      </>
    )
  }
}

export default FilterableDropdown
