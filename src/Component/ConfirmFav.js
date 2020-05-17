import React from "react";
import { AppContext } from "./AppProvider";
import styled from "styled-components";

const ConfirmButt = styled.div`
  font-size: 1.5em;
  color: green;
  padding: 20px;
  cursor: pointer;
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
