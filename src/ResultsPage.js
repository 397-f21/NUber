import React from 'react';
import { InputPage } from './InputPage.js';
import { useData } from './utilities/firebase.js';

const StudentList = ({ students, keyinsec }) => {
    return(
      <>
        {
          Object.entries(students).map(([key, value]) => {
            if (key > keyinsec-3600000 && key < keyinsec+7200000) {
                return <Student key={key} student={ value } />;
            } else {
                return null;
            }
                
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
  
export const Results = ({ students, date, time, keyinsec }) => {
   keyinsec = parseInt(keyinsec);
    
    let resultMessage = "";
  // pick user arriving within 1 hr before and 2 hrs after
    if (date !== "" && time !== "" && keyinsec !== undefined) {
        if (Object.entries(students).filter(student => parseInt(student[0]) > keyinsec-3600000 && parseInt(student[0]) < keyinsec+7200000).length === 0) {
            resultMessage = "No matches :( Please try a different time!";       //the one is the user himself
        } else {
            resultMessage = "These Wildcats are looking to rideshare too!";
        }
    }
  
    return (
        <>
            <h2 data-testid="result-message">{resultMessage}</h2>
            <ul>
                <StudentList students={students} keyinsec={keyinsec} data-testid="student-list"/>
            </ul>
        </>
    );
};

const ResultsPage = ({ navigation, keyinsec }) => {

    const [students, loading, error] = useData('/');
    
    if (error) return <h1>{error}</h1>;
    if (loading) return <h1>Loading the results...</h1>;

    // const setData = () => {
    //     const data = {
    //     "name": "Alex",
    //     "email": "alexgold@gmail.com",
    //     "netid": "agp101",
    //     "date": "2021-11-01",
    //     "time": "11:00"
    //     };
    //     set(ref(database, '/1635782400000'), data);
    // };
    const { previous } = navigation;

    return (
        <>
            <h1 res="res">NUber Results</h1>
            
            {/* <h2>Enter in your flight arrival date and time</h2>
            <input type="time" onChange={(e) => changeTimeHandler(e)} />
            <input type="date"  date-cy="date" onChange={(e) => changeDateHandler(e)} /> */}
            {/* <button type="button" button-cy="button" onClick={() => setData()}>Button</button> */}
            <Results students={students} date={InputPage.date} time={InputPage.time} keyinsec={keyinsec} />

            <button className="button" onClick={previous}>Try a different time</button>
        </>
    );
};

export default ResultsPage;