import React from "react";

// eslint-disable-next-line react/prop-types
export const Counter = ({ maxValue, minValue = 0, count, setCount }) => {
  // const handleClick = (operation) => {
  //   const newCount = count + (operation === "increment" ? 1 : -1);
  //   if (newCount >= minValue && newCount <= maxValue) {
  //     setCount(newCount);
  //   }
  // };

  return (
    <>
      <div className="options-item-buttons">
        <button
          className="options-button options-minus-button_js"
          type="button"
          disabled={count === minValue}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="options-counter-number">{count}</span>
        <button
          className="options-button options-plus-button_js"
          type="button"
          disabled={count === maxValue}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};
