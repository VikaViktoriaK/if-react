import '../../App.css';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AvailableHotels } from '../../components/AvailabeHotels';
import { Footer } from '../../components/Footer';
import { HomesLoves } from '../../components/HomesLoves';
import { TopSection } from '../../components/TopSection';
import { authStatuses } from '../../constants/authStatuses';
import { PATH } from '../../constants/path';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useState()
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate(PATH.login);
    }
  }, [loggedOut, navigate]);

  if (loggedOut) {
    return null;
  }

  return (
    <div className="App">
      <TopSection onSubmit={setSearchParams} />
      <AvailableHotels searchParams={searchParams}/>
      <HomesLoves />
      <Footer />
    </div>
  );
};
