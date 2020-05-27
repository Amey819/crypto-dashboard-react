import React from "react";
import { AppContext } from "./AppProvider";
import styled from "styled-components";
import { SelectableTile } from "./Tile";
import CoinTile from "./CoinTile";

const CoinGridListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 10px;
`;

function getLowerSection(filteredCoins, coinList) {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
}
function getCoinsToDisplay(coinList, topSection, favorites, filteredCoins) {
  console.log(filteredCoins);
  return topSection ? favorites : getLowerSection(filteredCoins, coinList);
}
const CoinGrid = ({ topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <CoinGridListStyle>
          {getCoinsToDisplay(
            coinList,
            topSection,
            favorites,
            filteredCoins
          ).map((coinKey) => (
            <CoinTile coinKey={coinKey} topSection={topSection}></CoinTile>
          ))}
          ;
        </CoinGridListStyle>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
