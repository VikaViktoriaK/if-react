import "./App.css";
import React, { Suspense } from "react";
import "./components/Container";
import { HomesLoves } from "./components/HomesLoves";
import { TopSection } from "./components/TopSection";
import { Loader } from "./components/Loader";
import Footer from "./components/Footer/Footer";
import { AvailableHotels } from "./components/AvailabeHotels";

const App = () => {
  return (
    <div className="App">
      <TopSection />
      <AvailableHotels />
      <Suspense fallback={<Loader />}>
        <HomesLoves />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
