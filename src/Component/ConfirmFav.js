import React from "react";
import { AppContext } from "./AppProvider";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { fontSize1, color3, greenBoxShadow } from "./Styles";

const ConfirmButt = styled.div`
  ${fontSize1}
  color: ${color3};
  padding: 5px;
  margin:5px;
  cursor: pointer;
  &:hover
  {
    ${greenBoxShadow};
  }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmFav = () => {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButt onClick={confirmFavorites}>
            {" "}
            Confirm Favorites{" "}
          </ConfirmButt>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmFav;
