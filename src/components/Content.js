import React from "react";
import "../App.css";

export default function Content({ counters, setCounters, index }) {
  const handleClickMoins = event => {
    const newCounters = [...counters];
    newCounters[index]--;
    setCounters(newCounters);
  };

  const handleClickPlus = event => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
  };

  const handleClickReset = event => {
    const newCounters = [...counters];
    newCounters[index] = 0;

    setCounters(newCounters);
  };
  return (
    <div className="content">
      <button>Add Counter</button>

      <div className="buttons">
        <button onClick={handleClickMoins}>-</button>
        <button>{counters}</button>
        <button onClick={handleClickPlus}>+</button>
      </div>

      <button onClick={handleClickReset}>RESET</button>
    </div>
  );
}
