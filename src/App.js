import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "./pages/Registration";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import HotelPage from "./pages/HotelPage/HotelPage";

const App = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <BrowserRouter>
      <Container>
        <Navbar />
      </Container>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
