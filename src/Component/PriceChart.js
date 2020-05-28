import React from "react";
import Config from "./Config";
import { AppContext } from "./AppProvider";
import { Tile } from "./Tile";
import HighCharts from "react-highcharts";
const PriceChart = () => {
  return (
    <AppContext.Consumer>
      {(historical) => (
        <Tile>
          <HighCharts config={Config(historical)} />
        </Tile>
      )}
    </AppContext.Consumer>
  );
};

export default PriceChart;
