import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./Component/AppBar";
import AppLayout from "./Component/AppLayout";
import styled from "styled-components";
import Main from "./Component/Main";
import AppProvider from "./Component/AppProvider";
import Content from "./Component/Content";
import Dashboard from "./Component/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Main>
      <AppProvider>
        <AppBar />
        <Content>
          <AppLayout />
          <Dashboard />
        </Content>
      </AppProvider>
    </Main>
  );
}

export default App;
