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

const App = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <BrowserRouter>
      <Container>
        <Navbar />
      </Container>
      <Provider store={store}>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels/:id" element={<HotelPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
