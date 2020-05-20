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

function getCoinsToDisplay(coinList, topSection, favorites) {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
}
const CoinGrid = ({ topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridListStyle>
          {getCoinsToDisplay(coinList, topSection, favorites).map((coinKey) => (
            <CoinTile coinKey={coinKey} topSection={topSection}></CoinTile>
          ))}
          ;
        </CoinGridListStyle>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
