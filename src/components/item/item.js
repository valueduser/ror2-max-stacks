import React, { useMemo, useCallback } from "react";
import { Button, Image, Label, Popup } from "semantic-ui-react";
import "./item.css";

const getWikiLinkPrefix = (itemName, game) => {
  if (game === 1) {
    return `https://riskofrain.fandom.com/wiki/${itemName}`;
  }
  return `https://riskofrain2.gamepedia.com/${itemName}`;
};

const getItemImage = (itemName, game) => {
  const basePath = process.env.PUBLIC_URL + "/itemImages/";
  const gamePath = game === 1 ? "ror1" : "ror2";
  return `${basePath}${gamePath}/${itemName}.png`;
};

const Item = ({ item, game }) => {
  const wikiLink = useMemo(
    () => getWikiLinkPrefix(item.Name, game),
    [item.Name, game]
  );

  const imagePath = useMemo(
    () => getItemImage(item.Name, game),
    [item.Name, game]
  );

  const handleClick = useCallback(() => {
    window.open(wikiLink, "_blank");
  }, [wikiLink]);

  const handleImageError = useCallback(
    (e) => {
      e.target.onError = null;
      e.target.src = `http://placehold.jp/3845ff/ffffff/128x128.png?text=${item.DisplayName}`;
    },
    [item.DisplayName]
  );

  const stackLabels = useMemo(() => {
    const filteredDetails =
      game === 2
        ? item.StackDetails.filter((detail) => detail != null)
        : item.StackDetails;

    return filteredDetails.map((stackDetail, index) => {
      if (["Hyperbolic", "Special"].includes(stackDetail.StackType)) {
        return (
          <Label
            key={`${item.Id}_${index}`}
            basic
            color="black"
            content={
              stackDetail.GoodEnoughStacks === "Infinite"
                ? "∞"
                : stackDetail.GoodEnoughStacks
            }
            size="small"
          />
        );
      }
      return (
        <Label
          key={`${item.Id}_${index}`}
          style={{ visibility: "hidden" }}
          basic
          color="black"
          size="small"
        />
      );
    });
  }, [item.StackDetails, item.Id, game]);

  return (
    <Popup
      trigger={
        <Button basic id={`itemButton_${item.Id}`} onClick={handleClick}>
          <Label.Group>{stackLabels}</Label.Group>
          <Image
            src={imagePath}
            onError={handleImageError}
            title={item.DisplayName}
            alt={item.DisplayName}
            width="100"
            height="100"
          />
        </Button>
      }
      content={item.Pickup}
    />
  );
};

export default Item;
