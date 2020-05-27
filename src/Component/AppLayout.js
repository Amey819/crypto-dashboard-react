import React from "react";
import styled from "styled-components";
import ConfirmFav from "./ConfirmFav";
import CoinGrid from "./CoinGrid";
import { AppContext } from "./AppProvider";
import Page from "./Page";
import Search from "./Search";
const Item = styled.div`
  font-size: 2em;
  padding: 20px;
`;

const AppLayout = () => {
  return (
    <Page name="Settings">
      <CoinGrid topSection />
      <ConfirmFav />
      <Search />
      <CoinGrid />
    </Page>
  );
};

export default AppLayout;
