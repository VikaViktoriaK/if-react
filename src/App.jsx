import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "./pages/Registration";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import HotelPage from "./pages/HotelPage/HotelPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { PATH } from "./constants/path";

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
