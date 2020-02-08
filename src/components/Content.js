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
      <hr />

      <div className="buttons">
        {counters[index] !== 0 && (
          <button
            style={{ marginRight: 15, height: 30, width: 30 }}
            onClick={handleClickMoins}
          >
            -
          </button>
        )}
        <button style={{ height: 80, width: 80, marginBottom: 30 }}>
          {/* ############################# pas compris cette partie ! #############################*/}
          {counters[index]}
          {/* pourquoi [index] ? */}
          {/*<=###################################################################################### */}
        </button>

        {counters[index] < 10 && (
          <button
            style={{ marginLeft: 15, height: 30, width: 30 }}
            onClick={handleClickPlus}
          >
            +
          </button>
        )}
      </div>

      <button onClick={handleClickReset}>RESET</button>
    </div>
  );
}
