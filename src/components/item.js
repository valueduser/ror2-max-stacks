import React from "react";

const Item = (props) => {
  const item = props.item;
  const wikiLinkPrefix = "https://riskofrain2.gamepedia.com/";

  const renderStackBadgeText = (stackInfo) => {
    if (["Hyperbolic", "Special"].includes(stackInfo.StackType)) {
      return (
        <div className="stack-badge-text">
          {stackInfo.GoodEnoughStacks === "Infinite"
            ? "∞"
            : stackInfo.GoodEnoughStacks}
        </div>
      );
    }
  };

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
            <div
              className="stack-square"
              style={{
                display: ["Hyperbolic", "Special"].includes(stackInfo.StackType)
                  ? "block"
                  : "none",
              }}
            >
              {renderStackBadgeText(stackInfo)}
            </div>
          ))}
        </div>
      </button>
    </a>
  );
};

export default Item;
