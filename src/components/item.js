import React from "react";
import { Button, Image } from "semantic-ui-react";

const Item = (props) => {
  const item = props.item;
  const game = props.game;

  const getWikiLinkPrefix = (item) => {
    if (game === 1) {
      return "https://riskofrain.fandom.com/wiki/" + item.Name;
    } else {
      return "https://riskofrain2.gamepedia.com/" + item.Name;
    }
  };

  const getItemImage = (item) => {
    let imagePath = process.env.PUBLIC_URL + "/itemImages/";
    if (game === 1) {
      imagePath += "ror1/" + item.Name + ".png";
    } else {
      imagePath += "ror2/" + item.Name + ".png";
    }
    return imagePath;
  };

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
    <a href={`${getWikiLinkPrefix(item)}`}>
      <Button basic id={"itemButton_" + item.Id}>
        <Image
          label={{ as: 'a', class: 'ui bottom right corner label', color: 'red', corner: 'left', icon: 'save' }}
          src={getItemImage(item)}
          title={item.DisplayName}
          alt={item.DisplayName}
          width="100"
          height="100"
        />
        {/* <div>
          {item.StackDetails.map((stackInfo) => (
            <div
              className="stack-square"
              style={{
                display: ["Hyperbolic", "Special"].includes(stackInfo.StackType)//TODO: fix for ror1
                  ? "block"
                  : "none",
              }}
            >
              {renderStackBadgeText(stackInfo)}
            </div>
          ))}
        </div> */}
      </Button>
    </a>
  );
};

export default Item;
