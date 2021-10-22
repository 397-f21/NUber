import React, { useState } from 'react';
import './App.css';

const App = () => {
  const peopleList = {
    "00:00": [],
    "01:00": [],
    "02:00": [],
    "03:00": [],
    "04:00": [],
    "05:00": [],
    "06:00": [],
    "07:00": [],
    "08:00": [],
    "09:00": [],
    "10:00": [],
    "11:00": [],
    "12:00": [],
    "13:00": [],
    "14:00": [],
    "15:00": [],
    "16:00": [],
    "17:00": [],
    "18:00": [],
    "19:00": [],
    "20:00": [],
    "21:00": [],
    "22:00": [],
    "23:00": []
  }

  const [time, setTime] = useState(new Date());

  const changeHandler = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NUber</h1>
        <h2>Enter in your arrival time:</h2>
        <input type="time" onChange={changeHandler} />
        <h2>Potential Wildcats to Ride-Share:</h2>
        <ul>
          <li>Sally</li>
          <li>Bob</li>
          <li>Derek</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
