import "../../App.css";
import React, { Suspense } from "react";
import "../../components/Container";
import { TopSection } from "../../components/TopSection";
import { AvailableHotels } from "../../components/AvailabeHotels";
import { Loader } from "../../components/Loader";
import { HomesLoves } from "../../components/HomesLoves";
import Footer from "../../components/Footer/Footer";

export const HomePage = () => {
  return (
    <div className="App">
      <TopSection />
      <AvailableHotels />
      <Suspense fallback={<Loader />}>{<HomesLoves />}</Suspense>
      <Footer />
    </div>
  );
};
