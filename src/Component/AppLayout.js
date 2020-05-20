import React from "react";
import styled from "styled-components";
import ConfirmFav from "./ConfirmFav";
import CoinGrid from "./CoinGrid";
import { AppContext } from "./AppProvider";
const Item = styled.div`
  font-size: 2em;
  padding: 20px;
`;

const AppLayout = () => {
  return (
    <div>
      <AppContext.Consumer>
        {({ firstVisit }) =>
          !firstVisit ? <Item>Welcome to Dashboard</Item> : null
        }
      </AppContext.Consumer>
      <CoinGrid topSection />
      <ConfirmFav />
      <CoinGrid />
    </div>
  );
};

export default AppLayout;
