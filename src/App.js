import React, { useState } from 'react';
import './App.css';
import { useData } from './utilities/firebase.js';

const StudentList = ({ students, date, time }) => (
  <div>
  { Object.values(students).filter(student => student.date === date && student.arrival === time)
    .map(student => <Student student={ student } />) }
  </div>
);

const Student = ({ student }) => (
  <div>
    { student.name }'s flight arrives at { student.arrival }, contact { student.email } to share a ride
  </div>
);

const Results = ({ schedule, date, time }) => {
  return (
    <>
      <h2>These Wildcats are looking for Ride-Share too!</h2>
      <ul>
        <StudentList students={ schedule["wildcats"] } date={ date } time={ time } />
      </ul>
    </>
  );
};

const App = () => {
   const [time, setTime] = useState(new Date());
   const [date, setDate] = useState(new Date());

  const changeTimeHandler = (e) => {
    setTime(e.target.value);
  }

  const changeDateHandler = (e) => {
    setDate(e.target.value);
  }

  const [schedule, loading, error] = useData('/');
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the results...</h1>;
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>NUber</h1>
        <h2>Enter in your flight arrival date and time</h2>
        <input type="time" onChange={(e) => changeTimeHandler(e)} />
        
        <input type="date" onChange={(e) => changeDateHandler(e)} />
        <Results schedule={schedule} date={date} time={time} />
      </header>
    </div>
  );
}

export default App;
