import React, { useState } from 'react';
import './App.css';
import { useData, database } from './utilities/firebase.js';
import { set, ref } from 'firebase/database';


const StudentList = ({ students, currmilsec }) => {
  return(
    <>
      {
        Object.entries(students).map(([key, value]) => {
          if (key < currmilsec + 30) return <Student key={key} student={ value } /> 
        })
      }
    </>
  )};

const Student = ({ student }) => {
  console.log("student", student);
  return (
    <li>
      { student.name }'s flight arrives at { student.time }, contact { student.email } to share a ride
    </li>
)};

const Results = ({ students, date, time }) => {
  const currdate = new Date(date + " " + time);
  const currmilsec = currdate.getTime();
  let resultMessage = "";
  
  if (date !== "" && time !== "") {
    if (Object.entries(students).filter(student => student[0] < currmilsec + 30).length === 0) {
      resultMessage = "No matches :( Please try a different time!";
    } else {
      resultMessage = "These Wildcats are looking to rideshare too!";
    }
  }

  return (
    <>
      <h2>{resultMessage}</h2>
      <ul>
        <StudentList students={students} currmilsec={currmilsec} />
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

  const [students, loading, error] = useData('/');
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the results...</h1>;

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
        <button type="button" onClick={() => setData()}>Button</button>
        <Results students={students} date={date} time={time} />
      </header>
    </div>
  );
}

export default App;
