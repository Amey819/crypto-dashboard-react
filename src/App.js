import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./Component/AppBar";
import AppLayout from "./Component/AppLayout";
import styled from "styled-components";
import Main from "./Component/Main";
import AppProvider from "./Component/AppProvider";
import Content from "./Component/Content";

function App() {
  return (
    <Main>
      <AppProvider>
        <AppBar />
        <Content>
          <AppLayout />
        </Content>
      </AppProvider>
    </Main>
  );
}

export default App;
