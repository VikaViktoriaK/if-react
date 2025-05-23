import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { PATH } from './constants/path';
import { HomePage } from './pages/HomePage';
import { HotelPage } from './pages/HotelPage';
import { Registration } from './pages/Registration';
import { persistor, store } from './store';
import { darkTheme } from './styles/darkTheme';
import { lightTheme } from './styles/lightTheme';

const AppContent = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
      </Container>
      <Routes>
        <Route path={PATH.login} element={<Registration />} />
        <Route path={PATH.index} element={<HomePage />} />
        <Route path={PATH.hotelById} element={<HotelPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <AppContent />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};
