import React from "react";
import { SelectableTile } from "./Tile";
import { AppContext } from "./AppProvider";
import CoinHeaderStyled from "./CoinHeaderStyled";
import CoinImage from "./CoinImage";

const CoinTile = ({ coinKey }) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];

        return (
          <SelectableTile>
            <CoinHeaderStyled name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </SelectableTile>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CoinTile;
