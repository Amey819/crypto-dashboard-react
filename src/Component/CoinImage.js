import React from "react";
import styled, { css } from "styled-components";

const CoinImage1 = styled.img`
  height: 50px;
  ${(props) =>
    props.spotlite &&
    css`
      height: 200px;
      width: auto;
    `}
`;
const CoinImage = ({ coin, spotlite }) => {
  return (
    <CoinImage1
      spotlite={spotlite}
      alt={coin.Symbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};

export default CoinImage;
