import React from 'react';
import './App.css';
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Timer timeZone={'Israel'}/>
        <Timer timeZone={'Europe/London'}/>
        <Timer timeZone={'Pacific/Niue'}/>
        <Timer timeZone={'America/Adak'}/>
    </div>
  );
}

export default App;
