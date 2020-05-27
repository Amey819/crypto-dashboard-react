import React from "react";
import styled, { css } from "styled-components";
import { Tile, SelectableTile } from "./Tile";
import CoinHeaderStyled from "./CoinHeaderStyled";
import { fontSizeBig, greenBoxShadow } from "./Styles";
import { AppContext } from "./AppProvider";

const PriceGridStyled = styled(Tile)`
  cursor: pointer;
  ${(props) =>
    props.currentFavorites &&
    css`
      ${greenBoxShadow};
      pointer-events: none;
    `}
`;
const PriceTileStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
`;

const ChangeColor = styled.div`
  color: green;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;

const JustifyRight = styled.div`
  justify-self: right;
`;
const TicketPrice = styled.div`
  ${fontSizeBig}
`;
const numberFormat = (number) => {
  return +(number + "").slice(0, 7);
};
const PriceGrid = ({ price, index }) => {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];
  console.log(data);
  // confirmFavorite
  return (
    <AppContext.Consumer>
      {({ currentFavorites, setConfirmFavorites }) => (
        <PriceGridStyled
          currentFavorites={currentFavorites === sym}
          onClick={() => setConfirmFavorites(sym)}
        >
          <PriceTileStyled>
            <div>{sym}</div>
            <JustifyRight>
              <ChangeColor red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
              </ChangeColor>
            </JustifyRight>
          </PriceTileStyled>
          <TicketPrice>{numberFormat(data.PRICE)}</TicketPrice>
        </PriceGridStyled>
      )}
    </AppContext.Consumer>
  );
};

export default PriceGrid;
