import React from "react";

const Item = (props) => {
  const item = props;
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
        <div>
          {item.StackDetails.map((stackInfo) => (
            <div className="stack-square">
              <div className="stack-square-text">
                {stackInfo.GoodEnoughStacks === "Infinite"
                  ? "∞"
                  : stackInfo.GoodEnoughStacks}
              </div>
            </div>
          ))}
        </div>
      </button>
    </a>
  );
};

export default Item;
