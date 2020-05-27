import React from "react";
import AppProvider, { AppContext } from "./AppProvider";

const Content = (props) => {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit, favorites }) => {
        if (!coinList) {
          return <div> Loading Coins </div>;
        }
        if (!firstVisit && !prices) {
          return <div> Loading Prices </div>;
        }
        return <div> {props.children} </div>;
      }}
    </AppContext.Consumer>
  );
};

export default Content;
