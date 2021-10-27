import React, { useState, useEffect } from 'react';
import './App.css';
import { useData } from './utilities/firebase.js';

// const PeopleList = ({ time, timeList }) => {
//   return (
//     timeList[time] ? timeList[time].map((name, key) => <li key={key}>{name}</li>) : null
//   );
// }

// const addScheduleTimes = ({schedule}) => ({
//   students: mapValues(addCourseTimes, schedule.students)
  
// });

// const mapValues = (fn, obj) => (
//   Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]))
// );

// const addCourseTimes = course => ({
//   ...course,
//   //...timeParts(course.meets)
// });

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



const App = () => {
   const [time, setTime] = useState(new Date());
   const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   const dbRef = ref(database);
  //   onValue(dbRef, (snapshot) => {
  //     const poop = snapshot.val();
  //     setDummy(poop);
  //   });
  // }, []);

  const changeTimeHandler = (e) => {
    setTime(e.target.value);
    //console.log(time.getTime);
  }

  const changeDateHandler = (e) => {
    setDate(e.target.value);
    //console.log(date);
  }

  const [schedule, loading, error] = useData('/');
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the schedule...</h1>;
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>NUber</h1>
        <h2>Enter in your flight arrival date and time</h2>
        <input type="time" onChange={(e) => changeTimeHandler(e)} />
        
        <input type="date" onChange={(e) => changeDateHandler(e)} />
        <h2>These Wildcats are looking for Ride-Share too!</h2>
        
        <ul>
        <StudentList students = { schedule.wildcats } date = { date } time = { time } />
        </ul>
      </header>
    </div>
  );
}

export default App;
