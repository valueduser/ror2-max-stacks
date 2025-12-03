import React, { useMemo } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './itemFilterDropdown.css'

const FilterableDropdown = ({ itemData, onChange, filterType }) => {
  const rarityOptions = useMemo(() => {
    const options = [...new Set(itemData.map((item) => item.Rarity))]
    options.unshift('All')
    return options.map((rarityName) => ({
      key: rarityName,
      text: rarityName,
      value: rarityName,
    }))
  }, [itemData])

  const stackTypeOptions = useMemo(() => {
    const options = [
      ...new Set(
        itemData.flatMap((i) => i.StackDetails).flatMap((d) => d.StackType)
      ),
    ]
    options.unshift('All')
    return options.map((stackTypeName) => ({
      key: stackTypeName,
      text: stackTypeName,
      value: stackTypeName,
    }))
  }, [itemData])

  const handleChange = (event, data) => {
    onChange(data.value)
  }

  if (filterType === 'Rarity') {
    return (
      <div className="filter-container">
        <Dropdown
          text="Filter by Rarity"
          labeled
          button
          onChange={handleChange}
          options={rarityOptions}
        />
      </div>
    )
  }

  if (filterType === 'StackType') {
    return (
      <div className="filter-container">
        <Dropdown
          text="Filter by Stacking Type"
          labeled
          button
          onChange={handleChange}
          options={stackTypeOptions}
        />
      </div>
    )
  }

  return null
}

export default FilterableDropdown
