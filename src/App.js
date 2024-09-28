import "./App.css";
import React from "react";
import "./components/Container";
import { HomesLoves } from "./components/HomesLoves";
import { TopSection } from "./components/TopSection";

const App = () => {
  return (
    <div className="App">
      <TopSection />
      <HomesLoves />
    </div>
  );
};

export default App;
