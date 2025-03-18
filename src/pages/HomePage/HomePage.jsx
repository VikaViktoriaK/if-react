import '../../App.css';

import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AvailableHotels } from '../../components/AvailabeHotels';
import { Footer } from '../../components/Footer';
import { HomesLoves } from '../../components/HomesLoves';
import { Loader } from '../../components/Loader';
import { TopSection } from '../../components/TopSection';
import { authStatuses } from '../../constants/authStatuses';
import { PATH } from '../../constants/path';

export const HomePage = () => {
  const dispatch = useDispatch();
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate(PATH.login);
    }
  }, [loggedOut, navigate, dispatch]);

  if (loggedOut) {
    return null;
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
