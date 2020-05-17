import React from "react";
import { AppContext } from "./AppProvider";
import styled from "styled-components";

const CoinGridListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
const CoinGrid = () => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridListStyle>
          {Object.keys(coinList).map((coinKey) => (
            <div>{coinKey}</div>
          ))}
          ;
        </CoinGridListStyle>
      )}
    </AppContext.Consumer>
  );
};

export default CoinGrid;
