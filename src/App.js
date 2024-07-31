import "./App.css";
import React from "react";
import { Top } from "./components/TopSearch";
import "./components/Container";
import { Container } from "./components/Container";
import { HomesLoves } from "./components/HomesLoves";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Top></Top>
      </Container>
      <HomesLoves></HomesLoves>
    </div>
  );
};

export default App;
