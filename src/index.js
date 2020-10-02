import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import jsonData from "./data.json";
import "./index.css";

Sentry.init({
  dsn:
    "https://c0cce460deba46a6b64ff89c9719ba82@o141824.ingest.sentry.io/5379078",
});

class LastUpdated extends React.Component {
  render() {
    const version = "1.0.1.1";
    return (
      <div className="last-updated-container">
        <div>Last updated for version: {version}</div>
      </div>
    );
  }
}

class RarityFilterDropdown extends React.Component {
  constructor() {
    super();
    this.state = { value: "All" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.callback(event.target.value);
  }

  render() {
    return (
      <div className="filter-select-container">
        <div>Filter by Rarity</div>
        <div>
          <select onChange={this.handleChange}>
            <option value="All">All</option>
            <option value="Lunar">Lunar</option>
            <option value="Boss">Boss</option>
            <option value="Legendary">Legendary</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Common">Common</option>
          </select>
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    const item = this.props;
    const wikiLinkPrefix = "https://riskofrain2.gamepedia.com/";
    return (
      <a href={`${wikiLinkPrefix + item.Name}`}>
        <button>
          <img
            src={process.env.PUBLIC_URL + "/itemImages/" + item.Name + ".png"}
            title={item.DisplayName}
            alt={item.DisplayName}
            width="100"
            height="100"
          />
          <div className="stack-square">
            <div className="stack-square-text">
              {item.GoodEnoughStacks === "Infinite"
                ? "∞"
                : item.GoodEnoughStacks}
            </div>
          </div>
        </button>
      </a>
    );
  }
}

const ItemList = (props) => (
  <div>
    {props.itemData
      .filter((item) =>
        props.filterData === "All"
          ? item !== null
          : item.Rarity === props.filterData
      )
      .map((item) => (
        <Item {...item} />
      ))}
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = { filterData: "All" };
  }

  setFilterData(params) {
    this.setState({
      filterData: params,
    });
  }

  render() {
    return (
      <div>
        <LastUpdated/>
        <RarityFilterDropdown callback={this.setFilterData.bind(this)} />
        <ItemList itemData={jsonData} filterData={this.state.filterData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
