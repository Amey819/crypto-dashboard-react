import React from "react";
import styled, { css } from "styled-components";
const CoinImage1 = styled.div;

const CoinImage = ({ coin }) => {
  return (
    <img
      alt={coin.Symbol}
      style={{ height: "50px", width: "50%" }}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};

export default CoinImage;
