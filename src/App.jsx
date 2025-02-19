import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { PATH } from './constants/path';
import { HomePage } from './pages/HomePage';
import HotelPage from './pages/HotelPage/HotelPage';
import { Registration } from './pages/Registration';
import { store } from './store';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
      </Container>
      <Provider store={store}>
        <Routes>
          <Route path={PATH.login} element={<Registration />} />
          <Route path={PATH.index} element={<HomePage />} />
          <Route path={PATH.hotelById} element={<HotelPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
