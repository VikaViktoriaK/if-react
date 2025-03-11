import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { PATH } from './constants/path';
import { HotelPage } from './pages/HotelPage';
import { HomePage } from './pages/HomePage';
import { Registration } from './pages/Registration';
import { persistor, store } from './store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { hotelsApi } from './requests/searchRequest';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApiProvider api={hotelsApi}>
          <BrowserRouter>
            <Container>
              <Navbar />
            </Container>
            <Routes>
              <Route path={PATH.login} element={<Registration />} />
              <Route path={PATH.index} element={<HomePage />} />
              <Route path={PATH.hotelById} element={<HotelPage />} />
            </Routes>
          </BrowserRouter>
        </ApiProvider>
      </PersistGate>
    </Provider>
  );
};
