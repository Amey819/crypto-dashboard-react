import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import Page from "./Page";
import PriceGrid from "./PriceGrid";
import SpotLite from "./Spotlite";

const PriceTile = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 5px;
  height: 100px;
`;

const Dashboard = () => {
  return (
    <Page name="Dashboard">
      <AppContext.Consumer>
        {({ prices, currentFavourites }) => (
          <PriceTile>
            {prices.map((price) => (
              <PriceGrid price={price} />
            ))}
          </PriceTile>
        )}
      </AppContext.Consumer>
      <SpotLite />
    </Page>
  );
};

export default Dashboard;
