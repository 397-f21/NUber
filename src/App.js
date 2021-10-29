import React, { useState } from 'react';
import './App.css';
import { useData, database } from './utilities/firebase.js';
import { set, ref } from 'firebase/database';


const StudentList = ({ students, date, time }) => {
  const currdate = new Date(date+" "+time);
  const currmilsec = currdate.getTime();
  const filteredArr = Object.keys(students).filter(milsecs => milsecs < currmilsec + 30).reduce((obj, key) => {obj[key] = students[key]; return obj;}, {});

  console.log("filteredArr", filteredArr);
  
  return (
    <div>
    { Object.keys(students).filter(milsecs => milsecs < currmilsec + 30).map(student => <Student student={ student } />) }
    </div>
)};

const Student = ({ student }) => {
  console.log("student", student);
  return (
  <div>
    { student.name }'s flight arrives at { student.time }, contact { student.email } to share a ride
  </div>
)};

const Results = ({ schedule, date, time }) => {
  return (
    <>
      <h2>These Wildcats are looking for Ride-Share too!</h2>
      <ul>
        <StudentList students={ schedule } date={ date } time={ time } />
      </ul>
    </>
  );
};

const App = () => {
   const [time, setTime] = useState("");
   const [date, setDate] = useState("");

  const changeTimeHandler = (e) => {
    setTime(e.target.value);
  }

  const changeDateHandler = (e) => {
    setDate(e.target.value);
  }

  const [schedule, loading, error] = useData('/');
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the results...</h1>;

  // const dummy_date = new Date(date+" "+time);
  // console.log(dummy_date.getTime());

  const setData = () => {
    const data = {
      "name": "Alex",
      "email": "alexgold@gmail.com",
      "netid": "agp101",
      "date": "2021-11-01",
      "arrival": "11:00"
    };
    set(ref(database, '/1635782400000'), data);

    console.log("database", database);
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>NUber</h1>
        <h2>Enter in your flight arrival date and time</h2>
        <input type="time" onChange={(e) => changeTimeHandler(e)} />
        <input type="date" onChange={(e) => changeDateHandler(e)} />
        <button onClick={() => setData()}/>
        <Results schedule={schedule} date={date} time={time} />
      </header>
    </div>
  );
}

export default App;
