import React, { useState } from "react";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([0]);

  return (
    <div className="App">
      <h1>React Counter v2</h1>

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
