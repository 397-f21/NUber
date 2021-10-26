import React, { useState } from 'react';
import './App.css';
import { useData } from './utilities/firebase.js';

const PeopleList = ({ time, timeList }) => {
  return (
    timeList[time] ? timeList[time].map((name, key) => <li key={key}>{name}</li>) : null
  );
}

const App = () => {
  const timeList = {
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
    "10:00": ["Billy", "Bob", "Joe"],
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
  const [date, setDate] = useState(new Date());


  const changeTimeHandler = (e) => {
    setTime(e.target.value);
  }

  const changeDateHandler = (e) => {
    setDate(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NUber</h1>
        <h2>Enter in your arrival date and time:</h2>
        <input type="time" onChange={(e) => changeTimeHandler(e)} />
        <input type="date" onChange={(e) => changeDateHandler(e)} />
        <h2>Potential Wildcats to Ride-Share with:</h2>
        <ul>
          <PeopleList time={time} timeList={timeList} />
        </ul>
      </header>
    </div>
  );
}

export default App;
