import React from "react";
import { Container } from "../Container";
import { Card } from "../HomesCard";
import "./Homes.css";

export const Homes = () => (
  <div className="homes-loves">
    <Container>
      <h2>Homes guests loves</h2>
      <div className="homes-group" id="homes-group">
        <div className="hr-heading"></div>
        <Card />
      </div>
    </Container>
  </div>
);
