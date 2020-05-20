import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import { DeletableTile } from "./Tile";

const CoinHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  display: block;
  justify-self: right;
  color: red;
`;

const CoinHeaderStyled = ({ topSection, name, symbol }) => {
  return (
    <CoinHeader>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon> X </DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeader>
  );
};

export default CoinHeaderStyled;
