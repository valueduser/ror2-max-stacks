import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import itemData from "./data.json";
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
          onClick={() => alert("clicked filter btn")}
        >
          Rarity Filter Button Placeholder
        </button>
        <button
          className="typeFilterBtn"
          onClick={() => alert("clicked filter btn")}
        >
          Item Type Filter Button Placeholder
        </button>
      </div>
    );
  }
}

class Grid extends React.Component {
  render() {
    const wikiLinkPrefix = "https://riskofrain2.gamepedia.com/";
    return (
      <div>
        <Filters></Filters>
        <div className="grid-row">
          {itemData.map((item, index) => (
            <a href={`${wikiLinkPrefix + item.Name}`}>
              <button>  
                <img
                  src= {process.env.PUBLIC_URL + '/itemImages/' + item.Name + '.png'}
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
          ))}
        </div>
      </div>
    );
  }
}

class Guide extends React.Component {
  render() {
    return (
      <div className="guide">
        <div className="guide-frame">
          <Grid />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Guide />, document.getElementById("root"));
