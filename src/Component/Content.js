import React from "react";
import AppProvider, { AppContext } from "./AppProvider";

const Content = (props) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) =>
        !coinList ? <div> Loading Coins</div> : <div>{props.children}</div>
      }
    </AppContext.Consumer>
  );
};

export default Content;
