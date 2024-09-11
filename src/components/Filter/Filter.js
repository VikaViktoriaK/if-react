import React, { useState } from "react";
import { Counter } from "../Counter/Counter";
import "./Filter.css";

export const Filter = ({ active }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showAgeQuestion, setShowAgeQuestion] = useState(false);
  const handleAddChildren = () => {
    if (children < 10) {
      setChildren(children + 1);
      if (children === 0) {
        setShowAgeQuestion(true);
      }
    }
  };

  return (
    <>
      <div
        className={active ? "options-container.active" : "options-container"}
      >
        <div className="options-container-block">
          <div className="options-items" id="options-items">
            <div className="options-item">
              <div className="options-description-text">
                <span>Adults</span>
              </div>
              <Counter
                field="Adults"
                maxValue={30}
                minValue={1}
                count={adults}
                setCount={setAdults}
              />
            </div>
            <div className="options-item">
              <div className="options-description-text">
                <span>Children</span>
              </div>
              <Counter
                onClick={handleAddChildren}
                field="Children"
                maxValue={10}
                count={children}
                setCount={setChildren}
              />
            </div>
            <div className="options-item">
              <div className="options-description-text">
                <span>Rooms</span>
              </div>
              <Counter
                field="Rooms"
                maxValue={30}
                minValue={1}
                count={rooms}
                setCount={setRooms}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
