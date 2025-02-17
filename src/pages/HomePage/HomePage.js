import "../../App.css";

import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AvailableHotels } from "../../components/AvailabeHotels";

import { HomesLoves } from "../../components/HomesLoves";
import { Loader } from "../../components/Loader";
import { TopSection } from "../../components/TopSection";
import { Footer } from "../../components/Footer";
import { authStatuses } from "../../constants/authStatuses";
import { PATH } from "../../constants/path";
import { setLoading } from "../../store/actions";

export const HomePage = () => {
  const dispatch = useDispatch();
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );
  const loading = useSelector((state) => state.auth.loading);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      dispatch(setLoading(true));
      navigate(PATH.login);
    } else {
      dispatch(setLoading(false));
    }
  }, [loggedOut, navigate, dispatch]);

  if (loading) {
    return <Loader loading />;
  }

  return (
    <div className="App">
      <TopSection />
      <Suspense fallback={<Loader loading />}>
        <AvailableHotels />
      </Suspense>
      <HomesLoves />
      <Footer />
    </div>
  );
};
