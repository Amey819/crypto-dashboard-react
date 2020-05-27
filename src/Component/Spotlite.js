import React from "react";
import { Tile } from "./Tile";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";
import CoinImage from "./CoinImage";
import PriceChart from "./PriceChart";
const MainTile = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 15px;
  margin-top: 20px;
`;
const SpotCoin = styled(Tile)`
  height: 200px;
`;

function LiteCoin(coinList, currentFavorites) {
  console.log(currentFavorites);
  return (
    <div>
      <div> {coinList[currentFavorites].CoinName}</div>
      <CoinImage coin={coinList[currentFavorites]} />
    </div>
  );
}
const HighChart = styled(Tile)``;
const Spotlite = () => {
  return (
    <AppContext.Consumer>
      {({ currentFavorites, coinList }) => (
        <MainTile>
          <SpotCoin>
            {currentFavorites ? LiteCoin(coinList, currentFavorites) : null}
          </SpotCoin>
          <PriceChart />
        </MainTile>
      )}
    </AppContext.Consumer>
  );
};

export default Spotlite;
