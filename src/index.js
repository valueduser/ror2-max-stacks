import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import jsonData from "./data.json";
import "./index.css";

Sentry.init({
  dsn:
    "https://c0cce460deba46a6b64ff89c9719ba82@o141824.ingest.sentry.io/5379078",
});

class Filters extends React.Component {
  render() {
    return (
      <div>
        <button
          className="rareFilterBtn"
          onClick={() => alert("clicked rare filter btn")}
        >
          Rarity Filter Button Placeholder
        </button>
        <button
          className="typeFilterBtn"
          onClick={() => alert("clicked type filter btn")}
        >
          Item Type Filter Button Placeholder
        </button>
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
    {props.itemData.map(item => <Item {...item}/>)}
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <Filters />
        <ItemList itemData={jsonData} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
