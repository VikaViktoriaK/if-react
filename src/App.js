import "./App.css";
import React from "react";
import { Top } from "./components/TopSearch";
import "./components/Container";
import { Container } from "./components/Container";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Top></Top>
      </Container>
    </div>
  );
};

export default App;
