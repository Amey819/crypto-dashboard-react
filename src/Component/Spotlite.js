import React from "react";
import { Tile } from "./Tile";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";
import CoinImage from "./CoinImage";
import PriceChart from "./PriceChart";
import { fontSizeBig } from "./Styles";
const MainTile = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 15px;
  margin-top: 20px;
`;

const Name = styled.div`
  ${fontSizeBig}
`;

function LiteCoin(coinList, currentFavorites) {
  console.log(currentFavorites);
  return (
    <div>
      <Name> {coinList[currentFavorites].CoinName}</Name>
      <CoinImage coin={coinList[currentFavorites]} spotlite />
    </div>
  );
}

const Spotlite = () => {
  return (
    <AppContext.Consumer>
      {({ currentFavorites, coinList }) => (
        <MainTile>
          <Tile>
            {currentFavorites ? LiteCoin(coinList, currentFavorites) : null}
          </Tile>
          <PriceChart />
        </MainTile>
      )}
    </AppContext.Consumer>
  );
};

export default Spotlite;
