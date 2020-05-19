import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";

const CoinHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CoinSymbol = styled.div`
  justify-self: right;
`;

const CoinHeaderStyled = ({ name, symbol }) => {
  return (
    <CoinHeader>
      <div>{name}</div>
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinHeader>
  );
};

export default CoinHeaderStyled;
