import React from "react";
import { AppContext } from "./AppProvider";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Bar = styled.div`
  display: grid;
  margin-bottom: 20px;
  grid-template-columns: 180px auto 100px 100px;
`;

const Logo = styled.div`
  fonts-size: 1.5em;
`;

const Button = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `}
`;

function ControlButton({ name }) {
  console.log(name);
  return (
    <Router>
      <AppContext.Consumer>
        {({ firstVisit, page, setPage }) => (
          <Button active={page === name} onClick={() => setPage(name)}>
            {name}
          </Button>
        )}
      </AppContext.Consumer>
    </Router>
  );
}
const AppBar = () => {
  return (
    <Bar>
      <Logo>CryptoDashboard</Logo>
      <div></div>
      <ControlButton name="Dashboard" />
      <ControlButton name="Settings" />
    </Bar>
  );
};

export default AppBar;
