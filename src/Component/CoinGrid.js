import React from "react";
import { AppContext } from "./AppProvider";
import styled from "styled-components";
import { SelectableTile } from "./Tile";
import CoinTile from "./CoinTile";

const CoinGridListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`;

function getCoinsToDisplay(coinList) {
  return Object.keys(coinList).slice(0, 100);
}
const CoinGrid = () => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridListStyle>
          {getCoinsToDisplay(coinList).map((coinKey) => (
            <CoinTile coinKey={coinKey}></CoinTile>
          ))}
          ;
        </CoinGridListStyle>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
