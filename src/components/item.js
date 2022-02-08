import React from 'react'
import { Button, Image, Label } from 'semantic-ui-react'

const Item = (props) => {
  const item = props.item
  const game = props.game

  const getWikiLinkPrefix = (item) => {
    if (game === 1) {
      return 'https://riskofrain.fandom.com/wiki/' + item.Name
    } else {
      return 'https://riskofrain2.gamepedia.com/' + item.Name
    }
  }

  const getItemImage = (item) => {
    let imagePath = process.env.PUBLIC_URL + '/itemImages/'
    if (game === 1) {
      imagePath += 'ror1/' + item.Name + '.png'
    } else {
      imagePath += 'ror2/' + item.Name + '.png'
    }
    return imagePath
  }

  return (
    <Button
      basic
      id={'itemButton_' + item.Id}
      onClick={() => window.open(getWikiLinkPrefix(item), '_blank')}
    >
      <Label.Group>
        {item.StackDetails.filter((stackDetail) => {
          if (game === 2) return stackDetail != null
          return null
        }).map((stackDetail, index) => {
          if (['Hyperbolic', 'Special'].includes(stackDetail.StackType)) {
            return (
              <Label
                key={item.Id + '_' + index}
                basic
                color='black'
                content={
                  stackDetail.GoodEnoughStacks === 'Infinite'
                    ? '∞'
                    : stackDetail.GoodEnoughStacks
                }
                size='small'
              />
            )
          } else {
            return (
              <Label
                key={item.Id + '_' + index}
                style={{ visibility: 'hidden' }}
                basic
                color='black'
                size='small'
              />
            )
          }
        })}
      </Label.Group>
      <Image
        src={getItemImage(item)}
        title={item.DisplayName}
        alt={item.DisplayName}
        width='100'
        height='100'
      />
    </Button>
  )
}

export default Item
