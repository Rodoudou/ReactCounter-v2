import React, { useState } from "react";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([]);
  /*   const [counters2, setCounters2] = useState([0]);
   */
  return (
    <div className="App">
      <h1>React Counter v2</h1>

      <div>
        {counters.length < 3 && (
          <button
            onClick={() => {
              console.log("click");
              const newCounters = [...counters];
              newCounters.push(0);
              setCounters(newCounters);
            }}
          >
            Add Counter
          </button>
        )}
      </div>

      {counters.map((cunt, index) => {
        return (
          <Content
            key={index}
            counters={counters}
            setCounters={setCounters}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
