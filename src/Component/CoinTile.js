import React from "react";
import { SelectableTile, DeletableTile, DisableTile } from "./Tile";
import { AppContext } from "./AppProvider";
import CoinHeaderStyled from "./CoinHeaderStyled";
import CoinImage from "./CoinImage";
import { includes } from "lodash";
function handleclick(addCoin, removeCoin, topSection, coinKey) {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
}

const CoinTile = ({ coinKey, topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, favorites }) => {
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        } else if (favorites.includes(coinKey)) {
          TileClass = DisableTile;
        }

        let coin = coinList[coinKey];

        return (
          <TileClass
            onClick={handleclick(addCoin, removeCoin, topSection, coinKey)}
          >
            <CoinHeaderStyled
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CoinTile;
