import "../../App.css";
import React, { Suspense, useEffect } from "react";
import "../../components/Container";
import { TopSection } from "../../components/TopSection";
import { AvailableHotels } from "../../components/AvailabeHotels";
import { Loader } from "../../components/Loader";
import { HomesLoves } from "../../components/HomesLoves";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { authStatuses } from "../../constants/authStatuses";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";

export const HomePage = () => {
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate(PATH.login);
    }
  }, [loggedOut, navigate]);

  return (
    <div className="App">
      <TopSection />
      <AvailableHotels />
      <Suspense fallback={<Loader />}>{<HomesLoves />}</Suspense>
      <Footer />
    </div>
  );
};
